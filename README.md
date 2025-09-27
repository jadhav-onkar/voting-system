# Voting System

## Overview

This repository contains the source code for a voting system application. The application allows users to log in, cast a vote for one of three options, and view real-time vote results in a bar chart. Each user can vote only once per session, with the session token cleared after voting to enforce this restriction. The project demonstrates full-stack development, secure authentication, and real-time data visualization.

The frontend is deployed on Netlify for seamless hosting, and the backend runs on AWS with a reverse proxy configured on a subdomain (e.g., `api.mydomain.me`) for API requests. Authentication is implemented using JSON Web Tokens (JWT) and cookie-parser for secure session management. This project was developed as part of a company task.

**Live Demo**: [Voting System App](https://votingsystemapp.netlify.app/)

## Features

- **Login Page**: Secure authentication using JWT, with tokens stored in cookies for session management.
- **Voting Page**: Users can select one of three voting options. Voting is limited to once per session, and the session token is cleared after submission.
- **Results View**: A bar chart on the home page (accessible via "Vote Chart") displays vote counts, updating every 5 seconds with the latest data.
- **Real-Time Updates**: The frontend polls the backend API every 5 seconds to fetch and display current vote results.
- **Security**: JWT-based authentication and cookie-based session handling ensure secure user interactions.

## Technologies Used

- **Frontend**: React
- **Backend**: Node.js with Express.js (inferred from cookie-parser usage).
- **Database and ORM**: PostgresSQL (neon db) and Prisma as ORM
- **Authentication**: JWT and cookie-parser for secure session management.
- **Charting**: Bar chart for vote visualization (MaterialUI).
- **Deployment**:
  - Frontend: Netlify
- Backend: Hosted on AWS with a reverse proxy configured on my personal domain `api.onkarjadhav.me`
- **Other**: API communication via the reverse proxy URL.


## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn
- AWS account (for backend deployment)
- Netlify account (for frontend deployment)
- Custom domain (for reverse proxy setup)

## Deployment

- **Frontend (Netlify)**:
  1. Connect the repository to Netlify.
  2. Set build command to `npm run build` and publish directory to `frontend/dist`.

- **Backend (AWS)**:
  1. Deploy to AWS EC2.
  2. Configure a reverse proxy with NGINX) on `api.mydomain.me` to route to the backend.
  3. Update frontend code to use the production API URL (`https://api.onkarjadhav.me`).

## Usage

1. **Login**: Access the login page, enter credentials, and authenticate.
2. **Vote**: Navigate to the voting page, select one of three options, and submit. The session token will be cleared, preventing further votes in the same session.
3. **View Results**: On the home page, click "Vote Chart" to see the bar chart, which updates every 5 seconds with the latest vote counts.

## Contact

You can reach me via email or connect with me on LinkedIn:

- **Email:** [ganeshjadhav7478@gmail.com](mailto:ganeshjadhav7478@gmail.com)  
- **LinkedIn:** [Onkar Jadhav](https://www.linkedin.com/in/your-linkedin-profile/](https://www.linkedin.com/in/onkar-jadhav-964745236/)
