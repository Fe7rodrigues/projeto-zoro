/**
 * PRO GYM APP V1.4.3 (FIX: RESPONSIVE STEPPER & RPE)
 * Copyright (c) 2025 Fernando Rodrigues. Todos os direitos reservados.
 * Descrição: Sistema profissional com Gestão de Treinos, Stepper UX e Biometria.
 */

// --- TEMAS PROFISSIONAIS ---
const THEMES = {
    azul: {
        color: '#3b82f6',
        hover: '#2563eb',
        glow: 'rgba(59, 130, 246, 0.5)',
        bgSoft: 'rgba(59, 130, 246, 0.1)'
    },
    vermelho: {
        color: '#ef4444',
        hover: '#dc2626',
        glow: 'rgba(239, 68, 68, 0.5)',
        bgSoft: 'rgba(239, 68, 68, 0.1)'
    },
    verde: {
        color: '#10b981',
        hover: '#059669',
        glow: 'rgba(16, 185, 129, 0.5)',
        bgSoft: 'rgba(16, 185, 129, 0.1)'
    },
    laranja: {
        color: '#f97316',
        hover: '#ea580c',
        glow: 'rgba(249, 115, 22, 0.5)',
        bgSoft: 'rgba(249, 115, 22, 0.1)'
    },
    rosa: {
        color: '#FD0963',
        hover: '#D00750',
        glow: 'rgba(253, 9, 99, 0.6)',
        bgSoft: 'rgba(253, 9, 99, 0.15)'
    },
    roxo: {
        color: '#8A00c4',
        hover: '#6d009c',
        glow: 'rgba(138, 0, 196, 0.6)',
        bgSoft: 'rgba(138, 0, 196, 0.15)'
    }
};

// --- SISTEMA DE PROGRESSÃO ---
const RANKS = [
    { name: "Iniciante", minXP: 0 },
    { name: "Praticante", minXP: 50 },
    { name: "Intermediário", minXP: 200 },
    { name: "Avançado", minXP: 500 },
    { name: "Elite", minXP: 1000 },
    { name: "Pro", minXP: 2000 },
    { name: "Lenda", minXP: 5000 },
    { name: "Mestre", minXP: 10000 }
];

// --- PLANO DE TREINO (A-F) ---
const WORKOUT_PLAN = [
    {
        id: 'day-a',
        letter: 'A',
        title: 'Peitoral & Abdômen',
        focus: 'Foco em Peito',
        exercises: [
            { id: 'a1', name: 'Supino Máquina', machine: 'Kikos Pro Concept II', sets: 4, reps: '8-10', rest: 45, youtube: 'UfYsjtao108' },
            { id: 'a2', name: 'Peck Deck', machine: 'Kikos Pro Station TTMS25', sets: 4, reps: '10-12', rest: 45, youtube: '9GB1fOEmAPI' },
            { id: 'a3', name: 'Supino Inclinado', machine: 'Halteres / Máquina', sets: 4, reps: '8-10', rest: 60, youtube: 'VQauxmUhw-Y' },
            { id: 'a4', name: 'Cross Over', machine: 'Kikos Pro Titanium TTMS20', sets: 4, reps: '12-15', rest: 45, youtube: 'HC0424Xocow' },
            { id: 'a5', name: 'Abdominal Máquina', machine: 'Kikos Pro Station TTFW60', sets: 4, reps: '15-20', rest: 45, youtube: '0R3qJeNgg8Y' },
            { id: 'a6', name: 'Abdômen Infra', machine: 'Paralelas / Solo', sets: 4, reps: '15-20', rest: 45, youtube: 'HJGCQe6whLk' }
        ]
    },
    {
        id: 'day-b',
        letter: 'B',
        title: 'Dorsais & Lombar',
        focus: 'Foco em Costas',
        exercises: [
            { id: 'b1', name: 'Puxada Alta', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 60, youtube: 'UO70dS2tTyQ' },
            { id: 'b2', name: 'Remada Baixa', machine: 'Kikos Pro Station', sets: 4, reps: '10-12', rest: 45, youtube: 'MwyrOd_vwB8' },
            { id: 'b3', name: 'Remada Máq. Articulada', machine: 'Kikos Plate Load', sets: 4, reps: '10-12', rest: 45, youtube: '8_fkWDLmURY' },
            { id: 'b4', name: 'Puxada Art. Invertida', machine: 'Kikos Plate Load', sets: 4, reps: '10-12', rest: 45, youtube: '1vPX7VHR2Tw' },
            { id: 'b5', name: 'Pulldown', machine: 'Kikos Crossover', sets: 4, reps: '12-15', rest: 45, youtube: 'G4B4YEVRQDg' },
            { id: 'b6', name: 'Puxada Gráviton', machine: 'Kikos Graviton', sets: 4, reps: '10-12', rest: 45, youtube: 'KM0iEHUJEc4' }
        ]
    },
    {
        id: 'day-c',
        letter: 'C',
        title: 'Quadríceps & Pant.',
        focus: 'Foco em Pernas',
        exercises: [
            { id: 'c1', name: 'Leg Press 45º', machine: 'Kikos Plate Load PR70', sets: 4, reps: '8-10', rest: 90, youtube: 'uJu3Yph10cI' },
            { id: 'c2', name: 'Hack Machine', machine: 'Kikos Pro Station TTPL79', sets: 4, reps: '8-10', rest: 90, youtube: 'O8gOJu9ph2E' },
            { id: 'c3', name: 'Cadeira Extensora', machine: 'Kikos Plate Load PR71', sets: 4, reps: '12-15', rest: 45, youtube: '_zwBamBQJzs' },
            { id: 'c4', name: 'Leg Horizontal', machine: 'Kikos Pro Titanium TTS70', sets: 4, reps: '10-12', rest: 60, youtube: 'gTo0HfVcLxo' },
            { id: 'c5', name: 'Panturrilha Sentado', machine: 'Kikos Pro Station TTPL77', sets: 4, reps: '15-20', rest: 30, youtube: 'E68mPsfrEw8' },
            { id: 'c6', name: 'Panturrilha Leg Horiz.', machine: 'Kikos Plate Load PR70', sets: 4, reps: '15-20', rest: 30, youtube: 'VL-IRYEGxxg' }
        ]
    },
    {
        id: 'day-d',
        letter: 'D',
        title: 'Ombros & Trapézio',
        focus: 'Foco em Ombros',
        exercises: [
            { id: 'd1', name: 'Rotação Externa', machine: 'Polia / Crossover', sets: 3, reps: '12-15', rest: 45, youtube: 'z4sPEEIGmv4' },
            { id: 'd2', name: 'Elev. Lateral Cruzada', machine: 'Kikos Crossover', sets: 4, reps: '12-15', rest: 45, youtube: 'wbY6KTqZtEE' },
            { id: 'd3', name: 'Desenv. Máquina', machine: 'Máquina Articulada', sets: 4, reps: '8-12', rest: 60, youtube: '3isQJHeZ5kI' },
            { id: 'd4', name: 'Encolhimento Cross', machine: 'Kikos Crossover', sets: 4, reps: '12-15', rest: 45, youtube: 'WxjFE_zl9rA' },
            { id: 'd5', name: 'Desenv. Barra Frente', machine: 'Kikos Smith Machine', sets: 4, reps: '10-12', rest: 60, youtube: 'SytpMErUoOU' }
        ]
    },
    {
        id: 'day-e',
        letter: 'E',
        title: 'Bíceps & Tríceps',
        focus: 'Foco em Braços',
        exercises: [
            { id: 'e1', name: 'Tríceps Pulley', machine: 'Kikos Crossover', sets: 4, reps: '10-12', rest: 45, youtube: 'ga8dtLyTj1M' },
            { id: 'e2', name: 'Tríceps Press', machine: 'Kikos Press Machine', sets: 4, reps: '10-12', rest: 45, youtube: 'lFjhkFxKh48' },
            { id: 'e3', name: 'Tríceps Coice Polia', machine: 'Kikos Crossover', sets: 4, reps: '12-15', rest: 45, youtube: '6DSDuaIiz8M' },
            { id: 'e4', name: 'Rosca Scott', machine: 'Kikos Pro Scott', sets: 4, reps: '10-12', rest: 45, youtube: '88R82ardJr8' },
            { id: 'e5', name: 'Bíceps Unilateral', machine: 'Kikos Crossover Baixo', sets: 4, reps: '10-12', rest: 45, youtube: 'vhcJP86SEos' },
            { id: 'e6', name: 'Rosca Martelo', machine: 'Halteres', sets: 4, reps: '10-12', rest: 45, youtube: 'ZiasEcCg0wg' }
        ]
    },
    {
        id: 'day-f',
        letter: 'F',
        title: 'Posterior & Glúteos',
        focus: 'Foco em Glúteos',
        exercises: [
            { id: 'f1', name: 'Mesa Flexora', machine: 'Kikos Pro Station', sets: 4, reps: '10-12', rest: 45, youtube: 'Y1o8iPiBI7k' },
            { id: 'f2', name: 'Cadeira Flexora', machine: 'Kikos Pro Station', sets: 4, reps: '10-12', rest: 45, youtube: 'sZw0r26ADYA' },
            { id: 'f3', name: 'Cadeira Abdutora', machine: 'Kikos Pro Station', sets: 4, reps: '12-15', rest: 45, youtube: '93LxxfV-x34' },
            { id: 'f4', name: 'Cadeira Adutora', machine: 'Kikos Pro Station', sets: 4, reps: '12-15', rest: 45, youtube: 'CwnbaDmScN0' },
            { id: 'f5', name: 'Agachamento Articulado', machine: 'Kikos Plate Load', sets: 4, reps: '8-10', rest: 90, youtube: '2LFqiG5hWL8' },
            { id: 'f6', name: 'Abdominal Máquina', machine: 'Kikos Pro Station', sets: 4, reps: '15-20', rest: 45, youtube: '0R3qJeNgg8Y' }
        ]
    }
];

// --- HELPERS ---
const utils = {
    getTodayDate: () => new Date().toISOString().split('T')[0],

    getCurrentWeekSignature: () => {
        const d = new Date();
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        const monday = new Date(d.setDate(diff));
        return monday.toDateString();
    },

    getFormattedDate: () => {
        const date = new Date();
        const options = { weekday: 'long', day: 'numeric', month: 'long' };
        try {
            const str = date.toLocaleDateString('pt-BR', options);
            return str.charAt(0).toUpperCase() + str.slice(1);
        } catch (e) {
            return "Hoje";
        }
    },

    getWeekDays: () => {
        const d = [];
        const today = new Date();
        const dayOfWeek = today.getDay();
        const diff = today.getDate() - dayOfWeek + (dayOfWeek == 0 ? -6 : 1);
        const monday = new Date(today.setDate(diff));

        for (let i = 0; i < 7; i++) {
            const date = new Date(monday);
            date.setDate(monday.getDate() + i);
            d.push({
                obj: date,
                iso: date.toISOString().split('T')[0],
                lbl: date.toLocaleDateString('pt-BR', { weekday: 'narrow' }).toUpperCase()
            });
        }
        return d;
    },

    getRank(xp) {
        return [...RANKS].reverse().find(r => (xp || 0) >= r.minXP) || RANKS[0];
    },

    getNextRank(xp) {
        return RANKS.find(r => r.minXP > (xp || 0));
    },

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

        for (let i = 100; i >= 0; i--) {
            const d = new Date(today);
            d.setDate(today.getDate() - i);
            const iso = d.toISOString().split('T')[0];
            data.push({ date: d, iso: iso, value: history[iso] ? 3 : 0 });
        }
        return data;
    },

    calculate1RM(w, r) {
        return Math.round(w * (1 + r / 30));
    },

    calculatePlates(target) {
        let rem = (target - 20) / 2;
        if (rem <= 0) return [];
        const plates = [25, 20, 15, 10, 5, 2.5, 1.25], res = [];
        for (let p of plates) {
            while (rem >= p) {
                res.push(p);
                rem -= p;
            }
        }
        return res;
    },

    checkWeeklyConsistency(s) {
        const today = new Date();
        let count = 0;
        const history = s.workoutHistory || {};
        for (let i = 0; i < 7; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() - i);
            if (history[d.toISOString().split('T')[0]]) count++;
        }
        return count;
    },

    calculateWeeklyVolume(s) {
        const volume = { 'Peitoral': 0, 'Costas': 0, 'Pernas': 0, 'Ombros': 0, 'Braços': 0 };
        if (s.completedSets) {
            Object.keys(s.completedSets).forEach(key => {
                if (s.completedSets[key]) {
                    const exId = key.split('-')[0];
                    const groupChar = exId.charAt(0);
                    if (groupChar === 'a') volume['Peitoral']++;
                    else if (groupChar === 'b') volume['Costas']++;
                    else if (groupChar === 'c' || groupChar === 'f') volume['Pernas']++;
                    else if (groupChar === 'd') volume['Ombros']++;
                    else if (groupChar === 'e') volume['Braços']++;
                }
            });
        }
        return volume;
    },

    checkMaxLoad(s) {
        let max = 0;
        if (s.weights) {
            Object.values(s.weights).forEach(w => {
                const val = parseFloat(w);
                if (!isNaN(val) && val > max) max = val;
            });
        }
        return max;
    },

    // --- BMI Helper ---
    calcBMI(weight, heightCm) {
        if (!weight || !heightCm) return 0;
        const h = heightCm / 100;
        return (weight / (h * h)).toFixed(1);
    },

    getBMIStatus(bmi) {
        if (bmi < 18.5) return { label: 'Abaixo', class: 'bmi-under' };
        if (bmi < 25) return { label: 'Normal', class: 'bmi-normal' };
        if (bmi < 30) return { label: 'Sobrepeso', class: 'bmi-over' };
        return { label: 'Obesidade', class: 'bmi-obese' };
    }
};

// --- STORE (Namespace: pro_gym_app_v1) ---
const store = {
    data: {
        completedSets: {},
        weights: {},
        rpe: {},
        prevWeights: {},
        notes: {},
        cardioHistory: {},
        workoutHistory: {},
        settings: { theme: 'azul', soundEnabled: true },
        xp: 0,
        visibleVideos: {},
        visibleGraphs: {},
        loadHistory: {},
        measurements: [], // Array de biometria
        userHeight: null, // Altura do usuário
        lastResetWeek: null
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
                if (!this.data.visibleGraphs) this.data.visibleGraphs = {};
                if (!this.data.loadHistory) this.data.loadHistory = {};
                if (!this.data.measurements) this.data.measurements = [];
                if (!this.data.settings) this.data.settings = { theme: 'azul', soundEnabled: true };
                if (typeof this.data.xp !== 'number') this.data.xp = 0;

            } catch (e) {
                console.error("Erro no load (Reset):", e);
            }
        }

        const currentWeekSignature = utils.getCurrentWeekSignature();
        if (this.data.lastResetWeek !== currentWeekSignature) {
            console.log("Nova semana detectada. Resetando status dos treinos...");
            this.data.completedSets = {};
            this.data.lastResetWeek = currentWeekSignature;
            this.save();
        }

        themeManager.apply(this.data.settings.theme || 'azul');
    },
    save() {
        const { visibleVideos, visibleGraphs, ...dataToSave } = this.data;
        localStorage.setItem('pro_gym_app_v1', JSON.stringify(dataToSave));
    }
};

const themeManager = {
    apply(key) {
        const t = THEMES[key] || THEMES['azul'];
        const r = document.documentElement.style;
        if (t) {
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
        if (document.getElementById('main-header') && document.getElementById('main-header').classList.contains('hidden')) {
            router.renderHome(document.getElementById('main-content'));
        }
    }
};

// --- CHART GENERATORS ---
function generateRadarChart(vol) {
    const categories = ['Peitoral', 'Costas', 'Pernas', 'Ombros', 'Braços'];
    const maxVal = 24;
    const svgSize = 250;
    const centerX = svgSize / 2, centerY = svgSize / 2;
    const radius = 80;

    const points = categories.map((cat, i) => {
        let val = vol[cat] || 0;
        const normalized = maxVal === 0 ? 0 : Math.min(val / maxVal, 1);
        const angle = (Math.PI * 2 * i) / categories.length - Math.PI / 2;
        const x = centerX + radius * normalized * Math.cos(angle);
        const y = centerY + radius * normalized * Math.sin(angle);
        return `${x},${y}`;
    }).join(' ');

    let grid = '';
    for (let r = 0.2; r <= 1; r += 0.2) {
        const gridPoints = categories.map((_, i) => {
            const angle = (Math.PI * 2 * i) / categories.length - Math.PI / 2;
            const x = centerX + radius * r * Math.cos(angle);
            const y = centerY + radius * r * Math.sin(angle);
            return `${x},${y}`;
        }).join(' ');
        grid += `<polygon points="${gridPoints}" fill="none" stroke="#3f3f46" stroke-width="0.5" stroke-dasharray="2" />`;
    }

    const labelRadius = radius + 30;
    const axes = categories.map((cat, i) => {
        const angle = (Math.PI * 2 * i) / categories.length - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        let textAnchor = 'middle';
        if (i === 1) textAnchor = 'start';
        if (i === 3) textAnchor = 'end';

        const lx = centerX + labelRadius * Math.cos(angle);
        const ly = centerY + labelRadius * Math.sin(angle);

        return `<line x1="${centerX}" y1="${centerY}" x2="${x}" y2="${y}" stroke="#3f3f46" stroke-width="0.5" />
                <text x="${lx}" y="${ly}" fill="#a1a1aa" font-size="9" text-anchor="${textAnchor}" alignment-baseline="middle" font-family="monospace" font-weight="bold">${cat}</text>`;
    }).join('');

    return `
    <svg viewBox="0 0 ${svgSize} ${svgSize}" class="w-full h-full drop-shadow-2xl animate-fade-in" style="overflow: visible;">
        ${grid}
        ${axes}
        <polygon points="${points}" fill="var(--theme-glow)" stroke="var(--theme-color)" stroke-width="2" fill-opacity="0.4" />
        <circle cx="${centerX}" cy="${centerY}" r="3" fill="var(--theme-color)" />
        ${categories.map((cat, i) => {
        let val = vol[cat] || 0;
        const normalized = maxVal === 0 ? 0 : Math.min(val / maxVal, 1);
        const angle = (Math.PI * 2 * i) / categories.length - Math.PI / 2;
        const x = centerX + radius * normalized * Math.cos(angle);
        const y = centerY + radius * normalized * Math.sin(angle);
        return `<circle cx="${x}" cy="${y}" r="3" fill="#fff" stroke="var(--theme-color)" stroke-width="1"/>`;
    }).join('')}
    </svg>`;
}

function generateEvolutionChart(history) {
    if (!history || history.length < 2) {
        return `<div class="h-32 flex items-center justify-center border border-dashed border-zinc-800 rounded-lg bg-zinc-900/50">
            <span class="text-[10px] text-zinc-600 font-mono">Dados insuficientes para gráfico</span>
        </div>`;
    }

    const data = history.slice(-10);
    const width = 300;
    const height = 100;
    const padding = 15;

    const loads = data.map(d => parseFloat(d.load));
    const minLoad = Math.min(...loads) * 0.9;
    const maxLoad = Math.max(...loads) * 1.1;
    const range = maxLoad - minLoad;

    const points = data.map((d, i) => {
        const x = padding + (i / (data.length - 1)) * (width - (padding * 2));
        const y = height - padding - ((d.load - minLoad) / range) * (height - (padding * 2));
        return { x, y, val: d.load, date: d.date };
    });

    const pathD = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');

    const circles = points.map(p =>
        `<circle cx="${p.x}" cy="${p.y}" r="3" fill="#18181b" stroke="var(--theme-color)" stroke-width="2" />`
    ).join('');

    const minLabel = `<text x="5" y="${height - 5}" fill="#52525b" font-size="9" font-family="monospace">${Math.round(minLoad)}kg</text>`;
    const maxLabel = `<text x="5" y="10" fill="#52525b" font-size="9" font-family="monospace">${Math.round(maxLoad)}kg</text>`;

    return `
    <svg viewBox="0 0 ${width} ${height}" class="w-full h-full animate-fade-in bg-zinc-950 rounded-lg border border-zinc-900">
        <line x1="${padding}" y1="${padding}" x2="${width - padding}" y2="${padding}" stroke="#27272a" stroke-width="0.5" stroke-dasharray="2" />
        <line x1="${padding}" y1="${height - padding}" x2="${width - padding}" y2="${height - padding}" stroke="#27272a" stroke-width="0.5" stroke-dasharray="2" />
        <path d="${pathD}" fill="none" stroke="var(--theme-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animate-draw-line" />
        ${circles}
        ${minLabel}
        ${maxLabel}
    </svg>`;
}

// --- CONQUISTAS ---
const BADGES = [
    // FÁCEIS (1-15)
    { id: 'start_1', icon: 'play', title: 'Iniciação', desc: '1 treino concluído.', check: (s) => Object.keys(s.workoutHistory || {}).length >= 1 },
    { id: 'start_5', icon: 'footprints', title: 'Aquecimento', desc: '5 treinos concluídos.', check: (s) => Object.keys(s.workoutHistory || {}).length >= 5 },
    { id: 'start_10', icon: 'check-circle', title: 'Ritmo', desc: '10 treinos concluídos.', check: (s) => Object.keys(s.workoutHistory || {}).length >= 10 },
    { id: 'freq_2', icon: 'calendar', title: 'Frequência 2x', desc: '2 treinos na semana.', check: (s) => utils.checkWeeklyConsistency(s) >= 2 },
    { id: 'vol_50', icon: 'layers', title: 'Volume 50', desc: '50 séries totais.', check: (s) => (s.xp || 0) >= 50 },
    { id: 'load_20', icon: 'disc', title: 'Peso Pena', desc: 'Carga de 20kg.', check: (s) => utils.checkMaxLoad(s) >= 20 },
    { id: 'load_30', icon: 'disc', title: 'Peso Leve', desc: 'Carga de 30kg.', check: (s) => utils.checkMaxLoad(s) >= 30 },
    { id: 'load_40', icon: 'disc', title: 'Peso Base', desc: 'Carga de 40kg.', check: (s) => utils.checkMaxLoad(s) >= 40 },
    { id: 'cardio_1', icon: 'heart', title: 'Cardio Start', desc: '1 sessão de cardio.', check: (s) => Object.keys(s.cardioHistory || {}).length >= 1 },
    { id: 'note_1', icon: 'book', title: 'Anotação', desc: '1 nota técnica.', check: (s) => Object.keys(s.notes || {}).length >= 1 },
    { id: 'xp_100', icon: 'bar-chart', title: 'XP 100', desc: '100 XP (séries).', check: (s) => (s.xp || 0) >= 100 },
    { id: 'theme_user', icon: 'palette', title: 'Estilo', desc: 'Mude o tema.', check: (s) => s.settings.theme !== 'azul' },
    { id: 'sound_user', icon: 'volume-2', title: 'Foco', desc: 'Desative o som.', check: (s) => s.settings.soundEnabled === false },
    { id: 'load_50', icon: 'disc', title: 'Peso Médio', desc: 'Carga de 50kg.', check: (s) => utils.checkMaxLoad(s) >= 50 },
    { id: 'freq_3', icon: 'calendar-check', title: 'Frequência 3x', desc: '3 treinos na semana.', check: (s) => utils.checkWeeklyConsistency(s) >= 3 },

    // MÉDIAS (16-35)
    { id: 'start_25', icon: 'star', title: 'Prata', desc: '25 treinos.', check: (s) => Object.keys(s.workoutHistory || {}).length >= 25 },
    { id: 'start_50', icon: 'award', title: 'Ouro', desc: '50 treinos.', check: (s) => Object.keys(s.workoutHistory || {}).length >= 50 },
    { id: 'freq_4', icon: 'trending-up', title: 'Frequência 4x', desc: '4 treinos na semana.', check: (s) => utils.checkWeeklyConsistency(s) >= 4 },
    { id: 'freq_5', icon: 'zap', title: 'Frequência 5x', desc: '5 treinos na semana.', check: (s) => utils.checkWeeklyConsistency(s) >= 5 },
    { id: 'load_60', icon: 'dumbbell', title: 'Força Real', desc: 'Carga de 60kg.', check: (s) => utils.checkMaxLoad(s) >= 60 },
    { id: 'load_70', icon: 'dumbbell', title: 'Carga Sólida', desc: 'Carga de 70kg.', check: (s) => utils.checkMaxLoad(s) >= 70 },
    { id: 'load_80', icon: 'dumbbell', title: 'Atleta', desc: 'Carga de 80kg.', check: (s) => utils.checkMaxLoad(s) >= 80 },
    { id: 'load_90', icon: 'dumbbell', title: 'Power', desc: 'Carga de 90kg.', check: (s) => utils.checkMaxLoad(s) >= 90 },
    { id: 'load_100', icon: 'anchor', title: '3 Dígitos', desc: 'Carga de 100kg.', check: (s) => utils.checkMaxLoad(s) >= 100 },
    { id: 'vol_500', icon: 'layers', title: 'Volume 500', desc: '500 séries.', check: (s) => (s.xp || 0) >= 500 },
    { id: 'vol_1000', icon: 'layers', title: 'Volume 1k', desc: '1.000 séries.', check: (s) => (s.xp || 0) >= 1000 },
    { id: 'cardio_10', icon: 'wind', title: 'Cardio Pro', desc: '10 sessões cardio.', check: (s) => Object.keys(s.cardioHistory || {}).length >= 10 },
    { id: 'cardio_25', icon: 'wind', title: 'Maratonista', desc: '25 sessões cardio.', check: (s) => Object.keys(s.cardioHistory || {}).length >= 25 },
    { id: 'note_10', icon: 'file-text', title: 'Analista', desc: '10 notas.', check: (s) => Object.keys(s.notes || {}).length >= 10 },
    { id: 'note_25', icon: 'library', title: 'Professor', desc: '25 notas.', check: (s) => Object.keys(s.notes || {}).length >= 25 },
    { id: 'xp_2500', icon: 'activity', title: 'Máquina', desc: '2.500 XP.', check: (s) => (s.xp || 0) >= 2500 },
    { id: 'load_110', icon: 'biceps-flexed', title: 'Beast', desc: 'Carga de 110kg.', check: (s) => utils.checkMaxLoad(s) >= 110 },
    { id: 'load_120', icon: 'biceps-flexed', title: 'Monster', desc: 'Carga de 120kg.', check: (s) => utils.checkMaxLoad(s) >= 120 },
    { id: 'load_130', icon: 'hammer', title: 'Elite Str', desc: 'Carga de 130kg.', check: (s) => utils.checkMaxLoad(s) >= 130 },
    { id: 'start_75', icon: 'crown', title: 'Veterano', desc: '75 treinos.', check: (s) => Object.keys(s.workoutHistory || {}).length >= 75 },

    // DIFÍCEIS / ELITE (36-50)
    { id: 'start_100', icon: 'trophy', title: 'Centenário', desc: '100 treinos.', check: (s) => Object.keys(s.workoutHistory || {}).length >= 100 },
    { id: 'start_200', icon: 'gem', title: 'Platina', desc: '200 treinos.', check: (s) => Object.keys(s.workoutHistory || {}).length >= 200 },
    { id: 'start_365', icon: 'sun', title: 'Lendário', desc: '365 treinos.', check: (s) => Object.keys(s.workoutHistory || {}).length >= 365 },
    { id: 'freq_6', icon: 'flame', title: 'Hardcore', desc: '6 treinos na semana.', check: (s) => utils.checkWeeklyConsistency(s) >= 6 },
    { id: 'freq_7', icon: 'zap', title: 'No Days Off', desc: '7 dias na semana.', check: (s) => utils.checkWeeklyConsistency(s) >= 7 },
    { id: 'load_140', icon: 'mountain', title: 'Titan', desc: 'Carga de 140kg.', check: (s) => utils.checkMaxLoad(s) >= 140 },
    { id: 'load_160', icon: 'mountain', title: 'Colossus', desc: 'Carga de 160kg.', check: (s) => utils.checkMaxLoad(s) >= 160 },
    { id: 'load_180', icon: 'swords', title: 'Olímpico', desc: 'Carga de 180kg.', check: (s) => utils.checkMaxLoad(s) >= 180 },
    { id: 'load_200', icon: 'shield-alert', title: 'Godlike', desc: 'Carga de 200kg.', check: (s) => utils.checkMaxLoad(s) >= 200 },
    { id: 'vol_5000', icon: 'bar-chart-2', title: 'Volume 5k', desc: '5.000 séries.', check: (s) => (s.xp || 0) >= 5000 },
    { id: 'vol_10000', icon: 'database', title: 'Volume 10k', desc: '10.000 séries.', check: (s) => (s.xp || 0) >= 10000 },
    { id: 'vol_25000', icon: 'server', title: 'Volume Max', desc: '25.000 séries.', check: (s) => (s.xp || 0) >= 25000 },
    { id: 'cardio_50', icon: 'bike', title: 'Iron Man', desc: '50 cardios.', check: (s) => Object.keys(s.cardioHistory || {}).length >= 50 },
    { id: 'cardio_100', icon: 'timer', title: 'Ultra', desc: '100 cardios.', check: (s) => Object.keys(s.cardioHistory || {}).length >= 100 },
    { id: 'note_50', icon: 'graduation-cap', title: 'Doutor', desc: '50 notas.', check: (s) => Object.keys(s.notes || {}).length >= 50 }
];

// --- MODULES ---
const safeIcons = () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
};

const timer = {
    interval: null,
    timeLeft: 0,
    defaultTime: 45,
    isActive: false,
    audioCtx: null,

    initAudio() {
        if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
            this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    toggleMute() {
        store.data.settings.soundEnabled = !store.data.settings.soundEnabled;
        store.save();
        this.updateMuteIcon();
    },

    updateMuteIcon() {
        const btn = document.getElementById('btn-mute');
        if (btn) {
            btn.innerHTML = store.data.settings.soundEnabled
                ? '<i data-lucide="volume-2" class="w-4 h-4"></i>'
                : '<i data-lucide="volume-x" class="w-4 h-4 text-red-500"></i>';
            safeIcons();
        }
    },

    beep() {
        if (!store.data.settings.soundEnabled || !this.audioCtx) return;
        try {
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.frequency.value = 800;
            gain.gain.value = 0.1;
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.00001, this.audioCtx.currentTime + 0.5);
            osc.stop(this.audioCtx.currentTime + 0.5);
        } catch (e) { }
    },

    start(s) {
        this.initAudio();
        this.timeLeft = s;
        this.defaultTime = s;
        this.isActive = true;
        document.getElementById('timer-modal').classList.remove('hidden');
        this.updateMuteIcon();
        this.render();
        this.run();
        safeIcons();
    },

    run() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
                this.render();
            } else {
                this.beep();
                if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
                this.timeLeft = 0;
                this.pause();
                this.render();
            }
        }, 1000);
        this.updateBtn(true);
    },

    pause() {
        this.isActive = false;
        clearInterval(this.interval);
        this.updateBtn(false);
    },

    toggle() {
        this.isActive ? this.pause() : this.run();
    },

    reset() {
        this.timeLeft = this.defaultTime;
        this.isActive = true;
        this.run();
    },

    addTime(s) {
        this.timeLeft += s;
        this.render();
    },

    close() {
        this.pause();
        document.getElementById('timer-modal').classList.add('hidden');
    },

    render() {
        const el = document.getElementById('timer-display');
        if (!el) return;
        const m = Math.floor(this.timeLeft / 60);
        const s = this.timeLeft % 60;
        el.innerText = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
        el.classList.toggle('text-theme', this.timeLeft === 0);
    },

    updateBtn(p) {
        const btn = document.getElementById('timer-toggle-btn');
        if (btn) {
            btn.innerHTML = p
                ? '<i data-lucide="pause" class="w-6 h-6 fill-current"></i>'
                : '<i data-lucide="play" class="w-6 h-6 fill-current"></i>';
            safeIcons();
        }
    }
};

const measurementsManager = {
    openModal() {
        document.getElementById('measurements-modal').classList.remove('hidden');
        if (store.data.userHeight) document.getElementById('meas-height').value = store.data.userHeight;

        const last = store.data.measurements && store.data.measurements.length > 0 ? store.data.measurements[0] : null;
        if (last) {
            document.getElementById('meas-weight').value = last.weight || '';
            document.getElementById('meas-fat').value = last.fat || '';
            document.getElementById('meas-arm').value = last.arm || '';
            document.getElementById('meas-waist').value = last.waist || '';
            document.getElementById('meas-thigh').value = last.thigh || '';
        }
    },

    closeModal() {
        document.getElementById('measurements-modal').classList.add('hidden');
    },

    save() {
        const height = parseFloat(document.getElementById('meas-height').value);
        const entry = {
            date: utils.getTodayDate(),
            weight: parseFloat(document.getElementById('meas-weight').value) || 0,
            fat: parseFloat(document.getElementById('meas-fat').value) || 0,
            arm: parseFloat(document.getElementById('meas-arm').value) || 0,
            waist: parseFloat(document.getElementById('meas-waist').value) || 0,
            thigh: parseFloat(document.getElementById('meas-thigh').value) || 0
        };

        if (height) store.data.userHeight = height;
        if (!store.data.measurements) store.data.measurements = [];

        store.data.measurements.unshift(entry);
        store.save();
        this.closeModal();
        router.renderMeasurements(document.getElementById('main-content'));
    },

    delete(index) {
        if (!confirm('Excluir este registro?')) return;
        store.data.measurements.splice(index, 1);
        store.save();
        router.renderMeasurements(document.getElementById('main-content'));
    }
};

const notesManager = {
    cid: null,

    open(id) {
        this.cid = id;
        document.getElementById('note-input').value = (store.data.notes && store.data.notes[id]) || '';
        document.getElementById('notes-modal').classList.remove('hidden');
    },

    save() {
        store.data.notes[this.cid] = document.getElementById('note-input').value;
        store.save();
        this.close();
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },

    close() {
        document.getElementById('notes-modal').classList.add('hidden');
    }
};

const settings = {
    open() {
        document.getElementById('settings-modal').classList.remove('hidden');
    },

    close() {
        document.getElementById('settings-modal').classList.add('hidden');
    },

    clearAll() {
        if (confirm('ATENÇÃO: Deseja apagar todo o histórico e começar do zero?')) {
            localStorage.removeItem('pro_gym_app_v1');
            location.reload();
        }
    },

    exportData() {
        const blob = new Blob([JSON.stringify(store.data)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `progym_backup_${utils.getTodayDate()}.json`;
        a.click();
    },

    importData(i) {
        const f = i.files[0];
        if (!f) return;
        const r = new FileReader();
        r.onload = e => {
            try {
                store.data = JSON.parse(e.target.result);
                store.save();
                alert('Dados importados com sucesso.');
                location.reload();
            } catch (e) {
                alert('Arquivo de dados inválido.');
            }
        };
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
        container.innerHTML = plates.length
            ? plates.map(p => `<span class="bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-xs font-bold text-white shadow-sm font-mono">${p}</span>`).join('')
            : '<span class="text-zinc-500 text-xs">Informe a carga total</span>';
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
        if (!app) return;

        app.innerHTML = '';

        if (route === 'home') {
            header.classList.add('hidden');
            nav.classList.remove('hidden');
            this.renderHome(app);
        } else if (route === 'detail') {
            header.classList.remove('hidden');
            nav.classList.add('hidden');
            this.renderDetail(app, params);
        } else if (route === 'stats') {
            header.classList.add('hidden');
            nav.classList.remove('hidden');
            this.renderStats(app);
        } else if (route === 'tools') {
            header.classList.add('hidden');
            nav.classList.remove('hidden');
            this.renderTools(app);
        } else if (route === 'measurements') {
            header.classList.remove('hidden');
            nav.classList.add('hidden');
            this.renderMeasurements(app);
        } else if (route === 'achievements') {
            header.classList.add('hidden');
            nav.classList.remove('hidden');
            this.renderAchievements(app);
        }

        safeIcons();
    },

    renderHome(c) {
        const xp = store.data.xp || 0;
        const rank = utils.getRank(xp);
        const next = utils.getNextRank(xp);
        let pct = 100, txt = `MAX LEVEL`;
        if (next) {
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
                <div class="flex justify-center mb-6 pt-2 relative">
                    <div class="absolute w-16 h-16 bg-[var(--theme-color)] rounded-full blur-[20px] opacity-40 animate-pulse"></div>
                    <img src="assets/img/icon-main.png" class="w-16 h-16 drop-shadow-lg animate-pulse-hover relative z-10" alt="Pro Gym Icon" onerror="this.style.display='none'"/>
                </div>

                <div class="mb-6 mt-2">
                    <h2 class="text-2xl font-bold text-white leading-tight tracking-tight">${utils.getFormattedDate()}</h2>
                    <p class="text-xs text-zinc-500 font-medium uppercase tracking-widest mt-1">Painel de Controle</p>
                </div>

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

                <div class="mb-6">
                    <div class="flex justify-between items-center mb-3 px-1">
                        <h3 class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Frequência Semanal</h3>
                    </div>
                    <div class="flex justify-between bg-zinc-900/30 p-4 rounded-2xl border border-zinc-800/50 backdrop-blur-sm">
                        ${days}
                    </div>
                </div>
                
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
            day.exercises.forEach(ex => { for (let i = 0; i < 4; i++) if (sets[`${ex.id}-${i}`]) done++; });
            const p = Math.round((done / (day.exercises.length * 4)) * 100);
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
        const w = WORKOUT_PLAN.find(x => x.id === p.id);
        if (!w) return;
        let load = 0, setsDone = 0, totalSets = w.exercises.length * 4;
        const sets = store.data.completedSets || {};

        w.exercises.forEach(ex => {
            const wt = parseFloat((store.data.weights && store.data.weights[ex.id]) || 0);
            for (let i = 0; i < 4; i++) if (sets[`${ex.id}-${i}`]) { load += wt; setsDone++; }
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
            const hasNote = (store.data.notes && store.data.notes[ex.id] || '').trim().length > 0;
            const isVideoVisible = store.data.visibleVideos && store.data.visibleVideos[ex.id];
            const isGraphVisible = store.data.visibleGraphs && store.data.visibleGraphs[ex.id];
            const vidBtnClass = isVideoVisible ? 'text-[var(--theme-color)] border-[var(--theme-color)] bg-[var(--theme-bg-soft)]' : 'text-zinc-500 border-zinc-700 hover:text-white hover:border-zinc-500';
            const graphBtnClass = isGraphVisible ? 'text-[var(--theme-color)] border-[var(--theme-color)] bg-[var(--theme-bg-soft)]' : 'text-zinc-500 border-zinc-700 hover:text-white hover:border-zinc-500';
            const delta = utils.getDelta(ex.id) || '';
            const currentRPE = (store.data.rpe && store.data.rpe[ex.id]) || 'RPE';

            const videoContent = isVideoVisible ? `
                    <div class="mt-4 w-full rounded-lg overflow-hidden bg-black aspect-video border border-zinc-800 animate-fade-in relative shadow-lg">
                         <iframe class="w-full h-full" src="https://www.youtube.com/embed/${ex.youtube}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>` : '';

            const graphContent = isGraphVisible ? `
                    <div class="mt-4 w-full h-32 rounded-lg bg-zinc-950 border border-zinc-800 animate-fade-in relative p-2 shadow-inner">
                        <div class="absolute top-2 left-2 text-[9px] font-bold text-zinc-500 uppercase tracking-widest">Evolução de Carga (kg)</div>
                        ${generateEvolutionChart(store.data.loadHistory ? store.data.loadHistory[ex.id] : [])}
                    </div>` : '';

            return `
                <div class="bg-zinc-900 rounded-2xl p-5 border border-zinc-800 shadow-sm transition-all hover:border-zinc-700">
                    <div class="flex justify-between items-start mb-4">
                        <div class="flex-1 pr-4">
                            <span class="text-zinc-500 text-[10px] font-bold uppercase mb-1 block tracking-wider">Exercício 0${i + 1}</span>
                            <h3 class="text-white font-bold text-sm leading-snug mb-2">${ex.name}</h3>
                            <p class="text-zinc-600 text-[10px] font-mono mb-3 truncate max-w-[200px]">${ex.machine || 'Peso Livre'}</p>
                            
                            <div class="flex items-center gap-2 flex-wrap sm:flex-nowrap">
                                <div class="stepper-wrapper">
                                    <button onclick="actions.adjustWeight('${ex.id}', -5)" class="stepper-btn">
                                        <i data-lucide="minus" class="w-3 h-3"></i>
                                    </button>
                                    <input 
                                        id="weight-input-${ex.id}"
                                        type="number" 
                                        inputmode="decimal" 
                                        step="0.5"
                                        value="${(store.data.weights && store.data.weights[ex.id]) || ''}" 
                                        onchange="actions.weight('${ex.id}', this.value)" 
                                        class="stepper-input" 
                                        placeholder="kg"
                                    >
                                    <button onclick="actions.adjustWeight('${ex.id}', 5)" class="stepper-btn">
                                        <i data-lucide="plus" class="w-3 h-3"></i>
                                    </button>
                                </div>
                                <select onchange="actions.setRPE('${ex.id}', this.value)" class="select-rpe w-14 flex-shrink-0">
                                    <option value="" disabled ${currentRPE === 'RPE' ? 'selected' : ''}>RPE</option>
                                    <option value="5" ${currentRPE == '5' ? 'selected' : ''}>5</option>
                                    <option value="8" ${currentRPE == '8' ? 'selected' : ''}>8</option>
                                    <option value="10" ${currentRPE == '10' ? 'selected' : ''}>10</option>
                                    <option value="12" ${currentRPE == '12' ? 'selected' : ''}>12</option>
                                    <option value="15" ${currentRPE == '15' ? 'selected' : ''}>15</option>
                                </select>
                                ${delta}
                            </div>
                        </div>
                        
                        <div class="flex flex-col gap-2 items-end">
                            <div class="flex gap-2 mb-1">
                                <button onclick="notesManager.open('${ex.id}')" class="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center ${hasNote ? 'text-[var(--theme-color)] border-[var(--theme-color)]' : 'text-zinc-500'} transition-all hover:bg-zinc-800"><i data-lucide="file-text" class="w-4 h-4"></i>${hasNote ? '<span class="has-note-indicator"></span>' : ''}</button>
                                <button onclick="actions.toggleVideo('${ex.id}')" class="w-8 h-8 rounded-lg bg-zinc-900 border flex items-center justify-center transition-all ${vidBtnClass}"><i data-lucide="play" class="w-4 h-4 fill-current"></i></button>
                                <button onclick="actions.toggleGraph('${ex.id}')" class="w-8 h-8 rounded-lg bg-zinc-900 border flex items-center justify-center transition-all ${graphBtnClass}"><i data-lucide="trending-up" class="w-4 h-4"></i></button>
                            </div>
                            <div class="flex gap-2">
                                <div class="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400 font-bold">${ex.reps} reps</div>
                                <div class="px-2 py-1 bg-zinc-950 border border-zinc-800 rounded text-[10px] font-mono text-zinc-400 font-bold">${ex.rest}s</div>
                            </div>
                        </div>
                    </div>
                    ${videoContent}
                    ${graphContent}
                    <div class="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-zinc-800/50">
                        ${[0, 1, 2, 3].map(j => {
                const done = sets[`${ex.id}-${j}`];
                const animClass = (p.animSet === `${ex.id}-${j}`) ? 'animate-pop' : '';
                return `<button onclick="actions.toggle('${ex.id}',${j},${ex.rest})" class="btn-set h-10 rounded-lg flex flex-col items-center justify-center gap-0.5 ${done ? 'active' : ''} ${animClass} text-zinc-500 hover:text-zinc-300">
                                <span class="text-[9px] font-bold uppercase tracking-wide">Set ${j + 1}</span>
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
                    <button onclick="actions.cardio()" class="w-14 h-14 rounded-full border-2 ${store.data.cardioHistory && store.data.cardioHistory[utils.getTodayDate()] ? 'bg-[var(--theme-color)] border-[var(--theme-color)] text-white shadow-[0_0_20px_var(--theme-glow)]' : 'border-zinc-700 text-transparent hover:border-zinc-500'} flex items-center justify-center transition-all">
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

        const vol = utils.calculateWeeklyVolume(store.data);
        const radarSvg = generateRadarChart(vol);

        c.innerHTML = `
        <div class="px-5 animate-fade-in pt-6">
            <h1 class="text-2xl font-bold text-white mb-6">Estatísticas</h1>
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-4 shadow-sm relative overflow-hidden">
                <div class="flex justify-between items-start mb-2 relative z-10">
                    <div>
                        <h3 class="text-xs font-bold text-white uppercase tracking-widest">Equilíbrio Físico</h3>
                        <p class="text-[9px] text-zinc-500 font-mono">Análise de volume da semana atual</p>
                    </div>
                    <div class="p-1.5 bg-zinc-800 rounded text-[var(--theme-color)]"><i data-lucide="radar" class="w-4 h-4"></i></div>
                </div>
                <div class="h-64 w-full flex items-center justify-center -my-4">${radarSvg}</div>
                <div class="text-center"><p class="text-[9px] text-zinc-600 mt-1">*O gráfico reinicia semanalmente.</p></div>
            </div>
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-4 shadow-sm">
                <h3 class="text-xs font-bold text-zinc-500 uppercase mb-4 tracking-widest flex items-center gap-2"><i data-lucide="calendar" class="w-3 h-3"></i> Histórico (100 dias)</h3>
                <div class="heatmap-grid pb-2">${cells}</div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                    <span class="text-xs text-zinc-500 block mb-1 font-bold uppercase">Treinos Concluídos</span>
                    <span class="text-3xl font-bold text-white font-mono tracking-tighter">${Object.keys(store.data.workoutHistory || {}).length}</span>
                </div>
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
                    <span class="text-xs text-zinc-500 block mb-1 font-bold uppercase">XP Total</span>
                    <span class="text-3xl font-bold text-[var(--theme-color)] font-mono tracking-tighter">${store.data.xp}</span>
                </div>
            </div>
            <div class="h-10"></div>
        </div>`;
        safeIcons();
    },

    renderAchievements(c) {
        const total = BADGES.length;
        const unlockedCount = BADGES.filter(b => b.check(store.data)).length;
        const percent = Math.round((unlockedCount / total) * 100);
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
            <div class="mb-6">
                <h1 class="text-2xl font-bold text-white mb-2">Conquistas</h1>
                <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-sm">
                    <div class="flex justify-between items-end mb-2">
                        <span class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Progresso Total</span>
                        <span class="text-xs font-mono font-bold text-white">${unlockedCount} / ${total} Desbloqueadas</span>
                    </div>
                    <div class="h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800/50">
                        <div class="h-full bg-[var(--theme-color)] animate-progress shadow-[0_0_8px_var(--theme-glow)]" style="--target-width: ${percent}%"></div>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-3">${badgesHtml}</div>
            <div class="h-10"></div>
        </div>`;
        safeIcons();
    },

    renderTools(c) {
        c.innerHTML = `
        <div class="px-5 animate-fade-in pt-6">
            <h1 class="text-2xl font-bold text-white mb-6">Utilitários</h1>
            
            <button onclick="router.navigate('measurements')" class="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-4 shadow-sm hover:border-[var(--theme-color)] transition-all group text-left relative overflow-hidden">
                <div class="absolute right-0 top-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity"><i data-lucide="scale" class="w-24 h-24 text-[var(--theme-color)]"></i></div>
                <div class="relative z-10">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="p-2 bg-zinc-800 rounded-lg group-hover:bg-[var(--theme-color)] transition-colors"><i data-lucide="activity" class="w-6 h-6 text-[var(--theme-color)] group-hover:text-white"></i></div>
                        <h3 class="font-bold text-white text-lg">Biometria & Medidas</h3>
                    </div>
                    <p class="text-xs text-zinc-500 leading-relaxed pr-10">Registre peso, percentual de gordura e circunferências corporais. Acompanhe a evolução física real.</p>
                </div>
            </button>

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
    },

    renderMeasurements(c) {
        document.getElementById('main-header').innerHTML = `
            <div class="flex items-center gap-4 w-full">
                <button onclick="router.navigate('tools')" class="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800"><i data-lucide="arrow-left" class="w-6 h-6"></i></button>
                <div class="flex-1">
                    <h2 class="text-white font-bold text-sm tracking-wide uppercase">Biometria</h2>
                    <span class="text-[10px] text-zinc-500 font-mono">Controle Corporal</span>
                </div>
                <button onclick="measurementsManager.openModal()" class="p-2 -mr-2 bg-[var(--theme-color)] text-white hover:brightness-110 transition-colors rounded-full shadow-[0_0_15px_var(--theme-glow)]"><i data-lucide="plus" class="w-5 h-5"></i></button>
            </div>`;

        const history = store.data.measurements || [];
        const current = history[0] || {};
        const bmi = utils.calcBMI(current.weight, store.data.userHeight);
        const bmiStatus = utils.getBMIStatus(bmi);

        const listHtml = history.map((item, index) => {
            const prev = history[index + 1];

            const getDeltaVal = (curr, prevVal, suffix = '') => {
                if (!prevVal) return '';
                const d = curr - prevVal;
                if (d === 0) return `<span class="text-zinc-600 ml-1 font-mono text-[9px]">=</span>`;
                const arrow = d > 0 ? '▲' : '▼';
                return `<span class="${d > 0 ? 'text-emerald-500' : 'text-red-500'} ml-1 font-mono text-[9px]">${arrow} ${Math.abs(d).toFixed(1)}${suffix}</span>`;
            };

            return `
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-4 mb-3 relative group">
                <button onclick="measurementsManager.delete(${index})" class="absolute top-4 right-4 text-zinc-700 hover:text-red-500 transition-colors"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
                <div class="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-3">${new Date(item.date).toLocaleDateString()}</div>
                
                <div class="grid grid-cols-2 gap-y-3 gap-x-4">
                    <div>
                        <span class="text-zinc-500 text-[10px] block">Peso</span>
                        <div class="text-white font-mono font-bold text-sm">${item.weight}kg ${prev ? getDeltaVal(item.weight, prev.weight) : ''}</div>
                    </div>
                    <div>
                        <span class="text-zinc-500 text-[10px] block">% Gordura</span>
                        <div class="text-white font-mono font-bold text-sm">${item.fat}% ${prev ? getDeltaVal(item.fat, prev.fat) : ''}</div>
                    </div>
                    
                    ${item.waist ? `
                    <div class="col-span-2 border-t border-zinc-800/50 pt-2 mt-1 grid grid-cols-3 gap-2">
                        <div><span class="text-[9px] text-zinc-600 block">Braço</span><span class="text-xs text-zinc-300 font-mono">${item.arm}</span></div>
                        <div><span class="text-[9px] text-zinc-600 block">Cintura</span><span class="text-xs text-zinc-300 font-mono">${item.waist}</span></div>
                        <div><span class="text-[9px] text-zinc-600 block">Coxa</span><span class="text-xs text-zinc-300 font-mono">${item.thigh}</span></div>
                    </div>` : ''}
                </div>
            </div>`;
        }).join('');

        c.innerHTML = `
        <div class="px-5 animate-fade-in pt-6 pb-20">
            <div class="flex gap-3 mb-6">
                <div class="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                    <span class="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">Peso Atual</span>
                    <span class="text-3xl font-bold text-white font-mono tracking-tighter">${current.weight || '--'} <span class="text-sm text-zinc-600 font-normal">kg</span></span>
                </div>
                <div class="flex-1 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col items-center justify-center text-center relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-transparent to-zinc-950/50"></div>
                    <span class="text-[10px] text-zinc-500 font-bold uppercase tracking-widest mb-1">IMC</span>
                    <span class="text-2xl font-bold text-white font-mono tracking-tighter relative z-10">${bmi > 0 ? bmi : '--'}</span>
                    <span class="text-[9px] font-bold uppercase tracking-wide mt-1 px-2 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 ${bmiStatus.class} relative z-10">${bmiStatus.label}</span>
                </div>
            </div>

            <div class="flex items-center justify-between mb-4 px-1">
                <h3 class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Histórico de Medidas</h3>
                <span class="text-[10px] text-zinc-600 font-mono">${history.length} registros</span>
            </div>

            <div class="space-y-1">
                ${history.length > 0 ? listHtml : '<div class="text-center py-10 text-zinc-600 text-xs">Nenhum registro encontrado.</div>'}
            </div>
        </div>

        <div id="measurements-modal" class="hidden modal-overlay animate-fade-in fixed inset-0 z-[60] flex items-end sm:items-center justify-center bg-black/90">
            <div class="bg-[#18181b] w-full sm:max-w-sm rounded-t-2xl sm:rounded-2xl border-t sm:border border-zinc-800 p-6 shadow-2xl max-h-[90vh] overflow-y-auto">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-lg font-bold text-white">Nova Medição</h3>
                    <button onclick="measurementsManager.closeModal()" class="p-2 bg-zinc-800 rounded-full text-zinc-400 hover:text-white"><i data-lucide="x" class="w-5 h-5"></i></button>
                </div>
                
                <div class="space-y-4">
                    <div>
                        <label class="text-[10px] text-zinc-500 font-bold uppercase block mb-1.5 ml-1">Altura (cm) <span class="text-zinc-700 normal-case font-normal">- Apenas uma vez</span></label>
                        <input type="number" id="meas-height" class="w-full input-dark rounded-xl p-3 text-sm font-mono" placeholder="Ex: 175">
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <div>
                            <label class="text-[10px] text-[var(--theme-color)] font-bold uppercase block mb-1.5 ml-1">Peso (kg)</label>
                            <input type="number" id="meas-weight" class="w-full input-dark rounded-xl p-3 text-lg font-bold text-white font-mono border-[var(--theme-color)]" placeholder="0.0">
                        </div>
                        <div>
                            <label class="text-[10px] text-zinc-500 font-bold uppercase block mb-1.5 ml-1">Gordura (%)</label>
                            <input type="number" id="meas-fat" class="w-full input-dark rounded-xl p-3 text-lg font-bold text-white font-mono" placeholder="0.0">
                        </div>
                    </div>

                    <div class="h-px bg-zinc-800 my-2"></div>
                    <p class="text-[10px] text-zinc-500 font-bold uppercase mb-2 ml-1">Circunferências (cm)</p>

                    <div class="grid grid-cols-3 gap-3">
                        <div>
                            <label class="text-[9px] text-zinc-600 block mb-1">Braço</label>
                            <input type="number" id="meas-arm" class="w-full input-dark rounded-lg p-2 text-sm font-mono text-center" placeholder="0">
                        </div>
                        <div>
                            <label class="text-[9px] text-zinc-600 block mb-1">Cintura</label>
                            <input type="number" id="meas-waist" class="w-full input-dark rounded-lg p-2 text-sm font-mono text-center" placeholder="0">
                        </div>
                        <div>
                            <label class="text-[9px] text-zinc-600 block mb-1">Coxa</label>
                            <input type="number" id="meas-thigh" class="w-full input-dark rounded-lg p-2 text-sm font-mono text-center" placeholder="0">
                        </div>
                    </div>

                    <button onclick="measurementsManager.save()" class="w-full mt-6 bg-[var(--theme-color)] text-white font-bold py-4 rounded-xl shadow-lg shadow-[var(--theme-glow)] transition-transform active:scale-[0.98]">
                        SALVAR DADOS
                    </button>
                </div>
            </div>
        </div>
        `;
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

        if (d) {
            if (navigator.vibrate) navigator.vibrate(50);
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
        if (!store.data.weights) store.data.weights = {};
        if (!store.data.prevWeights) store.data.prevWeights = {};
        if (!store.data.prevWeights[ex]) store.data.prevWeights[ex] = store.data.weights[ex] || 0;
        store.data.weights[ex] = v;

        if (!store.data.loadHistory) store.data.loadHistory = {};
        if (!store.data.loadHistory[ex]) store.data.loadHistory[ex] = [];

        const today = utils.getTodayDate();
        const history = store.data.loadHistory[ex];
        const existingEntry = history.find(h => h.date === today);

        if (existingEntry) {
            existingEntry.load = v;
        } else {
            history.push({ date: today, load: v });
        }

        store.save();
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },

    // NOVO MÉTODO STEPPER
    adjustWeight(exId, delta) {
        const inputEl = document.getElementById(`weight-input-${exId}`);
        let currentVal = parseFloat(store.data.weights[exId]) || 0;
        let newVal = currentVal + delta;
        if (newVal < 0) newVal = 0;
        newVal = Math.round(newVal * 10) / 10;
        this.weight(exId, newVal);
        if (inputEl) {
            inputEl.value = newVal;
            inputEl.style.color = 'var(--theme-color)';
            setTimeout(() => inputEl.style.color = 'white', 300);
        }
    },

    setRPE(ex, v) {
        if (!store.data.rpe) store.data.rpe = {};
        store.data.rpe[ex] = v;
        store.save();
    },

    cardio() {
        if (!store.data.cardioHistory) store.data.cardioHistory = {};
        const d = utils.getTodayDate();
        store.data.cardioHistory[d] = !store.data.cardioHistory[d];
        store.save();
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },

    toggleVideo(exId) {
        if (!store.data.visibleVideos) store.data.visibleVideos = {};
        store.data.visibleVideos[exId] = !store.data.visibleVideos[exId];
        if (store.data.visibleGraphs[exId]) store.data.visibleGraphs[exId] = false;
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },

    toggleGraph(exId) {
        if (!store.data.visibleGraphs) store.data.visibleGraphs = {};
        store.data.visibleGraphs[exId] = !store.data.visibleGraphs[exId];
        if (store.data.visibleVideos[exId]) store.data.visibleVideos[exId] = false;
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },

    reset(id) {
        if (!confirm('Reiniciar esta sessão? (Seu XP será mantido)')) return;
        const w = WORKOUT_PLAN.find(x => x.id === id);
        if (w && store.data.completedSets) {
            w.exercises.forEach(ex => {
                for (let i = 0; i < 4; i++) {
                    delete store.data.completedSets[`${ex.id}-${i}`];
                }
            });
            store.save();
            router.renderDetail(document.getElementById('main-content'), router.currentParams);
        }
    },

    finish() {
        const btn = document.getElementById('btn-finish-session');
        if (btn) {
            btn.innerHTML = '<i data-lucide="check" class="w-6 h-6 animate-bounce"></i> TREINO CONCLUÍDO!';
            btn.classList.add('bg-green-600', 'scale-105');
            safeIcons();
        }
        celebrateCompletion();
        if (navigator.vibrate) navigator.vibrate([100, 50, 100, 50, 200]);
        setTimeout(() => { router.navigate('home'); }, 3000);
    }
};

function celebrateCompletion() {
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 8 + 4 + 'px';
        const left = Math.random() * 100 + 'vw';
        const delay = Math.random() * 0.5 + 's';
        const duration = Math.random() * 2 + 1 + 's';
        const color = ['#3b82f6', '#ef4444', '#10b981', '#f97316', '#FD0963', '#8A00c4'][Math.floor(Math.random() * 6)];

        particle.style.cssText = `
            position: fixed;
            bottom: -20px;
            left: ${left};
            width: ${size};
            height: ${size};
            background-color: ${color};
            border-radius: 50%;
            z-index: 9999;
            pointer-events: none;
            opacity: 0;
            box-shadow: 0 0 10px ${color};
            animation: riseAndFade ${duration} ease-out ${delay} forwards;
        `;
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 3000);
    }
}

function initApp() {
    const splash = document.getElementById('splash-screen');
    setTimeout(() => {
        if (splash) {
            splash.classList.add('splash-hidden');
            setTimeout(() => { splash.style.display = 'none'; }, 500);
        }
    }, 1500);

    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes riseAndFade {
                0% { transform: translateY(0) scale(1); opacity: 1; }
                50% { opacity: 1; }
                100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
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