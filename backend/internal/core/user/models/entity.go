package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

// User representa la entidad de usuario en el sistema.
type User struct {
	gorm.Model
	ID       uuid.UUID `json:"ID"    gorm:"type:uuid;primary_key"` // UUID como PK
	Name     string    `json:"name"  gorm:"unique"`
	Email    string    `json:"email" gorm:"unique"`
	Password string    `json:"password"`
}

// BeforeCreate es un hook de GORM que se ejecuta antes de crear un registro.
func (u *User) BeforeCreate(tx *gorm.DB) (err error) {
	// Generar un nuevo UUID si no está presente
	if u.ID == uuid.Nil {
		u.ID = uuid.New()
	}
	return
}

// AfterCreate es un hook de GORM que se ejecuta después de crear un registro.
func (u *User) AfterCreate(tx *gorm.DB) (err error) {
	// Puedes agregar lógica adicional aquí, como enviar un correo de bienvenida
	return
}

// BeforeSave es un hook de GORM que se ejecuta antes de guardar un registro.
func (u *User) BeforeSave(tx *gorm.DB) (err error) {
	// Puedes agregar lógica adicional aquí, como encriptar la contraseña
	return
}

// AfterSave es un hook de GORM que se ejecuta después de guardar un registro.
func (u *User) AfterSave(tx *gorm.DB) (err error) {
	// Puedes agregar lógica adicional aquí
	return
}
