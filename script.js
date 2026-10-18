(() => {
  "use strict";

  /* ==========================================================================
     Constantes
     ========================================================================== */
  const STORAGE_KEY = "chat-messages";
  const BOT_REPLY_DELAY_MS = 1500;

  /* ==========================================================================
     Referências do DOM
     ========================================================================== */
  const messagesEl = document.getElementById("messages");
  const typingEl = document.getElementById("typing-indicator");
  const formEl = document.getElementById("chat-form");
  const inputEl = document.getElementById("message-input");
  const clearBtnEl = document.getElementById("clear-btn");

  /* ==========================================================================
     Estado
     Formato da mensagem:
     { id: "string-uuid-ou-timestamp", sender: "user" | "bot",
       text: "Conteúdo da mensagem", timestamp: "14:32" }
     ========================================================================== */
  let messages = loadMessages();

  /* ==========================================================================
     Persistência (localStorage)
     ========================================================================== */
  function loadMessages() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  }

  function saveMessages() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {
      /* localStorage indisponível ou cheio: o chat segue funcionando em memória */
    }
  }

  /* ==========================================================================
     Utilitários
     ========================================================================== */
  function createId() {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
      return crypto.randomUUID();
    }
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function getTimestamp() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  function scrollToBottom() {
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  /* ==========================================================================
     Renderização
     ========================================================================== */
  function createMessageElement(message) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("message", `message--${message.sender}`);

    const textEl = document.createElement("p");
    textEl.classList.add("message__text");
    textEl.textContent = message.text; // textContent evita injeção de HTML

    const timeEl = document.createElement("time");
    timeEl.classList.add("message__time");
    timeEl.textContent = message.timestamp;

    wrapper.append(textEl, timeEl);
    return wrapper;
  }

  function renderMessage(message) {
    // Insere antes do indicador de digitação, que permanece o último filho
    messagesEl.insertBefore(createMessageElement(message), typingEl);
    scrollToBottom();
  }

  function renderAllMessages() {
    const fragment = document.createDocumentFragment();
    messages.forEach((message) => {
      fragment.appendChild(createMessageElement(message));
    });
    messagesEl.insertBefore(fragment, typingEl);
    scrollToBottom();
  }

  /* ==========================================================================
     Indicador de digitação
     ========================================================================== */
  function showTypingIndicator() {
    typingEl.hidden = false;
    scrollToBottom();
  }

  function hideTypingIndicator() {
    typingEl.hidden = true;
  }

  /* ==========================================================================
     Lógica do chat
     ========================================================================== */
  function addMessage(sender, text) {
    const message = {
      id: createId(),
      sender,
      text,
      timestamp: getTimestamp(),
    };
    messages.push(message);
    renderMessage(message);
    return message;
  }

  function handleSend() {
    const text = inputEl.value.trim();

    // Validação: não enviar mensagens vazias ou só com espaços
    if (!text) return;

    // 1. Exibe a mensagem do usuário no DOM e salva no estado
    addMessage("user", text);
    saveMessages();

    // 2. Limpa e refoca o campo
    inputEl.value = "";
    inputEl.focus();

    // 3. Exibe o indicador de digitação do bot
    showTypingIndicator();

    // 4. Aguarda o delay simulado e conclui a resposta mockada
    window.setTimeout(() => {
      // 5. Remove o indicador e adiciona a resposta pré-definida
      hideTypingIndicator();
      addMessage("bot", `Recebi sua mensagem: '${text}'`);
      // 6. Atualiza o localStorage
      saveMessages();
    }, BOT_REPLY_DELAY_MS);
  }

  function clearHistory() {
    messages = [];
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignora indisponibilidade do localStorage */
    }

    // Remove apenas as mensagens, mantendo o indicador de digitação no DOM
    messagesEl.querySelectorAll(".message").forEach((el) => el.remove());
    hideTypingIndicator();
    inputEl.focus();
  }

  /* ==========================================================================
     Eventos
     ========================================================================== */
  formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    handleSend();
  });

  inputEl.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      // Enter envia; Shift + Enter insere quebra de linha
      event.preventDefault();
      handleSend();
    }
  });

  clearBtnEl.addEventListener("click", clearHistory);

  /* ==========================================================================
     Inicialização
     ========================================================================== */
  renderAllMessages();
  inputEl.focus();
})();
