■ Sistema de Gerenciamento de Produtos Artísticos

Este projeto foi desenvolvido em TypeScript com o objetivo de simular o gerenciamento de produtos de uma loja de materiais artísticos. O sistema funciona como um pequeno e-commerce interno, permitindo cadastrar, listar, atualizar e excluir itens como pincéis, tintas e outros materiais utilizados em arte.

⚙️ Requisitos para executar o projeto

Antes de rodar a aplicação, certifique-se de ter instalado em seu computador:

- Node.js
- npm
- TypeScript
- ts-node

Instalação do Node.js

Faça o download pelo site oficial:

https://nodejs.org

Após a instalação, verifique se tudo está funcionando executando no terminal:

node -v  
npm -v

Se as versões forem exibidas, significa que o Node.js e o npm foram instalados corretamente.

Instalando o TypeScript

Execute o seguinte comando no terminal:

npm install -g typescript

Depois confirme a instalação com:

tsc -v

Instalando o ts-node

O ts-node permite rodar arquivos TypeScript diretamente no terminal sem a necessidade de compilá-los antes.

Para instalar, utilize:

npm install -g ts-node

Clonando o repositório

Para obter uma cópia do projeto em sua máquina, utilize:

git clone https://github.com/seu-usuario/projeto_final_bloco_01.git

Depois acesse a pasta do projeto:

cd projeto_final_bloco_01

Instalando as dependências

Após clonar o repositório, execute o comando abaixo para instalar todas as dependências necessárias:

npm install

Esse comando irá instalar automaticamente as bibliotecas utilizadas no projeto, como por exemplo:

- readline-sync
- @types/node
- @types/readline-sync

Executando o projeto

Para iniciar a aplicação no terminal, utilize o comando:

ts-node src/Menu.ts

Autora

Júlia Galvão  
Bootcamp Desenvolvimento FullStack JavaScript - Generation Brasil