package security

import (
	"os"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

// SecretKey es la clave secreta para firmar los tokens.
// var SecretKey = []byte("your_secret_key")
var SecretKey = []byte(os.Getenv("JWT_SECRET_KEY"))

// GenerateToken genera un token JWT con datos personalizados.
func GenerateToken(userID string, duration time.Duration) (string, error) {
	claims := jwt.MapClaims{
		"user_id": userID,
		"exp":     time.Now().Add(duration).Unix(),
	}
	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(SecretKey)
}

// ValidateToken valida un token JWT y extrae los claims.
func ValidateToken(tokenString string) (jwt.MapClaims, error) {
	token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		// Verifica que el método de firma sea el esperado.
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, jwt.ErrSignatureInvalid
		}
		return SecretKey, nil
	})
	if err != nil {
		return nil, err
	}

	if claims, ok := token.Claims.(jwt.MapClaims); ok && token.Valid {
		return claims, nil
	}
	return nil, jwt.ErrInvalidKey
}
