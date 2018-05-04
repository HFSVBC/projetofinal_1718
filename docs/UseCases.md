# Test Cases

1 Funcionalidade - Alunos consultarem o seu histórico de acessos

The following users can view their access history.

- Aluno 45000 -> https://simulador1212.herokuapp.com/acessosuser/45000
- Aluno 45001 -> https://simulador1212.herokuapp.com/acessosuser/45001
- Aluno 45002 -> https://simulador1212.herokuapp.com/acessosuser/45002
- Aluno 45003 -> https://simulador1212.herokuapp.com/acessosuser/45003
- Aluno 45004 -> https://simulador1212.herokuapp.com/acessosuser/45004
- Aluno 45005 -> https://simulador1212.herokuapp.com/acessosuser/45005
- Aluno 45006 -> https://simulador1212.herokuapp.com/acessosuser/45006
- Aluno 45007 -> https://simulador1212.herokuapp.com/acessosuser/45007
- Aluno 45008 -> https://simulador1212.herokuapp.com/acessosuser/45008
- Aluno 45009 -> https://simulador1212.herokuapp.com/acessosuser/45009

The server returns a JSON list with the following information:
```
 {
   "bloco": 1,
   "hora_entrada": "2018-01-26T13:10",
   "hora_saida": "2018-01-26T13:49",
   "id": 7,
   "piso": 1,
   "sala": 1,
   "utilizador": 45009
 }
```

2 Funcionalidade - Professores consultarem os alunos presentes nas suas aulas

A professor can view the students that attendee at their classes.

- professor 221, disciplina 1(Biologia), Aula 1  -> https://simulador1212.herokuapp.com/acessosprof/221,1,1
- professor 221, disciplina 1(Biologia), Aula 2  -> https://simulador1212.herokuapp.com/acessosprof/221,1,2
- professor 221, disciplina 1(Biologia), Aula 3  -> https://simulador1212.herokuapp.com/acessosprof/221,1,3
- professor 222, disciplina 2(Programacao), Aula 4 -> https://simulador1212.herokuapp.com/acessosprof/222,2,4
- professor 222, disciplina 2(Programacao), Aula 5 -> https://simulador1212.herokuapp.com/acessosprof/222,2,5
- professor 222, disciplina 2(Programacao), Aula 6 -> https://simulador1212.herokuapp.com/acessosprof/222,2,6
- professor 223, disciplina 3(Elementos de Matematica), Aula 7 -> https://simulador1212.herokuapp.com/acessosprof/223,3,7
- professor 223, disciplina 3(Elementos de Matematica), Aula 8 -> https://simulador1212.herokuapp.com/acessosprof/223,3,8
- professor 223, disciplina 3(Elementos de Matematica), Aula 9 -> https://simulador1212.herokuapp.com/acessosprof/223,3,9
- professor 223, disciplina 3(Elementos de Matematica), Aula 10 -> https://simulador1212.herokuapp.com/acessosprof/223,3,10
- professor 222, discipçina 4(Sistemas Operativos), Aula 11 -> https://simulador1212.herokuapp.com/acessosprof/222,4,11
- professor 222, discipçina 4(Sistemas Operativos), Aula 12 -> https://simulador1212.herokuapp.com/acessosprof/222,4,12

The server returns a JSON list with the following information:
```
 {
   "numero": 45001
 }
 ```

3 Funcionalidade - administradores da plataforma, consulta de quem esteve presente num edifício ou numa sala em determinados períodos temporais

The admin and the security can view the access to a building.

- Bloco 1 -> https://simulador1212.herokuapp.com/acessosedificio/1
- Bloco 2 -> https://simulador1212.herokuapp.com/acessosedificio/2

The server returns a JSON list with the following information:
```
 {
   "bloco": 1,
   "hora_entrada": "2018-01-26T13:10",
   "hora_saida": "2018-01-26T13:49",
   "id": 7,
   "piso": 1,
   "sala": 1,
   "utilizador": 45009
 }
```
The admin and the security can view the access to a classroom in a building.

- Bloco 1, Sala 1 -> https://simulador1212.herokuapp.com/acessosblocosala/1,1
- Bloco 1, Sala 10 -> https://simulador1212.herokuapp.com/acessosblocosala/1,10
- Bloco 2, Sala 1 -> https://simulador1212.herokuapp.com/acessosblocosala/2,1
- Bloco 2, Sala 10 -> https://simulador1212.herokuapp.com/acessosblocosala/2,10

The information about the classrooms is generated randomly.

The server returns a JSON list with the following information:
```
 {
   "bloco": 1,
   "hora_entrada": "2018-01-26T13:10",
   "hora_saida": "2018-01-26T13:49",
   "id": 7,
   "piso": 1,
   "sala": 1,
   "utilizador": 45009
 }
```