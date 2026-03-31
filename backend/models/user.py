from pydantic import BaseModel

# Modelo para registrar un usuario (lo que envía el cliente)
class UserCreate(BaseModel):
    username: str
    email: str
    password: str

# Modelo para login
class LoginCreate(BaseModel):
    email: str
    password: str

# Modelo completo del usuario (lo que guarda el sistema)
class User(BaseModel):
    id: int
    username: str
    email: str
    password: str
    created_at: str