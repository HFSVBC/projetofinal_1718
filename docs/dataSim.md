# Data Simulator
It simulates the data that can be retrieved if a sensor network was implemented at the faculty.

## Users
The route ```/users``` retrieves the info about all users.

It returns a JSON list with the following configuration for a succesfull response:
```JSON
[
{
    "id": Int with user id,
    "numero": Internal user number
}
...]
```
 And the route ```/users/<id>``` retrieves the info on a specific user defined by the ```<id>```.
 It returns a JSON with the following configuration for a succesfull response:
 ```JSON
 {
     "id": Int with user id,
     "numero": Internal user number
 }
 ```

## Classrooms
The route ```/espacos``` retrieves the info about all spaces.
It returns a JSON lis with the following configuration for a succesfull response:
```JSON
[
{
    "id": Int with user id,
    "bloco": Building number,
    "piso": Floor number,
    "numero": Room number,
    "lotacaoMax": Maximum number of people,
    "lotacaoAtual": Number of people on the room
}
...]
```

And the route ```/espacos/<id>``` retrieves the info on a specific space defined by the ```<id>```.
It returns a JSON with the following configuration for a succesfull response:
```JSON
{
    "id": Int with user id,
    "bloco": Building number,
    "piso": Floor number,
    "numero": Room number,
    "lotacaoMax": Maximum number of people,
    "lotacaoAtual": Number of people on the room
}
```

## Entrances/Exits
The route ```/acessos``` retrieves the info about all accesses to spaces.
It returns a JSON list with the following configuration for a succesfull response:
```JSON
[
{
    "id": Int with user id,
    "utilizador": User who acessed,
    "bloco": Building number of the acess,
    "piso": Floor number of the acess,
    "sala": Room number of the acess,
    "hora_entrada": time of the entrance,
    "hora_saida": time of the exit
}
...]
```

,The route ```/acessos/<id>``` retrieves the info on a specific access defined by the ```<id>```.
It returns a JSON with the following configuration for a succesfull response:
```JSON
{
    "id": Int with user id,
    "utilizador": User who acessed,
    "bloco": Building number of the acess,
    "piso": Floor number of the acess,
    "sala": Room number of the acess,
    "hora_entrada": time of the entrance,
    "hora_saida": time of the exit
}
```

And the route ```/acessosuser/<numero>``` retrieves the info on a specific acess defined by the ```<numero>```.
It returns a JSON list with the following configuration for a successfull response:
```JSON
[
{
    "id": Int with user id,
    "utilizador": User who acessed,
    "bloco": Building number of the acess,
    "piso": Floor number of the acess,
    "sala": Room number of the acess,
    "hora_entrada": time of the entrance,
    "hora_saida": time of the exit
}
...]
```
