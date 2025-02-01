package router

import (
	"iNbs/internal/presentation/api/controllers"
	"iNbs/internal/presentation/api/middlewares"

	"github.com/gin-gonic/gin"
)

func SetupRouter(userController *controllers.User) *gin.Engine {
	r := gin.Default()

	// Middlewares globales
	// r.Use(middlewares.AuthMiddleware())
	r.Use(middlewares.LoggerMiddleware())

	// Rutas
	api := r.Group("/api/v1")
	{
		users := api.Group("/users")
		{
			users.POST("/", userController.CreateUser)
			users.GET("/", userController.GetAllUsers)
			users.GET("/:id", userController.GetUserByID)
			users.DELETE("/:id", userController.DeleteUser)
			users.PUT("/:id", userController.UpdateUser)
		}

	}

	return r
}
