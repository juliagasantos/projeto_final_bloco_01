// menu principal
import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";
import { ProdutoController } from "./src/Controller/ProdutoController";
import { Produto } from "./src/model/Produto";

const produtoController = new ProdutoController();
let opcao: number;

function continuar(): boolean {
  while (true) {
    const resposta = readlinesync
      .question(Colors.fg.yellow + "\nDeseja continuar? (s/n): " + Colors.reset)
      .trim()
      .toLowerCase();

    if (resposta === "s" || resposta === "sim") return true;
    if (resposta === "n" || resposta === "nao" || resposta === "não")
      return false;

    console.log(
      Colors.fg.red +
        "Entrada inválida! Digite 's' para sim ou 'n' para não." +
        Colors.reset,
    );
  }
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
    opcao = readlinesync.questionInt();

    switch (opcao) {
      case 1: {
        console.log(
          Colors.fg.blue + "\n\nCadastrar Produto\n\n" + Colors.reset,
        );
        const nome = readlinesync.question("Nome do produto: ");
        const categoria = readlinesync.question("Categoria do produto: ");
        const preco = readlinesync.questionFloat("Preço do produto: ");
        const quantidade = readlinesync.questionInt("Quantidade: ");
        const ativo = readlinesync.keyInYNStrict("Ativo: ");

        class ProdutoConcreto extends Produto {
          detalhesDoProduto(): string {
            return `Nome: ${this.Nome}\nCategoria: ${this.Categoria}\nPreço: ${this.Preco}\nQuantidade: ${this.Quantidade}`;
          }
        }

        const novoProduto = new ProdutoConcreto(
          nome,
          categoria,
          preco,
          quantidade,
          ativo,
        );
        produtoController.cadastrar(novoProduto);
        break;
      }

      case 2:
        console.log(
          Colors.fg.blue + "\n\nListar Todos os Produtos\n\n" + Colors.reset,
        );
        produtoController.listar();
        break;

      case 3: {
        console.log(
          Colors.fg.blue + "\n\nBuscar Produto por ID\n\n" + Colors.reset,
        );
        const idBusca = readlinesync.questionInt("Informe o ID do produto: ");
        const produto = produtoController.buscar(idBusca);
        if (produto) {
          console.log(
            Colors.fg.cyan +
              `ID: ${produto.Id}\n${produto.detalhesDoProduto()}` +
              Colors.reset,
          );
        } else {
          console.log(
            Colors.fg.red + "\nProduto não encontrado!\n" + Colors.reset,
          );
        }
        break;
      }

      case 4: {
        console.log(
          Colors.fg.blue + "\n\nAtualizar Produto\n\n" + Colors.reset,
        );
        const idAtualizar = readlinesync.questionInt(
          "Informe o ID do produto a atualizar: ",
        );
        const produtoExistente = produtoController.buscar(idAtualizar);
        if (!produtoExistente) {
          console.log(
            Colors.fg.red + "\nProduto não encontrado!\n" + Colors.reset,
          );
          break;
        }

        const novoNome =
          readlinesync.question(`Nome (${produtoExistente.Nome}): `) ||
          produtoExistente.Nome;
        const novaCategoria =
          readlinesync.question(
            `Categoria (${produtoExistente.Categoria}): `,
          ) || produtoExistente.Categoria;
        const novoPreco =
          readlinesync.questionFloat(`Preço (${produtoExistente.Preco}): `) ||
          produtoExistente.Preco;
        const novaQuantidade =
          readlinesync.questionInt(
            `Quantidade (${produtoExistente.Quantidade}): `,
          ) || produtoExistente.Quantidade;
        const novoAtivo = readlinesync.keyInYNStrict(
          `Ativo (${produtoExistente.Ativo ? "Ativo" : "Inativo"}): `,
        );
        class ProdutoConcretoUpdate extends Produto {
          detalhesDoProduto(): string {
            return `Nome: ${this.Nome}\nCategoria: ${this.Categoria}\nPreço: ${this.Preco}\nQuantidade: ${this.Quantidade}\nAtivo: ${this.Ativo}`;
          }
        }

        const produtoAtualizado = new ProdutoConcretoUpdate(
          novoNome,
          novaCategoria,
          novoPreco,
          novaQuantidade,
          novoAtivo,
        );
        produtoController.atualizar(idAtualizar, produtoAtualizado);
        break;
      }

      case 5: {
        console.log(Colors.fg.blue, "\n\nDeletar Produto\n\n", Colors.reset);
        const idDeletar = readlinesync.questionInt(
          "Informe o ID do produto a deletar: ",
        ); // sem -1
        try {
          produtoController.deletar(idDeletar); // passa o ID real
          console.log(
            Colors.fg.green +
              "\nProduto deletado com sucesso!\n" +
              Colors.reset,
          );
        } catch (error: any) {
          console.log(
            Colors.fg.red + "\n" + error.message + "\n" + Colors.reset,
          );
        }
        break;
      }

      case 6:
        console.log(
          Colors.fg.blue + "\nSaindo do programa...\n" + Colors.reset,
        );
        sobre();
        process.exit(0);

      default:
        console.log("\nOpção inválida, tente novamente!");
        break;
    }

    // Pergunta para continuar após qualquer ação (exceto sair)
    if (opcao !== 6 && !continuar()) {
      console.log(Colors.fg.blue + "\nSaindo do programa...\n" + Colors.reset);
      sobre();
      process.exit(0);
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
    Colors.fg.magenta +
      "Generation Brasil - julias@genstudents.org" +
      Colors.reset,
  );
  console.log(Colors.fg.magenta + "github.com/juliagasantos" + Colors.reset);
  console.log("                                                     ");
  console.log(
    Colors.fg.magentaStrong +
      "*****************************************************" +
      Colors.reset,
  );
}

main();
