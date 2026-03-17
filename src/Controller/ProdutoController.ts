import { Produto } from "../model/Produto";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private produtos: Produto[] = [];

  cadastrar(produto: Produto): void {
    this.produtos.push(produto);
    console.log(`Produto "${produto.Nome}" cadastrado com sucesso!`);
  }

  listar(): Produto[] {
    if (this.produtos.length === 0) {
      console.log("Nenhum produto cadastrado.");
    } else {
      this.produtos.forEach((p) => {
        console.log(
          `ID: ${p.Id}\nNome: ${p.Nome}\nCategoria: ${p.Categoria}\nPreço: ${p.Preco}\nQuantidade: ${p.Quantidade}\nAtivo: ${p.Ativo}\n------------------------`,
        );
      });
    }
    return this.produtos;
  }

  buscar(id: number): Produto | undefined {
    return this.produtos.find((p) => p.Id === id);
  }

  atualizar(id: number, produtoAtualizado: Partial<Produto>): void {
  const index = this.produtos.findIndex((p) => p.Id === id);
  if (index === -1) throw new Error(`Produto com ID ${id} não encontrado.`);

  const produtoExistente = this.produtos[index]!;

  produtoExistente.Nome = produtoAtualizado.Nome ?? produtoExistente.Nome;
  produtoExistente.Categoria = produtoAtualizado.Categoria ?? produtoExistente.Categoria;
  produtoExistente.Preco = produtoAtualizado.Preco ?? produtoExistente.Preco;
  produtoExistente.Quantidade = produtoAtualizado.Quantidade ?? produtoExistente.Quantidade;

  if (produtoAtualizado.Ativo === false) {
    produtoExistente.Ativo = false;
  }

  console.log(`Produto com ID ${id} atualizado com sucesso!`);
}

  deletar(id: number): void {
    const index = this.produtos.findIndex((p) => p.Id === id);
    if (index === -1) throw new Error(`Produto com ID ${id} não encontrado.`);
    const produto = this.produtos[index]!;
    this.produtos.splice(index, 1);
    console.log(`Produto "${produto.Nome}" deletado com sucesso!`);
  }
}
