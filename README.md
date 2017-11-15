# 810task
# reference

File Organization

    Client
    README.md     This file.
    Server
    +-- app
        +-- controllers
            + -- users.js
        +-- config
            +-- index.js    just fires of the code in the config directory.
            +-- express.js  does the express framework operation including middleware, routes, and error processing.
            +-- config.js   defines env variables based on if this is a development, test, or production instance.
            +-- logger.js   provides logging to help trace and debug issues.
        +-- log-files
        +-- node-modules
        +-- public
            +-- index.html
        +-- Gruntfile.js
        +-- index.js
        +-- package.json
