import random as r, requests
def compute_date(ano,mes,dia,hora,minutos,duracao):
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

    if duracao!=0:
        minutos+=duracao
        while minutos>59:
            hora+=1
            minutos-=60

        s2_hora = check_ten(hora); s2_minutos=check_ten(minutos)
        data_fim=str(ano) + "-" + s_mes + "-" + s_dia + " " + s2_hora + ":" + s2_minutos + ":00"
    else:
        data_fim="NULL"
    return [mes, dia, data_inicio, data_fim]

def check_ten(args):
    if args<10:
        return "0" + str(args)
    else:
        return str(args)

def createAccess(number_acesses, duracao=0, space=0, date=0, user_choice=0, aula=0):
    """
    number_acesses int
    space int
    user int
    date yyyy-mm-dd hh:mm:ss
    duracao int
    """
    for i in range(0,number_acesses+1):
        if space==0:
            espaco=r.randint(101,200)
        else:
            espaco=space
        if user_choice==0:
            user=r.randint(45000,49999)
        else:
            user_list = user_choice.split(',')
            user = r.choice(user_list)
        if date==0:
            ano=r.choice([2017,2018])
            mes=r.choice([1,2,3,4,5,6,7,9,10,11,12])
            dia=r.randint(1,31)
            hora=r.randint(9,18)
            minutos=r.randint(1,60)
        else:
            date = date.split(' ')
            data_dias = date[0].split('-')
            data_horas = date[1].split(':')
            ano=data_dias[0]; mes=data_dias[1]; dia=data_dias[2]; hora=data_horas[0]; minutos=data_horas[1];
        datas=compute_date(ano,mes,dia,hora,minutos, duracao)

        out = {'data_entrada':datas[2],'data_saida':datas[3],'espaco':espaco,'user':str(user), 'aula':aula}
        ###requests.post('url/testcase/createAcess', data=out)
        ###sql="INSERT INTO acesso(data_entrada,data_fim,espaco,user) VALUES(" + "'" + datas[2] + "'" + "," + "'" + datas[3] + "'" + "," + str(espaco) + "," + str(user) + ");\n"
        print out


createAccess(10)
###----Todo---###
"""
Reformular bd depois disto
Caso consiga, tornar os acesso mais realistas.

SEMPRE:
Verifica se o utilizador ainda não saiu de outro espaço, data_saida a null

1-não enviar aula, o backend tem que perceber onde é a aula
1.1-O backend recebe o acesso e faz os seguintes passos.
1.1.1-Verifica se está a haver alguma aula naquele espaço naquela hora +10 minutos.
1.1.2-Verifica se o aluno está inscrito nessa disciplina
1.1.3-Se ainda não tiver saido fazer update, caso contrário fazer insert
1.1.4-Caso esteja inscrito meter nas presenças, caso contrário por só nos acessos.(ver se é para avisar)

2-mandar so a data, o backend faz update em vez de insert
2.1-O backend recebe o acesso e verifica se o utilizado fez um acesso aquele espaço (data_saida a null)
2.2-Caso tenha feito faz update à tabela

3-Basta mandar apenas uma data e o backend ve se e data de entrada ou saida

4-Basta enviar assim (data,espaço e user)
"""
