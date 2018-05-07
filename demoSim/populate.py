# -*- coding: utf-8 -*-
import random as r
primeiro_nome = ["Pedro", "Hugo", "André", "Ana", "Patrícia", "Sofia", "Aurora", "Carlos", "Miguel", "Maria", "João", "Fábio", "António", "Fernando", "Xavier", "Mário"]
ultimo_nome = ["Dias", "Neto", "Curado", "Matias", "Pacheco", "Abreu", "Rodrigues", "Sousa", "Nunes", "Gonçalves", "Duarte", "Costa", "Conceição", "Jesus", "Freitas"]

with open('populate_students.sql', 'w') as infile:
    for i in range(45006,50000):
        googleUID = str(700000000000000001984 + i)
        name = primeiro_nome[r.randint(0,len(primeiro_nome)-1)] + " " + ultimo_nome[r.randint(0,len(ultimo_nome)-1)]
        email = name.split(" ")[0] + name.split(" ")[1] + str(i) + "@gmail.com"
        confid = "d3034e8f8c717c1065beac83fep" + str(i)
        avatar = "https://i.ytimg.com/vi/x9Jr9JKpsX8/maxresdefault.jpg"
        infile.write("INSERT INTO users (id,googleUID,name,email,confid,avatar,account_type) VALUES (" + str(i) + ","  + "'" + googleUID + "'" + "," + "'" + name + "'" + ","\
                    + "'" + email  + "'" + "," + "'" + confid + "'" + "," + "'" + avatar + "'" + "," + "0);\n")

with open('populate_otherUsers', 'w') as infile:
    for i in range(2000, 2200):
        googleUID = str(700000000000000001984 + i)
        name = primeiro_nome[r.randint(0,len(primeiro_nome)-1)] + " " + ultimo_nome[r.randint(0,len(ultimo_nome)-1)]
        email = name.split(" ")[0] + name.split(" ")[1] + str(i) + "@gmail.com"
        confid = "d3034e8f8c717c1065beac83fep" + str(i)
        avatar = "https://i.ytimg.com/vi/x9Jr9JKpsX8/maxresdefault.jpg"
        infile.write("INSERT INTO users (id,googleUID,name,email,confid,avatar,account_type) VALUES (" + str(i) + ","  + "'" + googleUID + "'" + "," + "'" + name + "'" + ","\
                    + "'" + email  + "'" + "," + "'" + confid + "'" + "," + "'" + avatar + "'" + "," + "0);\n")
