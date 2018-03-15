import random as r
with open('populate.sql', 'w') as infile:


    #Criar visitantes
    for i in range(1,200):
        infile.write("INSERT INTO visitante(NumVisitante) VALUES (" + str(i+10000) + "); \n")

    #Criar alunos
    for i in range(1, 2000):
        infile.write("INSERT INTO aluno(NumAluno) VALUES(" + str(i+45000) + ");\n")
    #Criar salas
    bloco = [1,2,3,4,5]
    piso = [1,2,3,1,1]
    numero = [23,13,55,23,12]
    lotacao = [50,20,30]
    for i in range(1, 20):
        infile.write("INSERT INTO sala(Bloco, Piso, Numero, LotacaoMax) VALUES(" + str(bloco[r.randint(0, len(bloco)-1)]) + "," + str(piso[r.randint(0, len(piso)-1)]) + "," + str(numero[r.randint(0, len(numero)-1)]) + "," + str(lotacao[r.randint(0, len(lotacao)-1)]) + ");\n")

    #Criar Professores
    for i in range(1, 100):
        infile.write("INSERT INTO professor(NumProfessor) VALUES(" + str(i+2000) + ");\n")


    #Criar Disciplinas
    codigo= [28563, 37928, 59384, 00324, 98424, 87528, 29384, 384724, 76493, 479383]
    creditos=[3,6]
    designacao = ["Elementos_de_Matematica_II", "Programacao_I", "Matematica_Discreta", "Biologia_Celular", "Fisica", "Interacao_de_Computadores", "Algebra_Linear", "Geologia", "Grafos_e_Redes", "Aplicacoes_Distribuidas" ]

    for i in range(1, len(codigo)+1):
        infile.write("INSERT INTO disciplina(Codigo, Designacao, Creditos, Regente) VALUES(" + str(codigo[i-1]) + "," + "'" + designacao[i-1] + "'" + "," + str(creditos[r.randint(0, len(creditos)-1)]) + "," + str(r.randint(0, 100)) + ");\n")

    """
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

        infile.write("INSERT INTO turma(NInscritos, MaxInscritos, Tipo, IDDisciplina, NumProf) VALUES(" + str(n_inscritos_turma) + "," + str(max_inscritos_turma) + "," + Tipo[r.randint(0, len(Tipo)-1)] + "," + str(Disciplinas[r.randint(0, len(Disciplinas)-1)]) + "," + str(r.randint(0,100)) + ");\n" )

    #Criar Aulas
    HoraInicio = ["9:00", "10:00", "14:00", "15:30", "16:00"]
    HoraFim = ["10:30", "11:30", "15:30", "17:00", "17:30"]
    sala_turma = range(1,20)

    for i in range(1,40):
        infile.write("INSERT INTO aula(HoraInicio, HoraFim, IDSala, IDTurma) VALUES(" + HoraInicio[(i%len(HoraInicio))-1] + "," + HoraFim[(i%len(HoraFim))-1] + "," + str(sala_turma[r.randint(0, len(sala_turma)-1)]) + "," + str(sala_turma[r.randint(0, len(sala_turma)-1)]) + ");\n")

    #Criar Turma alunos
    for i in range(1,80):
        infile.write("INSERT INTO turmaaluno(NumAluno, IDTurma) VALUES (" + str(r.randint(45000, 47000)) + "," + str(sala_turma[r.randint(0, len(sala_turma)-1)]) + ");\n")

    #Criar acessos
    for i in range(1,200):
        infile.write("INSERT INTO acessos(IDSala, HoraEntrada, HoraSaida, NumAluno, NumVisitante) VALUES (" + str(r.randint(1,20)) + "," + HoraInicio[(i%len(HoraInicio))-1] + "," + HoraFim[(i%len(HoraFim))-1] + "," + str(r.randint(45000, 47000)) + "," + str(r.randint(10000,10200)) +  ");\n")
    """
