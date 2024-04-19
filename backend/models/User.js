const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true, // Ensures email is unique
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: { 
        type: String, 
        enum: ['ADMIN', 'USER'], // Example roles, adjust as needed
        default: 'USER'
    },
    recipies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Recipies' }],
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
});

const Users = mongoose.model('Users', UserSchema);

module.exports = Users;
