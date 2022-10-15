# CSC301 - Assignment 2

## Instructions to view deployed application

Visit: https://periwinkle.netlify.app/

The application is automatically deployed when branches are merged to main.

## Instructions to set up local environment

- Install Node JS (LTS): https://nodejs.org/en/
- Clone this git repository on your machine
- Add a file called `.env` to the root of the repository, and add your environment variables here. 
- Run `npm install` to install all required npm packages
- Run `npm run dev` to start the application on your local server

## Instructions to run our test suite
- Please follow the above instructions to set up your local environment
- Run `npm run test` to run our test suite

Currently we are testing product actions under regular conditions, but in the future we would want to test each interaction that the user might do interacting with our front end  (making sure each button routes to the correct view). Additional we would want to incorporate end-to-end testing (which Cypress is set-up for) but has not been implemented yet.

## Instructions to view short report

Short report is viewable in main branch under [report.md](report.md). 
Explores the options for Frontend (React, Vue, Angular), Backend/BaaS (Express, Firebase, Supabase), and Databases (MySQL, Postgresql, SQL Server) and Deployment (Heroku, Vercel, Render, Netlify). Includes summary of decisions for above application.
