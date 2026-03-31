from fastapi import APIRouter
from backend.models.user import UserCreate, LoginCreate, User
from backend.services.users_service import register_user, login_user

# Router para agrupar endpoints de autenticación
router = APIRouter()

# Endpoint para registrar usuario
@router.post("/register", response_model=User)
def register(user: UserCreate):
    return register_user(user)

# Endpoint para login
@router.post("/login")
def login(credentials: LoginCreate):
    return login_user(credentials)

# Endpoint de prueba
@router.get("/health")
def health():
    return {"status": "ok"}