/**
 * PRO GYM APP V1.0
 * Copyright (c) 2025 Fernando Rodrigues. Todos os direitos reservados.
 * Descrição: Sistema profissional de gestão de treinos.
 * Theme: Clean Dark & Technical
 */

// --- TEMAS PROFISSIONAIS ---
const THEMES = {
    performance: { color: '#3b82f6', hover: '#2563eb', glow: 'rgba(59, 130, 246, 0.5)', bgSoft: 'rgba(59, 130, 246, 0.1)' }, // Azul (Padrão)
    hypertrophy: { color: '#ef4444', hover: '#dc2626', glow: 'rgba(239, 68, 68, 0.5)', bgSoft: 'rgba(239, 68, 68, 0.1)' }, // Vermelho
    stamina:     { color: '#10b981', hover: '#059669', glow: 'rgba(16, 185, 129, 0.5)', bgSoft: 'rgba(16, 185, 129, 0.1)' }, // Verde
    strength:    { color: '#f97316', hover: '#ea580c', glow: 'rgba(249, 115, 22, 0.5)', bgSoft: 'rgba(249, 115, 22, 0.1)' }  // Laranja
};

// --- SISTEMA DE PROGRESSÃO ---
const RANKS = [
    { name: "Iniciante", minXP: 0 }, 
    { name: "Praticante", minXP: 50 },
    { name: "Intermediário", minXP: 200 }, 
    { name: "Avançado", minXP: 500 },
    { name: "Elite", minXP: 1000 }, 
    { name: "Pro", minXP: 2000 }
];

// --- PLANO DE TREINO (DADOS RESTAURADOS A-F) ---
const WORKOUT_PLAN = [
    { id: 'day-a', letter: 'A', title: 'Peitoral & Abdômen', focus: 'Chest Focus', exercises: [
        { id: 'a1', name: 'Supino Máquina', machine: 'Kikos Pro Concept II', sets: 4, reps: '8-10', rest: 45, youtube: 'UfYsjtao108' },
        { id: 'a2', name: 'Peck Deck', machine: 'Kikos Pro Station TTMS25', sets: 4, reps: '8-10', rest: 45, youtube: 'a5XwjsD3AOI' },
        { id: 'a3', name: 'Supino Inclinado', machine: 'Kikos Pro Titanium TTS12', sets: 4, reps: '8-10', rest: 45, youtube: '_OodPWexj_g' },
        { id: 'a4', name: 'Cross Over', machine: 'Kikos Pro Titanium TTMS20', sets: 4, reps: '8-10', rest: 45, youtube: '7UC_8lsE2w0' },
        { id: 'a5', name: 'Abdominal Máquina', machine: 'Kikos Pro Station TTFW60', sets: 4, reps: '15-20', rest: 45, youtube: 'qWtYjH0enBA' },
        { id: 'a6', name: 'Rotação de Tronco', machine: 'Kikos Torso Rotation', sets: 4, reps: '15-20', rest: 45, youtube: 'tDBYMZxwXQ8' }
    ]},
    { id: 'day-b', letter: 'B', title: 'Dorsais & Lombar', focus: 'Back Focus', exercises: [
        { id: 'b1', name: 'Puxada Alta', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'UO70dS2tTyQ' },
        { id: 'b2', name: 'Puxada Triângulo', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'UO70dS2tTyQ' },
        { id: 'b3', name: 'Remada Baixa', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'MwyrOd_vwB8' },
        { id: 'b4', name: 'Remada Máquina', machine: 'Kikos Pro Plate Load', sets: 4, reps: '8-10', rest: 45, youtube: 'TeFo51Q_Nsc' },
        { id: 'b5', name: 'Pulldown', machine: 'Kikos Crossover Polia', sets: 4, reps: '8-10', rest: 45, youtube: 'Jgei5V3dE48' },
        { id: 'b6', name: 'Extensão Lombar', machine: 'Kikos Banco Lombar', sets: 4, reps: '12-15', rest: 60, youtube: 'ph3pddpKzzw' }
    ]},
    { id: 'day-c', letter: 'C', title: 'Quadríceps & Pant.', focus: 'Quads Focus', exercises: [
        { id: 'c1', name: 'Leg Press 45º', machine: 'Kikos Plate Load PR70', sets: 4, reps: '8-10', rest: 60, youtube: 'uJu3Yph10cI' },
        { id: 'c2', name: 'Hack Machine', machine: 'Kikos Pro Station TTPL79', sets: 4, reps: '8-10', rest: 60, youtube: 'O8gOJu9ph2E' },
        { id: 'c3', name: 'Cadeira Extensora', machine: 'Kikos Plate Load PR71', sets: 4, reps: '8-10', rest: 45, youtube: '46WfkM7rRF4' },
        { id: 'c4', name: 'Leg Horizontal', machine: 'Kikos Pro Titanium TTS70', sets: 4, reps: '8-10', rest: 45, youtube: 'gTo0HfVcLxo' },
        { id: 'c5', name: 'Panturrilha Sentado', machine: 'Kikos Pro Station TTPL77', sets: 4, reps: '15-20', rest: 30, youtube: 'JbyjNymZOt0' },
        { id: 'c6', name: 'Panturrilha Leg', machine: 'Kikos Plate Load PR70', sets: 4, reps: '15-20', rest: 30, youtube: 'uJu3Yph10cI' }
    ]},
    { id: 'day-d', letter: 'D', title: 'Ombros & Trapézio', focus: 'Delts Focus', exercises: [
        { id: 'd1', name: 'Desenv. Máquina', machine: 'Kikos Pro Station TTFW16', sets: 4, reps: '8-10', rest: 45, youtube: '7z31DogTlC8' },
        { id: 'd2', name: 'Elevação Lateral', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'jMyZZJMlwSg' },
        { id: 'd3', name: 'Elevação Frontal', machine: 'Kikos Crossover', sets: 4, reps: '8-10', rest: 45, youtube: 'hRJ6tz5_iSA' },
        { id: 'd4', name: 'Crucifixo Inverso', machine: 'Kikos Peck Deck', sets: 4, reps: '8-10', rest: 45, youtube: '5_iV9Q5Q55g' },
        { id: 'd5', name: 'Remada Alta', machine: 'Kikos Crossover', sets: 4, reps: '8-10', rest: 45, youtube: '2F8_gJ9o_cM' },
        { id: 'd6', name: 'Encolhimento', machine: 'Kikos Smith Machine', sets: 4, reps: '12-15', rest: 45, youtube: '8j2Gj_6I5xI' }
    ]},
    { id: 'day-e', letter: 'E', title: 'Bíceps & Tríceps', focus: 'Arms Focus', exercises: [
        { id: 'e1', name: 'Tríceps Pulley', machine: 'Kikos Crossover', sets: 4, reps: '8-10', rest: 45, youtube: 'ga8dtLyTj1M' },
        { id: 'e2', name: 'Tríceps Corda', machine: 'Kikos Crossover', sets: 4, reps: '8-10', rest: 45, youtube: 'vB5OHsJ3ECE' },
        { id: 'e3', name: 'Tríceps Máquina', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: '3_9d1g7o_cM' },
        { id: 'e4', name: 'Rosca Scott', machine: 'Kikos Pro Scott', sets: 4, reps: '8-10', rest: 45, youtube: '2jDrDoW1Z0o' },
        { id: 'e5', name: 'Rosca Direta', machine: 'Kikos Crossover Baixo', sets: 4, reps: '8-10', rest: 45, youtube: 'vhcJP86SEos' },
        { id: 'e6', name: 'Rosca Martelo', machine: 'Kikos Crossover Corda', sets: 4, reps: '8-10', rest: 45, youtube: 'zC3nLlEpt4w' }
    ]},
    { id: 'day-f', letter: 'F', title: 'Posterior & Glúteos', focus: 'Glutes Focus', exercises: [
        { id: 'f1', name: 'Mesa Flexora', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: '2piLtfoXX6k' },
        { id: 'f2', name: 'Cadeira Flexora', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'Y1o8iPiBI7k' },
        { id: 'f3', name: 'Cadeira Abdutora', machine: 'Kikos Pro Station', sets: 4, reps: '12-15', rest: 45, youtube: 'Hs-9c39_rjo' },
        { id: 'f4', name: 'Glúteo Máquina', machine: 'Kikos Glute Machine', sets: 4, reps: '8-10', rest: 45, youtube: 'Z8gztZ1_t9A' },
        { id: 'f5', name: 'Leg 45º Alto', machine: 'Kikos Plate Load PR70', sets: 4, reps: '8-10', rest: 60, youtube: 'uJu3Yph10cI' },
        { id: 'f6', name: 'Cadeira Adutora', machine: 'Kikos Pro Station', sets: 4, reps: '12-15', rest: 45, youtube: 'p3g4wAsu0R4' }
    ]}
];

// --- HELPERS ---
function checkWeeklyConsistency(s) {
    const today = new Date();
    let count = 0;
    const history = s.workoutHistory || {};
    for(let i=0; i<7; i++) {
        const d = new Date(today); d.setDate(today.getDate()-i);
        if(history[d.toISOString().split('T')[0]]) count++;
    }
    return count;
}
function checkMaxLoad(s) {
    let max = 0;
    if (s.weights) {
        Object.values(s.weights).forEach(w => { 
            const val = parseFloat(w);
            if(!isNaN(val) && val > max) max = val; 
        });
    }
    return max;
}

// Definição das Conquistas (Padrão Profissional)
const BADGES = [
    { id: 'first_step', icon: 'flag', title: 'Primeiro Passo', desc: 'Primeiro treino registrado.', check: (s) => (s.xp || 0) >= 1 },
    { id: 'consistency', icon: 'flame', title: 'Consistência', desc: 'Frequência de 6 dias na semana.', check: (s) => checkWeeklyConsistency(s) >= 6 },
    { id: 'heavy_load', icon: 'dumbbell', title: 'Carga Elevada', desc: 'Registrou carga > 100kg em um exercício.', check: (s) => checkMaxLoad(s) >= 100 },
    { id: 'pro_status', icon: 'trophy', title: 'Status Pro', desc: 'Atingiu nível Elite (2000 XP).', check: (s) => (s.xp || 0) >= 2000 }
];

// --- STORE (Novo Namespace: pro_gym_app_v1) ---
const store = {
    data: { 
        completedSets: {}, weights: {}, prevWeights: {}, notes: {}, cardioHistory: {}, workoutHistory: {}, 
        settings: { theme: 'performance', soundEnabled: true }, 
        xp: 0, visibleVideos: {} 
    },
    load() {
        const saved = localStorage.getItem('pro_gym_app_v1');
        if (saved) { 
            try {
                const parsed = JSON.parse(saved);
                if (parsed && typeof parsed === 'object') {
                    this.data = { ...this.data, ...parsed };
                }
                
                // Validações de Integridade
                if (!this.data.visibleVideos) this.data.visibleVideos = {}; 
                if (!this.data.settings) this.data.settings = { theme: 'performance', soundEnabled: true };
                if (!this.data.prevWeights) this.data.prevWeights = {};
                if (!this.data.weights) this.data.weights = {};
                if (!this.data.workoutHistory) this.data.workoutHistory = {};
                if (!this.data.completedSets || Array.isArray(this.data.completedSets)) this.data.completedSets = {};
                if (typeof this.data.xp !== 'number') this.data.xp = 0;
                
            } catch (e) {
                console.error("Erro no load (Reset):", e);
            }
        }
        themeManager.apply(this.data.settings.theme || 'performance');
    },
    save() {
        const completedCount = Object.values(this.data.completedSets || {}).filter(Boolean).length;
        this.data.xp = completedCount;
        const { visibleVideos, ...dataToSave } = this.data;
        localStorage.setItem('pro_gym_app_v1', JSON.stringify(dataToSave));
    }
};

const themeManager = {
    apply(key) {
        const t = THEMES[key] || THEMES['performance'];
        const r = document.documentElement.style;
        if(t) {
            r.setProperty('--theme-color', t.color);
            r.setProperty('--theme-hover', t.hover);
            r.setProperty('--theme-glow', t.glow);
            r.setProperty('--theme-bg-soft', t.bgSoft);
        }
    },
    setTheme(key) {
        store.data.settings.theme = key; 
        this.apply(key); 
        store.save();
        // Recarrega se estiver na home para atualizar gráficos
        if (document.getElementById('main-header') && document.getElementById('main-header').classList.contains('hidden')) {
            router.renderHome(document.getElementById('main-content'));
        }
    }
};

const utils = {
    getTodayDate: () => new Date().toISOString().split('T')[0],
    
    getFormattedDate: () => {
        const date = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        try {
            const str = date.toLocaleDateString('pt-BR', options);
            return str.charAt(0).toUpperCase() + str.slice(1);
        } catch(e) { return "Hoje"; }
    },

    getWeekDays: () => {
        const d = []; 
        const today = new Date();
        const dayOfWeek = today.getDay(); 
        const diff = today.getDate() - dayOfWeek + (dayOfWeek == 0 ? -6 : 1); 
        const monday = new Date(today.setDate(diff));

        for(let i=0; i<7; i++) {
            const date = new Date(monday); 
            date.setDate(monday.getDate() + i);
            d.push({ 
                obj: date, 
                iso: date.toISOString().split('T')[0], 
                lbl: date.toLocaleDateString('pt-BR', {weekday:'narrow'}).toUpperCase() 
            });
        }
        return d;
    },
    
    getRank(xp) { return [...RANKS].reverse().find(r => (xp || 0) >= r.minXP) || RANKS[0]; },
    getNextRank(xp) { return RANKS.find(r => r.minXP > (xp || 0)); },
    
    getDelta(exId) {
        const curr = parseFloat(store.data.weights[exId]) || 0;
        const prev = parseFloat(store.data.prevWeights[exId]) || 0;
        if (prev === 0 || curr === 0) return null;
        
        const diff = curr - prev;
        const roundedDiff = Math.round(diff * 10) / 10;
        if (diff === 0) return `<span class="delta-tag delta-neu">▬</span>`;
        if (diff > 0) return `<span class="delta-tag delta-pos">▲ +${roundedDiff}kg</span>`;
        return `<span class="delta-tag delta-neg">▼ ${roundedDiff}kg</span>`;
    },

    getHeatmapData() {
        const data = [];
        const today = new Date();
        const history = store.data.workoutHistory || {}; 
        
        for(let i=100; i>=0; i--) {
            const d = new Date(today); d.setDate(today.getDate() - i);
            const iso = d.toISOString().split('T')[0];
            data.push({ date: d, iso: iso, value: history[iso] ? 3 : 0 });
        }
        return data;
    },
    
    calculate1RM(w, r) { return Math.round(w * (1 + r/30)); },
    calculatePlates(target) {
        let rem = (target - 20) / 2; if(rem <= 0) return [];
        const plates = [25, 20, 15, 10, 5, 2.5, 1.25], res = [];
        for(let p of plates) { while(rem >= p) { res.push(p); rem -= p; } }
        return res;
    }
};

// --- MODULES ---
const safeIcons = () => { if(typeof lucide !== 'undefined') lucide.createIcons(); };

const timer = {
    interval: null, timeLeft: 0, defaultTime: 45, isActive: false, audioCtx: null,
    initAudio() { if(!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); },
    toggleMute() { store.data.settings.soundEnabled = !store.data.settings.soundEnabled; store.save(); this.updateMuteIcon(); },
    updateMuteIcon() {
        const btn = document.getElementById('btn-mute');
        if(btn) {
            btn.innerHTML = store.data.settings.soundEnabled 
                ? '<i data-lucide="volume-2" class="w-4 h-4"></i>' 
                : '<i data-lucide="volume-x" class="w-4 h-4 text-red-500"></i>';
            safeIcons();
        }
    },
    beep() {
        if(!store.data.settings.soundEnabled || !this.audioCtx) return;
        try {
            const osc = this.audioCtx.createOscillator(); const gain = this.audioCtx.createGain();
            osc.connect(gain); gain.connect(this.audioCtx.destination);
            osc.frequency.value = 800; gain.gain.value = 0.1;
            osc.start(); gain.gain.exponentialRampToValueAtTime(0.00001, this.audioCtx.currentTime + 0.5);
            osc.stop(this.audioCtx.currentTime + 0.5);
        } catch(e) {}
    },
    start(s) {
        this.initAudio(); this.timeLeft = s; this.defaultTime = s; this.isActive = true;
        document.getElementById('timer-modal').classList.remove('hidden'); this.updateMuteIcon(); this.render(); this.run();
        safeIcons();
    },
    run() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) { this.timeLeft--; this.render(); } 
            else { this.beep(); if(navigator.vibrate) navigator.vibrate([200, 100, 200]); this.timeLeft = 0; this.pause(); this.render(); }
        }, 1000);
        this.updateBtn(true);
    },
    pause() { this.isActive = false; clearInterval(this.interval); this.updateBtn(false); },
    toggle() { this.isActive ? this.pause() : this.run(); },
    reset() { this.timeLeft = this.defaultTime; this.isActive = true; this.run(); },
    addTime(s) { this.timeLeft += s; this.render(); },
    close() { this.pause(); document.getElementById('timer-modal').classList.add('hidden'); },
    render() {
        const el = document.getElementById('timer-display'); if(!el) return;
        const m = Math.floor(this.timeLeft / 60); const s = this.timeLeft % 60;
        el.innerText = `${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
        el.classList.toggle('text-theme', this.timeLeft === 0);
    },
    updateBtn(p) {
        const btn = document.getElementById('timer-toggle-btn');
        if(btn) { 
            btn.innerHTML = p ? '<i data-lucide="pause" class="w-6 h-6 fill-current"></i>' : '<i data-lucide="play" class="w-6 h-6 fill-current"></i>'; 
            safeIcons(); 
        }
    }
};

const notesManager = {
    cid: null,
    open(id) { this.cid = id; document.getElementById('note-input').value = (store.data.notes && store.data.notes[id]) || ''; document.getElementById('notes-modal').classList.remove('hidden'); },
    save() { store.data.notes[this.cid] = document.getElementById('note-input').value; store.save(); this.close(); router.renderDetail(document.getElementById('main-content'), router.currentParams); },
    close() { document.getElementById('notes-modal').classList.add('hidden'); }
};

const settings = {
    open() { document.getElementById('settings-modal').classList.remove('hidden'); },
    close() { document.getElementById('settings-modal').classList.add('hidden'); },
    clearAll() { if(confirm('ATENÇÃO: Deseja apagar todo o histórico e começar do zero?')) { localStorage.removeItem('pro_gym_app_v1'); location.reload(); } },
    exportData() {
        const blob = new Blob([JSON.stringify(store.data)], {type: 'application/json'});
        const url = URL.createObjectURL(blob); const a = document.createElement('a');
        a.href = url; a.download = `progym_backup_${utils.getTodayDate()}.json`; a.click();
    },
    importData(i) {
        const f = i.files[0]; if(!f) return;
        const r = new FileReader();
        r.onload = e => { try { store.data = JSON.parse(e.target.result); store.save(); alert('Dados importados com sucesso.'); location.reload(); } catch(e) { alert('Arquivo de dados inválido.'); } };
        r.readAsText(f);
    }
};

const tools = {
    calc1RM() {
        const w = parseFloat(document.getElementById('rm-weight').value) || 0;
        const r = parseFloat(document.getElementById('rm-reps').value) || 0;
        document.getElementById('rm-result').innerText = w > 0 && r > 0 ? `${utils.calculate1RM(w, r)} kg` : '-- kg';
    },
    calcPlates() {
        const t = parseFloat(document.getElementById('plate-target').value) || 0;
        const plates = utils.calculatePlates(t);
        const container = document.getElementById('plate-result');
        container.innerHTML = plates.length ? plates.map(p => `<span class="bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-xs font-bold text-white shadow-sm font-mono">${p}</span>`).join('') : '<span class="text-zinc-500 text-xs">Informe a carga total</span>';
    }
};

// --- ROUTER & VIEWS ---
const router = {
    currentParams: null,
    navigate(route, params = {}) {
        this.currentParams = params;
        const app = document.getElementById('main-content');
        const header = document.getElementById('main-header');
        const nav = document.getElementById('bottom-nav');
        if(!app) return;

        app.innerHTML = '';
        
        if (route === 'home') { header.classList.add('hidden'); nav.classList.remove('hidden'); this.renderHome(app); }
        else if (route === 'detail') { header.classList.remove('hidden'); nav.classList.add('hidden'); this.renderDetail(app, params); }
        else if (route === 'stats') { header.classList.add('hidden'); nav.classList.remove('hidden'); this.renderStats(app); }
        else if (route === 'tools') { header.classList.add('hidden'); nav.classList.remove('hidden'); this.renderTools(app); }
        else if (route === 'achievements') { header.classList.add('hidden'); nav.classList.remove('hidden'); this.renderAchievements(app); }
        
        safeIcons();
    },

    renderHome(c) {
        const xp = store.data.xp || 0;
        const rank = utils.getRank(xp);
        const next = utils.getNextRank(xp);
        let pct = 100, txt = `MAX LEVEL`;
        if(next) {
            pct = Math.min(100, Math.round(((xp - rank.minXP) / (next.minXP - rank.minXP)) * 100));
            txt = `${xp} / ${next.minXP} XP`;
        }

        const days = utils.getWeekDays().map(d => {
            const history = store.data.workoutHistory || {};
            const done = history[d.iso];
            return `<div class="flex flex-col items-center gap-1"><div class="w-9 h-11 rounded-lg border flex items-center justify-center text-xs font-bold transition-all ${done ? 'bg-theme border-theme text-white shadow-md' : 'bg-zinc-900 border-zinc-800 text-zinc-600'}">${done ? '<i data-lucide="check" class="w-4 h-4"></i>' : d.lbl}</div></div>`;
        }).join('');

        c.innerHTML = `
            <div class="px-5 animate-fade-in pb-10">
                <!-- Header Info -->
                <div class="mb-6 mt-2">
                    <h2 class="text-2xl font-bold text-white leading-tight tracking-tight">${utils.getFormattedDate()}</h2>
                    <p class="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">Painel de Controle</p>
                </div>

                <!-- Rank Card -->
                <div class="bg-zinc-900/50 border border-zinc-800 p-5 rounded-2xl mb-6 backdrop-blur-md shadow-lg">
                    <div class="flex justify-between items-end mb-3">
                        <div>
                            <h2 class="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">Nível Atual</h2>
                            <h1 class="text-3xl font-bold text-white tracking-tight flex items-center gap-2">
                                ${rank.name} <span class="text-sm font-normal text-zinc-600 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">Rank ${RANKS.indexOf(rank) + 1}</span>
                            </h1>
                        </div>
                        <div class="text-right">
                            <span class="text-xs font-mono font-bold text-[var(--theme-color)]">${txt}</span>
                        </div>
                    </div>
                    <div class="h-2.5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                        <div class="h-full bg-[var(--theme-color)] animate-progress shadow-[0_0_12px_var(--theme-glow)]" style="--target-width: ${pct}%"></div>
                    </div>
                </div>

                <!-- Frequency -->
                <div class="mb-6">
                    <div class="flex justify-between items-center mb-3 px-1">
                        <h3 class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Frequência Semanal</h3>
                    </div>
                    <div class="flex justify-between bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
                        ${days}
                    </div>
                </div>
                
                <!-- Supplements Reminder -->
                <div class="bg-gradient-to-r from-orange-900/10 to-transparent border border-orange-500/20 p-4 rounded-xl flex items-center gap-4 mb-8">
                    <div class="bg-orange-500/10 p-2 rounded-lg border border-orange-500/20"><i data-lucide="zap" class="w-5 h-5 text-orange-500"></i></div>
                    <div>
                        <h4 class="text-orange-200 font-bold text-sm">Pré-Treino</h4>
                        <p class="text-orange-200/50 text-xs">Thermo Flame: Ingerir 30min antes.</p>
                    </div>
                </div>

                <div class="space-y-3">
                    ${WORKOUT_PLAN.map(day => {
                        let done = 0; 
                        const sets = store.data.completedSets || {};
                        day.exercises.forEach(ex => { for(let i=0;i<4;i++) if(sets[`${ex.id}-${i}`]) done++; });
                        const p = Math.round((done/(day.exercises.length*4))*100);
                        const isComplete = p === 100;
                        
                        return `
                        <button onclick="router.navigate('detail', {id: '${day.id}'})" class="w-full group relative overflow-hidden bg-zinc-900 border ${isComplete ? 'border-[var(--theme-color)]' : 'border-zinc-800'} p-5 rounded-2xl text-left transition-all active:scale-[0.99] hover:border-zinc-700 shadow-sm">
                            <div class="absolute left-0 top-0 bottom-0 bg-[var(--theme-color)] opacity-5 transition-all duration-700" style="width: ${p}%"></div>
                            <div class="flex items-center gap-4 relative z-10">
                                <div class="h-12 w-12 rounded-xl ${isComplete ? 'bg-[var(--theme-color)] text-white' : 'bg-zinc-950 text-zinc-500 group-hover:text-[var(--theme-color)]'} border border-zinc-800 flex items-center justify-center font-bold text-xl transition-colors shadow-inner">
                                    ${isComplete ? '<i data-lucide="check" class="w-6 h-6"></i>' : day.letter}
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-white font-bold text-base leading-tight">${day.title}</h3>
                                    <p class="text-zinc-500 text-[11px] font-bold uppercase tracking-wider mt-1">${day.focus}</p>
                                </div>
                                <div class="text-right">
                                    <span class="text-xs font-mono font-bold ${p > 0 ? 'text-[var(--theme-color)]' : 'text-zinc-700'} block">${p}%</span>
                                </div>
                            </div>
                        </button>`;
                    }).join('')}
                </div>
                <div class="h-10"></div>
            </div>`;
    },

    renderDetail(c, p) {
        const w = WORKOUT_PLAN.find(x => x.id === p.id); if(!w) return;
        let load = 0, setsDone = 0, totalSets = w.exercises.length * 4;
        const sets = store.data.completedSets || {};

        w.exercises.forEach(ex => {
            const wt = parseFloat((store.data.weights && store.data.weights[ex.id]) || 0);
            for(let i=0;i<4;i++) if(sets[`${ex.id}-${i}`]) { load += wt; setsDone++; }
        });

        document.getElementById('main-header').innerHTML = `
            <div class="flex items-center gap-4 w-full">
                <button onclick="router.navigate('home')" class="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
                <div class="flex-1">
                    <h2 class="text-white font-bold text-sm tracking-wide uppercase">Treino ${w.letter}</h2>
                    <span class="text-[10px] text-zinc-500 font-mono flex items-center gap-2">
                        <i data-lucide="weight" class="w-3 h-3"></i> Volume: ${load.toLocaleString()}kg
                    </span>
                </div>
                <button onclick="actions.reset('${w.id}')" class="p-2 -mr-2 text-zinc-500 hover:text-red-500 transition-colors rounded-full hover:bg-zinc-800"><i data-lucide="rotate-ccw" class="w-5 h-5"></i></button>
            </div>`;

        c.innerHTML = `<div class="px-4 space-y-4 animate-slide-up pb-10">
            ${w.exercises.map((ex, i) => {
                const hasNote = (store.data.notes && store.data.notes[ex.id]||'').trim().length > 0;
                const isVideoVisible = store.data.visibleVideos && store.data.visibleVideos[ex.id];
                const vidBtnClass = isVideoVisible ? 'text-[var(--theme-color)] border-[var(--theme-color)] bg-[var(--theme-bg-soft)]' : 'text-zinc-500 border-zinc-700 hover:text-white hover:border-zinc-500';
                const delta = utils.getDelta(ex.id) || ''; 

                const videoContent = isVideoVisible ? `
                    <div class="mt-4 w-full rounded-lg overflow-hidden bg-black aspect-video border border-zinc-800 animate-fade-in relative shadow-lg">
                         <iframe class="w-full h-full" src="https://www.youtube.com/embed/${ex.youtube}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>` : '';

                return `
                <div class="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 shadow-sm transition-all hover:border-zinc-700">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex-1 pr-4">
                            <span class="text-zinc-500 text-[10px] font-bold uppercase mb-1 block tracking-wider">Exercício 0${i+1}</span>
                            <h3 class="text-white font-bold text-sm leading-snug mb-2">${ex.name}</h3>
                            <p class="text-zinc-600 text-[10px] font-mono mb-3 truncate max-w-[200px]">${ex.machine || 'Peso Livre'}</p>
                            
                            <div class="flex items-center gap-2">
                                <div class="relative flex items-center">
                                    <input type="number" value="${(store.data.weights && store.data.weights[ex.id])||''}" onchange="actions.weight('${ex.id}',this.value)" class="input-dark w-20 py-1.5 px-2 text-sm font-bold rounded-lg text-center" placeholder="kg">
                                </div>
                                ${delta}
                            </div>
                        </div>
                        
                        <div class="flex flex-col gap-2 items-end">
                            <div class="flex gap-2 mb-1">
                                <button onclick="notesManager.open('${ex.id}')" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center ${hasNote?'text-[var(--theme-color)] border-[var(--theme-color)]':'text-zinc-500'} transition-all hover:bg-zinc-800"><i data-lucide="file-text" class="w-4 h-4"></i>${hasNote?'<span class="has-note-indicator"></span>':''}</button>
                                <button onclick="actions.toggleVideo('${ex.id}')" class="w-8 h-8 rounded-lg bg-zinc-900 border flex items-center justify-center transition-all ${vidBtnClass}"><i data-lucide="play" class="w-4 h-4 fill-current"></i></button>
                            </div>
                            <div class="flex gap-2">
                                <div class="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400 font-bold">${ex.reps} reps</div>
                                <div class="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400 font-bold">${ex.rest}s</div>
                            </div>
                        </div>
                    </div>
                    
                    ${videoContent}
                    
                    <div class="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-zinc-800/50">
                        ${[0,1,2,3].map(j => {
                            const done = sets[`${ex.id}-${j}`];
                            const animClass = (p.animSet === `${ex.id}-${j}`) ? 'animate-pop' : '';
                            return `<button onclick="actions.toggle('${ex.id}',${j},${ex.rest})" class="btn-set h-10 rounded-lg flex flex-col items-center justify-center gap-0.5 ${done?'active':''} ${animClass} text-zinc-500 hover:text-zinc-300">
                                <span class="text-[9px] font-bold uppercase tracking-wide">Set ${j+1}</span>
                            </button>`;
                        }).join('')}
                    </div>
                </div>`
            }).join('')}
            
            <div class="bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-2xl p-6 border border-zinc-800 mt-8 relative overflow-hidden group shadow-lg">
                <div class="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform scale-150 pointer-events-none"><i data-lucide="activity" class="w-24 h-24"></i></div>
                <div class="flex items-center justify-between relative z-10">
                    <div>
                        <h3 class="text-white font-bold text-lg">Cardio Final</h3>
                        <p class="text-zinc-400 text-xs mt-1">20min • Zona 2 (60-70% FCM)</p>
                    </div>
                    <button onclick="actions.cardio()" class="w-14 h-14 rounded-full border-2 ${store.data.cardioHistory && store.data.cardioHistory[utils.getTodayDate()]?'bg-[var(--theme-color)] border-[var(--theme-color)] text-white shadow-[0_0_20px_var(--theme-glow)]':'border-zinc-700 text-transparent hover:border-zinc-500'} flex items-center justify-center transition-all">
                        <i data-lucide="check" class="w-8 h-8"></i>
                    </button>
                </div>
            </div>

            ${setsDone === totalSets && totalSets > 0 ? `
            <div class="fixed bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[var(--bg-app)] via-[var(--bg-app)] to-transparent z-20 flex justify-center pb-8 animate-slide-up">
                <button onclick="actions.finish()" class="w-full max-w-sm bg-[var(--theme-color)] hover:brightness-110 text-white font-bold py-4 rounded-xl shadow-lg shadow-[var(--theme-glow)] flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02]">
                    <i data-lucide="check-circle-2" class="w-6 h-6"></i>
                    FINALIZAR SESSÃO
                </button>
            </div><div class="h-24"></div>` : '<div class="h-10"></div>'}
        </div>`;
        safeIcons();
    },

    renderStats(c) {
        const heatmapData = utils.getHeatmapData();
        const cells = heatmapData.map(d => {
            let lvl = '';
            if (d.value === 1) lvl = 'heatmap-l1';
            else if (d.value === 2) lvl = 'heatmap-l2';
            else if (d.value >= 3) lvl = 'heatmap-l3';
            return `<div class="heatmap-cell ${lvl}" title="${d.date.toLocaleDateString()}"></div>`;
        }).join('');

        c.innerHTML = `
        <div class="px-5 animate-fade-in pt-6">
            <h1 class="text-2xl font-bold text-white mb-6">Estatísticas</h1>
            
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-4 shadow-sm">
                <h3 class="text-xs font-bold text-zinc-500 uppercase mb-4 tracking-widest flex items-center gap-2"><i data-lucide="calendar" class="w-3 h-3"></i> Histórico (100 dias)</h3>
                <div class="heatmap-grid pb-2">
                    ${cells}
                </div>
                <div class="flex justify-end items-center gap-2 mt-2 text-[9px] text-zinc-500 font-mono">
                    <span>Menos</span>
                    <div class="w-2 h-2 rounded-sm bg-zinc-800"></div>
                    <div class="w-2 h-2 rounded-sm heatmap-l1"></div>
                    <div class="w-2 h-2 rounded-sm heatmap-l2"></div>
                    <div class="w-2 h-2 rounded-sm heatmap-l3"></div>
                    <span>Mais</span>
                </div>
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                    <span class="text-xs text-zinc-500 block mb-1 font-bold uppercase">Treinos Concluídos</span>
                    <span class="text-3xl font-bold text-white font-mono tracking-tighter">${Object.keys(store.data.workoutHistory || {}).length}</span>
                </div>
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                    <span class="text-xs text-zinc-500 block mb-1 font-bold uppercase">Volume Total (XP)</span>
                    <span class="text-3xl font-bold text-[var(--theme-color)] font-mono tracking-tighter">${store.data.xp}</span>
                </div>
            </div>
            <div class="h-10"></div>
        </div>`;
        safeIcons();
    },

    renderAchievements(c) {
        const badgesHtml = BADGES.map(b => {
            const unlocked = b.check(store.data);
            return `
            <div class="badge-card ${unlocked ? 'unlocked animate-fade-in' : ''}">
                <div class="p-3 rounded-full ${unlocked ? 'bg-[var(--theme-color)] text-white shadow-lg' : 'bg-zinc-800 text-zinc-600'} mb-3">
                    <i data-lucide="${b.icon}" class="w-6 h-6"></i>
                </div>
                <h3 class="text-sm font-bold text-white mb-1">${b.title}</h3>
                <p class="text-[10px] text-zinc-500 leading-tight px-2">${b.desc}</p>
                ${unlocked ? '<div class="mt-3 text-[9px] text-[var(--theme-color)] font-bold uppercase tracking-widest border border-[var(--theme-color)] px-2 py-0.5 rounded-full bg-[var(--theme-bg-soft)]">Desbloqueado</div>' : ''}
            </div>`;
        }).join('');

        c.innerHTML = `
        <div class="px-5 animate-fade-in pt-6">
            <h1 class="text-2xl font-bold text-white mb-6">Conquistas</h1>
            <div class="grid grid-cols-2 gap-3">
                ${badgesHtml}
            </div>
            <div class="h-10"></div>
        </div>`;
        safeIcons();
    },

    renderTools(c) {
        c.innerHTML = `
        <div class="px-5 animate-fade-in pt-6">
            <h1 class="text-2xl font-bold text-white mb-6">Utilitários</h1>
            
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-4 shadow-sm">
                <div class="flex items-center gap-3 mb-5">
                    <div class="p-2 bg-zinc-800 rounded-lg"><i data-lucide="calculator" class="w-5 h-5 text-[var(--theme-color)]"></i></div>
                    <h3 class="font-bold text-white text-sm">Calculadora 1RM</h3>
                </div>
                <div class="flex gap-3 mb-4">
                    <div class="flex-1">
                        <label class="text-[10px] text-zinc-500 font-bold uppercase block mb-1.5 ml-1">Carga (kg)</label>
                        <input type="number" id="rm-weight" class="w-full input-dark rounded-lg p-3 text-sm font-mono" placeholder="0">
                    </div>
                    <div class="flex-1">
                        <label class="text-[10px] text-zinc-500 font-bold uppercase block mb-1.5 ml-1">Repetições</label>
                        <input type="number" id="rm-reps" class="w-full input-dark rounded-lg p-3 text-sm font-mono" placeholder="0">
                    </div>
                </div>
                <button onclick="tools.calc1RM()" class="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-lg text-xs mb-4 border border-zinc-700 transition-colors">
                    CALCULAR CARGA MÁXIMA
                </button>
                <div class="bg-zinc-950 rounded-xl p-4 text-center border border-zinc-800">
                    <span class="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Estimativa Teórica</span>
                    <div id="rm-result" class="text-3xl font-bold text-white font-mono mt-1 tracking-tighter">-- kg</div>
                </div>
            </div>

            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-sm">
                <div class="flex items-center gap-3 mb-5">
                    <div class="p-2 bg-zinc-800 rounded-lg"><i data-lucide="disc" class="w-5 h-5 text-[var(--theme-color)]"></i></div>
                    <h3 class="font-bold text-white text-sm">Montagem de Barra</h3>
                </div>
                <div class="mb-4">
                    <label class="text-[10px] text-zinc-500 font-bold uppercase block mb-1.5 ml-1">Carga Total (kg)</label>
                    <input type="number" id="plate-target" class="w-full input-dark rounded-lg p-3 text-sm mb-2 font-mono" placeholder="Ex: 60">
                    <p class="text-[10px] text-zinc-600 pl-1"><i data-lucide="info" class="w-3 h-3 inline mr-1"></i>Considerando barra olímpica de 20kg</p>
                </div>
                <button onclick="tools.calcPlates()" class="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-3 rounded-lg text-xs mb-4 border border-zinc-700 transition-colors">
                    CALCULAR ANILHAS (LADO)
                </button>
                <div id="plate-result" class="flex flex-wrap gap-2 justify-center bg-zinc-950 p-4 rounded-xl border border-zinc-800 min-h-[60px] items-center">
                    <span class="text-zinc-600 text-xs font-mono">Aguardando dados...</span>
                </div>
            </div>
            <div class="h-10"></div>
        </div>`;
        safeIcons();
    }
};

const actions = {
    toggle(ex, i, rest) {
        if (!store.data.completedSets) store.data.completedSets = {};
        const k = `${ex}-${i}`; 
        const d = !store.data.completedSets[k]; 
        store.data.completedSets[k] = d;
        const animId = d ? k : null;
        
        if(d) {
            if(navigator.vibrate) navigator.vibrate(50);
            store.data.xp = (store.data.xp || 0) + 1;
            timer.start(rest);
            const today = utils.getTodayDate();
            if (!store.data.workoutHistory) store.data.workoutHistory = {};
            store.data.workoutHistory[today] = (store.data.workoutHistory[today] || 0) + 1; 
        } else {
            store.data.xp = Math.max(0, (store.data.xp || 0) - 1);
        }
        
        store.save(); 
        const newParams = { ...router.currentParams, animSet: animId };
        router.renderDetail(document.getElementById('main-content'), newParams);
    },
    weight(ex, v) { 
        if(!store.data.weights) store.data.weights = {};
        if(!store.data.prevWeights) store.data.prevWeights = {};
        if(!store.data.prevWeights[ex]) store.data.prevWeights[ex] = store.data.weights[ex] || 0;
        store.data.weights[ex] = v; 
        store.save(); 
        router.renderDetail(document.getElementById('main-content'), router.currentParams); 
    },
    cardio() { 
        if (!store.data.cardioHistory) store.data.cardioHistory = {};
        const d = utils.getTodayDate(); 
        store.data.cardioHistory[d] = !store.data.cardioHistory[d]; 
        store.save(); 
        router.renderDetail(document.getElementById('main-content'), router.currentParams); 
    },
    toggleVideo(exId) {
        if(!store.data.visibleVideos) store.data.visibleVideos = {};
        store.data.visibleVideos[exId] = !store.data.visibleVideos[exId];
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    reset(id) {
        if(!confirm('Reiniciar esta sessão de treino?')) return;
        const w = WORKOUT_PLAN.find(x => x.id === id); let rm = 0;
        if(w && store.data.completedSets) {
            w.exercises.forEach(ex => { for(let i=0;i<4;i++) if(store.data.completedSets[`${ex.id}-${i}`]) { rm++; delete store.data.completedSets[`${ex.id}-${i}`]; } });
            store.data.xp = Math.max(0, (store.data.xp || 0) - rm); 
            store.save(); 
            router.renderDetail(document.getElementById('main-content'), router.currentParams);
        }
    },
    finish() { alert('Treino Finalizado! Dados salvos.'); router.navigate('home'); }
};

// --- INIT ---
function initApp() {
    const splash = document.getElementById('splash-screen');
    // Splash screen mais rápida para sensação de performance (1.5s)
    setTimeout(() => {
        if (splash) {
            splash.classList.add('splash-hidden');
            setTimeout(() => { splash.style.display = 'none'; }, 500);
        }
    }, 1500);
}

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').catch(err => console.log('SW Error:', err));
    });
}

document.addEventListener('DOMContentLoaded', () => { 
    initApp(); 
    store.load(); 
    router.navigate('home'); 
});