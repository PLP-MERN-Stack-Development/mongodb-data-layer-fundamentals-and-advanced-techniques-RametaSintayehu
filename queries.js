use("plp_bookstore");
db.books.find({genre: "programming"}).pretty();

// 1. Find all books in a specific genre
print("Books in Programming genre:");
db.books.find({ genre: "Programming" }).forEach(doc => printjson(doc));

// 2. Find books published after 2018
print("\nBooks published after 2018:");
db.books.find({ published_year: { $gt: 2018 } }).forEach(doc => printjson(doc));

// 3. Find books by a specific author
print("\nBooks by Jane Smith:");
db.books.find({ author: "Jane Smith" }).forEach(doc => printjson(doc));

// 4. Update the price of a specific book
print("\nUpdating price of 'MongoDB Basics'...");
printjson(db.books.updateOne({ title: "MongoDB Basics" }, { $set: { price: 22 } }));

// 5. Delete a book by its title
print("\nDeleting 'Mastering C++'...");
printjson(db.books.deleteOne({ title: "Mastering C++" }));

