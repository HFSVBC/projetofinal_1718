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

@app.route('/visitante/<string:idv>', methods = ["GET"])
def getVisitante(idv):
    sql = "SELECT * FROM visitante WHERE NumVisitante={}".format(idv)
    g.cursor.execute(sql)
    response = g.cursor.fetchone()
    return jsonify(id=response[0], numero=response[1])


if __name__ == '__main__':
    app.run()
