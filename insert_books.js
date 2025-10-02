
use("plp_bookstore");

db.books.insertMany([
  {
    title: "MongoDB Basics",
    author: "John Doe",
    genre: "Database",
    published_year: 2015,
    price: 20,
    in_stock: true,
    pages: 200,
    publisher: "TechBooks"
  },
  {
    title: "Learning JavaScript",
    author: "Jane Smith",
    genre: "Programming",
    published_year: 2018,
    price: 25,
    in_stock: true,
    pages: 350,
    publisher: "CodeHouse"
  },
  {
    title: "Node.js Essentials",
    author: "Mary Johnson",
    genre: "Programming",
    published_year: 2019,
    price: 22,
    in_stock: false,
    pages: 300,
    publisher: "CodeHouse"
  },
  {
    title: "Python for Beginners",
    author: "James Brown",
    genre: "Programming",
    published_year: 2017,
    price: 18,
    in_stock: true,
    pages: 280,
    publisher: "TechPress"
  },
  {
    title: "Mastering C++",
    author: "Anna Lee",
    genre: "Programming",
    published_year: 2014,
    price: 30,
    in_stock: false,
    pages: 500,
    publisher: "CodeHouse"
  },
  {
    title: "Data Science with Python",
    author: "David Wilson",
    genre: "Data Science",
    published_year: 2020,
    price: 35,
    in_stock: true,
    pages: 450,
    publisher: "DataBooks"
  },
  {
    title: "AI Fundamentals",
    author: "Sarah Kim",
    genre: "Artificial Intelligence",
    published_year: 2021,
    price: 40,
    in_stock: true,
    pages: 400,
    publisher: "AIBooks"
  },
  {
    title: "Deep Learning Guide",
    author: "Chris Evans",
    genre: "Artificial Intelligence",
    published_year: 2019,
    price: 45,
    in_stock: false,
    pages: 550,
    publisher: "AIBooks"
  },
  {
    title: "Web Development Bootcamp",
    author: "Emily Clark",
    genre: "Web Development",
    published_year: 2022,
    price: 28,
    in_stock: true,
    pages: 600,
    publisher: "WebPress"
  },
  {
    title: "Cybersecurity Essentials",
    author: "Michael Scott",
    genre: "Security",
    published_year: 2016,
    price: 32,
    in_stock: true,
    pages: 420,
    publisher: "SecureBooks"
  }
]);
