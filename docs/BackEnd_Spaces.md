# Spaces
---
## getPeopleNumInFacultyRooms
Accessed by the route ```/spaces/getPeopleNumerInSpace```. It retrieves the number of users present in a certain space of the faculty campus. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
block => The number of the block for the space in question => String
floor => The floor number for the space in question => String
room => The room number for the space in question => String
data_ini => Date for which the access is listed => String
hora_ini => Beginning time for the access => String
hora_fim => End time for the access => String
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
        "rooms": {
            "data": {
                "space": (String) the identifier of the room in question,
                "people": (String) the number of people present in the selected room,
                "max": (String) the maximum possible amount of people for the selected room
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


## getFacultyAvailableRooms
Accessed by the route ```/general/availableSpaces```. It retrieves all the currently available spaces on the faculty campus. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
block => The number of the block for the space in question => String
floor => The floor number for the space in question => String
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
        "availableRooms": {
            "data": {
                "space": (String) the identifier of the room in question,
                "seats": (String) the number of seats available in the selected room
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