from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
from pydantic import BaseModel
import json
import os

class UserCreate(BaseModel):
    username: str
    email: str
    password: str

class User(BaseModel):
    id: int
    username: str
    email: str
    password: str
    created_at: str

class LoginCreate(BaseModel):
    email: str
    password: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
<<<<<<< HEAD
);
=======
)
>>>>>>> 9da54d62137a36591be114ee3b1320714d29e8e1

@app.get("/health")
def read_root():
    return {"status": "ok"}

USERS_FILE = "users.json"

@app.post("/register", response_model=User)
async def register(user: UserCreate):
    # Leer usuarios existentes
    if not os.path.exists(USERS_FILE):
        users = {"users": []}
    else:
        with open(USERS_FILE, "r") as f:
            users = json.load(f)
    
    # Verificar si email/username existe
    if any(u["email"] == user.email for u in users["users"]):
        raise HTTPException(status_code=400, detail="Email ya registrado")
    if any(u["username"] == user.username for u in users["users"]):
        raise HTTPException(status_code=400, detail="Username ya existe")
    
    # Agregar nuevo usuario
    new_user = {
        "id": len(users["users"]) + 1,
        "username": user.username,
        "email": user.email,
        "password": user.password,  # TODO: hash password
        "created_at": datetime.now().isoformat()
    }
    users["users"].append(new_user)
    
    # Guardar
    with open(USERS_FILE, "w") as f:
        json.dump(users, f, indent=2)
    
    return new_user

@app.post("/login")
async def login(credentials: LoginCreate):
    if not os.path.exists(USERS_FILE):
        raise HTTPException(status_code=401, detail="No users found")
    
    with open(USERS_FILE, "r") as f:
        users = json.load(f)
    
    # Buscar usuario
    for u in users["users"]:
        if u["email"] == credentials.email and u["password"] == credentials.password:
            return {"message": "Login exitoso", "user": {"id": u["id"], "username": u["username"], "email": u["email"]}}
    
    raise HTTPException(status_code=401, detail="Credenciales inválidas")
