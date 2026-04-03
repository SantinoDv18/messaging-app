from fastapi import APIRouter
from fastapi import Depends
from ..auth import get_current_user
from fastapi import HTTPException 
from ..auth import create_access_token
from ..models.user import UserCreate, LoginCreate, User
from ..services.users_service import register_user, login_user
from ..database import engine
from sqlalchemy import text
# Router para agrupar endpoints de autenticación
router = APIRouter()

# Endpoint para registrar usuario
@router.post("/register", response_model=User)
def register(user: UserCreate):
    return register_user(user)

# Endpoint para login
@router.post("/login")
def login(credentials: LoginCreate):
    user = login_user(credentials)
    if not user:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

    # 🔐 crear token
    token = create_access_token({
        "sub": user["user"]["username"]
    })

    return {
        "access_token": token,
        "token_type": "bearer",
        "user": user["user"]
    }

# Endpoint de prueba
@router.get("/health")
def health():
    return {"status": "ok"}


@router.get("/perfil")
def perfil(user: str = Depends(get_current_user)):
    
        
    return {
        "mensaje": "Acceso permitido",
        "usuario": user
    }