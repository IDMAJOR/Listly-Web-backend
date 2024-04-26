const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        completed: {
            type: Boolean,
            required: true,
        }
    },{timestamps: { 
        createdAt: 'createdDate', 
        updatedAt: 'updatedDate' 
    }});

const TodoModel = mongoose.model("listly-Web", TodoSchema);

module.exports = TodoModel;