# Employees Management System - Client Interface

![image](https://github.com/DekelGilboa/employee-management-system-client/assets/105774551/cfb612fd-9228-4bde-8fca-4bfddefa3921)

## Deployment

The client interface for the Employees Management System is deployed on AWS S3 for production access. You can access the deployed application using the following link:

[Employees Management System - Client Interface](http://ems.ts.s3-website.us-east-2.amazonaws.com/)

This project is a client interface designed to interact with the API server for the Employees Management System. It allows users to perform various operations such as retrieving employees, sorting and filtering results, deleting and updating employees by ID, and adding new employees to the database.

## Features

- **React and TypeScript:** The project is built using React.js with TypeScript for type-safe development.
- **Action Selection:** Users can choose the action they want to perform (e.g., get many or single, delete, update, add) from the top menu.
- **Form Submission:** Users can fill out forms corresponding to their chosen action and send requests to the server and database.
- **Light and Dark Modes:** The interface offers both light and dark modes to suit user preferences.
- **Modern Styling:** The design follows modern UI/UX principles, providing a sleek and intuitive user experience.
- **Toast Notifications:** Users receive informative toast notifications for successful or error responses from the server.

## Getting Started

To run the project locally or contribute to it, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/DekelGilboa/employee-management-system-client.git
   cd employee-management-system-client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the application.

## Technologies Used

- React.js
- Vite
- TypeScript
- Chakra UI (for modern styling and components)

## Example

In the "Get many" tab, you can choose from several options to sort the results, filter by numeric filters, name, and position.

![Untitled](https://github.com/DekelGilboa/employee-management-system-client/assets/105774551/1bf90fb6-2088-48ed-887c-f8258a162d92)

You'll receive notifications and responses for all matching employees.

![Untitled2](https://github.com/DekelGilboa/employee-management-system-client/assets/105774551/a43f6752-37ed-4ece-82bf-927d5eeb4ca0)

