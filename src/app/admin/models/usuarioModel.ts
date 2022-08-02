import { usuarioModel } from 'src/app/auth/models/authModel';
export class usuarioPaginateModel {
  constructor(
    public data: usuarioModel[],
    public current_page: number,
    public first_page_url: string,
    public from: number,
    public last_page: number,
    public last_page_url: string,
    public next_page_url: string,
    public path: string,
    public per_page: number,
    public prev_page_url: string,
    public to: number,
    public total: number
  ) {}
}
