# -*- coding: utf-8 -*-
import random as r
primeiro_nome = ["Pedro", "Hugo", "André", "Ana", "Patrícia", "Sofia", "Aurora", "Carlos", "Miguel", "Maria", "João", "Fábio", "António", "Fernando", "Xavier", "Mário"]
ultimo_nome = ["Dias", "Neto", "Curado", "Matias", "Pacheco", "Abreu", "Rodrigues", "Sousa", "Nunes", "Gonçalves", "Duarte", "Costa", "Conceição", "Jesus", "Freitas"]
disciplinas = ["Elementos de Matematica I", "Elementos de Matematica II", "Fisica I", "Fisica II", "Programação I", "Programação II", "Sistemas Operativos",\
                "Aplicações Distribuidas", "Conceção de Produto", "Analise e Desenho de Software", "Testes de Software I", "Testes de Software II", "IoT I", "IoT II"\
                , "Projeto de Tecnologias de Informação", "Projecto de Tecnologias de Redes", "Segurança Informática", "Estatistica I", "Estatistica II", "Redes de Computadores"]
#"""
with open('populate_students.sql', 'w') as infile:
    for i in range(45010,50000):
        googleUID = str(700000000000000001984 + i)
        name = primeiro_nome[r.randint(0,len(primeiro_nome)-1)] + " " + ultimo_nome[r.randint(0,len(ultimo_nome)-1)]
        email = name.split(" ")[0] + name.split(" ")[1] + str(i) + "@gmail.com"
        confid = "d3034e8f8c717c1065beac83fep" + str(i)
        avatar = "https://i.ytimg.com/vi/x9Jr9JKpsX8/maxresdefault.jpg"
        infile.write("INSERT INTO users (id,googleUID,name,email,confid,avatar,account_type) VALUES (" + str(i) + ","  + "'" + googleUID + "'" + "," + "'" + name + "'" + ","\
                    + "'" + email  + "'" + "," + "'" + confid + "'" + "," + "'" + avatar + "'" + "," + "0);\n")

with open('populate_space.sql', 'w') as infile:
    for i in range(1,6):
        for j in range(1,5):
            for k in range(1,11):
                lot=30
                if k==10:
                    lot=100
                infile.write("INSERT INTO espaco(bloco, piso, sala, lotacao) VALUES (" + str(i) + "," + str(j) + "," + str(k) + "," + str(lot) + ");\n")

with open('populate_subjects.sql', 'w') as infile:
    for i in range(0,20):
        infile.write("INSERT INTO disciplina(designacao, prof_t) VALUES (" + "'" + disciplinas[i] + "'" + "," + "45004);\n")


with open('populate_subjects_students', 'w') as infile:
    for i in range(1,21):
        alunos_a_matricular = r.randint(20,100)
        l=[]
        for _ in range(0,alunos_a_matricular):
            aluno = r.randint(45010,49999)
            while aluno in l:
                aluno = r.randint(45010,49999)
            infile.write("INSERT INTO disciplina_aluno(id_disciplina,id_aluno) VALUES (" + str(i) + "," + str(aluno) + ");\n")
            l.append(aluno)

#"""
