package input

import (
	"iNbs/internal/core/user/models"

	"github.com/google/uuid"
)

type User interface {
	FetchAll() ([]models.User, error)
	FetchByID(ID uuid.UUID) (*models.User, error)
	Register(user *models.User) (*models.User, error)
	Modify(ID uuid.UUID, user *models.User) (*models.User, error)
	Remove(ID uuid.UUID) error
}
