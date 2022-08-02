import { usuarioModel } from 'src/app/auth/models/authModel';

export class pistaModel {
  constructor(public id: number, public nombre: string, public created_at: Date, public updated_at: Date) {}
}

export class partidoModel {
  constructor(
    public id: number,
    public fecha: Date,
    public pista_id: number,
    public id_jugador1: number,
    public id_jugador2: number,
    public id_jugador3: number,
    public id_jugador4: number,
    public jugador1: usuarioModel,
    public jugador2: usuarioModel,
    public jugador3: usuarioModel,
    public jugador4: usuarioModel,
    public resultado: string,
    public pista: pistaModel,
    public created_at: Date,
    public updated_at: Date
  ) {}
}
