from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import auth
from .database import Base, engine
from .models.user import UserDB


# Crear instancia de FastAPI
app = FastAPI()

# Configuración de CORS (permite conexión con React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # frontend
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
)

Base.metadata.create_all(bind=engine)
print(Base.metadata.tables.keys())

# Registrar rutas de autenticación
app.include_router(auth.router)