import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private produtos: Produto[] = [];

  cadastrar(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`Produto "${produto.getNome()}" cadastrado com sucesso!`);
  }

  listar(): Produto[] {
    if (this.produtos.length === 0) {
      console.log("Nenhum produto cadastrado.");
    } else {
      this.produtos.forEach((p) => {
        console.log(
          `ID: ${p.getId()}\nNome: ${p.getNome()}\nCategoria: ${p.getCategoria()}\nPreço: ${p.getPreco()}\nQuantidade: ${p.getQuantidade()}\n------------------------`
        );
      });
    }
    return this.produtos;
  }

  buscar(id: number): Produto | undefined {
    return this.produtos.find((p) => p.getId() === id);
  }

  atualizar(id: number, produtoAtualizado: Produto): void {
    const index = this.produtos.findIndex((p) => p.getId() === id);
    if (index === -1) throw new Error(`Produto com ID ${id} não encontrado.`);

    // Garantia explícita que não é undefined
    const produtoExistente = this.produtos[index];
    if (!produtoExistente) throw new Error(`Produto com ID ${id} não encontrado.`);

    this.produtos[index] = produtoAtualizado;
    console.log(`Produto com ID ${id} atualizado com sucesso!`);
  }

  deletar(id: number): void {
  const index = this.produtos.findIndex((p) => p.getId() === id);
  if (index === -1) throw new Error(`Produto com ID ${id} não encontrado.`);
  const produto = this.produtos[index]!;
  this.produtos.splice(index, 1);
  console.log(`Produto "${produto.getNome()}" deletado com sucesso!`);
}
}