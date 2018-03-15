# -*- coding: utf-8 -*-
from flask import Flask, request, make_response, jsonify, g
import sqlite3, json
from os.path import isfile
app = Flask(__name__)



# DB MANAGEMENT
# --------------------------------------------------------------------------------------------------------------------------


def connect_db(basedados):
    db_is_created = isfile(basedados)
    g.conn = sqlite3.connect(basedados)
    g.cursor = g.conn.cursor()

    if not db_is_created:
        with open("../dbscripts/create.sql", "r") as infile:
            textr = infile.read()
            g.cursor.executescript(textr)
            g.conn.commit()
        with open("../dbscripts/populate.sql", "r") as infile:
            textw = infile.read()
            g.cursor.executescript(textw)
            g.conn.commit()


@app.before_request
def before_request():
    g.db = connect_db("./simulador.db")

@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()

#-- Visitantes --#
@app.route('/visitantes')
def getVisitantes():
    sql = "SELECT * FROM visitante"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'numero':i[1]})
    return jsonify(l)

@app.route('/visitante/<string:idv>')
def getVisitante(idv):
    sql = "SELECT * FROM visitante WHERE NumVisitante={}".format(idv)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], numero=response[1])

#-- Alunos --#
@app.route('/alunos')
def getAlunos():
    sql = "SELECT * FROM aluno"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'numero':i[1]})
    return jsonify(l)

@app.route('/aluno/<string:ida>')
def getAluno(ida):
    sql = "SELECT * FROM aluno WHERE NumAluno={}".format(ida)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], numero=response[1])

#-- Salas --#
@app.route("/salas")
def getSalas():
    sql = "SELECT * FROM sala"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'bloco':i[1], 'piso':i[2], 'numero':i[3], 'lotacao_max':i[4]})
    return jsonify(l)

@app.route("/salasbloco/<string:bloco>")
def getSalasByBloco(bloco):
    sql = "SELECT * FROM sala WHERE Bloco={}".format(bloco)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'bloco':i[1], 'piso':i[2], 'numero':i[3], 'lotacao_max':i[4]})
    return jsonify(l)

@app.route("/salaslot/<string:lot>")
def getSalasByLotacao(lot):
    sql = "SELECT * FROM sala WHERE LotacaoMax={}".format(lot)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'bloco':i[1], 'piso':i[2], 'numero':i[3], 'lotacao_max':i[4]})
    return jsonify(l)

@app.route("/sala/<string:ids>")
def getSala(ids):
    sql = "SELECT * FROM sala WHERE id={}".format(ids)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], bloco=response[1], piso=response[2], numero=response[3], lotacaoMax=response[4])

#-- professores --#
@app.route("/professores")
def getProfessores():
    sql = "SELECT * FROM professor"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'numero':i[1]})
    return jsonify(l)

@app.route("/professor/<string:idp>")
def getProfessor(idp):
    sql = "SELECT * FROM professor WHERE id={}".format(idp)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], numero=response[1])

#-- disciplina --#
@app.route("/disciplinas")
def getDisciplinas():
    sql = "SELECT * FROM disciplina"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'codigo':i[1], 'designacao':i[2], 'creditos':i[3], 'regente':i[4]})
    return jsonify(l)

@app.route("/disciplina/<string:idd>")
def getDisciplina(idd):
    sql = "SELECT * FROM disciplina WHERE id={}".format(idd)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], codigo=response[1], designacao=response[2], creditos=response[3], regente=response[4])

@app.route("/disciplinasc/<string:creditos>")
def getDisciplinasByCreditos(creditos):
    sql = "SELECT * FROM disciplina WHERE creditos={}".format(creditos)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'codigo':i[1], 'designacao':i[2], 'creditos':i[3], 'regente':i[4]})
    return jsonify(l)

@app.route("/disciplinasr/<string:regente>")
def getDisciplinasByRegente(regente):
    sql = "SELECT * FROM disciplina WHERE regente={}".format(regente)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'codigo':i[1], 'designacao':i[2], 'creditos':i[3], 'regente':i[4]})
    return jsonify(l)

#-- turmas --#
@app.route("/turmas")
def getTurmas():
    sql = "SELECT * FROM turma"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'numero inscritos':i[1], 'max inscritos':i[2], 'tipo':i[3], 'disciplina':i[4], 'professor':i[5]})
    return jsonify(l)

@app.route("/turma/<string:idt>")
def getTurma(idt):
    sql = "SELECT * FROM turma WHERE id={}".format(idt)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], numero_inscritos=response[1], max_inscritos=response[2], tipo=response[3], disciplina=response[4], professor=response[5])

@app.route("/turmasi/<string:insc>")
def getTurmasByInscritos(insc):
    sql = "SELECT * FROM turma WHERE NInscritos={}".format(insc)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'numero inscritos':i[1], 'max inscritos':i[2], 'tipo':i[3], 'disciplina':i[4], 'professor':i[5]})
    return jsonify(l)

@app.route("/turmasmi/<string:maxinsc>")
def getTurmasByMaxInscritos(maxinsc):
    sql = "SELECT * FROM turma WHERE MaxInscritos={}".format(maxinsc)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'numero inscritos':i[1], 'max inscritos':i[2], 'tipo':i[3], 'disciplina':i[4], 'professor':i[5]})
    return jsonify(l)

@app.route("/turmast/<string:tipo>")
def getTurmasByTipo(tipo):
    sql = "SELECT * FROM turma WHERE Tipo=" + "'" + tipo + "'"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'numero inscritos':i[1], 'max inscritos':i[2], 'tipo':i[3], 'disciplina':i[4], 'professor':i[5]})
    return jsonify(l)

@app.route("/turmasd/<string:disciplina>")
def getTurmasByDisciplina(disciplina):
    sql = "SELECT * FROM turma WHERE IDDisciplina={}".format(disciplina)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'numero inscritos':i[1], 'max inscritos':i[2], 'tipo':i[3], 'disciplina':i[4], 'professor':i[5]})
    return jsonify(l)

@app.route("/turmasp/<string:professor>")
def getTurmasByProfessor(professor):
    sql = "SELECT * FROM turma WHERE NumProf={}".format(professor)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'numero inscritos':i[1], 'max inscritos':i[2], 'tipo':i[3], 'disciplina':i[4], 'professor':i[5]})
    return jsonify(l)

#-- aulas --#
@app.route("/aulas")
def getAulas():
    sql = "SELECT * FROM aula"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Hora inicio':i[1], 'Hora fim':i[2], 'Sala':i[3], 'Turma':i[4]})
    return jsonify(l)

@app.route("/aula/<string:ida>")
def getAula(ida):
    sql = "SELECT * FROM aula WHERE id={}".format(ida)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], hora_inicio=response[1], hora_fim=response[2], sala=response[3], turma=response[4])

@app.route("/aulashi/<string:horainicio>")
def getAulaByHoraInicio(horainicio):
    sql = "SELECT * FROM aula WHERE HoraInicio=" + "'" + horainicio + "'"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Hora inicio':i[1], 'Hora fim':i[2], 'Sala':i[3], 'Turma':i[4]})
    return jsonify(l)

@app.route("/aulashf/<string:horafim>")
def getAulaByHoraFim(horafim):
    sql = "SELECT * FROM aula WHERE HoraFinal=" + "'" + horafim + "'"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Hora inicio':i[1], 'Hora fim':i[2], 'Sala':i[3], 'Turma':i[4]})
    return jsonify(l)

@app.route("/aulass/<string:sala>")
def getAulaBySala(sala):
    sql = "SELECT * FROM aula WHERE IDSala={}".format(sala)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Hora inicio':i[1], 'Hora fim':i[2], 'Sala':i[3], 'Turma':i[4]})
    return jsonify(l)

@app.route("/aulast/<string:turma>")
def getAulaByTurma(turma):
    sql = "SELECT * FROM aula WHERE IDTurma={}".format(turma)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Hora inicio':i[1], 'Hora fim':i[2], 'Sala':i[3], 'Turma':i[4]})
    return jsonify(l)

#-- turmaaluno --#
@app.route("/turmaalunos")
def getTurmaAlunos():
    sql = "SELECT * FROM turmaaluno"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Numero de Aluno':i[1], 'Turma':i[2]})
    return jsonify(l)

@app.route("/turmaaluno/<string:idta>")
def getTurmaAluno(idta):
    sql = "SELECT * FROM turmaaluno WHERE id={}".format(idta)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], numero_aluno=response[1], turma=response[2])

@app.route("/turmaalunost/<string:turma>")
def getTurmaAlunoByTurma(turma):
    sql = "SELECT * FROM turmaaluno WHERE IDTurma={}".format(turma)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Numero de Aluno':i[1], 'Turma':i[2]})
    return jsonify(l)

@app.route("/turmaalunosa/<string:aluno>")
def getTurmaAlunoByAluno(aluno):
    sql = "SELECT * FROM turmaaluno WHERE NumAluno={}".format(aluno)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Numero de Aluno':i[1], 'Turma':i[2]})
    return jsonify(l)

#-- acessos --#
@app.route("/acessos")
def getAcessos():
    sql = "SELECT * FROM acessos"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Sala':i[1], 'Hora Entrada':i[2], 'Hora Saida':i[3], 'Aluno':i[4], 'Visitante':i[5]})
    return jsonify(l)

@app.route("/acesso/<string:ida>")
def getAcesso(ida):
    sql = "SELECT * FROM acessos WHERE id={}".format(ida)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], sala=response[1], hora_entrada=response[2], hora_saida=response[3], aluno=response[4], visitante=response[5])

@app.route("/acessoss/<string:sala>")
def getAcessosBySala(sala):
    sql = "SELECT * FROM acessos WHERE IDSala={}".format(sala)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Sala':i[1], 'Hora Entrada':i[2], 'Hora Saida':i[3], 'Aluno':i[4], 'Visitante':i[5]})
    return jsonify(l)

@app.route("/acessoshe/<string:horaentrada>")
def getAcessosByHoraEntrada(horaentrada):
    sql = "SELECT * FROM acessos WHERE HoraEntrada=" + "'" + horaentrada + "'"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Sala':i[1], 'Hora Entrada':i[2], 'Hora Saida':i[3], 'Aluno':i[4], 'Visitante':i[5]})
    return jsonify(l)

@app.route("/acessoshs/<string:horasaida>")
def getAcessosByHoraSaida(horasaida):
    sql = "SELECT * FROM acessos WHERE HoraSaida=" + "'" + horasaida + "'"
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Sala':i[1], 'Hora Entrada':i[2], 'Hora Saida':i[3], 'Aluno':i[4], 'Visitante':i[5]})
    return jsonify(l)

@app.route("/acessosa/<string:aluno>")
def getAcessosByAluno(aluno):
    sql = "SELECT * FROM acessos WHERE NumAluno={}".format(aluno)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Sala':i[1], 'Hora Entrada':i[2], 'Hora Saida':i[3], 'Aluno':i[4], 'Visitante':i[5]})
    return jsonify(l)

@app.route("/acessosv/<string:visitante>")
def getAcessosByVisitante(visitante):
    sql = "SELECT * FROM acessos WHERE NumVisitante={}".format(visitante)
    g.cursor.execute(sql)
    response = g.cursor.fetchall()
    l=[]
    for i in response:
        l.append({'id':i[0], 'Sala':i[1], 'Hora Entrada':i[2], 'Hora Saida':i[3], 'Aluno':i[4], 'Visitante':i[5]})
    return jsonify(l)

if __name__ == '__main__':
    app.run()
