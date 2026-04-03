from pydantic import BaseModel, Field
from sqlalchemy import Column, Integer, String
from ..database import Base

# -------------------------
# 🔹 Pydantic (API)
# -------------------------

class UserCreate(BaseModel):
    user_username: str
    user_email: str
    user_password_hash: str

class LoginCreate(BaseModel):
    user_email: str
    user_password_hash: str

class User(BaseModel):
    user_id: int = Field(alias="user_id")  # 👈 mapea user_id → 
    email: str

    class Config:
        from_attributes = True
        populate_by_name = True


# -------------------------
# 🔹 SQLAlchemy (BD)
# -------------------------

class UserDB(Base):
    __tablename__ = "tbl_users"

    user_id = Column(Integer, primary_key=True, index=True)
    user_username = Column(String, unique=True)
    user_email = Column(String, unique=True)
    user_password_hash = Column(String)