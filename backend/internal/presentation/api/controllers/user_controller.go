package controllers

import (
	"net/http"

	"iNbs/internal/core/user/dto"
	"iNbs/internal/core/user/ports/input"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"

	"iNbs/internal/shared/utils"
)

type User struct {
	userService input.User
}

func NewUserController(userService input.User) *User {
	return &User{
		userService: userService,
	}
}

func (uc *User) CreateUser(c *gin.Context) {

	var userRequest dto.UserRequest
	if err := c.ShouldBindJSON(&userRequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	newUser, err := uc.userService.Register(dto.ToUserModel(&userRequest))
	if err != nil {
		utils.RespondWithError(c, err)
		return
	}

	c.JSON(http.StatusCreated, dto.ToUserResponseDTO(newUser))
}

func (uc *User) GetUserByID(c *gin.Context) {

	UUID, err := uuid.Parse(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid UUID"})
		return
	}

	user, err := uc.userService.FetchByID(UUID)
	if err != nil {
		utils.RespondWithError(c, err)
		return
	}

	c.JSON(http.StatusOK, dto.ToUserResponseDTO(user))
}

func (uc *User) GetAllUsers(c *gin.Context) {

	users, err := uc.userService.FetchAll()
	if err != nil {
		utils.RespondWithError(c, err)
		return
	}

	c.JSON(http.StatusOK, dto.ToUsersResponse(users, 1, 1, 1))
}

func (uc *User) DeleteUser(c *gin.Context) {

	UUID, err := uuid.Parse(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid UUID"})
		return
	}

	if err := uc.userService.Remove(UUID); err != nil {
		utils.RespondWithError(c, err)
		return
	}

	c.JSON(http.StatusCreated, gin.H{"message": "User delete successfully!"})
}

func (uc *User) UpdateUser(c *gin.Context) {

	var userRequest dto.UserRequest

	UUID, err := uuid.Parse(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid UUID"})
		return
	}

	if err := c.ShouldBindJSON(&userRequest); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	updatedUser, err := uc.userService.Modify(UUID, dto.ToUserModel(&userRequest))
	if err != nil {
		utils.RespondWithError(c, err)
		return
	}
	// c.JSON(http.StatusOK, gin.H{"message": "User updated successfully!"})
	c.JSON(http.StatusOK, dto.ToUserResponseDTO(updatedUser))

}
