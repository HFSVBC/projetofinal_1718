import random as r
with open('apresentacao/populate_presences_stress_test.sql', 'w') as infile, open('helpers/presences_classes_helper.txt', 'r') as helper, open('helpers/presences_students_helper.txt', 'r') as helper2:
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
                infile.write("INSERT INTO acesso(data_entrada,data_fim,espaco,user) SELECT a.data_inicio, a.data_fim, a.espaco, " + aluno_ir + " FROM aula a WHERE a.id=" + str(aula) + ";\n")
