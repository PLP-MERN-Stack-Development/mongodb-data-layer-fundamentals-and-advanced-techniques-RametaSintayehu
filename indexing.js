use("plp_bookstore");

// 1. Index on title
db.books.createIndex({ title: 1 });

// 2. Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 3. Use explain() to show performance
db.books.find({ title: "MongoDB Basics" }).explain("executionStats");
db.books.find({ author: "Jane Smith", published_year: 2018 }).explain("executionStats");

print("Explain query on author + published_year:");
printjson(db.books.find({author: "jane smith",published_year: 2018}).explain("executionStats"));