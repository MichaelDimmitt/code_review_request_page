'use strict';
var dataProvider = require('../data/code_repositories.js');
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
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, res, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            res.status(status).send(data && data.responses);
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
