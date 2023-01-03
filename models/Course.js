const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const CourseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    slug: {
        type: String,
        unique: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});

// Datayı veritabanına kaydetmeden önce:
CourseSchema.pre('validate', function(next){
    this.slug = slugify(this.name, {
        lower: true,
        strict: true
    })
    next() // name'i slug ediyoruz
})

const Course = mongoose.model('Course', CourseSchema);
module.exports = Course