/**
 * Controller for contacts endpoints.
 */

'use strict';
//import contacts service.
const contactService = require('../services/contact-service');
/**
 * Returns a list of contacts in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    let callback = function (contacts) {
        response.status(200);
        response.json(contacts);
    };
    contactService.search({}, callback);
};

/**
 * Creates a new contacts with the request JSON and
 * returns sticky JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    let newContact = Object.assign({}, request.body),
        callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    contactService.save(newContact, callback);
};

/**
 * Returns a contacts object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    contactService.get(request.params.contactId, callback);
};

/**
 * Updates and returns a contacts object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    let contact = Object.assign({}, request.body),
        callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    contact._id = request.params.contactId;
    contactService.update(contact, callback);
};

/**
 * Deletes a contacts object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json({
            message: 'Contact Successfully deleted'
        });
    };
    contactService.delete(request.params.contactId, callback);
};