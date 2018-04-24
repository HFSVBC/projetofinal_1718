## Auth

For authenticate an user in our aplication we use *Google Firebase*. This will simulate the *CAS* authentication that we use in FCUL. The users has to login with his *Gmail* Account.

![admin image](./login.PNG)


## User Types

We will have diferent users that will use this aplication and we need to have a way to separate them. Each user has a certain pages that he can access.

We got 5 types of users:

- Student
- Professor
- ​Staff Member
- Security
- Admin

---
# Dashboard

Accessed by the route `/dashboard`, this is the initial page of the aplication. It shows generic user information and easy access to other information.

---

# Consultar Histórico

Accessed by the route `/historico`, it allows an user to view all his access records. The information can by filtered by building, floor and/or room and date.

---

# Consultar Presenças

Accessed by the route `/presencas`, it allows a professor check the students attendece on his classes. The information can be filtred by class, room, date and student.

---
# Espacos

Accessed by the route `/espacos`, it allows the security and the administrator to check how many people are in a specific room. The information can by filtered date and user.

---

# Admin

Accessed by the route `/admin`, it allows an Admin to change the type of an user. The administrator provides the email and them the information about the user is showed for confirmation.

The administrator can access the follwing information:
* view his access records
* check user access
* check how many people are in a room
* check the students attendece on classes
* change user type

---