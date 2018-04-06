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
It returns a JSON with the following configuration for a succesfull response:
```
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
```
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
## LogOut
Accessed by the route ```https://cafcul.hugocurado.info/user/logout```. It handles user logout in the back end. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
```
It returns a JSON with the following configuration for a succesfull response:
```
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
```
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

## UserTypeChange