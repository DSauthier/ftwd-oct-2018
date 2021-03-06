const mongoose = require('mongoose');
// create a new schema object
const Schema   = mongoose.Schema;



// you only need to do {type: string} if you are adding more rules like a default or minlength
const bookSchema = new Schema({
    title: String,
    author: {type: Schema.Types.ObjectId, ref: 'Author'},
    description: String,
    rating: Number,
    image: String,
    donor: {type: Schema.Types.ObjectId, ref: 'User'}
  });

//3.1 you create the cat class using those rules
const Book = mongoose.model('Book', bookSchema);


module.exports = Book;