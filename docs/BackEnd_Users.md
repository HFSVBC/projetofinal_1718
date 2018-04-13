# Users
---
## LogIn
Accessed by the route ```/user/login```. It handles user registration and login in the back end. For that it requires the following POST elements:
```
uid => Google's UID => String
name => User's name => String
email => User's email => String
avatar => User's avatar provided by Google => String
```
It returns a JSON with the following configuration for a succesfull response:
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
It returns a JSON with the following configuration for an unsuccesfull response:
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
Accessed by the route ```/user/logout```. It handles user to log out in the back end. For that it requires the following POST elements:
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
It returns a JSON with the following configuration for an unsuccesfull response:
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
Accessed by the route ```/user/retriveprofile```. It handles user to log out in the back end. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
userEmail => The user's email to whom the profile to retrieve belongs to => String
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
        "token": (String) Client's first token,
        "user": {
            "avatar": (String) Client's avatar link,
            "email": (String) Client's email address,
            "name": (String) Client's full name,
            "uid": (String) Client's Google UID,
            "user_type": (String) Client's account type
        }
    }
}
```
It returns a JSON with the following configuration for an unsuccesfull response:
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
The HTTP error codes might be 401 (Unauthorizedd => User session expired), 403 (Forbidden => Access not authorised for current user), 405 (Method Not Allowed => POST has not passed the validation check.) and 500 (Server Error => Error gueting user profile)