# Cardápio Aluroni

![Tela Principal](./screenshot/tela-principal.png)

## Menu

- [Descrição](#descrição)
  - [Principais recursos incluem](#principais-recursos-incluem)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
  - [Arquivos Principais](#arquivos-principais)
- [Como Instalar e Rodar o Projeto](#como-instalar-e-rodar-o-projeto)
  - [Configuração](#configuração)
  - [Casos de Uso Comuns](#casos-de-uso-comuns)
  - [Solução de Problemas](#solução-de-problemas)
- [Projeto ao Vivo](#projeto-ao-vivo)
- [Fluxo de Dados](#fluxo-de-dados)
- [Licença](#licença)
- [Autor](#autor)

## Descrição

Este projeto é uma aplicação React que simula um cardápio digital para um restaurante chamado Aluroni. A aplicação permite aos usuários navegar pelo cardápio, filtrar itens por categoria, realizar buscas por nome de pratos e ordenar os resultados por diferentes critérios como preço, porção e quantidade de pessoas que serve.

O projeto foi desenvolvido com React e TypeScript, utilizando módulos CSS para estilização e implementando boas práticas de desenvolvimento como componentização e hooks.

### Principais recursos incluem:

- Navegação entre páginas utilizando React Router
- Carregamento sob demanda (lazy loading) para melhor performance
- Filtros dinâmicos por categoria de alimentos
- Buscador de pratos por texto
- Ordenação de itens por diferentes critérios
- Interface responsiva e amigável ao usuário
- Estilização modular com SCSS

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript:** Superset de JavaScript que adiciona tipagem estática
- **SCSS Modules:** Para estilização modular e isolada dos componentes
- **React Router DOM:** Para gerenciamento de rotas e navegação
- **React Lazy e Suspense:** Para carregamento sob demanda de componentes
- **ESLint:** Ferramenta para identificar e corrigir problemas no código
- **Vite:** Ferramenta de build moderna para desenvolvimento rápido

## Estrutura de Pastas

```
cardapio-aluroni/
├── public/
│   ├── assets/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.svg
│   ├── components/
│   ├── pages/
│   │   ├── Cardapio/
│   │   │   ├── Buscador/
│   │   │   ├── Filtros/
│   │   │   ├── Itens/
│   │   │   │   └── Item/
│   │   │   └── Ordenador/
│   │   └── Inicio/
│   ├── styles/
│   │   ├── _breakpoints.scss
│   │   └── _variaveis.scss
│   ├── index.tsx
│   └── routes.tsx
├── .eslintrc.json
├── package.json
├── README.md
├── LICENSE
├── tsconfig.json
└── vite.config.ts
```

### Arquivos Principais:

- `src/routes.tsx`: Gerencia as rotas da aplicação usando React Router e implementa lazy loading para carregamento sob demanda dos componentes
- `src/pages/Cardapio/index.tsx`: Componente principal da página de cardápio
- `src/pages/Cardapio/Itens/index.tsx`: Gerencia a lógica de filtragem e ordenação dos itens
- `src/styles/_variaveis.scss` e `src/styles/_breakpoints.scss`: Arquivos SCSS com variáveis globais
- `vite.config.ts`: Configuração do Vite para build e desenvolvimento
- `.eslintrc.json`: Configuração do ESLint para linting do código

## Como Instalar e Rodar o Projeto

Pré-requisitos:

- Node.js (versão 14.0 ou superior)
- npm (versão 6.0 ou superior)

1. Faça o clone deste repositório em sua máquina local:
   ```bash
   git clone https://github.com/seu-usuario/cardapio-aluroni.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd cardapio-aluroni
   ```
3. Instale as dependências do projeto:
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação em seu navegador no endereço gerado pelo terminal, geralmente **http://localhost:5173**

### Configuração

O projeto utiliza Vite como ferramenta de build, que já vem configurado para trabalhar com React, TypeScript e SCSS. Para modificar as configurações, você pode editar o arquivo `vite.config.ts`.

Para os estilos globais, as variáveis estão definidas nos arquivos `_variaveis.scss` e `_breakpoints.scss` dentro da pasta `src/styles`.

### Casos de Uso Comuns

1. Navegando pelo cardápio:

   - Acesse a página inicial e clique em "Ver Cardápio"
   - Ou navegue diretamente para a rota "/cardapio"

2. Filtrando itens:
   - Use os botões de filtro para selecionar uma categoria específica
   - Digite no campo de busca para encontrar pratos por nome
   - Use o seletor de ordenação para organizar os resultados

### Solução de Problemas

Problema Comum: Erros de importação SCSS

- Problema: Mensagens de erro indicando que arquivos SCSS não foram encontrados
- Solução:
  1. Verifique se o arquivo `vite.config.ts` está configurado corretamente com os aliases para a pasta styles
  2. Certifique-se de que os nomes dos arquivos SCSS correspondem exatamente aos importados
  3. Reinicie o servidor de desenvolvimento após alterações na configuração

Problema Comum: Tela de carregamento permanece visível

- Problema: A mensagem "Carregando..." não desaparece ao navegar entre páginas
- Solução:
  1. Verifique se há erros no console do navegador
  2. Certifique-se de que os componentes importados via lazy loading existem nos caminhos especificados
  3. Verifique se há erros de sintaxe nos componentes carregados

## Projeto ao Vivo

Você pode ver o projeto ao vivo neste link: [https://aluroni-cardapio-online.vercel.app/](https://aluroni-cardapio-online.vercel.app/)

## Fluxo de Dados

A aplicação gerencia o fluxo de dados principalmente através dos componentes da página de Cardápio. Aqui está uma visão geral:

1. O estado inicial é definido no componente `Cardapio` para busca, filtros e ordenação
2. Esses estados são passados como props para os componentes filhos
3. O componente `Itens` recebe esses props e aplica a lógica de filtragem e ordenação
4. Os resultados filtrados são renderizados como componentes `Item` individuais

```
     ┌─────────────────────────────────────────────┐
     │                 Cardapio                    │
     │  ┌─────────────────────────────────────┐    │
     │  │    Estado (busca, filtro, ordenador)│    │
     │  └─────────────────────────────────────┘    │
     │         │                    ▲              │
     │         │ Props              │ Atualizações │
     │         │                    │ de Estado    │
     │         ▼                    │              │
     │  ┌─────────────────────────────────────┐    │
     │  │ Componentes (Buscador, Filtros, etc)│    │
     │  └─────────────────────────────────────┘    │
     └─────────────────────────────────────────────┘
```

## Otimização de Performance

O projeto implementa técnicas de otimização de performance:

1. **Lazy Loading**: Todos os componentes principais são carregados sob demanda usando `React.lazy()` e `Suspense`, o que melhora o tempo de carregamento inicial da aplicação
2. **Code Splitting**: O código é dividido em chunks menores que são carregados apenas quando necessários
3. **Suspense**: Fornece uma experiência de carregamento amigável ao usuário enquanto os componentes são carregados

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](https://github.com/Melksedeque/aluroni-cardapio-online?tab=MIT-1-ov-file) para mais detalhes.

## Autor

- GitHub - [Melksedeque Silva](https://github.com/Melksedeque/)
- FrontEndMentor - [@Melksedeque](https://www.frontendmentor.io/profile/Melksedeque)
- Twitter / X - [@SouzaMelk](https://x.com/SouzaMelk)
- LinkedIn - [Melksedeque Silva](https://www.linkedin.com/in/melksedeque-silva/)

        