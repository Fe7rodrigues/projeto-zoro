# Projeto Zoro v5.0 ⚔️

Aplicativo profissional de monitoramento de treinos de musculação, focado em alta densidade, progressão de carga e execução técnica precisa. Desenvolvido com tecnologias web modernas para uma experiência app-like fluida, agora com interface futurista imersiva e suporte completo a **PWA (Progressive Web App)**.

---

## 📋 Visão Geral

O Projeto Zoro chega à versão **5.0** marcando um salto significativo de sofisticação. Criado especialmente para a rede **Panobianco Academia**, o app mapeia cada equipamento da marca **Kikos** utilizado na unidade e integra tutoriais em vídeo para execução perfeita dos movimentos.  
A estética segue o estilo **Cyberpunk/Retrowave**, agora com capacidade de instalação como um aplicativo nativo.

---

## 🚀 Tecnologias Utilizadas

**Core:** HTML5 Semântico, JavaScript (ES6+ Modular), CSS3 Avançado  
**Estilização:** Tailwind CSS + CSS Custom Properties & Keyframes  
**Ícones:** Lucide Icons  
**Mídia:** YouTube IFrame API (Embeds)  
**Persistência:** localStorage com gestão de estado reativa  
**PWA:** Service Workers & Web App Manifest  

---

## ✨ Novas Funcionalidades (v5.0)

### 📱 Otimização Mobile & PWA

**Experiência nativa dentro do navegador:**

- **Instalável:** Pode ser adicionado à tela inicial e aberto sem barra de navegador.  
- **Offline Capable:** Continua funcionando sem internet por meio do Service Worker.  
- **Viewport Dinâmico:** Adaptação automática para 100dvh e áreas seguras (Safe Area).  

---

### 🎥 Tutoriais de Execução (YouTube Integration)

**Aprenda a forma correta sem sair do app:**

- **Vídeos Integrados:** Players do YouTube dentro dos cards de exercício.  
- **Curadoria Panobianco:** Foco na série *Fast Fit* do canal oficial.

---

### 🏋️ Mapeamento de Equipamentos KIKOS

**Treinos com precisão absoluta:**

- **Identificação de Máquinas:** Exibição do modelo exato utilizado na unidade  
  (ex.: *Kikos Plate Load PR70*, *Pro Station TTMS25*).

---

### 🌌 Interface Futurista (Cyberpunk UI)

**Visual gamificado e energético:**

- **Fundo Animado:** Grid 3D em movimento inspirado no Retrowave, com ícones flutuantes.  
- **Efeitos Neon:** Brilhos intensos e sombras coloridas dinâmicas.  

---

## 🔥 Funcionalidades de Suporte

- **Lembrete Thermo Flame:** Cartão dedicado para lembrar a suplementação pré-treino.  
- **Temas de Personagem:** Zoro (Verde), Luffy (Vermelho), Sanji (Azul) e Ace (Laranja).

---

## 📊 Ferramentas Analíticas & Utilitários

- **Dashboard de Stats:** Gráfico de barras em CSS e novo Heatmap de consistência semanal.  
- **Calculadora de Anilhas:** Auxilia na montagem de barras olímpicas.  
- **Estimativa de 1RM:** Cálculo automático da carga máxima teórica.  
- **Timer Háptico:** Cronômetro com vibração e áudio.

---

## 📂 Estrutura do Projeto

A versão 5.0 traz uma arquitetura mais organizada e escalável:

projeto-zoro-v5.0/
├── css/
│ └── style.css # Estilos Cyberpunk, Animações 3D e Variáveis
├── js/
│ └── script.js # Lógica de Negócio, YouTube Mapping e Store
├── index.html # App Shell, Modais, Views e Player de Vídeo
├── manifest.json # Configuração do PWA (Ícones, Nome, Cores)
├── service-worker.js # Cache para funcionamento Offline
└── README.md # Documentação Técnica


---

## 🛠️ Como Executar Localmente

**Download:**  
Baixe todos os arquivos e organize conforme a estrutura acima.

**Execução:**

- **Simples:** Abra o arquivo *index.html* diretamente no navegador.  
- **PWA (Recomendado):** Para testar instalação e modo offline, sirva via HTTPS ou `localhost`.  
  Utilize a extensão **Live Server** no VS Code para facilitar.  
- **Modo Mobile:** No desktop, pressione **F12 > Ctrl+Shift+M** para simular dispositivos móveis.

---

## 🔒 Direitos Autorais

Todos os direitos reservados a **Fernando Rodrigues**.  
© 2025
