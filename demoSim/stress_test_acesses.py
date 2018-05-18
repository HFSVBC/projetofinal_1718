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

with open('populate_acesses_stress.sql', 'w') as infile:
    for i in range(0,10001):
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
        infile.write("INSERT INTO acesso(id,data_entrada,data_fim,espaco,user) VALUES(" + str(i+1) + "," + "'" + datas[2] + "'" +\
                     "," + "'" + datas[3] + "'" + "," + str(espaco) + "," + str(user) + ");\n")
