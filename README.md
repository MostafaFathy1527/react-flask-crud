# react-flask-crud

<h1>React-Flask CRUD</h1>

<p>This project is a simple CRUD (Create, Read, Update, Delete) application built with React and Flask. It allows users to create, view, update, and delete records for a list of persons. The project uses Docker Compose to run the backend and frontend applications in separate containers.</p>

<h2>Requirements</h2>

<p>To run this project, you will need to have the following software installed on your machine:</p>

<ul>
	<li>Docker</li>
	<li>Docker Compose</li>
</ul>

<p>You can download Docker and Docker Compose from the Docker website.</p>

<h2>Installation</h2>

<p>To install and run the project, follow these steps:</p>

<ol>
	<li>Clone the repository to your local machine using the command <code>git clone https://github.com/MostafaFathy1527/react-flask-crud.git</code>.</li>
	<li>Navigate to the project directory using the command <code>cd react-flask-crud</code>.</li>
	<li>Build the Docker images for the backend and frontend applications using the command <code>docker-compose build</code>.</li>
	<li>Start the Docker containers using the command <code>docker-compose up</code>.</li>
	<li>Open a web browser and navigate to <code>http://localhost:3000</code> to view the frontend application.</li>
</ol>

<h2>Usage</h2>

<p>The frontend application allows you to create, view, update, and delete records for a list of persons. To add a new person, click the "Add Person" button and fill in the form. To edit an existing person, click the "Edit" button next to their name and make the desired changes. To delete a person, click the "Delete" button next to their name.</p>

<h2>Customization</h2>

<p>You can customize the application by modifying the source code in the backend and frontend directories. The backend is built with Flask and uses a SQLite database to store the person records. The frontend is built with React and uses the Axios library to make HTTP requests to the backend API.</p>

<h2>Conclusion</h2>

<p>This project demonstrates how to build a simple CRUD application with React and Flask, and how to use Docker Compose to run the backend and frontend applications in separate containers. With this project as a starting point, you can build more complex applications with additional features and functionality.</p>
