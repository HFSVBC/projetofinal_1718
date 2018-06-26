# Attendance
---
## getTeacherClasses
Accessed by the route ```/teacher/classes```. It retrieves all the subjects assigned to a teacher. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
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
        "teacherSubjects": {
            "data": {
                "id": (String) the identifier of each subject,
                "name": (String) the designator of the subject
            }
        },
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


## getTeacherClassDates
Accessed by the route ```/teacher/class/dates/<class_id>```, where ```<class_id>``` is the identifier for a single specific class assigned to the teacher. It retrieves all the class dates for a single subject. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
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
        "classDates": {
            "data": {
                "id": (String) the identifier of each class,
                "d_init": (String) the starting date and time of the class,
				"d_end": (String) the ending date and time of the class
            }
        },
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


## getStudentsByClass
Accessed by the route ```/teacher/class/students/<class_id>```, where ```<class_id>``` is the identifier for a single specific class assigned to the teacher. It retrieves all the student information for a single class. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
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
        "classStudents": {
            "data": {
                "id": (String) the identifier of the student,
                "aluno": (String) the student's name
            }
        },
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


## getStudentAttendance_Teacher
Accessed by the route ```/teacher/course/getStudentsAttendance```. It retrieves all the subjects assigned to a teacher. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
course_id => Subject identifier => Numeric
```
With the following optional fields:
```
student_id => Student identifier => String
class_id => Class identifier => String
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
        "studentAttendance": {
            "data": {
                "student_id": (String) the identifier of the student,
                "student_name": (String) the name of the student,
				"course": (String) the subject for which the attendance is being checked,
                "d_ini": (String) the starting date and time of the class,
				"d_end": (String) the ending date and time of the class
            }
        },
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


## getIndvStudentAttendance_Teacher
Accessed by the route ```/teacher/individual/getStudentsAttendance```. It retrieves all the class attendance information of a single specific student for the teacher. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
course_id => Subject identifier => Numeric
```
With the following optional fields:
```
student_id => Student identifier => String
class_id => Class identifier => String
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
        "studentAttendance": {
            "data": {
                "student_id": (String) the identifier of the student,
                "name": (String) the name of the student,
                "date_ini": (String) the starting date and time of each class,
				"aula_id": (String) the class identifier,
				"attended": (String) the student's attendance for the specific class
            }
        },
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


## getStudentAttendance_Student
Accessed by the route ```/student/attendance```. It retrieves the class attendance information of a single specific student for the student in question. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
course_id => Subject identifier => Numeric
```
With the following optional fields:
```
class_id => Class identifier => String
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
        "studentAttendance": {
            "data": {
                "course": (String) the subject the attendance is for,
                "date_ini": (String) the starting date and time of each class,
				"date_end": (String) the ending date and time of each class,
				"attended_classes": (String) the student's attendance for the specific class. This field is only present when its value is not null.
            }
        },
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


## changeUserAttendance
Accessed by the route ```/teacher/individual/changeStudentsAttendance```. It handles changes to the attendance of a class. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
```
With the following optional fields:
```
student_id => Student identifier => String
class_id => Class identifier => String
state_now => the new attendance value => String
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
        "changeStudentAttendance": (Object) result of the SQL query,
        "token": (String) Client's first token
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


## getStudentCourses
Accessed by the route ```/student/retrieveCourses```. It handles information retrieval for a student's subject information. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
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
        "studentCourses": {
            "data": {
                "id": (String) subject's identifier,
                "name": (String) subject's designator
            }
        },
        "token": (String) Client's first token
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