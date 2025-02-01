package services

import (
	"iNbs/internal/core/user/models"
)

// Implementación de las interfaces definidas en el puerto de entrada (input)
func (s *userService) FetchAll() ([]models.User, error) {
	users, err := s.userRepo.FindAll()
	if err != nil {
		return nil, err
	}
	return users, nil
}
