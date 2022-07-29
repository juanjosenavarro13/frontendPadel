export class LoginModel{
  constructor(
    public email: string,
    public password: string,
  ){}
}

export class AuthModel{
  constructor(
    public access_token: string,
    public token_type: string,
    public expires_in: number,
  ){}
}

export class RegisterModel{
  constructor(
    public email: string,
    public nombre: string,
    public password: string,
    public password_confirmation: string,
    public apellidos:string,
    public fecha_nacimiento:Date,
    public direccion:string,
    public telefono:string,
  ){}
}