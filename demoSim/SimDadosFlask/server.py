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
            g.cursor.executescript(infile.read())
            g.conn.commit()
        with open("../dbscripts/populate.sql", "r") as infile:
            g.cursor.executescript(infile.read())
            g.conn.commit()


@app.before_request
def before_request():
    g.db = connect_db("simulador.db")

@app.teardown_request
def teardown_request(exception):
    db = getattr(g, 'db', None)
    if db is not None:
        db.close()

def resposta (res, msg):
	if res:
		r = make_response(msg)
		r.status_code = 200
	else:
		r = make_response(msg)
		r.status_code = 501
	return r
@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/alunos/<string:ida>', methods = ["GET"])
def getAluno(ida):
    sql = "SELECT * FROM Aluno WHERE NumAluno={}".format(ida)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    resposta(True, response[0])

if __name__ == '__main__':
    app.run()
