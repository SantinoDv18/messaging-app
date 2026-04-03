from datetime import datetime
from ..models.user import UserDB
from ..database import SessionLocal
from fastapi import HTTPException

# Función para registrar un usuario
def register_user(user):
    db = SessionLocal()
    

 # Validar si el email ya existe
    existing_email = db.query(UserDB).filter(UserDB.user_email == user.user_email).first()
    if existing_email:
     raise HTTPException(status_code=400, detail="Email ya registrado")

    existing_username = db.query(UserDB).filter(UserDB.user_username == user.user_username).first()
    if existing_username:
     raise HTTPException(status_code=400, detail="Username ya existe")
    
    try:
        new_user = UserDB(
            user_username=user.user_username,
            user_email=user.user_email,
            user_password_hash=user.user_password_hash
        )

        db.add(new_user)
        db.commit()
        db.refresh(new_user)

        return new_user

    finally:
        db.close()


# Función para login
def login_user(credentials):
    db = SessionLocal()

    try:
        user = db.query(UserDB).filter(
            UserDB.user_email == credentials.user_email,
            UserDB.user_password_hash == credentials.user_password_hash
        ).first()

        if not user:
            raise HTTPException(status_code=401, detail="Credenciales inválidas")

        return {
            "message": "Login exitoso",
            "user": {
                "id": user.user_id,
                "username": user.user_username,
                "email": user.user_email
            }
        }

    finally:
        db.close()