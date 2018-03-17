# Código base para criação de uma API simples usando NodeJS

## Instalação

Clone o repositório e execute `npm install` na pasta do projeto para 
instalar as dependências

## Rodando o Projeto

    node app.js

## Arquitetura do projeto
    
    app.js							--> Arquivo principal, configurações iniciais
    modules 						--> Arquivo com todos os modulos importados para o projeto
    server.js						--> Arquivo que une os modulos com suas respectivas rotas.
    package.json					--> Dados do projeto e todas as dependências que serão instaladas com o comando "npm install"
    routes/
    	router.js					--> Arquivo responsável pela separação das versões da API a serem utilizadas (estou usando apenas a V1)
    		/v1							--> Diretório com todos os paths que serão utilizados no V1, chamando suas respectivas operações no sistema
    modules/						--> Diretório que contém as operações a serem executadas quando chamados os endpoints
    	teste/						--> Pasta com os controllers do modulo teste
    		teste-controller.js 	--> Controller do modulo teste da API
    node_modules/					--> Diretório criado automaticamente com todas as dependências que o sistema importou

Essa arquitetura consiste de 3 partes principais, o app.js, server.js e modules.js que fazem a configuração inicial da API, a pasta routes que cria os endpoints e conectam com seus respectivos modulos e a pasta modules, onde se encontram todo processamento dos modulos que alimentarão a API. Sempre que for necessário criar mais um endpois, deve fazer seu controller na pasta ```modules```e depois adiciona-lo no JSON de roteamneto no arquivo ```server.js```. Por último deve-se criar seu endpoint na pasta ```routes/v1```.

## Testando a API

Se o projeto for iniciado com sucesso, ele estará roteando a API para a porta 3000 do seu computador. Para testar o modulo 'teste', digite ```localhost:3000``` no seu navegador. O programa deverá imprimir um json ```{success: true}```na tela.

Inicialmente peguei como base essa arquitetura que desenvolvi (e está em constante evolução) para fazer a API pedida. Essa arquitetura visa facilitar modificações necessárias no projeto, pois as responsabilidades ficam muito bem separadas. O projeto consiste em 3 partes principais: os módulos, as rotas e o server. Os módulos são as operações que serão ativadas quando é feito um request ao sistema. As rotas são os endereços definidos para cada endpoint. O server é onde os dois componentes se unem, ou seja, é lá que indicará qual função será executada quando determinado endpoint for acessado.