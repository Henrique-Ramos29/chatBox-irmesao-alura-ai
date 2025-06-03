# 🌿 Chatbot Infusões de Plantas

---

## 🚀 Visão Geral do Projeto

Este é um **chatbot interativo** desenvolvido em **React.js**, especializado em fornecer informações detalhadas sobre **infusões de plantas**, seus benefícios para a saúde e bem-estar, e como prepará-las corretamente. Ele atua como um especialista virtual em fitoterapia, oferecendo dicas e orientações sobre o uso de plantas de forma tradicional.

O projeto utiliza a API **Google Gemini** para inteligência artificial, permitindo que o bot compreenda e responda a perguntas complexas sobre diversas plantas e seus usos. A interface é modular, com a lógica do chatbot encapsulada em um componente `Chatbox` reutilizável, garantindo um código limpo e de fácil manutenção.

---

## ✨ Funcionalidades Principais

* **Especialista em Plantas:** O bot é configurado com um prompt detalhado para atuar como um especialista em infusões de plantas, oferecendo informações precisas e úteis.
* **Preparação e Benefícios:** Fornece detalhes sobre as propriedades das plantas, seus benefícios tradicionais e métodos de preparo recomendados para cada infusão.
* **Dicas de Bem-Estar:** Além das respostas específicas, o bot oferece dicas saudáveis relacionadas ao consumo de infusões e a um estilo de vida equilibrado.
* **Histórico de Conversa:** Exibe o histórico da conversa anterior em formato de cards interativos, permitindo expandir mensagens mais longas para leitura completa, melhorando a experiência do usuário.
* **Interface Intuitiva:** Um campo de entrada claro, botão de envio e feedback visual (indicadores de carregamento, mensagens de erro e exibição de respostas) garantem uma interação fluida.
* **Conectividade com IA:** Integração robusta com a API **Google Gemini** para processamento de linguagem natural e geração de respostas inteligentes e contextuais.
* **Aviso Importante:** O bot sempre ressalta a importância de consultar profissionais de saúde, deixando claro que suas informações não substituem conselhos médicos.

---

## 🛠️ Tecnologias Utilizadas

* **React.js:** Biblioteca JavaScript líder para construção de interfaces de usuário dinâmicas e reativas.
* **Google Gemini API:** Serviço de inteligência artificial da Google para o processamento de linguagem natural e a lógica conversacional do chatbot.
* **JavaScript (ES6+):** Linguagem de programação moderna para a lógica do lado do cliente.
* **HTML5:** Linguagem de marcação para a estrutura fundamental do conteúdo web.
* **CSS3:** Linguagem de folha de estilos para estilização visual e design responsivo da interface.

---

## 📦 Como Rodar o Projeto Localmente

Siga estes passos para configurar e executar o projeto em sua máquina de desenvolvimento:

### Pré-requisitos

Certifique-se de ter o [Node.js](https://nodejs.org/en/) (versão 14 ou superior) e o [npm](https://www.npmjs.com/) (ou [Yarn](https://yarnpkg.com/)) instalados em seu sistema.

### Instalação

1.  **Clone o repositório:**
    Abra seu terminal ou prompt de comando e clone o projeto do seu repositório GitHub:

    ```bash
    git clone [URL_DO_SEU_REPOSITORIO]
    cd [nome-da-pasta-do-projeto]
    ```

    *(**Lembre-se de substituir** `[URL_DO_SEU_REPOSITORIO]` pelo link do seu próprio repositório no GitHub e `[nome-da-pasta-do-projeto]` pelo nome da pasta que será criada.)*

2.  **Instale as dependências:**
    Na pasta raiz do projeto (onde está o arquivo `package.json`), execute o seguinte comando para instalar todas as dependências necessárias:

    ```bash
    npm install
    # ou, se preferir usar Yarn:
    yarn install
    ```

### Configuração da API Key (Extremamente Importante!)

Este projeto se comunica com a API Google Gemini para funcionar. Você precisa obter sua própria chave de API e configurá-la corretamente para que o chatbot possa enviar e receber mensagens da IA.

1.  **Obtenha sua Chave de API:**

    * Acesse o [Google AI Studio](https://aistudio.google.com/app/apikey).
    * Siga as instruções para criar uma nova chave de API ou copie uma já existente.

2.  **Configure no Projeto:**

    * Na **raiz do seu projeto** (na mesma pasta onde estão `package.json` e a pasta `src`), crie um novo arquivo chamado `.env`.
    * Dentro deste arquivo `.env`, adicione a seguinte linha, **substituindo** `SUA_CHAVE_DE_API_DO_GEMINI` pela chave que você obteve do Google AI Studio:

        ```
        VITE_GEMINI_API_KEY=SUA_CHAVE_DE_API_DO_GEMINI
        ```

    * **Segurança:** É crucial que você adicione `.env` ao seu arquivo `.gitignore`. Isso garante que sua chave de API **NÃO** será enviada para o seu repositório GitHub, protegendo suas credenciais.

### Execução

Após configurar a chave de API e instalar as dependências, você pode iniciar o servidor de desenvolvimento:

```bash
npm start
# ou, se preferir usar Yarn:
yarn start
