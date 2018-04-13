# History
---
## User
Accessed by the route ```/history/user``` or the route ```/history/user/<email>```, where ```<email>``` is the email of the user of whom the access history was requested (email must be URL encoded). It handles user access history to the faculty campus. For that it requires the following POST elements:
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
        "accessHist": {
            "data": {
                "sala": (String) the room accessed by the user,
                "inicio": (String) a timestamp of when the user entered the above room,
                "fim": (String) a timestamp of when the user exited the above room
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
The HTTP error codes might be 401 (Unauthorizedd => User session expired), 403 (Forbidden => Access not authorised for current user), 405 (Method Not Allowed => POST has not passed the validation check.) and 500 (Server Error => Error gueting user profile)