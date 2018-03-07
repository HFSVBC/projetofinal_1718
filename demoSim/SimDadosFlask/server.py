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
            print infile.read()
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

@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run()
