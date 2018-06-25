def generateEntrance(date, users, espaco):
    with open('generateEntrance.sql', 'w') as infile:
        for user in users:
            infile.write("INSERT INTO acesso(data_entrada,espaco,user) VALUES(" + "'" + date + "'" +\
                        "," + str(espaco) + "," + str(user) + ");\n")

def generateExit(date, users):
    with open('generatedExits.sql', 'w') as infile:
        for user in users:
            infile.write("UPDATE acesso SET data_fim=" + "'" + date + "'" + "WHERE user=" + str(user) + " AND data_fim='0000-00-00 00:00:00';\n")

generateEntrance('2018-06-26 09:30:00', range(45000,45030), 20)
generateExit('2018-06-26 10:40:00', range(45000, 45030))
