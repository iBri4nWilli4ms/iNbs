package dto

import (
	"iNbs/internal/core/user/models"
)

type UserRequest struct {
	Name     string `json:"name"     binding:"required,alphanum,min=2,max=50"`
	Email    string `json:"email"    binding:"required,email"`
	Password string `json:"password" binding:"required,min=8,max=20"`
}

func ToUserModel(user *UserRequest) *models.User {
	return &models.User{
		// ID:    user.ID,
		Name:     user.Name,
		Email:    user.Email,
		Password: user.Password,
	}
}
