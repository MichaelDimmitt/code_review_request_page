'use strict';
var dataProvider = require('../data/code_repositories.js');
const axios = require('axios')
/**
 * Operations on /code_repositories
 */
module.exports = {
    /**
     * summary: list repositories related to specific information
     * description:
     * parameters: limit
     * produces:
     * responses: 200, default
     */
    get: function listRepositories(req, res, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        let username=req.query.username
        console.log(username)
        axios.get('https://api.github.com/users/'+username+'/repos')
        .then(function(response){
          let arr = [];
          let counter = 0;
          for(counter = 0; counter < response.data.length; counter++){
            arr.push(response.data[counter].name)
          }
          console.log(response.status); // ex.: 200
          res.json(arr); // ex.: { user: 'Your User'}
        });
    },
    /**
     * summary: Write a repo to the mongo query
     * description:
     * parameters:
     * produces:
     * responses: 201, default
     */
    post: function createRepositories(req, res, next) {
        /**
         * Get the data for response 201
         * For response `default` status 200 is used.
         */
        var status = 201;
        var provider = dataProvider['post']['201'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
        });
    }
};
