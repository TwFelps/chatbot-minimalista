# Chatbot Minimalista

Interface de chatbot desenvolvida com HTML, CSS e JavaScript, como exercício prático de desenvolvimento web com o apoio de ferramentas de Inteligência Artificial.

## Sobre o projeto

Este projeto foi desenvolvido durante uma aula da Kodie Academy, com o objetivo de explorar o uso da Inteligência Artificial como ferramenta de apoio ao desenvolvimento de software.

A proposta foi utilizar o GitHub Copilot para gerar o código de uma aplicação web a partir de dois documentos de referência: um arquivo de especificação (`spec.md`), com os requisitos funcionais e técnicos, e um documento de design system (`design-system.md`), com as diretrizes visuais da interface.

A partir desses documentos, foi elaborado um prompt para orientar a geração dos arquivos HTML, CSS e JavaScript, buscando manter o resultado alinhado aos requisitos definidos.

Além da construção da interface, o exercício permitiu explorar como a documentação, a definição de requisitos e a elaboração de instruções claras podem contribuir para o uso mais eficiente da IA durante o desenvolvimento de projetos.

## Funcionalidades

- Envio de mensagens por botão ou pela tecla Enter.
- Suporte a quebras de linha com Shift + Enter.
- Respostas simuladas do chatbot com atraso e indicador de digitação.
- Exibição do horário de envio das mensagens.
- Armazenamento do histórico no `localStorage` do navegador.
- Limpeza do histórico de mensagens.
- Interface responsiva para desktop e dispositivos móveis.
- Recursos básicos de acessibilidade, incluindo identificação do campo de mensagem e navegação por teclado.

## Tecnologias utilizadas

- **HTML5:** estrutura e organização dos elementos da interface.
- **CSS3:** estilização, variáveis de design, animações e layout responsivo.
- **JavaScript (Vanilla):** lógica da aplicação, manipulação do DOM, eventos e persistência das mensagens.
- **GitHub Copilot:** apoio à geração do código a partir das especificações e diretrizes visuais documentadas.

## Estrutura do projeto

```text
├── design-system.md  # Diretrizes visuais e componentes da interface
├── index.html        # Estrutura da aplicação
├── script.js         # Lógica e funcionalidades do chatbot
├── spec.md           # Requisitos funcionais e técnicos
├── style.css         # Estilos e layout responsivo
└── README.md         # Documentação do projeto
```

## Como executar

A aplicação utiliza tecnologias nativas da web e não exige instalação de dependências.

1. Clone o repositório:

   ```bash
   git clone URL_DO_REPOSITORIO
   ```

2. Entre na pasta do projeto:

   ```bash
   cd NOME_DO_REPOSITORIO
   ```

3. Abra o arquivo `index.html` em um navegador ou utilizar a extensão Live Server no Visual Studio Code para executar a aplicação durante o desenvolvimento.

## Observações técnicas

Este projeto é um protótipo de interface. As respostas do chatbot são simuladas por meio de uma mensagem predefinida e de um atraso programado em JavaScript. Não há integração com modelos de linguagem ou APIs de Inteligência Artificial.

O histórico é armazenado localmente no navegador por meio do `localStorage`, sem utilização de banco de dados ou servidor.

## Aprendizados

O desenvolvimento deste projeto proporcionou uma oportunidade de explorar o uso da Inteligência Artificial no fluxo de desenvolvimento de software, especialmente na transformação de requisitos documentados em código funcional.

O exercício também reforçou a importância de definir o comportamento esperado da aplicação, estabelecer diretrizes visuais e fornecer contexto adequado à ferramenta de IA para orientar a geração do código.

Mais do que gerar arquivos automaticamente, a proposta foi compreender como a IA pode auxiliar no processo de desenvolvimento quando utilizada em conjunto com especificações claras e objetivos bem definidos.

---

Desenvolvido como exercício prático durante a aula `"Fluxo moderno de programação - Github Copilot, Copilot Chat, Opencode"` da Kodie Academy.