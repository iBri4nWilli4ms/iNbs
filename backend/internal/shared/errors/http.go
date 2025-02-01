package errors

import "net/http"

// NewBadRequestError crea un nuevo error de solicitud incorrecta.
func NewBadRequestError(message error) *CustomError {
	return NewCustomError(http.StatusBadRequest, message.Error())
}

// NewUnauthorizedError crea un nuevo error de acceso no autorizado.
func NewUnauthorizedError(message error) *CustomError {
	return NewCustomError(http.StatusUnauthorized, message.Error())
}

// NewForbiddenError crea un nuevo error de acceso prohibido.
func NewForbiddenError(message error) *CustomError {
	return NewCustomError(http.StatusForbidden, message.Error())
}

// NewNotFoundError crea un nuevo error de recurso no encontrado.
func NewNotFoundError(message error) *CustomError {
	return NewCustomError(http.StatusNotFound, message.Error())
}

// NewConflictError crea un nuevo error de conflicto.
func NewConflictError(message error) *CustomError {
	return NewCustomError(http.StatusConflict, message.Error())
}

// NewInternalServerError crea un nuevo error de servidor interno.
func NewInternalServerError(message error) *CustomError {
	return NewCustomError(http.StatusInternalServerError, message.Error())
}

// NewServiceUnavailableError crea un nuevo error de servicio no disponible.
func NewServiceUnavailableError(message error) *CustomError {
	return NewCustomError(http.StatusServiceUnavailable, message.Error())
}
