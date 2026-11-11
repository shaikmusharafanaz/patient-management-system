Patient Management System
📌 Project Overview

https://shaikmusharafanaz.github.io/patient-management-system/

The Patient Management System is a web-based CRUD (Create, Read, Update, Delete) application developed using HTML, CSS, and JavaScript.

The main purpose of this project is to manage patient information efficiently. It allows users to add new patients, view patient records, update existing information, delete records, and search for patients.

Patient information is stored in the browser using Local Storage, so the records remain available after refreshing the page in the same browser.

🚀 Technologies Used
HTML5 – Structure of the application.
CSS3 – Styling and responsive design.
JavaScript – Application functionality and CRUD operations.
Local Storage – Storing patient records in the browser.
✨ Features
Add Patient: Register new patients with personal and medical details.
View Patients: Display all registered patient records in a table.
Update Patient: Edit and update existing patient information.
Delete Patient: Remove patient records from the system.
Search Patient: Search patients using their name or patient ID.
Automatic Patient ID: Generate a unique patient ID automatically.
Data Persistence: Store patient information using browser Local Storage.
Responsive Design: Access the application on desktop and mobile devices.
📂 Project Structure
text
PatientManagementSystem/
│
├── index.html       # Main HTML file
├── style.css        # CSS styling
├── script.js        # JavaScript functionality
└── README.md        # Project documentation

📋 Patient Information

The application stores the following patient details:

Patient ID
Patient Name
Age
Gender
Phone Number
Email Address
Blood Group
Doctor Name
Appointment Date
Address
⚙️ Installation and Setup

Follow these steps to run the project on your computer.

Step 1: Clone the Repository
bash
git clone <your-repository-url>

Step 2: Open the Project Folder
bash
cd PatientManagementSystem

Step 3: Open the Application

Open the index.html file in your preferred web browser.

Alternatively, use the Live Server extension in Visual Studio Code.

🖥️ How to Use
Open the Patient Management System.
Enter the patient's personal information in the registration form.
Click the Add Patient button to save the record.
View registered patients in the Patient Records table.
Click Edit to modify patient information.
Click Delete to remove a patient record.
Use the search box to find a patient by name or ID.
🔄 CRUD Operations
Operation	Description
Create	Add new patient information
Read	Display patient records
Update	Modify existing patient details
Delete	Remove patient information
💾 Data Storage

This project uses JavaScript Local Storage to store patient records.

The following browser storage method is used:

javascript
localStorage.setItem(
    "patients",
    JSON.stringify(patients)
);


To retrieve stored records:

javascript
let patients = JSON.parse(
    localStorage.getItem("patients")
) || [];

🔮 Future Enhancements

The following features can be added in future versions:

User Login and Authentication
Admin Dashboard
Doctor Management
Appointment Booking System
Patient Medical History
Prescription Management
MySQL Database Integration
Backend Integration using PHP or Node.js
PDF Reports and Patient Records
⚠️ Security Notice

This project is developed for educational and demonstration purposes.

It uses browser Local Storage and does not provide secure storage for confidential medical information. Do not use real patient data in this demonstration application.

A production-ready system requires secure backend storage, authentication, authorization, encryption, audit logging, and appropriate healthcare privacy compliance.

👨‍💻 Author

Project Name: Patient Management System

Project Type: CRUD Web Application

Frontend Technologies: HTML, CSS, JavaScript

📜 License

This project is available for educational and learning purposes. You may modify and enhance it for your own projects.
