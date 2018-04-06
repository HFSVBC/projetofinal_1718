# Users
Some text
## LogIn
Accessed by the route ```https://cafcul.hugocurado.info/user/login```. It handles user registration and login in the back end. For that it requires the following POST elements:
```
uid => Google's UID => String
name => User's name => String
email => User's email => String
avatar => User's avatar provided by Google => String
```
It returns a JSON with the following configuration:
```
{
    "user_agent": (String) Client user agent,
    "client_ip": (String) Client external ip,
    "url": (String) Client accessed route,
    "request_date": (String) Client request time stamp,
    "state": (String) Error message,
    "code": (int) HTTP error code,
    "data": {
        "token": (String) Client's first token,
        "user_type": (String) Client's user type
    }
}
```
## LogOut
Accessed by the route ```https://cafcul.hugocurado.info/user/logout```.