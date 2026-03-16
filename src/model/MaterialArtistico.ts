
import { Produto } from "./Produto";

export class MaterialArtistico extends Produto {
  private _marca: string;

  constructor(nome: string, categoria: string, preco: number, quantidade: number, marca: string) {
    super(nome, categoria, preco, quantidade);
    this._marca = marca;
  }

  public getMarca(): string {
    return this._marca;
  }

  public setMarca(marca: string): void {
    this._marca = marca;
  }

  // Implementação do método abstrato
  public detalhesDoProduto(): string {
    return `Produto: ${this.getNome()} | Categoria: ${this.getCategoria()} | Preço: R$${this.getPreco()} | Quantidade: ${this.getQuantidade()} | Marca: ${this._marca}`;
  }
}