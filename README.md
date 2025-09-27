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

- **Frontend**: HTML, CSS, JavaScript (likely React.js for dynamic UI and bar chart rendering).
- **Backend**: Node.js with Express.js (inferred from cookie-parser usage).
- **Authentication**: JWT and cookie-parser for secure session management.
- **Charting**: Bar chart for vote visualization (e.g., using Chart.js or similar).
- **Deployment**:
  - Frontend: Netlify
  - Backend: AWS with reverse proxy on `api.mydomain.me`
- **Other**: API communication via the reverse proxy URL.

## Project Structure

- `/frontend`: Client-side code for login, voting, and result visualization.
- `/backend`: Server-side code with API endpoints for authentication, voting, and results.
- Key files (assumed):
  - `frontend/package.json`: Frontend dependencies and scripts.
  - `backend/package.json`: Backend dependencies (e.g., `jsonwebtoken`, `cookie-parser`).
  - Main server file (e.g., `server.js` or `app.js`).
  - Main frontend entry (e.g., `index.html`, `App.js`).

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- NPM or Yarn
- AWS account (for backend deployment)
- Netlify account (for frontend deployment)
- Custom domain (for reverse proxy setup)

### Local Development

1. **Clone the Repository**:
   ```
   git clone https://github.com/jadhav-onkar/voting-system.git
   cd voting-system
   ```

2. **Install Dependencies**:
   - Backend:
     ```
     cd backend
     npm install
     ```
   - Frontend:
     ```
     cd frontend
     npm install
     ```

3. **Configure Environment Variables**:
   - In `/backend`, create a `.env` file with variables like:
     ```
     JWT_SECRET=your_jwt_secret
     PORT=3000
     ```
   - Update frontend API URL to point to the local backend (e.g., `http://localhost:3000`).

4. **Run the Backend**:
   ```
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:3000` (or configured port).

5. **Run the Frontend**:
   ```
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000` (or similar).

6. **Access Locally**:
   Open `http://localhost:3000` in your browser.

## Deployment

- **Frontend (Netlify)**:
  1. Connect the repository to Netlify.
  2. Set build command to `npm run build` and publish directory to `frontend/build`.
  3. Deploy and optionally link to your custom domain.

- **Backend (AWS)**:
  1. Deploy to AWS (e.g., EC2 or Lambda with API Gateway).
  2. Configure a reverse proxy (e.g., NGINX) on `api.mydomain.me` to route to the backend.
  3. Update frontend code to use the production API URL (`https://api.mydomain.me`).

## Usage

1. **Login**: Access the login page, enter credentials, and authenticate.
2. **Vote**: Navigate to the voting page, select one of three options, and submit. The session token will be cleared, preventing further votes in the same session.
3. **View Results**: On the home page, click "Vote Chart" to see the bar chart, which updates every 5 seconds with the latest vote counts.

## Contributing

Contributions are welcome! Please fork the repository, make changes, and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or issues, open a GitHub issue or contact the maintainer at [your-email@example.com].