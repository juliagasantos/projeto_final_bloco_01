import readlinesync = require("readline-sync");
import { Colors } from "./src/util/Colors";

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
    const opcao = readlinesync.questionInt("");

    switch (opcao) {
      case 1:
        console.log(Colors.fg.blue, "\n\nCadastrar Produto\n\n", Colors.reset);
        break;

      case 2:
        console.log(
          Colors.fg.blue,
          "\n\nListar Todos os Produtos\n\n",
          Colors.reset,
        );
        break;

      case 3:
        console.log(
          Colors.fg.blue,
          "\n\nBuscar Produto por ID\n\n",
          Colors.reset,
        );
        break;

      case 4:
        console.log(Colors.fg.blue, "\n\nAtualizar Produto\n\n", Colors.reset);
        break;

      case 5:
        console.log(Colors.fg.blue, "\n\nDeletar Produto\n\n", Colors.reset);
        break;

      case 6:
        console.log(Colors.fg.blue, "\n\nSair\n\n", Colors.reset);
        if (opcao === 6) {
          sobre();
          process.exit(0);
        }
      default:
        console.log("\nOpção inválida, tente novamente!");
        break;
    }
  }
}
//menu

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
