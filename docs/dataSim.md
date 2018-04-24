# Data Simulator
---
It simulates the data that can be retrieved if a sensor network was implemented at the faculty.

## Users
The route ```/users``` retrieves the info about all users.

It returns a JSON list with the following configuration for a successful response:
```JSON
[
{
    "id": Int with user id,
    "numero": Internal user number
}
...]
```
 And the route ```/users/<id>``` retrieves the info on a specific user defined by the ```<id>```.
 It returns a JSON with the following configuration for a successful response:
 ```JSON
 {
     "id": Int with user id,
     "numero": Internal user number
 }
 ```

## Classrooms
The route ```/espacos``` retrieves the info about all spaces.
It returns a JSON list with the following configuration for a successful response:
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
It returns a JSON with the following configuration for a successful response:
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
It returns a JSON list with the following configuration for a successful response:
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

The route ```/acessos/<id>``` retrieves the info on a specific access defined by the ```<id>```.
It returns a JSON with the following configuration for a successful response:
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

And the route ```/acessosuser/<numero>``` retrieves the info on a specific access defined by the ```<numero>```.
It returns a JSON list with the following configuration for a successful response:
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

## Classes
The route ```/acessosprof/<profdiscaula>``` retrieves the info on a specific access defined by the ```<profdiscaula>``` which is idprof, iddisc and idaula separated by ```,```.
It returns a JSON list with the following configuration for a successful response:
```JSON
[
{
    "numero": Number of student who attended the given class
}
...]
```

The route ```/aulasdisciplina/auladisciplina>``` retrieves the info on a specific access defined by the ```<auladisciplina>```.
It returns a JSON list with the following configuration for a successful response:
```JSON
[
{
    "id aula": The id of the class,
    "hora de inicio": The time of beggining of the class,
    "sala aula": The Classroom of the class
}
...]
```

And the route ```/alunoaula/<alunoaula>``` retrieves the info on a specific access defined by the ```<alunoaula>``` which is number aluno and aula separated by ```,```.
This is lists the classes which the student attended.
It returns a JSON list with the following configuration for a successful response:
```JSON
[
{
    "id aula": The id of the class,
    "hora inicio aula": The beggining time of the class,
    "sala aula": The classroom of the class
}
...]
```

## Subjects
The route ```/disciplinaprof/<prof>``` retrieves the info on a specific access defined by the ```<prof>```.
It returns a JSON list with the following configuration for a successful response:
```JSON
[
{
    "id disciplina": The id of the subject,
    "disciplina": The description of the subject
}
...]
```

And the route ```/alunodisciplina/<aluno>``` retrieves the info on a specific access defined by the ```<aluno>```.
It returns a JSON list with the following configuration for a successful response:
```JSON
[
{
    "id disciplina": The id of the subject,
    "disciplina": The description of the subject
}
...]
```
