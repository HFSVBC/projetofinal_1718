## Auth

For authentication purposes in our application, *Google Firebase* is utilized in order to simulate the *CAS* authentication used by FCUL. The users must login through their pre-existing *Gmail* Account.

![admin image](./login.PNG)


## User Types

The application is aimed towards several different types of users within the same institution, each with specific needs and clearances for the use of features specific to their roles. The final user types were chosen to reflect this very separation.

There are five types of users:

- Student
- Professor
- ​Staff Member
- Security
- Admin

---
# Dashboard

Accessed by the route `/dashboard`, this is the initial page of the application. It shows generic user information and provides easy access to other information.

---

# Consultar Histórico

Accessed by the route `/historico`, it allows a user to view all their access records. The information can be filtered by building, floor and/or room, and date.

---

# Consultar Presenças

Accessed by the route `/presencas`, it allows a professor to view their classes' attendance records. The information can be filtered by class, room, date, and student.

---
# Espacos

Accessed by the route `/espacos`, it allows the security members and the administrator to verify how many people are present in a specific room. The information can be filtered by date and user.

---

# Admin

Accessed by the route `/admin`, this page allows the administrator to change the type of an user. The administrator provides the email of the user, prompting the page to return that user's information for confirmation purposes.

The administrator can access the following information:
* view access records
* check user access
* check how many people are in a room
* check class attendance
* change user type

---