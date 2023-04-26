use hotels;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Bruce Wayne",
    email: "imnotbatman@batcave.com", 
    checked_in: "false"
  },
  {
    name: "God",
    email: "imthebest@hell.com", 
    checked_in: "false"
  },
  {
    name: "Jasper",
    email: "ilovecode@python4ever.com", 
    checked_in: "false"
  }
]);
