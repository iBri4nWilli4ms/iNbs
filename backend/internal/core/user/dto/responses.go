package dto

import "iNbs/internal/core/user/models"

type UsersResponse struct {
	Users      []UserResponse `json:"users"`
	TotalCount int64          `json:"total_count"`
	Page       int            `json:"page"`
	PageSize   int            `json:"page_size"`
}

// Función para convertir una lista de modelos User a una respuesta UsersResponse
func ToUsersResponse(users []models.User, totalCount int64, page int, pageSize int) UsersResponse {

	userResponses := make([]UserResponse, len(users))

	for i, user := range users {
		userResponses[i] = UserResponse{
			ID:        user.ID,
			Name:      user.Name,
			Email:     user.Email,
			CreatedAt: user.CreatedAt,
		}
	}

	return UsersResponse{
		Users:      userResponses,
		TotalCount: totalCount,
		Page:       page,
		PageSize:   pageSize,
	}
}
