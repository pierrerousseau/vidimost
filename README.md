Vidimost main app
=================

Install
=======

* set up the docker-compose.yml file
    * at least the port and the volumes
* add a file ".secrets.json" in the mongo directory with the users to create
    * there is an example for the content of this file in "mongo/.secrets.json.example"
* the data folder must be empty in order to run the mongo-init.js (used for users creation)