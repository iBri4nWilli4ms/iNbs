package models

// func (e User) IsValid() bool {
// 	return strings.Contains(e.Email, "@")
// }

// IsValid verifica si el usuario tiene datos válidos.
func (u *User) IsValid() bool {
	return u.Email != "" && u.Name != ""
}
