// test controller
//
var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger'),

    mongoose = require('mongoose'),
    Test = mongoose.model('test');


module.exports = function (app, config) {
    app.use('/api', router);
    
    router.get('/test', function (req, res, next){
        logger.log('Get all test items', 'verbose');

       var query = Test.find()
       .sort(req.query.order)
       .exec()
       .then(result => {
      	if(result && result.length) {
			res.status(200).json(result);
		} else {
			res.status(404).json({message: "No items"});
		}
       })
       .catch(err => {
         return next(err);
       });
   });

    router.get('/test/:userId', function (req, res, next){
        logger.log('Get property1'+ req.params.userId, 'verbose');

       Test.findById(req.params.userId)
                   .then(test => {
                       if(test){
                           res.status(200).json(test);
                       } else {
                           res.status(404).json({message: "No match found"});
                       }
                   })
                   .catch(error => {
                       return next(error);
                   });
           });    

    router.post('/test/new', function(req, res, next){
        logger.log('Create property1', 'verbose');

       var test = new Test(req.body);
        test.save()
       .then(result => {
           res.status(201).json(result);
       })
       .catch( err => {
          return next(err);
       });
     });
  
    router.put('/test/:property1', function (req, res, next){
        logger.log('Update test'+ req.params.property1, 'verbose');

           Test.findOneAndUpdate({_id: req.params.property1}, 		
           req.body, {new:true, multi:false})
               .then(test => {
                   res.status(200).json(test);
               })
               .catch(error => {
                   return next(error);
               });
       });  

    router.delete('/test/:property1', function (req, res, next){
        logger.log('Delete test'+ req.params.property1, 'verbose');

       Test.remove({ _id: req.params.property1 })
               .then(test => {
                   res.status(200).json({msg: "Item Deleted"});
               })
               .catch(error => {
                   return next(error);
               });
       });

    router.post('/login', function(req, res, next){
        console.log(req.body);
        var email = req.body.email;
        var password = req.body.password;
  
        var obj = {'email' : email, 'password' : password};
      res.status(201).json(obj);
  });
  
};
