'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String,
        require: 'El nombre es obligatorio.'
    },
    company: {
        type: String
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        require: 'El correo es obligatorio.'
    },
    phone: {
        type: String,
        require: 'El teléfono es obligatorio.'
    },
    comment: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', UserSchema);