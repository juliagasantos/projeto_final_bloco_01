export abstract class Produto {
  private static contador = 0;
  private _id: number;
  private _nome: string;
  private _categoria: string;
  private _preco: number;
  private _quantidade: number;
  private _ativo:boolean;

  constructor(nome: string, categoria: string, preco: number, quantidade: number, ativo:boolean) {
    Produto.contador++;
    this._id = Produto.contador;
    this._nome = nome;
    this._categoria = categoria;
    this._preco = preco;
    this._quantidade = quantidade;
    this._ativo = ativo;
  }

  public get Id(): number {
    return this._id;
  }

  public get Nome(): string { return this._nome; }
  public set Nome(nome: string) { this._nome = nome; }

  public get Categoria(): string { return this._categoria; }
  public set Categoria(categoria: string) { this._categoria = categoria; }

  public get Preco(): number { return this._preco; }
  public set Preco(preco: number) { this._preco = preco; }

  public get Quantidade(): number { return this._quantidade; }
  public set Quantidade(quantidade: number) { this._quantidade = quantidade; }

  public get Ativo(): boolean { return this._ativo; }
  public set Ativo(ativo: boolean) { this._ativo = ativo; }

  public abstract detalhesDoProduto(): string;
}