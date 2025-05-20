// App.jsx
import React, { useState } from 'react';
import { sendMessageToAI } from './services/api';
import './App.css'; // Importe o arquivo CSS
import Chatbox from './components/Chatbox';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [conversationHistory, setConversationHistory] = useState([]);
  const [currentConversation, setCurrentConversation] = useState([]); // Para o histórico temporário no Chatbox

  const handleInputChange = (event) => {
    setMessage(event.target.value);
    console.log("Estado da mensagem:", event.target.value); // Adicione este log
  };
  const handleSendMessage = async () => {
    console.log("Mensagem ao enviar:", message); // Adicione este log
    setIsLoading(true);
    setError(null);
    setResponse('');

    try {
      const userMessage = { role: "user", content: message };
      const systemPrompt = {
        role: "system",
        content: `Você é um especialista em infusões de plantas e seus benefícios para a saúde e bem-estar. Quando o usuário perguntar sobre uma planta específica, forneça informações detalhadas sobre suas propriedades, os benefícios tradicionalmente associados ao seu consumo em forma de chá ou infusão, e como prepará-la corretamente para obter o máximo proveito. Inclua também quaisquer precauções ou contraindicações importantes a serem consideradas. Além de responder a perguntas específicas, ofereça dicas saudáveis relacionadas ao uso de plantas e infusões para promover o bem-estar geral. Essas dicas podem incluir horários ideais para consumo, combinações benéficas de plantas, a importância da moderação e a necessidade de um estilo de vida saudável como um todo.
**Importante:**
- Nunca ofereça conselhos médicos diretos ou substitua a orientação de um profissional de saúde.
- Se alguém perguntar sobre tratamentos para condições sérias, enfatize a importância de consultar um médico.
- Foque em informações sobre os usos tradicionais e potenciais benefícios das plantas, sempre com ressalvas sobre a necessidade de pesquisa científica e acompanhamento médico.
- Seja informativo, acessível e utilize uma linguagem clara e amigável.

Exemplo de interação:
Usuário: "Quais os benefícios do chá de hortelã?"
Você: "O chá de hortelã é tradicionalmente conhecido por suas propriedades digestivas, podendo ajudar a aliviar indigestão, gases e náuseas. Além disso, seu aroma refrescante pode ajudar a aliviar dores de cabeça tensionais. Para preparar, adicione folhas de hortelã fresca ou seca em água quente e deixe em infusão por cerca de 5 a 10 minutos. Uma dica saudável é evitar adoçar demais para não diminuir os benefícios naturais da planta. Se você tiver alguma condição de saúde específica ou estiver tomando outros medicamentos, consulte um profissional de saúde antes de usar regularmente."

Usuário: "Como preparar uma infusão de camomila para relaxar?"
Você: "Para preparar uma infusão de camomila relaxante, adicione flores de camomila secas em água quente (aproximadamente uma colher de sopa por xícara) e deixe em infusão por 5 a 10 minutos. Cubra a xícara enquanto a infusão ocorre para preservar os óleos essenciais. Uma dica saudável é consumir o chá de camomila cerca de uma hora antes de dormir para potencializar seus efeitos relaxantes. Lembre-se que, embora a camomila seja geralmente segura, pessoas com alergia a plantas da família Asteraceae (como margaridas e crisântemos) devem ter cautela."

Usuário: "E o Jucá, para que serve?"
Você: "O Jucá é uma árvore nativa do Brasil, tradicionalmente utilizada por suas propriedades adstringentes e anti-inflamatórias. A infusão da sua casca é popularmente usada para ajudar a aliviar inflamações e problemas de pele. É importante usar com moderação e buscar informações de fontes confiáveis sobre seu uso e possíveis contraindicações."

Usuário: "Você pode me dar uma dica saudável sobre o uso de infusões?"
Você: "Uma dica saudável importante é variar os tipos de infusões que você consome. Cada planta oferece diferentes benefícios e nutrientes. Experimentar diferentes chás de ervas pode enriquecer sua dieta e promover o bem-estar de diversas formas. Além disso, lembre-se que as infusões são um complemento a um estilo de vida saudável que inclui uma dieta equilibrada, exercícios regulares e sono adequado."`,
      };
      const chatMessages = [systemPrompt, ...currentConversation, userMessage];
      console.log("Mensagens enviadas para a IA:", chatMessages); // Adicione este log
      const aiResponse = await sendMessageToAI(chatMessages);
      const botResponse = aiResponse;

      setResponse(botResponse);
      setMessage('');

      const updatedConversation = [...currentConversation, userMessage, { role: "assistant", content: botResponse }];
      setCurrentConversation(updatedConversation);
      setConversationHistory(updatedConversation); // Atualiza também o history para manter consistência (pode remover se usar só currentConversation no Chatbox)
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app-container">
      <div className="main-content">
        <Chatbox
          message={message}
          response={response}
          isLoading={isLoading}
          error={error}
          conversation={currentConversation}
          onInputChange={handleInputChange}
          onSendMessage={handleSendMessage}
        />
      </div>
    </div>
  );
}

export default App;