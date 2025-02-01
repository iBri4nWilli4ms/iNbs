package repositories

import (
	"iNbs/internal/core/user/models"
	repositories "iNbs/internal/core/user/ports/output"
	"iNbs/internal/shared/errors"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type repository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) repositories.User {
	return &repository{
		db: db,
	}
}

// Obtener todos los usuarios
func (repo *repository) FindAll() ([]models.User, error) {
	var users []models.User
	if err := repo.db.Find(&users).Error; err != nil {
		return nil, errors.NewInternalServerError(err) // Error inesperado
	}
	return users, nil
}

// Obtener un usuario por nombre
func (repo *repository) FindByID(ID uuid.UUID) (*models.User, error) {
	var user models.User
	if err := repo.db.First(&user, "id = ?", ID).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, errors.NewNotFoundError(errors.ErrResourceNotFound) // Recurso no encontrado
		}
		return nil, errors.NewInternalServerError(err) // Error inesperado
	}
	return &user, nil
}

// Obtener un usuario por email
func (repo *repository) FindByEmail(email string) (*models.User, error) {
	var user models.User
	if err := repo.db.First(&user, "email = ?", email).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return nil, errors.NewNotFoundError(errors.ErrResourceNotFound) // Recurso no encontrado
		}
		return nil, errors.NewInternalServerError(err) // Error inesperado
	}
	return &user, nil
}

func (repo *repository) Save(updatedUser *models.User) error {
	if err := repo.db.Save(&updatedUser).Error; err != nil {
		return errors.NewInternalServerError(err) // Error inesperado
	}
	return nil
}

// Eliminar un usuario
func (repo *repository) Delete(ID uuid.UUID) error {
	if err := repo.db.Delete(&models.User{}, ID).Error; err != nil {
		if errors.Is(err, gorm.ErrRecordNotFound) {
			return errors.NewNotFoundError(errors.ErrResourceNotFound) // Recurso no encontrado
		}
		return errors.NewInternalServerError(err) // Error inesperado
	}
	return nil
}
