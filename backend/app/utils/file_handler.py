import json
import os

# Ruta donde se guardan los usuarios
USERS_FILE = "backend/data/users.json"

# Leer usuarios desde el archivo JSON
def read_users():
    # Si el archivo no existe, retornar estructura vacía
    if not os.path.exists(USERS_FILE):
        return {"users": []}
    
    # Abrir y leer el archivo
    with open(USERS_FILE, "r") as f:
        return json.load(f)

# Escribir usuarios en el archivo JSON
def write_users(data):
    with open(USERS_FILE, "w") as f:
        json.dump(data, f, indent=2)