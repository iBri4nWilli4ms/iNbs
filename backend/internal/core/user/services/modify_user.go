package services

import (
	"iNbs/internal/core/user/models"
	"iNbs/internal/shared/errors"

	"github.com/google/uuid"
)

func (s *userService) Modify(ID uuid.UUID, updatedUser *models.User) (*models.User, error) {
	// Verificar si el usuario existe
	existingUser, err := s.userRepo.FindByID(ID)
	if err != nil {
		return nil, err
	}

	// Validar la información del usuario actualizado (negocio)
	if !updatedUser.IsValid() {
		return nil, errors.NewBadRequestError(errors.ErrInvalidInput)
	}

	// Actualizar los campos necesarios
	existingUser.Email = updatedUser.Email
	existingUser.Name = updatedUser.Name
	// existingUser.Password = updatedUser.Password

	// Actualizar el usuario en la base de datos
	err = s.userRepo.Save(existingUser)
	if err != nil {
		return nil, errors.NewInternalServerError(err)
	}
	return updatedUser, nil
}
