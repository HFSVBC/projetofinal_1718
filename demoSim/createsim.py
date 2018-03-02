with open('create.sql', 'w') as infile:
    infile.write("CREATE TABLE Aluno (ID int PRIMARY KEY, NumAluno int, PrimeiroNome varchar(255), UltimoNome varchar(255));\n")
    infile.write("CREATE TABLE Sala (ID int PRIMARY KEY, Bloco int, Piso int, Numero int);\n")

    for i in range(1,16):
        infile.write("CREATE TABLE Semana" + str(i) + " (ID int PRIMARY KEY, Dia int, IDSala int, IDAluno int, FOREIGN KEY (IDSala) REFERENCES Sala(ID),FOREIGN KEY (IDAluno) REFERENCES Aluno(ID));\n")
