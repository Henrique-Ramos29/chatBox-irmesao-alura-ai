// components/Chatbox.jsx
import React, { useState } from 'react';
import './Chatbox.css';

function Chatbox({
    message,
    response,
    isLoading,
    error,
    conversation,
    onInputChange,
    onSendMessage,
}) {
    const [expandedMessage, setExpandedMessage] = useState(null);

    const toggleMessage = (index) => {
        setExpandedMessage(expandedMessage === index ? null : index);
    };

    const truncateText = (text, maxLength) => {
        if (!text) return "";
        return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
    };

    return (
        <div className="chatbox-container">
            <h1>Chatbot Infusões de Plantas</h1>
            <div className="input-area">
                <input
                    type="text"
                    value={message}
                    onChange={onInputChange}
                    placeholder="Digite sua pergunta..."
                    className="input-field"
                />
                <button
                    onClick={onSendMessage}
                    disabled={isLoading || !message.trim()}
                    className="send-button"
                >
                    {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
            </div>

            {error && (
                <div className="error-message">
                    <strong>Erro:</strong> {error}
                </div>
            )}

            {response && (
                <div className="response-area">
                    <strong>Resposta:</strong>
                    <p className="response-text">{response}</p>
                </div>
            )}

            {/* Área para exibir o histórico da conversa atual como cards */}
            <div className="conversation-history">
                <h2>Histórico da Conversa</h2>
                {conversation.map((msg, index) => (
                    <div key={index} className={`message-card ${msg.role}`} onClick={() => toggleMessage(index)}>
                        <strong>{msg.role === 'user' ? 'Você:' : 'Bot:'}</strong>
                        <p className="message-content">
                            {expandedMessage === index ? msg.content : truncateText(msg.content, 100)}
                        </p>
                        {expandedMessage !== index && msg.content && msg.content.length > 100 && (
                            <span className="read-more">Ler mais</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Chatbox;