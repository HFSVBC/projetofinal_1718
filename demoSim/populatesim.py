with open('populate.sql', 'w') as infile:

    #Criar alunos
    nomes = ["Jose", "Rita", "Ana", "Moniz", "Marta", "Tomas", "Andre", "Fernanda", "Alberto"]
    ultimo_nome = ["Andrade", "Sousa", "Martins", "Balas", "Simoes", "Santos", "Rico", "Tina", "Ribeiro"]
    num_aluno = [12345, 24735, 34698, 48583, 43278, 50124, 273853, 43829, 482917]

    for i in range(1, len(nomes)+1):
        infile.write("INSERT INTO Aluno VALUES(" + str(i) + "," + str(num_aluno[i-1]) + "," + nomes[i-1] + "," + ultimo_nome[i-1] + ");\n")

    #Criar salas
    bloco = [1,2,3,4,5]
    piso = [1,2,3,1,1]
    numero = [23,13,55,23,12]

    for i in range(1, len(bloco)+1):
        infile.write("INSERT INTO Sala(" + str(i) + "," + str(bloco[i-1]) + "," + str(piso[i-1]) + "," + str(numero[i-1]) + ");\n")

    #Criar acessos
    for i in range(1, 6):
        infile.write("INSERT INTO Semana" + str(i) + "(" + str(i) + "," + str(i) + "," + str(i) + "," + str(i) + ");\n")
