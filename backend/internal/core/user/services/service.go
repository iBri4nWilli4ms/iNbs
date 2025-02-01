package services

import (
	"iNbs/internal/core/user/ports/input"
	"iNbs/internal/core/user/ports/output"
)

type userService struct {
	userRepo output.User
}

func NewUserService(userRepo output.User) input.User {
	return &userService{
		userRepo: userRepo,
	}
}
