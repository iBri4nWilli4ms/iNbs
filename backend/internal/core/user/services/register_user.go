package services

import (
	"iNbs/internal/core/user/models"

	"iNbs/internal/shared/errors"
	"iNbs/internal/shared/security"
)

func (s *userService) Register(newUser *models.User) (*models.User, error) {
	// Validar datos del nuevo usuario (negocio)
	if !newUser.IsValid() {
		return nil, errors.NewBadRequestError(errors.ErrInvalidInput)
	}

	// if err := checkExistingUser(s.userRepo, newUser.Email, newUser.Name); err != nil {
	// 	return err
	// }

	hashedPassword, err := security.HashPassword(newUser.Password)
	if err != nil {
		return nil, errors.NewInternalServerError(errors.ErrPasswordEncryptionFailed)
	}

	newUser.Password = hashedPassword

	// Guardar el usuario en la base de datos
	if err := s.userRepo.Save(newUser); err != nil {
		return nil, err
	}

	return newUser, nil
}

// func checkExistingUser(repo output.User, correo, name string) error {

// 	if _, err := repo.FindByEmail(correo); err != nil {
// 		if errors.Is(err, errors.ErrResourceNotFound) {
// 			return nil
// 		}
// 		return err
// 	}

// 	if _, err := repo.FindByID(name); err != nil {
// 		if errors.Is(err, errors.ErrResourceNotFound) {
// 			return nil
// 		}
// 		return err

// 	}
// 	return errors.NewConflictError(e.ErrUserExists)
// }
