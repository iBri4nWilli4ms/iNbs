package errors

import (
	"fmt"
)

type CustomError struct {
	Code    int    `json:"-"`       // Código HTTP (no incluido en JSON por defecto)
	Message string `json:"message"` // Mensaje para el cliente
}

// NewCustomError crea un nuevo CustomError.
func NewCustomError(code int, message string) *CustomError {
	return &CustomError{
		Code:    code,
		Message: message,
	}
}

// Implementa la interfaz de error.
func (e *CustomError) Error() string {
	return fmt.Sprintf("%d: %s", e.Code, e.Message)
}

// // Implementa la interfaz de error.
// func (e *CustomError) StatusCode() int {
// 	return e.Code
// }
