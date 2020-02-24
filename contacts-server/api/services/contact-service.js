/**
 * Service for contacts operations.
 */

'use strict';
const mongoose = require('mongoose'),
    Contact = mongoose.model('contacts');

/**
 * Throws error if error object is present.
 *
 * @param {Object} error {Error object}
 */
let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

/**
 * Returns an array of contacts object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */
exports.search = function (params, callback) {
    let resultCallback = function (err, contacts) {
        throwError(err);
        callback(contacts);
    };
    Contact.find(params, resultCallback);
};

/**
 * Saves and returns the new contact object.
 *
 * @param {Object} contact {Sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.save = function (contact, callback) {
    let newContact = new Contact(contact),
        resultCallback = function (err, contact) {
            throwError(err);
            callback(contact);
    };
    newContact.save(resultCallback);
};

/**
 * Returns the contacts object matching the id.
 *
 * @param {string} contactId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.get = function (contactId, callback) {
    let resultCallback = function (err, contact) {
        throwError(err);
        callback(contact);
    };
    Contact.findById(contactId, resultCallback);
};

/**
 * Updates and returns the contacts object.
 *
 * @param {Object} contact {Sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.update = function (contact, callback) {
    let resultCallback = function (err, contact) {
        throwError(err);
        callback(contact);
    };
   // contact.modified_date = new Date();
    Contact.findOneAndUpdate({
        _id: contact._id
    }, contact, {
        new: true
    }, resultCallback);
};

/**
 * Deletes the contacts object matching the id.
 *
 * @param {string} contactId {Id of the sticky object}
 * @param {function} callback {Sucess callback function}
 */
exports.delete = function (contactId, callback) {
    let resultCallback = function (err, contact) {
        throwError(err);
        callback();
    };
    Contact.remove({
        _id: contactId
    }, resultCallback);
};