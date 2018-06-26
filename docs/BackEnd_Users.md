# Users

Usage of the application relies on the existence of different types of users within the same institution, each with specific needs and clearances for the use of features specific to their roles. 

There are five types of users:

- Student
- Professor
- ​Staff Member
- Security
- Admin


---
## LogIn
Accessed by the route ```/user/login```. It handles user registration and login in the back end. For that it requires the following POST elements:
```
idToken => User's issued token => String
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
        "user_type": (String) Client's user type
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
The HTTP error codes might be 405 (Method Not Allowed => POST has not passed the validation check.) and 500 (Server Error => Error completing signup process / Error completing login process)


## LogOut
Accessed by the route ```/user/logout```. It handles user logout in the back end. For that it requires the following POST elements:
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
    "data": {}
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
The HTTP error codes might be 405 (Method Not Allowed => POST has not passed the validation check.) and 500 (Server Error => Error completing logout process)


## getUserProfile
Accessed by the route ```/user/retriveprofile```. It retrieves user profile information in the back end. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
userEmail => The user's email to whom the profile to retrieve belongs to => String
```
The API ensures that the user is still valid and has access to the route.

It returns a JSON with the following configuration for a successful response with an existing client:
```JSON
{
    "user_agent": (String) Client user agent,
    "client_ip": (String) Client external ip,
    "url": (String) Client accessed route,
    "request_date": (String) Client request time stamp,
    "state": "ok",
    "code": 200,
    "data": {
        "token": (String) Client's updated token,
        "user": {
			"found": (Int) whether client exists or not, at value 1,
            "uid": (String) Client's Google UID,
			"id": (String) Client's user id,
            "name": (String) Client's full name,
            "email": (String) Client's email address,
            "avatar": (String) Client's avatar URL link,
            "user_type": (String) Client's account type,
			"active": (String) whether the client is current active,
			"last_login": (String) Client's last login date and time
        }
    }
}
```
It returns a JSON with the following configuration for a successful response with an non-existent client:
```JSON
{
    "user_agent": (String) Client user agent,
    "client_ip": (String) Client external ip,
    "url": (String) Client accessed route,
    "request_date": (String) Client request time stamp,
    "state": "ok",
    "code": 200,
    "data": {
        "token": (String) Client's updated token,
        "user": {
			"found": (Int) whether client exists or not, at value 0
        }
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


## updateUserType
Accessed by the route ```/user/changeType```. It handles the user type change in the back end. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
uid => The user's uid to whom the profile to update belongs to => String
type => The new user type => int (0 - student, 1 - teacher, 2 - staff member, 3 - security guard, 10 - admin)
```
The API ensures that the user is still valid and has access to the route.

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
        "token": (String) Client's updated token,
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