# Projeto: Adicionar dias úteis

Este projeto tem como objetivo adicionar dias úteis a uma data fornecida. Ele utiliza a biblioteca `node-fetch` para fazer uma solicitação HTTP GET à API de feriados do Brasil, armazena a lista de feriados em uma array e verifica se a data fornecida cai em um feriado.

## Funcionalidades

- A função `addBusinessDays` adiciona dias úteis a uma data fornecida. Ela faz uso das funções `isBusinessDay` e `isUKBankHoliday`.

- A função `isBusinessDay` verifica se a data fornecida não é um sábado ou domingo.

- A função `isUKBankHoliday` faz uma solicitação HTTP GET à API de feriados do Brasil API e verifica se a data fornecida cai em um feriado.

## Como usar

- Para usar este projeto, você precisará ter o Node.js instalado em sua máquina. Em seguida, basta clonar o repositório e executar o arquivo principal.

Obs: Esse projeto utiliza o endpoint de feriados do https://brasilapi.com.br/ que é fornecido gratuitamente
