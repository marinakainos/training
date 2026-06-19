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

const booking = {
  customerName: "John",
  movieId: 1,
  seatNumber: "A2"
};

Object.entries(booking).forEach(([key, value]) => {
  console.log(key, value);
});

// Exercise 2

function findMovie(title) {
  return movies.find(movie => movie.title === title);
}

// Exercise 3

const availableSeats = seats.filter(seat => !seat.booked);

// Exercise 4

const movieTitles = movies.map(movie => movie.title);

// Exercise 5

movies.forEach(movie => {
  movie.showings
    .filter(showing => showing.day === "Saturday")
    .forEach(showing => {
      console.log(`${movie.title} - ${showing.time}`);
    });
});

// Bonus 1

function bookSeat(seatNumber) {
  const seat = seats.find(
    seat => seat.seatNumber === seatNumber
  );

  if (!seat.booked) {
    seat.booked = true;
    console.log("Seat booked");
  } else {
    console.log("Seat already booked");
  }
}

// Bonus 2

const longMovies = movies.filter(
  movie => movie.duration > 120
);

const longMovieTitles = longMovies.map(
  movie => movie.title
);

// Bonus 3

const availableSeatCount = seats.reduce(
  (count, seat) => count + (!seat.booked ? 1 : 0),
  0
);

// Bonus 4

const timetable = movies.flatMap(movie =>
  movie.showings.map(
    showing =>
      `${showing.day} ${showing.time} - ${movie.title}`
  )
);

// Bonus 5

const moviesByDay = movies.reduce((result, movie) => {
  movie.showings.forEach(showing => {
    if (!result[showing.day]) {
      result[showing.day] = [];
    }

    result[showing.day].push(movie.title);
  });

  return result;
}, {});

const movieCountByDay = Object.entries(
  moviesByDay
).reduce((result, [day, movies]) => {
  result[day] = movies.length;
  return result;
}, {});
