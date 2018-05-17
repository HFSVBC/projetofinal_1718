import random as r
with open('populate_presences_stress_test.sql', 'w') as infile, open('presencas_classes_helper.txt', 'r') as helper, open('presences_students_helper.txt', 'r') as helper2:
    buffer_classes = helper.readlines()
    buffer_students = helper2.readlines()

    for i in range(1, len(buffer_classes), 2):
        alunos = buffer_students[i].split(":")[1].split(',')[:-1]
        aulas = buffer_classes[i].split(':')[1]
        primeira_aula = int(aulas.split(',')[0])
        ultima_aula = int(aulas.split(',')[1])
        for aula in range(ultima_aula-8, ultima_aula+1):
            num_presencas = r.randint(len(alunos)-10,len(alunos))
            alunos_presencas = r.sample(alunos,num_presencas)
            for aluno_ir in alunos_presencas:
                infile.write("INSERT INTO presencas(aula,aluno) VALUES (" + str(aula) + "," + (aluno_ir) + ");\n")

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
