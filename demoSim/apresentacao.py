#Criar presencas
import random as r
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

with open('apresentacao/apresentacao_aulas.sql', 'w') as infile:
    datas_inicio = ['2018-06-26 09:30:00','2018-06-26 09:30:00','2018-05-30 12:00:00','2018-05-16 15:00:00','2018-05-17 17:30:00',\
                    '2018-05-07 08:30:00','2018-05-07 15:00:00','2018-05-08 11:00:00','2018-05-09 16:00:00','2018-05-10 14:00:00']
    datas_fim = ['2018-06-26 10:30:00','2018-06-26 10:30:00','2018-05-30 13:00:00','2018-05-16 16:30:00','2018-05-17 19:00:00',\
                '2018-05-07 10:00:00','2018-05-07 16:30:00','2018-05-08 12:00:00','2018-05-09 17:30:00','2018-05-10 15:00:00']
    espacos = ['40', '41', '50', '52', '50', '40', '50', '41', '52', '40', '54']
    disciplinas = ['21', '25', '7', '8', '9', '11', '12', '5', '5', '2']
    for idc in range(1000,1010):
        infile.write("INSERT INTO aula(id, data_inicio, data_fim, tipo, espaco, disciplina) VALUES(" + str(idc) +\
                    "," + "'" + datas_inicio[idc-1000] + "'" + "," + "'" + datas_fim[idc-1000] + "'" + "," + "'T'," +\
                     espacos[idc-1000] + "," + disciplinas[idc-1000] + ");\n")

with open('apresentacao/apresentacao_entradas.sql', 'w') as infile, open('apresentacao/apresentacao_saidas.sql', 'w') as infile2:
    for i in range(0,5001):
        espaco=r.randint(101,200)
        if i<200:
            user=r.randint(45000,45005)
        else:
            user=r.randint(45010,49999)
        ano=2018
        mes=r.choice([1,2,3,4,5,6,7,9,10,11,12])
        dia=r.randint(1,31)
        hora=r.randint(9,18)
        minutos=r.randint(1,60)
        datas=compute_date(ano,mes,dia,hora,minutos,True)
        #Criar entradas
        infile.write("INSERT INTO acesso(data_entrada,espaco,user) VALUES(" + "'" + datas[2] + "'" +\
                     "," + str(espaco) + "," + str(user) + ");\n")
        #Criar saidas
        infile2.write("UPDATE acesso SET data_fim=" + "'" + datas[3] + "'" + "WHERE user=" + str(user) + " AND data_fim='0000-00-00 00:00:00';\n")

with open('apresentacao/apresentacao_presencas.sql', 'w') as infile:
    for aula in range(1000, 1010):
        for aluno in range(45000,45006):
            infile.write("INSERT INTO presencas(aula,aluno) VALUES (" + str(aula) + "," + str(aluno) + ");\n")
            infile.write("INSERT INTO acesso(data_entrada,data_fim,espaco,user) SELECT a.data_inicio, a.data_fim, a.espaco, " + str(aluno) + " FROM aula a WHERE a.id=" + str(aula) + ";\n")
