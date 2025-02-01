package services

import (
	"iNbs/internal/core/user/models"

	"github.com/google/uuid"
)

// Implementación de las interfaces definidas en el puerto de entrada (input)

func (s *userService) FetchByID(ID uuid.UUID) (*models.User, error) {
	user, err := s.userRepo.FindByID(ID)
	if err != nil {
		return nil, err
	}

	return user, nil
}
