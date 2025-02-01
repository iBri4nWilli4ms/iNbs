package output

import (
	"iNbs/internal/core/user/models"

	"github.com/google/uuid"
)

// UserRepository define las operaciones de base de datos para User
type User interface {
	FindAll() ([]models.User, error)
	FindByID(ID uuid.UUID) (*models.User, error)
	FindByEmail(email string) (*models.User, error)
	Save(user *models.User) error
	Delete(ID uuid.UUID) error
}
