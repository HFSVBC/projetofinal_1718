with open('salasDeAulas.csv', 'r') as infile, open('salas1semestre.csv', 'w') as outfile:
    bufferin = infile.readlines()
    for line in bufferin:
        linha = line.split(';')
        if linha[0] != "":
            outfile.write(linha[0] + ";" + linha[1] + ";" + linha[2] + "\n")

with open('salasDeAulas.csv', 'r') as infile, open('salas2semestre.csv', 'w') as outfile:
    bufferin = infile.readlines()
    for line in bufferin:
        linha = line.split(';')
        outfile.write(linha[3] + ";" + linha[4] + ";" + linha[5])
