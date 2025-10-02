use("plp_bookstore");

// 1. Average price of books by genre
print("\nAverage price of books by genre:");
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]).forEach(doc => printjson(doc));

// 2. Author with the most books
print("\nAuthor with the most books:");
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]).forEach(doc => printjson(doc));

// 3. Group books by decade
print("\nBooks grouped by decade:");
db.books.aggregate([
  { $group: { _id: { $floor: { $divide: ["$published_year", 10] } }, count: { $sum: 1 } } },
  { $project: { decade: { $multiply: ["$_id", 10] }, count: 1, _id: 0 } },
  { $sort: { decade: 1 } }
]).forEach(doc => printjson(doc));
