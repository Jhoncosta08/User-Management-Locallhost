export class Cliente {
  constructor(
    public id: number,
    public nome: string,
    public email: string,
    public senha: string,
    public clienteAprovado: boolean
  ) {
  }
}
