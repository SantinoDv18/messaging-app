from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes import auth

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



# Registrar rutas de autenticación
app.include_router(auth.router)