# JavaScript Katas

[![Build Status](https://travis-ci.org/catolicasc-mobile/javascript-katas.svg?branch=master)](https://travis-ci.org/catolicasc-mobile/javascript-katas)

Exercícios de código para o aprendizado da linguagem JavaScript.

## Dependências

* Node.js
* Yarn

## Instalação

Instale o Node.js e o Yarn. Abaixo estão instruções de instalação para Linux, macOS e Windows.

### Linux

```sh
sudo apt-get install -y build-essential
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get install -y nodejs

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

### macOS

```sh
brew install node
brew install yarn
```

### Windows

```sh
choco install nodejs.install
choco install yarn
```

### Instalação das dependências

```sh
cd javascript-katas
yarn global add jest
yarn
```

## Testes

Para executar os testes, execute:

```sh
jest
```
