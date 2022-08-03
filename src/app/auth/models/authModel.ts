export class LoginModel {
  constructor(public email: string, public password: string) {}
}

export class AuthModel {
  constructor(public access_token: string, public token_type: string, public expires_in: number) {}
}

export class RegisterModel {
  constructor(
    public email: string,
    public nombre: string,
    public password: string,
    public password_confirmation: string,
    public apellidos: string,
    public fecha_nacimiento: Date,
    public codigo_postal: string,
    public ciudad: string,
    public calle: string,
    public numero: string,
    public telefono: string
  ) {}
}

export class registerModelSend {
  constructor(
    public email: string,
    public nombre: string,
    public password: string,
    public password_confirmation: string,
    public apellidos: string,
    public fecha_nacimiento: Date,
    public direccion: string,
    public telefono: string
  ) {}
}

export class TokenModel {
  constructor(public access_token: string, public token_type: string, public expires_in: number) {}
}

export class usuarioModel {
  constructor(
    public id: number,
    public email: string,
    public nombre: string,
    public apellidos: string,
    public fecha_nacimiento: Date,
    public direccion: string,
    public rol_id: number,
    public rol: string,
    public activo: number,
    public telefono: string,
    public created_at: Date,
    public updated_at: Date
  ) {}
}

export class rolModel {
  constructor(
    public id: number,
    public nombre: string,
    public nivel: number,
    public created_at: Date,
    public updated_at: Date
  ) {}
}
