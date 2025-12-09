Projeto Zoro v4.0 ⚔️

Aplicativo profissional de monitoramento de treinos de musculação, focado em alta densidade, progressão de carga e inteligência de dados. Desenvolvido com tecnologias web modernas para uma experiência app-like fluida e responsiva.

📋 Visão Geral

O Projeto Zoro evoluiu para uma plataforma completa de gestão de performance física. Além do cronograma de treinos ABCDEF, a versão v4.0 introduz ferramentas analíticas avançadas e utilitários matemáticos para o atleta sério, mantendo a arquitetura leve e sem dependências.

🚀 Tecnologias Utilizadas

Core: HTML5 Semântico, JavaScript (ES6+ Modular), CSS3.

Estilização: Tailwind CSS (via CDN) + CSS Custom Properties.

Ícones: Lucide Icons.

Fontes: Inter (UI) & JetBrains Mono (Dados/Números).

Persistência: localStorage com gestão de estado reativa.

✨ Novas Funcionalidades (v4.0)

📊 Dashboard Analítico (Stats)

Visualização gráfica de dados sem bibliotecas externas:

Gráfico de Volume Semanal: Monitoramento visual da "Tonagem" (Kg totais levantados) dia a dia, permitindo ajustes precisos na intensidade.

Métricas de Frequência: Contadores de treinos totais e séries realizadas.

🧮 Ferramentas Técnicas (Tools)

Utilitários matemáticos para otimização do treino:

Calculadora de Anilhas (Plate Math): Algoritmo que determina a combinação exata de anilhas para atingir uma carga alvo na barra olímpica (base 20kg).

Estimativa de 1RM: Cálculo automático da Repetição Máxima (1RM) teórica usando a fórmula de Epley, essencial para periodização de força.

🎮 Gamificação Avançada

Transforme o treino em uma jornada de RPG:

Sistema de XP: Ganhe experiência a cada série concluída.

Ranks: Evolua de Aprendiz ➔ Caçador ➔ Supernova ➔ Shichibukai ➔ Yonkou ➔ Rei do Inferno.

Barra de Progresso: Visualização em tempo real do progresso para o próximo nível.

🎨 Sistema de Temas

Personalize a interface com base nos seus personagens favoritos:

Zoro (Padrão): Verde Neon & Preto.

Luffy: Vermelho Intenso.

Sanji: Azul Profundo.

Ace: Laranja Fogo.

⚙️ Funcionalidades Core

Timer Inteligente: Cronômetro de 45s automático com opção de Mute, feedback háptico (vibração) e adição rápida de tempo.

Notas Técnicas: Campo de texto persistente por exercício para registrar ajustes de máquina.

Backup de Dados: Exportação e Importação de progresso via arquivo JSON.

Consistência: Heatmap semanal na tela inicial.

📂 Estrutura do Projeto

projeto-zoro-v4.0/
├── index.html     # App Shell, Modais, Views (Home, Detail, Stats, Tools)
├── style.css      # Estilos, Animações, Gráficos CSS e Variáveis de Tema
├── script.js      # Lógica de Negócio, Math Utils, Store e Roteamento
└── README.md      # Documentação Técnica


🛠️ Como Executar Localmente

Download: Baixe os arquivos index.html, style.css e script.js para uma mesma pasta.

Execução:

Simples: Abra o index.html diretamente no seu navegador.

Recomendado (VS Code): Instale a extensão "Live Server", clique com o botão direito no index.html e selecione "Open with Live Server".

Modo Mobile: No navegador Desktop, pressione F12 para abrir o DevTools e ative a simulação de dispositivo móvel (Ctrl+Shift+M) para visualizar a interface responsiva.

🔒 Direitos Autorais

Todos os direitos reservados a Fernando Rodrigues.
© 2025