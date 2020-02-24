'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for contacts object.
 */
let ContactSchema = new Schema({
    /**
     * Title of the contact.
     */
    FirstName: {
        type: String,
        //required: "title is required"
    },
    /**
     * Sticky created date.
     */
    LastName: {
        type: String
        
    },
    /**
     * Sticky content.
     */
    Email: {
        type: String
    },
    PhoneNumber: {
        type: String,
       // required: "Phone Number is required"
    }
}, {
    versionKey: false
});

module.exports = mongoose.model('contacts', ContactSchema);