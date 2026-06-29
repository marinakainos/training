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
    "value": decimal,
    "amount": string,
    "currency": string,
    "locale": string
  }
]
```
Apply prices to movies with `movieId` and their corresponding screens that they were shown on with `screenName`

- Create an Admin Panel page where only an "Admin" type user is able to enter and create new movies with showings.
