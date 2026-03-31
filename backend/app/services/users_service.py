from datetime import datetime
from fastapi import HTTPException
from ..utils.file_handler import read_users, write_users

# Función para registrar un usuario
def register_user(user):
    users = read_users()

    # Validar si el email ya existe
    if any(u["email"] == user.email for u in users["users"]):
        raise HTTPException(status_code=400, detail="Email ya registrado")

    # Validar si el username ya existe
    if any(u["username"] == user.username for u in users["users"]):
        raise HTTPException(status_code=400, detail="Username ya existe")

    # Crear nuevo usuario
    new_user = {
        "id": len(users["users"]) + 1,  # ID incremental simple
        "username": user.username,
        "email": user.email,
        "password": user.password,  # ⚠️ No seguro (falta hash)
        "created_at": datetime.now().isoformat()
    }

    # Agregar a la lista
    users["users"].append(new_user)

    # Guardar en archivo
    write_users(users)

    return new_user


# Función para login
def login_user(credentials):
    users = read_users()

    # Buscar usuario que coincida con email y password
    for u in users["users"]:
        if u["email"] == credentials.email and u["password"] == credentials.password:
            return {
                "message": "Login exitoso",
                "user": {
                    "id": u["id"],
                    "username": u["username"],
                    "email": u["email"]
                }
            }

    # Si no encuentra coincidencia
    raise HTTPException(status_code=401, detail="Credenciales inválidas")