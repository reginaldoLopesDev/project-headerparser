# Projeto de API: Request Header Parser Microservice

Este projeto é parte do curso de backend e API em Node.js da FreeCodeCamp e consiste na construção de um microserviço que retorna informações sobre o cabeçalho (header) de uma requisição HTTP.

## Descrição do Projeto
O objetivo do projeto é criar uma API que recebe uma requisição HTTP e retorna um objeto JSON com as seguintes informações sobre o cabeçalho (header) da requisição:

**ipaddress**: endereço IP do cliente que está fazendo a requisição
**language**: idioma preferido do cliente que está fazendo a requisição
**software**: informações do navegador (user-agent) que está sendo utilizado pelo cliente que está fazendo a requisição
O projeto passará pelos seguintes testes:

Uma requisição para **/api/whoami** deve retornar um objeto JSON com o endereço IP do cliente no campo ipaddress.
Uma requisição para **/api/whoami** deve retornar um objeto JSON com o idioma preferido do cliente no campo language.
Uma requisição para **/api/whoami** deve retornar um objeto JSON com informações do navegador que está sendo utilizado pelo cliente no campo software.

## Como Executar o Projeto

Clone o repositório para a sua máquina local.
Instale as dependências do projeto usando o comando npm install.
Execute o servidor usando o comando npm start.
O servidor estará disponível em http://localhost:3000.

## Tecnologias Utilizadas

O projeto foi construído utilizando as seguintes tecnologias:

**Node.js**: plataforma de desenvolvimento em JavaScript
**Express**: framework para criação de APIs em Node.js
