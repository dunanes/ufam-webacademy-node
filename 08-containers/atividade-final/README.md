# Web Academy - Containers

## Trabalho Prático utilizando Docker

O objetivo do trabalho é subir vários containers e fazer com que eles operem em conjunto

A insfraestrutura consiste em:

- Um servidor de banco de dados MySQL
- Uma aplicação backend em Node.js com Typescript
- Uma aplicação frontend em React com Typescript
- Uma aplicação de gerenciamento de banco de dados, o PHPMyAdmin

## Especificações

### Backend

- Rodar na porta 4444 externamente
- Ter um volume para salvar arquivos de log, contidos na pasta /log internamente

### Frontend

- Rodar na porta 8000 externamente
- [Link para acesso ao frontend](localhost:8000)

### Banco de Dados

- Configurar credenciais para o uso do banco de dados
- Rodar na porta 3306 externamente
- Ter um volume para salvar os arquivos do MySQL

### PHP My Admin

- Rodar na porta 8080 externamente
- Conseguir acessar o banco de dados com as credenciais configuradas anteriormente
- [Link para acesso ao PHPMyAdmin](localhost:8080)

## Instruções para uso

1. Garantir que não exista conflito com imagens anteriores: portas, imagens, volumes etc.
2. Criar os containeres e imagens executando o script ```docker-up.sh```
3. Executar os testes de acesso, inserção e consulta dos dados
4. Derrubar e apagar os containeres usando o script ```docker-down.sh```
5. Recriar os containeres usando o script ```docker-up.sh``` e verificar a permanência dos dados

> Ao executar pela primeira vez pode demorar em torno de cinco minutos para subir todos os serviços, dependendo da qualidade de conexão com a internet, pode demorar mais.

> Para utilizar um script, utilizar no terminal: ```sh <nome-do-script>.sh```.
