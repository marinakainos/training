# Group project

Build a **Cinema Booking Web Application**. 

## Stretch goals
- Add a "filter" button on the all movies page. Filter by options:
  + Sort all movies by date of the earliest showing available for each movie
    + if multiple movies have the same showing date, sort alphabetically next
  + Rating
    + add an extra option to pick one of the following: U, PG, 12/12A, 15, 18
    + only display movies with the selected rating
  + Genre 
    + add an extra option to pick a genre
    + only display movies with the selected genre

- Create a prices.json file in the following format:
``` js
[ 
  {
    "movieId": number,
    "screenName": string,
    "amount": string,
    "currency": string,
    "locale": string
  }
]
```
Apply price amount to each movie with `movieId`, and its corresponding screen with `screenName`.

- After receiving booking confirmation, the server should remember which seats have been purchased, so they cannot be selected again.

- Create an Admin Panel page where only an "Admin" type user is able to enter and create new movies with showings.
