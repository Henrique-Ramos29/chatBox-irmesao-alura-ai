// api.js
import { GoogleGenAI } from '@google/genai';

// **ATENÇÃO: Incluir a chave da API diretamente no código não é recomendado para produção.**
// **Considere usar variáveis de ambiente (.env.local) para maior segurança.**
const apiKey = 'AIzaSyCns-ZkilBAyq350vExT7Qylh46WJ_YL1E'; // Substitua pela sua chave real

const genAI = new GoogleGenAI({ apiKey });
async function sendMessageToAI(messages) {
  try {
      const response = await genAI.models.generateContent({
          model: "gemini-2.0-flash",
          contents: [{ parts: messages.map(msg => ({ text: msg.content })) }],
      });
      console.log("Resposta completa da API do Gemini:", response); // Mantenha este log por enquanto
      return response.candidates[0].content.parts[0].text; // Acesse o texto da resposta corretamente
  } catch (error) {
      console.error('Erro ao chamar a API do Gemini:', error);
      throw new Error('Falha ao obter resposta da IA.');
  }
}

export { sendMessageToAI };