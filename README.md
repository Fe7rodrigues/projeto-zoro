# Pro Gym App v1.8 🏋️

Sistema profissional de gestão de treinos e performance (PWA), desenvolvido com foco em métricas, densidade de trabalho e uma arquitetura técnica de alta precisão (IndexedDB + Web Workers).

---

## 📋 Visão Geral

O **Pro Gym App (v1.9)** redefine a experiência de treino móvel ao combinar uma interface **Clean Dark** livre de distrações com um motor de dados robusto.

Diferente de aplicações comuns, esta versão opera com uma arquitetura **Local-First** assíncrona, garantindo que o cronómetro de descanso funcione em _background_ (mesmo com o ecrã desligado) e que anos de histórico sejam carregados instantaneamente sem bloquear a interface.

---

## 🚀 Stack Tecnológica (v1.8)

- **Core:** HTML5 Semântico, CSS3 (Tailwind + Glassmorphism), JavaScript (ES6+ Modules).
- **Arquitetura de Dados:** **IndexedDB** (`GymDatabase` Wrapper) para persistência escalável e não-bloqueante.
- **Multithreading:** **Web Workers** para processamento do Timer fora da _Main Thread_.
- **PWA:** Service Workers (Cache Strategy v1.8) + Manifest V2 (Instalável).
- **Visualização:** SVG Dinâmico (Radar Charts) e DOM Manipulation otimizado.

---

## ✨ Funcionalidades da Versão 1.8

### 🎮 Gamificação Visual (Novo!)

O sistema de temas agora está atrelado ao nível de experiência (XP) do utilizador.

- **16 Temas Exclusivos:** Do básico "Iniciante (Azul)" ao lendário "Mestre (Ouro/Olympia)".
- **Progression Unlocks:** Novos esquemas de cores são desbloqueados automaticamente ao atingir marcos de XP (ex: 5000 XP para o tema _Cyber_).

### 👻 Ghost Set Analytics (Novo!)

Contexto imediato durante a execução do exercício.

- O sistema consulta o histórico em tempo real e exibe a carga e repetições do treino anterior logo abaixo do _input_.
- **Feedback Visual:** Indicadores visuais (pulso/cor) ativam-se quando o utilizador supera a sua marca anterior (_Personal Record_).

### ⚡ Timer de Precisão (Web Workers)

- A contagem regressiva de descanso foi migrada para um **Web Worker** dedicado (`timer.worker.js`).
- **Benefício:** O tempo não sofre _throttling_ ou atrasos quando o navegador entra em segundo plano ou o ecrã é desligado para poupar bateria.
- **Integração:** Dispara notificações nativas do sistema operativo ao finalizar o descanso.

### 💾 Persistência Assíncrona

- Migração completa do `localStorage` (síncrono/limitado) para o **IndexedDB** (assíncrono/robusto).
- Suporte para grandes volumes de dados (anos de logs e biometria) sem impacto na fluidez da UI (60fps).

---

## 📂 Estrutura do Projeto

```text
pro-gym-app/
├── css/
│   └── style.css          # Estilos v1.8 (Temas Dinâmicos & Animações)
├── js/
│   ├── script.js          # Core Logic, IDB Wrapper & UI Controller
│   └── timer.worker.js    # Thread isolada para cronometragem precisa
├── assets/
│   └── img/               # Assets otimizados (Icons, Logos)
├── index.html             # App Shell (Updated Layout)
├── manifest.json          # Configuração PWA
├── service-worker.js      # Cache Busting & Offline Support
└── README.md              # Documentação Técnica
```

---

## 🛠️ Instalação e Uso

1. **Acesso Web:** Navegue até a URL de deploy.
2. **Instalação PWA:**
   - **iOS:** Toque em "Compartilhar" > "Adicionar à Tela de Início".
   - **Android:** Toque no banner "Adicionar Pro Gym à tela inicial" ou via menu do Chrome.
3. **Uso Offline:** O App funciona 100% offline após o primeiro carregamento, sincronizando com o IndexedDB local.

---

## 🛡️ Privacidade e Dados

- **Local-First:** Todos os dados (treinos, biometria, notas) residem exclusivamente no dispositivo do usuário (IndexedDB).
- **Backup:** Ferramenta integrada de Exportação/Importação (JSON) para backup manual.

---

## 📄 Licença

Copyright (c) 2025 **Fernando Rodrigues**.
Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.
