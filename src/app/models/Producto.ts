export class Producto {
  constructor(
    public id: number,
    public nombre: string | undefined,
    public descripcion: String | undefined,
    public precio: number | undefined,
    public imagen: string | ArrayBuffer | null
  ) {}
}
