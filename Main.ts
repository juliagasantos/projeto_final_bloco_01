import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { ProdutoController } from "./src/Controller/ProdutoController";
import { Produto } from "./src/model/Produto";

const produtoController = new ProdutoController();
let opcao: number;

function continuar(): boolean {
  const resposta = readlinesync
    .question(Colors.fg.yellow + "\nDeseja continuar? (s/n): " + Colors.reset)
    .toLowerCase();
  return resposta === "s" || resposta === "sim";
}

export function main() {
  while (true) {
    console.log(
      Colors.fg.magentaStrong +
        "*****************************************************" +
        Colors.reset,
    );
    console.log("                                                     ");
    console.log(
      Colors.fg.magentaStrong +
        "                The Artists of the Sky                " +
        Colors.reset,
    );
    console.log("                                                     ");
    console.log(
      Colors.fg.magentaStrong +
        "*****************************************************" +
        Colors.reset,
    );
    console.log("                                                     ");

    console.log(
      Colors.fg.magenta +
        "            1 - Cadastrar Produto                         " +
        Colors.reset,
    );
    console.log(
      Colors.fg.magenta +
        "            2 - Listar Todos os Produtos               " +
        Colors.reset,
    );
    console.log(
      Colors.fg.magenta +
        "            3 - Buscar Produto por ID              " +
        Colors.reset,
    );
    console.log(
      Colors.fg.magenta +
        "            4 - Atualizar Produto            " +
        Colors.reset,
    );
    console.log(
      Colors.fg.magenta +
        "            5 - Deletar Produto                       " +
        Colors.reset,
    );

    console.log(
      Colors.fg.magenta +
        "            6 - Sair                                 " +
        Colors.reset,
    );

    console.log("                                                     ");
    console.log(
      Colors.fg.magentaStrong +
        "*****************************************************" +
        Colors.reset,
    );
    console.log("                                                     ");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    switch (opcao) {
      case 1:
        console.log(Colors.fg.blue, "\n\nCadastrar Produto\n\n", Colors.reset);
        const nome = readlinesync.question("Nome do produto: ");
        const categoria = readlinesync.question("Categoria do produto: ");
        const preco = readlinesync.questionFloat("Preço do produto: ");
        const quantidade = readlinesync.questionInt("Quantidade: ");

        class ProdutoConcreto extends Produto {
          detalhesDoProduto(): string {
            return `Nome: ${this.getNome()}\nCategoria: ${this.getCategoria()}\nPreço: ${this.getPreco()}\nQuantidade: ${this.getQuantidade()}`;
          }
        }

        const novoProduto = new ProdutoConcreto(nome, categoria, preco, quantidade);
        produtoController.cadastrar(novoProduto);
        console.log(
          Colors.fg.green + "\nProduto cadastrado com sucesso!\n" + Colors.reset,
        );
        break;

      case 2:
        console.log(
          Colors.fg.blue,
          "\n\nListar Todos os Produtos\n\n",
          Colors.reset,
        );
        const produtos = produtoController.listar();
        if (produtos.length === 0) {
          console.log(
            Colors.fg.yellow + "\nNenhum produto cadastrado.\n" + Colors.reset,
          );
        } else {
          produtos.forEach((p, i) => {
            console.log(
              Colors.fg.cyan +
                `ID: ${i + 1}\n${p.detalhesDoProduto()}\n-------------------------` +
                Colors.reset,
            );
          });
        }
        break;

      case 3:
        console.log(
          Colors.fg.blue,
          "\n\nBuscar Produto por ID\n\n",
          Colors.reset,
        );
        const idBusca = readlinesync.questionInt("Informe o ID do produto: ") - 1;
        const produto = produtoController.buscar(idBusca);
        if (produto) {
          console.log(
            "\n" +
              Colors.fg.cyan +
              `ID: ${idBusca + 1}\n${produto.detalhesDoProduto()}` +
              Colors.reset +
              "\n",
          );
        } else {
          console.log(
            Colors.fg.red + "\nProduto não encontrado!\n" + Colors.reset,
          );
        }
        break;

      case 4:
        console.log(Colors.fg.blue, "\n\nAtualizar Produto\n\n", Colors.reset);
        const idAtualizar = readlinesync.questionInt("Informe o ID do produto a atualizar: ") - 1;
        const produtoExistente = produtoController.buscar(idAtualizar);
        if (!produtoExistente) {
          console.log(
            Colors.fg.red + "\nProduto não encontrado!\n" + Colors.reset,
          );
          break;
        }

        const novoNome =
          readlinesync.question(`Nome (${produtoExistente.getNome()}): `) || produtoExistente.getNome();
        const novaCategoria =
          readlinesync.question(`Categoria (${produtoExistente.getCategoria()}): `) || produtoExistente.getCategoria();
        const novoPreco =
          readlinesync.questionFloat(`Preço (${produtoExistente.getPreco()}): `) || produtoExistente.getPreco();
        const novaQuantidade =
          readlinesync.questionInt(`Quantidade (${produtoExistente.getQuantidade()}): `) || produtoExistente.getQuantidade();

        class ProdutoConcretoUpdate extends Produto {
          detalhesDoProduto(): string {
            return `Nome: ${this.getNome()}\nCategoria: ${this.getCategoria()}\nPreço: ${this.getPreco()}\nQuantidade: ${this.getQuantidade()}`;
          }
        }

        const produtoAtualizado = new ProdutoConcretoUpdate(
          novoNome,
          novaCategoria,
          novoPreco,
          novaQuantidade,
        );
        produtoController.atualizar(idAtualizar, produtoAtualizado);
        console.log(
          Colors.fg.green + "\nProduto atualizado com sucesso!\n" + Colors.reset,
        );
        break;

      case 5:
        console.log(Colors.fg.blue, "\n\nDeletar Produto\n\n", Colors.reset);
        const idDeletar = readlinesync.questionInt("Informe o ID do produto a deletar: ") - 1;
        produtoController.deletar(idDeletar);
        console.log(Colors.fg.green + "\nProduto deletado!\n" + Colors.reset);
        break;

      case 6:
        console.log(Colors.fg.blue + "\nSaindo do programa...\n" + Colors.reset);
        sobre();
        process.exit(0);

      default:
        console.log("\nOpção inválida, tente novamente!");
        break;
    }

    // Pergunta para continuar após qualquer ação (exceto sair)
    if (opcao !== 6) {
      if (!continuar()) {
        console.log(Colors.fg.blue + "\nSaindo do programa...\n" + Colors.reset);
        sobre();
        process.exit(0);
      }
    }
  }
}

export function sobre(): void {
  console.log(
    Colors.fg.magentaStrong +
      "\n*****************************************************" +
      Colors.reset,
  );
  console.log("                                                     ");
  console.log(
    Colors.fg.magenta + "Projeto Desenvolvido por: Júlia Santos" + Colors.reset,
  );
  console.log(
    Colors.fg.magenta + "Generation Brasil - julias@genstudents.org" + Colors.reset,
  );
  console.log(Colors.fg.magenta + "github.com/juliagasantos" + Colors.reset);
  console.log("                                                     ");
  console.log(
    Colors.fg.magentaStrong + "*****************************************************" + Colors.reset,
  );
}

main();