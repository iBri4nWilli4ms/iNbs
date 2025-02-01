package errors

import "errors"

// Errores de Validación
var (
	ErrPasswordTooShort = errors.New("password is too short")
	ErrInvalidEmail     = errors.New("invalid email format")
	ErrEmptyName        = errors.New("name cannot be empty")
)

// Errores de Negocio
var (
	ErrUserNotFound = errors.New("user not found")
	ErrUserExists   = errors.New("user already exists")
)
