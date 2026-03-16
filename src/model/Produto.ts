// src/model/Produto.ts
export abstract class Produto {
  private static contador = 0;
  private _id: number;  
  private _nome: string;
  private _categoria: string;
  private _preco: number;
  private _quantidade: number;

  constructor(nome: string, categoria: string, preco: number, quantidade: number) {
    Produto.contador++;
    this._id = Produto.contador; 
    this._nome = nome;
    this._categoria = categoria;
    this._preco = preco;
    this._quantidade = quantidade;
  }

 
  public getId(): number {
    return this._id;
  }


  public getNome(): string { return this._nome; }
  public setNome(nome: string): void { this._nome = nome; }

  public getCategoria(): string { return this._categoria; }
  public setCategoria(categoria: string): void { this._categoria = categoria; }

  public getPreco(): number { return this._preco; }
  public setPreco(preco: number): void { this._preco = preco; }

  public getQuantidade(): number { return this._quantidade; }
  public setQuantidade(quantidade: number): void { this._quantidade = quantidade; }

  public abstract detalhesDoProduto(): string;
}