with open('sqlscripts/test_subjects_students_.sql', 'w') as infile:
    for i in range(1,21):
        for aluno in range(45000,45006):
            infile.write("INSERT INTO disciplina_aluno(id_disciplina,id_aluno) VALUES (" + str(i) + "," + str(aluno) + ");\n")

with open('sqlscripts/test_presences_students.sql', 'w') as infile, open('helpers/presences_classes_helper.txt', 'r') as helper:
    buffer_classes = helper.readlines()
    alunos_presencas=range(45000,45006)
    #impares 1 semestre
    #pares 2 semestre

    #1 semestre
    for i in range(0, len(buffer_classes), 2):
        aulas = buffer_classes[i].split(':')[1]
        primeira_aula = int(aulas.split(',')[0])
        ultima_aula = int(aulas.split(',')[1])
        for aula in range(primeira_aula,ultima_aula+1):
            for aluno_ir in alunos_presencas:
                infile.write("INSERT INTO presencas(aula,aluno) VALUES (" + str(aula) + "," + str(aluno_ir) + ");\n")
                infile.write("INSERT INTO acesso(data_entrada,data_fim,espaco,user) SELECT a.data_inicio, a.data_fim, a.espaco, " + str(aluno_ir) + " FROM aula a WHERE a.id=" + str(aula) + ";\n")

    #2 semestre
    for i in range(1, len(buffer_classes), 2):
        aulas = buffer_classes[i].split(':')[1]
        primeira_aula = int(aulas.split(',')[0])
        ultima_aula = int(aulas.split(',')[1])
        for aula in range(primeira_aula,ultima_aula-8):
            for aluno_ir in alunos_presencas:
                infile.write("INSERT INTO presencas(aula,aluno) VALUES (" + str(aula) + "," + str(aluno_ir) + ");\n")
                infile.write("INSERT INTO acesso(data_entrada,data_fim,espaco,user) SELECT a.data_inicio, a.data_fim, a.espaco, " + str(aluno_ir) + " FROM aula a WHERE a.id=" + str(aula) + ";\n")
