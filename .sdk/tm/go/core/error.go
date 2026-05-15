package core

type FortniteError struct {
	IsFortniteError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewFortniteError(code string, msg string, ctx *Context) *FortniteError {
	return &FortniteError{
		IsFortniteError: true,
		Sdk:              "Fortnite",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *FortniteError) Error() string {
	return e.Msg
}
