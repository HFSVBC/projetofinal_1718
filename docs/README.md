# CA FCUL Documentation
## Description {docsify-ignore}
The project's objective is to develop and create a platform to store, verify, and manage access data relative to the buildings and classrooms of the Faculty of Science of the University of Lisbon. This platform is accessible through a Web interface and made available in a *cloud* environment, and presents solutions for ease of integration with the already existing control protocols in FCUL of buildings and classroom access management.

This solution will assure the availability, confidentiality, and accuracy of the data. Should there be a hardware failure, the system will tolerate it with minimal performance reduction and without data loss; unavailability due to catastrophic failure will no surpass the 24 hour mark, with the only acceptable data loss being that which would have been introduced into the system within a 24 hour timeframe. Back-end development also guarantees that the platform is both scalable and modular, so that it can support and manage points of high usage outside of the average that are predicted to happen in some situations.

## Main functionalities: {docsify-ignore}
* Data simulation to provide test cases similar to data provided by access control equipment
* Access history of rooms and buildings by the users
* Verification of current number of people in a certain space
* Verification of user identifications within a certain space
* Registration of new users
* Consultation of available classrooms
* Verification of class attendance records
* Alteration of class attendance records
* Alteration of user type and corresponding permissions
* Creation of temporary visitor access
* Creation and control of events for catastrophe management

## User types
The application is directed towards the several kinds of users present at any time in the faculty, each with different needs within the service. Each role has access clearance to several different functionalities according to their specific needs. Should there be a user who has information from a previous type, it is still accessible to the user through the dashboard.
In all cases and whenever necessary, the API ensures that the user is still valid and has access to the route with their type permissions.

### User type: Student
Students have access to the following functionalities:
* view their access records
* check their own class attendance
* look up available faculty spaces
* create and view accident logs from by other students

### User type: Professor
Professors have access to the following functionalities:
* view their access records
* look up available faculty spaces
* check class attendance of their classes
* change class attendance for students of their classes
* create and verify accident logs

### User type: Staff
Staff members have access to the following functionalities:
* view their access records
* look up available faculty spaces
* create and verify accident logs

### User type: Security
Security personnel can access the following information:
* view access records
* check user access information for faculty spaces
* look up available faculty spaces
* create access for temporary users
* create and verify accident logs

### User type: Administrator
The administrator can access the following information:
* view access records
* check user access
* check how many people are in a space
* check class attendance
* change user type
* create and verify accident logs
* create access for temporary users

## Authors {docsify-ignore}
* Ana Catarina Sousa (1)
* André Nunes (1)
* Hugo Curado (1)
* Patricia Jesus (1)
* Pedro Neto (1)
* Sofia Pacheco (1)

(1) Informatics Department, Faculty of Science, University of Lisbon, Lisbon, Portugal
## Licence {docsify-ignore}
2017 - 2018 © Faculdade de Ciências da Universidade de Lisboa