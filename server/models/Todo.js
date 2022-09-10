const { Schema, model } = require('mongoose');

const todoScheme = new Schema({
    title: {
        type: String,
        required: [true, "Title is Required"]
    },
    description: String,
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'low'
    },
    status: {
        type: String,
        enum: ['todo', 'inProgress', 'underReview', 'rework', 'completed'],
        default: 'todo'
    },
    startDate: Date,
    endDate: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},{
    timestamps: true
})

const Todo = model('Todo', todoScheme);

module.exports = Todo