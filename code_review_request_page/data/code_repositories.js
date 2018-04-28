'use strict';
var Mockgen = require('./mockgen.js');
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
     * operationId: listRepositories
     */
    get: {
        200: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/code_repositories',
                operation: 'get',
                response: '200'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/code_repositories',
                operation: 'get',
                response: 'default'
            }, callback);
        }
    },
    /**
     * summary: Write a repo to the mongo query
     * description: 
     * parameters: 
     * produces: 
     * responses: 201, default
     * operationId: createRepositories
     */
    post: {
        201: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/code_repositories',
                operation: 'post',
                response: '201'
            }, callback);
        },
        default: function (req, res, callback) {
            /**
             * Using mock data generator module.
             * Replace this by actual data for the api.
             */
            Mockgen().responses({
                path: '/code_repositories',
                operation: 'post',
                response: 'default'
            }, callback);
        }
    }
};
