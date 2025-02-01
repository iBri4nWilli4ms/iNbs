package utils

import (
	"fmt"
	"iNbs/internal/shared/errors"

	"github.com/gin-gonic/gin"
)

// RespondWithError traduce un error a un error HTTP y responde.
func RespondWithError(c *gin.Context, err error) {
	if customErr, ok := err.(*errors.CustomError); ok {
		c.JSON(customErr.Code, gin.H{"message": customErr.Message})
	}
	// Opcional: loguear el error para desarrollo.
	fmt.Println(err)
}
