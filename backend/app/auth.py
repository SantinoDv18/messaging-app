from datetime import datetime, timedelta
from jose import jwt, JWTError
<<<<<<< HEAD
from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from fastapi import APIRouter

=======
from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordBearer
>>>>>>> 7f728629fd2fa9eca89535f52a6ba59b0ec58591

SECRET_KEY = "mi_clave_secreta"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60

<<<<<<< HEAD
def get_user(username: str):
    # Aquí deberías consultar tu base de datos para obtener el usuario
    # Por simplicidad, vamos a simular un usuario
    if username == "testuser":
        return {"username": "testuser", "password": "testpassword"}
    return None

=======
>>>>>>> 7f728629fd2fa9eca89535f52a6ba59b0ec58591
router = APIRouter()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# Crear token
def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp": expire})

    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Validar token
def get_current_user(token: str = Depends(oauth2_scheme)):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username = payload.get("sub")

        if username is None:
            raise Exception()

        return username

    except JWTError:
        raise Exception("Token inválido")