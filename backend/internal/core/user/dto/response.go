package dto

import (
	"time"

	"iNbs/internal/core/user/models"

	"github.com/google/uuid"
)

type UserResponse struct {
	ID        uuid.UUID `json:"ID"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	CreatedAt time.Time `json:"created_at"`
}

func ToUserResponseDTO(user *models.User) *UserResponse {
	return &UserResponse{
		ID:        user.ID,
		Name:      user.Name,
		Email:     user.Email,
		CreatedAt: user.CreatedAt,
	}
}
