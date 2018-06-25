import requests

def ddosbackend(n):
    for _ in range(n):
        r = requests.get('https://api.cafcul.hugocurado.info')

def ddosfrontend(n):
    for _ in range(n):
        r = requests.get('https://cafcul.hugocurado.info')

#ddosbackend(1)
#ddosfrontend(1)
