// src/repository/ProdutoRepository.ts
import { Produto } from "../model/Produto";

export interface ProdutoRepository {
  cadastrar(produto: Produto): void;
  listar(): Produto[];
  buscar(id: number): Produto | undefined;
  atualizar(id: number, produto: Produto): void;
  deletar(id: number): void;
}