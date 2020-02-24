/**
 * Sticky endpoint route definitions.
 */

'use strict';
module.exports = function (app) {
    const conController = require('../controllers/sticky-controller');
    // contacts Routes for search and create.
    app.route('/contacts')
        .get(conController.list)
        .post(conController.post);

    // contacts Routes for get, update and delete.
    app.route('/contacts/:contactId')
        .get(conController.get)
        .put(conController.put)
        .delete(conController.delete);
};