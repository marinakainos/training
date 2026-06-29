# Group project

Build a **Cinema Booking Web Application**. 

Split into 2 Scrum teams. 

I will act as the Client.
Team members will split the responsibilities of Developers, Designers, and QA. 

## Client Brief
My company owns a local cinema. 

Customers currently book by phone. 

We need a web application where customers can: 
- View movies 
- Choose showing time 
- Select seats 
- Confirm booking  

The system must be delivered in 8 working days. 

## Sprint Planning Session 
Each team: 
- Reads requirements  
- Estimates effort (S / M / L only)  
- Breaks requirements into tasks  
- Creates backlog  
- Comes up with a sprint goal

Team organisation tools you can use: 
- Sticky notes  
- Trello  
- GitHub Projects 

# Product Requirements 

## Core Requirement 1 — Movie Listing 
As a customer, 

I want to browse available movies, 

So I can decide what to watch. 

***Acceptance Criteria***
- Homepage displays available movies
- Each movie shows at least
  + title
  + rating
  + duration
  + genre
  + poster

## Core Requirement 2 — View Showings 

As a customer, 

I want to see available dates and times for a given movie. 

***Acceptance Criteria***
- Selecting a movie opens details page  
- Display showings schedule

## Core Requirement 3 — Seat Booking

As a customer, 

After I select a movie and a date and time of showing,

I want to choose my seats.

***Acceptance Criteria***
- Display a map of all seats
- Ability to select more than one seat at a time

*Constraints* 
- Maximum 6 seats can be selected
- Cannot select unavailable seats

## Core Requirement 4 — Checkout 

As a customer, 

I want to confirm booking. 

***Acceptance Criteria***
- Booking form must include: 
  + Name
  + Email  
  + Selected tickets  
- After submission: 
  + Show confirmation page  
  + Generate fake booking reference (Example: CIN-2847)

No persistense required - saving the booking is optional.

## Core Requirement 5 — Booking Summary 

As a customer, 

I want to review my booking. 

***Acceptance Criteria*** 
- Display: 
  + Customer name
  + Movie  
  + Time  
  + Seats  
  + Total tickets  
  + Confirmation code 

