# Attendance
---
## createSubject
Accessed by the route ```/teacher/createSubject```. It handles the creation of a course subject. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
course_designation => The name or designator of the subject to be created => String
```
It returns a JSON with the following configuration for a successful response:
```JSON
{
    "user_agent": (String) Client user agent,
    "client_ip": (String) Client external ip,
    "url": (String) Client accessed route,
    "request_date": (String) Client request time stamp,
    "state": "ok",
    "code": 200,
    "data": {
        "token": (String) Client's first token,
    }
}
```
It returns a JSON with the following configuration for an unsuccessful response:
```JSON
{
    "user_agent": (String) Client user agent,
    "client_ip": (String) Client external ip,
    "url": (String) Client accessed route,
    "request_date": (String) Client request time stamp,
    "state": (String) Error message,
    "code": (int) HTTP error code,
    "data": {
        "message": (String) Error description,
        "errors (Optional)": (String) Describing missing fields
    }
}
```
The HTTP error codes might be 401 (Unauthorized => User session expired), 403 (Forbidden => Access not authorised for current user), 405 (Method Not Allowed => POST has not passed the validation check.) and 500 (Server Error => Error getting user profile)


## createClasses
Accessed by the route ```/teacher/createClasses```. It handles the creation of a class for a subject. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
semester => Number of the semester for which the class is being created => Numeric
date => Date of the first class => String
duration => Duration of the class => Numeric
type => Type of class => String
room => Designator of the room in which the class will proceed => Numeric
subject => Identifier of the subject for which the class was created => Numeric
```
It returns a JSON with the following configuration for a successful response:
```JSON
{
    "user_agent": (String) Client user agent,
    "client_ip": (String) Client external ip,
    "url": (String) Client accessed route,
    "request_date": (String) Client request time stamp,
    "state": "ok",
    "code": 200,
    "data": {
        "token": (String) Client's first token,
    }
}
```
It returns a JSON with the following configuration for an unsuccessful response:
```JSON
{
    "user_agent": (String) Client user agent,
    "client_ip": (String) Client external ip,
    "url": (String) Client accessed route,
    "request_date": (String) Client request time stamp,
    "state": (String) Error message,
    "code": (int) HTTP error code,
    "data": {
        "message": (String) Error description,
        "errors (Optional)": (String) Describing missing fields
    }
}
```
The HTTP error codes might be 401 (Unauthorized => User session expired), 403 (Forbidden => Access not authorised for current user), 405 (Method Not Allowed => POST has not passed the validation check.) and 500 (Server Error => Error getting user profile)


## matriculateStudent
Accessed by the route ```/teacher/matriculateStudent```. It handles the assignment of a student to a subject. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
course => Identifier of the course to which the student is being signed up for => String
student_id => The student's assigned identifier => String
```
It returns a JSON with the following configuration for a successful response:
```JSON
{
    "user_agent": (String) Client user agent,
    "client_ip": (String) Client external ip,
    "url": (String) Client accessed route,
    "request_date": (String) Client request time stamp,
    "state": "ok",
    "code": 200,
    "data": {
        "token": (String) Client's first token,
    }
}
```
It returns a JSON with the following configuration for an unsuccessful response:
```JSON
{
    "user_agent": (String) Client user agent,
    "client_ip": (String) Client external ip,
    "url": (String) Client accessed route,
    "request_date": (String) Client request time stamp,
    "state": (String) Error message,
    "code": (int) HTTP error code,
    "data": {
        "message": (String) Error description,
        "errors (Optional)": (String) Describing missing fields
    }
}
```
The HTTP error codes might be 401 (Unauthorized => User session expired), 403 (Forbidden => Access not authorised for current user), 405 (Method Not Allowed => POST has not passed the validation check.) and 500 (Server Error => Error getting user profile)