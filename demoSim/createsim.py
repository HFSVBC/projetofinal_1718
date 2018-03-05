with open('create.sql', 'w') as infile:
    infile.write("CREATE TABLE Aluno (ID int PRIMARY KEY, NumAluno int UNIQUE NOT NULL, PrimeiroNome varchar(255), UltimoNome varchar(255));\n")
    infile.write("CREATE TABLE Sala (ID int PRIMARY KEY, Bloco int, Piso int, Numero int, LotacaoMax int);\n")
    infile.write("CREATE TABLE Professor (ID int PRIMARY KEY, NumProfessor int UNIQUE NOT NULL, PrimeiroNome varchar(255), UltimoNome varchar(255));\n")
    infile.write("CREATE TABLE Disciplina (ID int PRIMARY KEY, Codigo int UNIQUE, Designacao varchar(255) UNIQUE, Creditos int NOT NULL, Regente int, FOREIGN KEY (Regente) REFERENCES Professor(ID));\n")
    infile.write("CREATE TABLE Turma (ID int PRIMARY KEY, NInscritos int, MaxInscritos int, Tipo varchar(2), IDDisciplina int, IDProf int, FOREIGN KEY (IDDisciplina) REFERENCES Disciplina(ID), FOREIGN KEY (IDProf) REFERENCES Professor(ID));\n")
    infile.write("CREATE TABLE Aula (ID int PRIMARY KEY, HoraInicio datetime, HoraFrom datetime, IDSala int, IDTurma int, FOREIGN KEY (IDSala) REFERENCES Sala(ID), FOREIGN KEY (IDTurma) REFERENCES Turma(ID));\n")
    infile.write("CREATE TABLE TurmaAluno (ID int PRIMARY KEY, IDAluno int, IDTurma int, FOREIGN KEY (IDAluno) REFERENCES Aluno(ID), FOREIGN KEY (IDTurma) REFERENCES Turma(ID));\n")

    for i in range(1,16):
        infile.write("CREATE TABLE Semana" + str(i) + " (ID int PRIMARY KEY, Dia int, IDSala int, IDAluno int, FOREIGN KEY (IDSala) REFERENCES Sala(ID),FOREIGN KEY (IDAluno) REFERENCES Aluno(ID));\n")
