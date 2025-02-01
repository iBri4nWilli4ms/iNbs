package main

import (
	"iNbs/internal/core/user/models"
	"iNbs/internal/core/user/services"
	"iNbs/internal/infrastructure/persistence/repositories"
	"iNbs/internal/presentation/api/controllers"
	"iNbs/internal/presentation/api/router"
	"log"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func main() {
	// Datos de conexión a PostgreSQL
	dsn := "host=localhost user=iNbs password=iNbs dbname=iNbs port=5433 sslmode=disable TimeZone=Asia/Shanghai"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}

	// Migrar el esquema
	if err := db.AutoMigrate(&models.User{}); err != nil {
		log.Fatalf("Failed to migrate database: %v", err)
	}

	// Crear repositorio e inyectarlo al servicio
	userRepo := repositories.NewUserRepository(db)
	userService := services.NewUserService(userRepo)
	userController := controllers.NewUserController(userService)

	// Configurar rutas
	r := router.SetupRouter(userController)

	// Iniciar servidor
	r.Run(":8080")
}
