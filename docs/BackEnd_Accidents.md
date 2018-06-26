# Accidents
---
## registerAccident
Accessed by the route ```/accident/new```. It handles the creation of a new accident event. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
type => Accident type => String
block => Building in which the accident happened => String
floor => Floor in which the accident happened => String
room => Room in which the accident happened => String
date => Date of the accident => String
description => Description of the accident => String
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
        "accidentCreationResult": (Object) result of the accident creation SQL query,
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


## getAccidents
Accessed by the route ```/accident/getAll```. It retrieves the information for all the existent accident events. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
data_ini => Beginning of date range for the accident => String
data_fim => End of date range for the accident => String
```
With the following optional fields:
```
type => Accident type => String
block => Building in which the accident happened => String
floor => Floor in which the accident happened => String
room => Room in which the accident happened => String
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
        "accidents": {
            "data": {
                "id": (String) the identifier of each accident,
				"name": (String) designator of the accident,
				"espaco": (String) the faculty space where the accident happened,
                "date_open": (String) the starting date and time of the class,
				"description": (String) the description of the accident
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


## getAccidentsOthers
Accessed by the route ```/accident/getOthers```. It handles the retrieval of the information for accident events created by student users, solely for the use of student users. For that it requires the following POST elements:
```
userTokenId => Client's last issued token => String
data_ini => Beginning of date range for the accident => String
data_fim => End of date range for the accident => String
```
With the following optional fields:
```
type => Accident type => String
block => Building in which the accident happened => String
floor => Floor in which the accident happened => String
room => Room in which the accident happened => String
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
        "accidents": {
            "data": {
                "id": (String) the identifier of each accident,
				"name": (String) designator of the accident,
				"espaco": (String) the faculty space where the accident happened,
                "date_open": (String) the starting date and time of the class,
				"description": (String) the description of the accident
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