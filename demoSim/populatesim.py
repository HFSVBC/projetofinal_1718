import random as r
with open('populate.sql', 'w') as infile:

    #Criar alunos
    nomes = ["Jose", "Rita", "Ana", "Moniz", "Marta", "Tomas", "Andre", "Fernanda", "Alberto", "Bernardo", "Telmo", "Pedro"]
    ultimo_nome = ["Andrade", "Sousa", "Martins", "Balas", "Simoes", "Santos", "Rico", "Tina", "Ribeiro", "Silva", "Ferreira", "Duarte"]
    num_aluno = [12345, 24735, 34698, 48583, 43278, 50124, 27383, 43829, 48297, 48129, 22319, 1309]


    for i in range(1, len(num_aluno)+1):
        infile.write("INSERT INTO Aluno VALUES(" + str(i) + "," + str(num_aluno[i-1]) + "," + nomes[r.randint(0, len(nomes)-1)] + "," + ultimo_nome[r.randint(0, len(ultimo_nome)-1)] + ");\n")

    #Criar salas
    bloco = [1,2,3,4,5]
    piso = [1,2,3,1,1]
    numero = [23,13,55,23,12]
    lotacao = [50,20,30]

    for i in range(1, 20):
        infile.write("INSERT INTO Sala VALUES(" + str(i) + "," + str(bloco[r.randint(0, len(bloco)-1)]) + "," + str(piso[r.randint(0, len(piso)-1)]) + "," + str(numero[r.randint(0, len(numero)-1)]) + "," + str(lotacao[r.randint(0, len(lotacao)-1)]) + ");\n")

    #Criar Professores
    NumProfessor = [16523, 54276, 34896, 34094, 34464, 27186, 29485, 28472, 78473, 67129, 92384, 57382, 90239, 11111, 29920, 20038, 67398]

    for i in range(1, len(NumProfessor)+1):
        infile.write("INSERT INTO Professor VALUES(" + str(i) + "," + str(NumProfessor[i-1]) + "," + nomes[r.randint(0, len(nomes)-1)] + "," + ultimo_nome[r.randint(0, len(ultimo_nome)-1)]+ ");\n")

    #Criar Disciplinas
    codigo= [28563, 37928, 59384, 00324, 98424, 87528, 29384, 384724, 76493, 479383]
    creditos=[3,6]
    Designacao = ["Elementos de Matematica II", "Programacao I", "Matematica Discreta", "Biologia Celular", "Fisica", "Interacao de Computadores", "Algebra Linear", "Geologia", "Grafos e Redes", "Aplicacoes Distribuidas" ]
    Regente = range(1,len(NumProfessor))

    for i in range(1, len(codigo)+1):
        infile.write("INSERT INTO Disciplina VALUES(" + str(i) + "," + str(codigo[i-1]) + ","+ Designacao[i-1] + "," + str(creditos[r.randint(0, len(creditos)-1)]) + "," + str(Regente[r.randint(0, len(Regente)-1)]) + ");\n")

    #Criar Turmas
    NInscritos = [22,17,70,43,24,66,34,21,56,35]
    MaxInscritos = [30,70,200,100,70,80,40,50,90,300]
    Tipo = ["T", "TP", "PL"]
    Disciplinas = range(1, len(codigo))

    for i in range(1, 20):
        n_inscritos_turma = NInscritos[r.randint(0, len(NInscritos)-1)]
        max_inscritos_turma = MaxInscritos[r.randint(0, len(MaxInscritos)-1)]
        while n_inscritos_turma > max_inscritos_turma:
            n_inscritos_turma = NInscritos[r.randint(0, len(NInscritos)-1)]
            max_inscritos_turma = MaxInscritos[r.randint(0, len(MaxInscritos)-1)]

        infile.write("INSERT INTO Turma VALUES(" + str(i) + "," + str(n_inscritos_turma) + "," + str(max_inscritos_turma) + "," + Tipo[r.randint(0, len(Tipo)-1)] + "," + str(Disciplinas[r.randint(0, len(Disciplinas)-1)]) + "," + str(Regente[r.randint(0, len(Regente)-1)]) + ");\n" )

    #Criar Aulas
    HoraInicio = ["9:00", "10:00", "14:00", "15:30", "16:00"]
    HoraFim = ["10:30", "11:30", "15:30", "17:00", "17:30"]
    sala_turma = range(1,20)

    for i in range(1,40):
        infile.write("INSERT INTO Aula VALUES(" + str(i) + "," + HoraInicio[(i%len(HoraInicio))-1] + "," + HoraFim[(i%len(HoraFim))-1] + "," + str(sala_turma[r.randint(0, len(sala_turma)-1)]) + "," + str(sala_turma[r.randint(0, len(sala_turma)-1)]) + ");\n")

    #Criar Turma alunos
    NAlunos = range(1, len(num_aluno))

    for i in range(1,80):
        infile.write("INSERT INTO TurmaAluno VALUES (" + str(i) + "," + str(NAlunos[r.randint(0, len(NAlunos)-1)]) + "," + str(sala_turma[r.randint(0, len(sala_turma)-1)]) + ");\n")

    #Criar acessos
    for i in range(1, 16):
        acessos = "INSERT INTO Semana" + str(i) + " VALUES ("
        for j in range(1, 60):
            infile.write(acessos + str(j) + "," + str(r.randint(1,7)) + "," + str(sala_turma[r.randint(0, len(sala_turma)-1)]) + "," + str(NAlunos[r.randint(0, len(NAlunos)-1)]) + ");\n")
