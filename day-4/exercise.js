const movies = [
  {
    id: 1,
    title: "Interstellar",
    genre: "Sci-Fi",
    duration: 169,
    showings: [
      { day: "Friday", time: "18:00", room: 1 },
      { day: "Saturday", time: "20:00", room: 1 }
    ]
  },
  {
    id: 2,
    title: "The Batman",
    genre: "Action",
    duration: 176,
    showings: [
      { day: "Friday", time: "21:00", room: 2 },
      { day: "Sunday", time: "19:00", room: 2 }
    ]
  },
  {
    id: 3,
    title: "Toy Story",
    genre: "Animation",
    duration: 81,
    showings: [
      { day: "Saturday", time: "14:00", room: 3 },
      { day: "Sunday", time: "11:00", room: 3 }
    ]
  }
];

const seats = [
  { seatNumber: "A1", booked: true },
  { seatNumber: "A2", booked: false },
  { seatNumber: "A3", booked: false },
  { seatNumber: "B1", booked: true },
  { seatNumber: "B2", booked: false },
  { seatNumber: "B3", booked: true }
];

// Exercise 1
// Create a booking object with:
// customerName, movieId, seatNumber
// Print all properties using Object.entries() and forEach().

// Exercise 2
// Create findMovie(title).
// Return the movie with the matching title.
// Use find().

// Exercise 3
// Create an array containing only available seats.
// Use filter().

// Exercise 4
// Create an array containing only movie titles.
// Use map().

// Exercise 5
// Display all movies showing on Saturday.
// Format:
// Interstellar - 20:00
// Toy Story - 14:00



/*
====================================================
BONUS
====================================================
*/

// Bonus 1
// Create bookSeat(seatNumber).
// If the seat is available, book it.
// Otherwise display "Seat already booked".
// Use find().

// Bonus 2
// Create an array of movies longer than 120 minutes.
// Then create an array containing only their titles.
// Use filter() and map().

// Bonus 3
// Count the number of available seats.
// Use reduce().

// Bonus 4
// Create a timetable array:
//
// [
//   "Friday 18:00 - Interstellar",
//   "Saturday 20:00 - Interstellar",
//   ...
// ]
//
// Use map() or flatMap().

// Bonus 5
// Create an object grouping movie titles by day.
//
// {
//   Friday: ["Interstellar", "The Batman"],
//   Saturday: ["Interstellar", "Toy Story"],
//   Sunday: ["The Batman", "Toy Story"]
// }
//
// Then create another object containing
// the number of movies shown each day.
// Use reduce().