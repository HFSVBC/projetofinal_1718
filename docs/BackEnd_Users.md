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
    
}
```
## LogOut
Accessed by the route ```https://cafcul.hugocurado.info/user/logout```.