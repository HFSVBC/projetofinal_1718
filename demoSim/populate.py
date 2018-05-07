# -*- coding: utf-8 -*-

##user: user_cafcul_kby1
##pass: s9kV4OO2tix0K^8$5usgJW39UIQ8Ag
##link: https://www.hugocurado.info/phpmyadmin/

import random as r
primeiro_nome = ["Pedro", "Hugo", "André", "Ana", "Patrícia", "Sofia", "Aurora", "Carlos", "Miguel", "Maria", "João", "Fábio", "António", "Fernando", "Xavier", "Mário"]
ultimo_nome = ["Dias", "Neto", "Curado", "Matias", "Pacheco", "Abreu", "Rodrigues", "Sousa", "Nunes", "Gonçalves", "Duarte", "Costa", "Conceição", "Jesus", "Freitas"]
disciplinas = ["Elementos de Matematica I", "Elementos de Matematica II", "Fisica I", "Fisica II", "Programação I", "Programação II", "Sistemas Operativos",\
                "Aplicações Distribuidas", "Conceção de Produto", "Analise e Desenho de Software", "Testes de Software I", "Testes de Software II", "IoT I", "IoT II"\
                , "Projeto de Tecnologias de Informação", "Projecto de Tecnologias de Redes", "Segurança Informática", "Estatistica I", "Estatistica II", "Redes de Computadores"]

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
    ids=1
    for i in range(1,6):
        for j in range(1,5):
            for k in range(1,11):
                lot=30
                if k==10:
                    lot=100
                infile.write("INSERT INTO espaco(id, bloco, piso, sala, lotacao) VALUES ("  + str(ids) + "," + str(i) + "," + str(j) + "," + str(k) + "," + str(lot) + ");\n")
                ids+=1
with open('populate_subjects.sql', 'w') as infile:
    idd=1
    for i in range(0,20):
        infile.write("INSERT INTO disciplina(id,designacao, prof_t) VALUES (" + str(idd) + "," + "'" + disciplinas[i] + "'" + "," + "45004);\n")
        idd+=1

with open('populate_subjects_students', 'w') as infile, open('presences_students_helper', 'w') as infile2:
    idda=1
    for i in range(1,21):
        infile2.write(disciplinas[i-1] + ":")
        alunos_a_matricular = r.randint(20,30)
        l=[]
        for _ in range(0,alunos_a_matricular):
            aluno = r.randint(45010,49999)
            while aluno in l:
                aluno = r.randint(45010,49999)
            infile.write("INSERT INTO disciplina_aluno(id,id_disciplina,id_aluno) VALUES (" + str(idda) + "," + str(i) + "," + str(aluno) + ");\n")
            l.append(aluno)
            infile2.write(str(aluno) + ",")
            idda+=1
        infile2.write("\n")

def compute_date(ano,mes,dia,hora,minutos,acess):
    meses30=[4,6,9,11]
    meses31=[1,3,5,7,8,10,12]
    if mes in meses30:
        dia_max=30
    elif mes in meses31:
        dia_max=31
    else:
        dia_max=28

    if dia > dia_max:
        mes+=1
        dia-=dia_max

    s_mes = check_ten(mes); s_dia = check_ten(dia); s_hora = check_ten(hora); s_minutos = check_ten(minutos)
    data_inicio=str(ano) + "-" + s_mes + "-" + s_dia + " " + s_hora + ":" + s_minutos + ":00"

    if acess:
        minutos+=20
        if minutos>59:
            hora+=1
            minutos-=60
    else:
        if minutos==30:
            hora+=2
            minutos=0
        else:
            hora+=1
            minutos+=30
    s2_hora = check_ten(hora); s2_minutos=check_ten(minutos)
    data_fim=str(ano) + "-" + s_mes + "-" + s_dia + " " + s2_hora + ":" + s2_minutos + ":00"
    return [mes, dia, data_inicio, data_fim]

def check_ten(args):
    if args<10:
        return "0" + str(args)
    else:
        return str(args)

with open('populate_classes.sql', 'w') as infile, open('presencas_classes_helper', 'w') as infile2:
    idc=1
    cal_ids=1
    for i in range(1,21):
        #1 semestre
        if i%2==0:
            ano=2018
            mes=2
            dia=r.randint(12,16)
            duracao=15
        else:
            ano=2017
            mes=9
            dia=r.randint(11,15)
            duracao=14
        hora=r.randint(8,17)
        minutos=r.choice([0,30])
        espaco=r.randint(1,100)
        cal_ids+=duracao
        infile2.write(disciplinas[i-1] + ":" + str(cal_ids-duracao) + "," + str(cal_ids-1) + "\n")
        for _ in range(duracao):
            dia+=7
            datas = compute_date(ano,mes,dia,hora,minutos,False)
            mes=datas[0]
            dia=datas[1]
            infile.write("INSERT INTO aula(id, data_inicio, data_fim, tipo, espaco, disciplina) VALUES(" + str(idc) +\
                        "," + "'" + datas[2] + "'" + "," + "'" + datas[3] + "'" + "," + "T," + str(espaco) + "," + str(i) + ");\n")
            idc+=1

with open('populate_acesses.sql', 'w') as infile:
    for i in range(0,2001):
        espaco=r.randint(101,200)
        if i<200:
            user=r.randint(45000,45005)
        else:
            user=r.randint(45010,49999)
        ano=r.choice([2017,2018])
        mes=r.choice([1,2,3,4,5,6,7,9,10,11,12])
        dia=r.randint(1,31)
        hora=r.randint(9,18)
        minutos=r.randint(1,60)
        datas=compute_date(ano,mes,dia,hora,minutos,True)
        infile.write("INSERT INTO acesso(id,data_entrada,data_fim,espaco,user) VALUES(" + str(i) + "," + "'" + datas[2] + "'" +\
                     "," + "'" + datas[3] + "'" + "," + str(espaco) + "," + str(user) + ");\n")

"""
alunos inscritos naquela disciplinas estao no ficheiro presences_students_helper.
Ids das aulas das disciplinas estão no presencas_classes_helper

"""

with open('populate_presences', 'w') as infile:
    pass
