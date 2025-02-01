package services

import (
	"github.com/google/uuid"
)

func (s *userService) Remove(ID uuid.UUID) error {
	// Verificar si el usuario existe
	user, err := s.userRepo.FindByID(ID)
	if err != nil && user == nil {
		return err
	}

	err = s.userRepo.Delete(ID)
	if err != nil {
		return err
	}
	return nil
}
