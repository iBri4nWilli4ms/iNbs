package errors

import "errors"

// Errores Generales
var (
	ErrInvalidInput       = errors.New("invalid input")
	ErrUnauthorized       = errors.New("unauthorized access")
	ErrForbidden          = errors.New("forbidden access")
	ErrResourceNotFound   = errors.New("resource not found")
	ErrInternalServer     = errors.New("internal server error")
	ErrConflict           = errors.New("conflict occurred")
	ErrServiceUnavailable = errors.New("service unavailable")
	ErrTimeout            = errors.New("request timed out")
	ErrUnexpected         = errors.New("an unexpected error occurred")
	ErrTooManyRequests    = errors.New("too many requests")

	ErrPasswordEncryptionFailed = errors.New("failed to encrypt password")
)

// Errores de Validación Globales

// Is verifica si el error coincide con el error especificado.
func Is(err, target error) bool {
	return errors.Is(err, target)
}
