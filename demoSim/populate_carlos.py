#carlos -> 50002
#ramos -> 50003
import random as r
disc = ["Projeto de Tecnologias de Informacao", "Planeamento e Gestao de projeto", "Concecao de produto", "Sistemas Operativos", "Projeto de Tecnologias de Redes"]

#Disciplinas
with open("sqlscripts/populate_test_profs.sql", "w") as infile:
    for i in range(len(disc)):
        if i>2:
            user_prof = 50003
        else:
            user_prof = 50002
        infile.write("INSERT INTO disciplina(designacao, prof_t) VALUES (" + "'" + disc[i] + "'" + "," + str(user_prof) + ");\n")

    def check_ten(args):
        if args<10:
            return "0" + str(args)
        else:
            return str(args)
    #compute date
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

    #aulas
    idaula = 291
    for i in range(len(disc)):
        if i%2==0:
            ano=2018
            mes=2
            dia=r.randint(12,16)
            duracao=15
            espaco=r.randint(1,60)
        else:
            ano=2017
            mes=9
            dia=r.randint(11,15)
            duracao=14
            espaco=r.randint(1,60)
        hora=r.randint(8,17)
        minutos=r.choice([0,30])

        for _ in range(duracao):
            dia+=7
            datas = compute_date(ano,mes,dia,hora,minutos,False)
            mes=datas[0]
            dia=datas[1]
            infile.write("INSERT INTO aula(id, data_inicio, data_fim, tipo, espaco, disciplina) VALUES(" + str(idaula)  +\
                        "," + "'" + datas[2] + "'" + "," + "'" + datas[3] + "'" + "," + "'T'," + str(espaco) + "," + str(i+21) + ");\n")
            idaula+=1

    #matricular alunos
    for i in range(len(disc)):
        for aluno in range(46000,46050):
            infile.write("INSERT INTO disciplina_aluno(id_disciplina,id_aluno) VALUES (" + str(i+21) + "," + str(aluno) + ");\n")

    #presencas
    for i in range(291,363):
        #numero presencas
        n_presencas = r.randint(35,50)
        #alunos que foram
        alunos_presencas = r.sample(range(46000, 46050), n_presencas)

        for aluno_ir in alunos_presencas:
            infile.write("INSERT INTO presencas(aula,aluno) VALUES (" + str(i) + "," + str(aluno_ir) + ");\n")
            infile.write("INSERT INTO acesso(data_entrada,data_fim,espaco,user) SELECT a.data_inicio, a.data_fim, a.espaco, " + str(aluno_ir) + " FROM aula a WHERE a.id=" + str(i) + ";\n")
