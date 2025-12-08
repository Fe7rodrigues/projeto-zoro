Projeto Zoro ⚔️

Aplicativo de acompanhamento de treinos de musculação focado em alta densidade e perda de peso, desenvolvido especificamente para a metodologia de treino em máquinas (Panobianco Academia).

📋 Visão Geral

O Projeto Zoro é uma Single Page Application (SPA) desenvolvida com tecnologias web fundamentais (HTML, CSS, JS) para garantir máxima compatibilidade e performance em dispositivos móveis. O objetivo é gerenciar uma rotina de treinos ABCDEF (6 dias/semana) com controle estrito de intervalos de descanso e progressão de cargas.

🚀 Tecnologias Utilizadas

Core: HTML5, JavaScript (ES6+), CSS3.

Estilização: Tailwind CSS (via CDN para prototipagem ágil).

Ícones: Lucide Icons.

Tipografia: Inter & JetBrains Mono (Google Fonts).

Persistência: localStorage (Armazenamento local do navegador).

⚙️ Funcionalidades

Divisão de Treino ABCDEF:

A: Peitoral & Abdômen

B: Dorsais & Lombar

C: Quadríceps & Panturrilhas

D: Ombros & Trapézio

E: Bíceps & Tríceps

F: Posterior & Glúteos

Sistema de Cronômetro Inteligente:

Timer automático de 45s após a conclusão de cada série.

Alerta sonoro (Oscillator API) e visual ao fim do descanso.

Opção de adicionar tempo extra (+15s) e controles de pausa/reset.

Gestão de Cargas (Sobrecarga Progressiva):

Input dedicado para registro de peso (kg) por exercício.

Persistência automática dos dados para acompanhamento da evolução.

Monitoramento de Cardio:

Checkbox diário para protocolo de cardio pós-treino (20min HIIT/Inclinado).

Integração visual com o status do treino (Barra de progresso).

UX Mobile-First:

Tema Dark Mode (zinc-950) para economia de bateria e conforto visual na academia.

Navegação otimizada para toque (Touch-friendly).

Feedback visual de progresso e conclusão de séries.

📂 Estrutura do Projeto

projeto-zoro/
├── index.html     # Estrutura semântica e container da SPA
├── style.css      # Estilizações customizadas e animações
├── script.js      # Lógica de estado, roteamento e persistência de dados
└── README.md      # Documentação do projeto


🛠️ Como Executar

Este projeto não requer dependências npm ou build steps complexos, visando simplicidade de manutenção.

Clone este repositório ou baixe os arquivos.

Certifique-se de que os arquivos index.html, style.css e script.js estão na mesma pasta raiz.

Abra o arquivo index.html diretamente em seu navegador preferido (Chrome, Edge, Safari).

Recomendado: Utilize a extensão "Live Server" no VS Code para simular um ambiente de servidor local e evitar bloqueios de CORS em alguns navegadores.

Para simular a experiência mobile no Desktop, abra o DevTools (F12) e alterne para o modo de dispositivo (Ctrl+Shift+M).

🔒 Direitos Autorais

Todos os direitos reservados a Fernando Rodrigues.
© 2025