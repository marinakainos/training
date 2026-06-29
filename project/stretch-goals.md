# Group project

Build a **Cinema Booking Web Application**. 

## Stretch goals
- Add a "filter" button on the all movies page. Filter by options:
  + Date (Ascending)
  + Genre
  + Rating

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
