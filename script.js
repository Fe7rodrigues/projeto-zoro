/**
 * PROJETO ZORO V4.8 - CORE LOGIC
 * Autor: Fernando Rodrigues
 * Inovações: Tutoriais YouTube, Kikos Mapping, Mobile Optimization
 */

// --- CONFIGURAÇÃO ---
const THEMES = {
    zoro:  { color: '#22c55e', hover: '#16a34a', glow: 'rgba(34, 197, 94, 0.5)', bgSoft: 'rgba(34, 197, 94, 0.1)' },
    luffy: { color: '#ef4444', hover: '#dc2626', glow: 'rgba(239, 68, 68, 0.5)', bgSoft: 'rgba(239, 68, 68, 0.1)' },
    sanji: { color: '#3b82f6', hover: '#2563eb', glow: 'rgba(59, 130, 246, 0.5)', bgSoft: 'rgba(59, 130, 246, 0.1)' },
    ace:   { color: '#f97316', hover: '#ea580c', glow: 'rgba(249, 115, 22, 0.5)', bgSoft: 'rgba(249, 115, 22, 0.1)' }
};

const RANKS = [
    { name: "Aprendiz", minXP: 0 }, { name: "Caçador", minXP: 50 },
    { name: "Supernova", minXP: 200 }, { name: "Shichibukai", minXP: 500 },
    { name: "Yonkou", minXP: 1000 }, { name: "Rei do Inferno", minXP: 2000 }
];

// --- DADOS DO TREINO (ABCDEF) - VÍDEOS PANOBIANCO/KIKOS ---
const WORKOUT_PLAN = [
    { id: 'day-a', letter: 'A', title: 'Peitoral & Abdômen', focus: 'Empurrar', exercises: [
        { id: 'a1', name: 'Supino Máquina', machine: 'Kikos Pro Concept II', sets: 4, reps: '8-10', rest: 45, youtube: 'UfYsjtao108' }, // Fast Fit - Supino Máquina
        { id: 'a2', name: 'Peck Deck', machine: 'Kikos Pro Station TTMS25', sets: 4, reps: '8-10', rest: 45, youtube: 'a5XwjsD3AOI' }, // Genérico PT-BR
        { id: 'a3', name: 'Supino Inclinado', machine: 'Kikos Pro Titanium TTS12', sets: 4, reps: '8-10', rest: 45, youtube: '_OodPWexj_g' }, // Genérico Máquina
        { id: 'a4', name: 'Cross Over', machine: 'Kikos Pro Titanium TTMS20', sets: 4, reps: '8-10', rest: 45, youtube: '7UC_8lsE2w0' }, // Genérico Polia
        { id: 'a5', name: 'Abd. Machine', machine: 'Kikos Pro Station TTFW60', sets: 4, reps: '15-20', rest: 45, youtube: 'qWtYjH0enBA' }, // Genérico Máquina
        { id: 'a6', name: 'Rotação Tronco', machine: 'Kikos Torso Rotation', sets: 4, reps: '15-20', rest: 45, youtube: 'tDBYMZxwXQ8' }  // Genérico
    ]},
    { id: 'day-b', letter: 'B', title: 'Dorsais & Lombar', focus: 'Puxar', exercises: [
        { id: 'b1', name: 'Puxada Alta', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'UO70dS2tTyQ' }, // Fast Fit - Puxada
        { id: 'b2', name: 'Puxada Triângulo', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'UO70dS2tTyQ' }, // Fast Fit - Puxada
        { id: 'b3', name: 'Remada Baixa', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'MwyrOd_vwB8' }, // Fast Fit - Remada Baixa
        { id: 'b4', name: 'Remada Máquina', machine: 'Kikos Pro Plate Load', sets: 4, reps: '8-10', rest: 45, youtube: 'TeFo51Q_Nsc' }, // Genérico Máquina
        { id: 'b5', name: 'Pulldown', machine: 'Kikos Crossover Polia', sets: 4, reps: '8-10', rest: 45, youtube: 'Jgei5V3dE48' }, // Genérico
        { id: 'b6', name: 'Extensão Lombar', machine: 'Kikos Banco Lombar', sets: 4, reps: '12-15', rest: 60, youtube: 'ph3pddpKzzw' } // Genérico
    ]},
    { id: 'day-c', letter: 'C', title: 'Quadríceps & Pant.', focus: 'Pernas Ant.', exercises: [
        { id: 'c1', name: 'Leg Press 45º', machine: 'Kikos Plate Load PR70', sets: 4, reps: '8-10', rest: 60, youtube: 'uJu3Yph10cI' }, // Fast Fit - Leg Press 45
        { id: 'c2', name: 'Hack Machine', machine: 'Kikos Pro Station TTPL79', sets: 4, reps: '8-10', rest: 60, youtube: 'O8gOJu9ph2E' }, // Fast Fit - Agachamento Hack
        { id: 'c3', name: 'Cad. Extensora', machine: 'Kikos Plate Load PR71', sets: 4, reps: '8-10', rest: 45, youtube: '46WfkM7rRF4' }, // Genérico PT-BR
        { id: 'c4', name: 'Leg Horizontal', machine: 'Kikos Pro Titanium TTS70', sets: 4, reps: '8-10', rest: 45, youtube: 'gTo0HfVcLxo' }, // Fast Fit - Leg Horizontal
        { id: 'c5', name: 'Pant. Sentado', machine: 'Kikos Pro Station TTPL77', sets: 4, reps: '15-20', rest: 30, youtube: 'JbyjNymZOt0' }, // Genérico
        { id: 'c6', name: 'Pant. Leg Press', machine: 'Kikos Plate Load PR70', sets: 4, reps: '15-20', rest: 30, youtube: 'uJu3Yph10cI' } // Mesmo vídeo do Leg 45
    ]},
    { id: 'day-d', letter: 'D', title: 'Ombros & Trapézio', focus: 'Deltóides', exercises: [
        { id: 'd1', name: 'Desenv. Máq.', machine: 'Kikos Pro Station TTFW16', sets: 4, reps: '8-10', rest: 45, youtube: '7z31DogTlC8' }, // Fast Fit - Desenv. Smith
        { id: 'd2', name: 'Elev. Lateral', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'jMyZZJMlwSg' }, // Fast Fit - Elevação Latero Frontal
        { id: 'd3', name: 'Elev. Frontal', machine: 'Kikos Crossover', sets: 4, reps: '8-10', rest: 45, youtube: 'hRJ6tz5_iSA' }, // Genérico Cabo
        { id: 'd4', name: 'Peck Deck Inv.', machine: 'Kikos Peck Deck', sets: 4, reps: '8-10', rest: 45, youtube: '5_iV9Q5Q55g' }, // Genérico
        { id: 'd5', name: 'Remada Alta', machine: 'Kikos Crossover', sets: 4, reps: '8-10', rest: 45, youtube: '2F8_gJ9o_cM' }, // Genérico Cabo
        { id: 'd6', name: 'Encolhimento', machine: 'Kikos Smith Machine', sets: 4, reps: '12-15', rest: 45, youtube: '8j2Gj_6I5xI' }  // Genérico Smith
    ]},
    { id: 'day-e', letter: 'E', title: 'Bíceps & Tríceps', focus: 'Braços', exercises: [
        { id: 'e1', name: 'Tríceps Pulley', machine: 'Kikos Crossover', sets: 4, reps: '8-10', rest: 45, youtube: 'ga8dtLyTj1M' }, // Fast Fit - Tríceps
        { id: 'e2', name: 'Tríceps Corda', machine: 'Kikos Crossover', sets: 4, reps: '8-10', rest: 45, youtube: 'vB5OHsJ3ECE' }, // Genérico Corda
        { id: 'e3', name: 'Tríceps Máq.', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: '3_9d1g7o_cM' }, // Genérico Máquina
        { id: 'e4', name: 'Rosca Scott', machine: 'Kikos Pro Scott', sets: 4, reps: '8-10', rest: 45, youtube: '2jDrDoW1Z0o' }, // Genérico Máquina
        { id: 'e5', name: 'Rosca Direta', machine: 'Kikos Crossover Baixo', sets: 4, reps: '8-10', rest: 45, youtube: 'vhcJP86SEos' }, // Fast Fit - Bíceps
        { id: 'e6', name: 'Rosca Martelo', machine: 'Kikos Crossover Corda', sets: 4, reps: '8-10', rest: 45, youtube: 'zC3nLlEpt4w' } // Genérico Corda
    ]},
    { id: 'day-f', letter: 'F', title: 'Posterior & Glúteos', focus: 'Cadeia Post.', exercises: [
        { id: 'f1', name: 'Mesa Flexora', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: '2piLtfoXX6k' }, // Genérico Mesa
        { id: 'f2', name: 'Cad. Flexora', machine: 'Kikos Pro Station', sets: 4, reps: '8-10', rest: 45, youtube: 'Y1o8iPiBI7k' }, // Fast Fit - Cadeira Flexora
        { id: 'f3', name: 'Cad. Abdutora', machine: 'Kikos Pro Station', sets: 4, reps: '12-15', rest: 45, youtube: 'Hs-9c39_rjo' }, // Fast Fit - Cadeira Abdutora
        { id: 'f4', name: 'Glúteo Máq.', machine: 'Kikos Glute Machine', sets: 4, reps: '8-10', rest: 45, youtube: 'Z8gztZ1_t9A' }, // Fast Fit - Glúteos
        { id: 'f5', name: 'Leg 45º Alto', machine: 'Kikos Plate Load PR70', sets: 4, reps: '8-10', rest: 60, youtube: 'uJu3Yph10cI' }, // Fast Fit - Leg Press 45
        { id: 'f6', name: 'Cad. Adutora', machine: 'Kikos Pro Station', sets: 4, reps: '12-15', rest: 45, youtube: 'p3g4wAsu0R4' } // Genérico Adutora
    ]}
];

// --- STORE ---
const store = {
    data: { 
        completedSets: {}, weights: {}, notes: {}, cardioHistory: {}, workoutHistory: {}, 
        settings: { theme: 'zoro', soundEnabled: true }, 
        xp: 0,
        visibleVideos: {} // Renomeado para clareza: controla visibilidade dos vídeos
    },
    load() {
        const saved = localStorage.getItem('zoro_v4_data');
        if (saved) { 
            const parsed = JSON.parse(saved);
            this.data = { ...this.data, ...parsed, visibleVideos: {} }; // Reseta estado de vídeo
            if(!this.data.settings) this.data.settings = { theme: 'zoro', soundEnabled: true }; 
        }
        themeManager.apply(this.data.settings.theme);
    },
    save() {
        const { visibleVideos, ...dataToSave } = this.data;
        dataToSave.xp = Object.values(this.data.completedSets).filter(Boolean).length;
        localStorage.setItem('zoro_v4_data', JSON.stringify(dataToSave));
    }
};

const themeManager = {
    apply(key) {
        const t = THEMES[key] || THEMES['zoro'];
        const r = document.documentElement.style;
        r.setProperty('--theme-color', t.color);
        r.setProperty('--theme-hover', t.hover);
        r.setProperty('--theme-glow', t.glow);
        r.setProperty('--theme-bg-soft', t.bgSoft);
    },
    setTheme(key) {
        store.data.settings.theme = key; this.apply(key); store.save();
        if (document.getElementById('main-header').classList.contains('hidden')) router.renderHome(document.getElementById('main-content'));
    }
};

const utils = {
    getTodayDate: () => new Date().toISOString().split('T')[0],
    getRank(xp) { return [...RANKS].reverse().find(r => xp >= r.minXP) || RANKS[0]; },
    getNextRank(xp) { return RANKS.find(r => r.minXP > xp); },
    getWeekDays() {
        const d = []; const today = new Date();
        for(let i=6; i>=0; i--) {
            const date = new Date(today); date.setDate(today.getDate()-i);
            d.push({ obj: date, iso: date.toISOString().split('T')[0], lbl: date.toLocaleDateString('pt-BR', {weekday:'narrow'}).toUpperCase() });
        }
        return d;
    },
    calculate1RM(w, r) { return Math.round(w * (1 + r/30)); },
    calculatePlates(target) {
        let rem = (target - 20) / 2; if(rem <= 0) return [];
        const plates = [25, 20, 15, 10, 5, 2.5, 1.25], res = [];
        for(let p of plates) { while(rem >= p) { res.push(p); rem -= p; } }
        return res;
    }
};

const timer = {
    interval: null, timeLeft: 0, defaultTime: 45, isActive: false, audioCtx: null,
    initAudio() { if(!this.audioCtx) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); },
    toggleMute() { store.data.settings.soundEnabled = !store.data.settings.soundEnabled; store.save(); this.updateMuteIcon(); },
    updateMuteIcon() {
        const btn = document.getElementById('btn-mute');
        if(btn) btn.innerHTML = store.data.settings.soundEnabled ? '<i data-lucide="volume-2" class="w-4 h-4"></i>' : '<i data-lucide="volume-x" class="w-4 h-4 text-red-500"></i>';
        lucide.createIcons();
    },
    beep() {
        if(!store.data.settings.soundEnabled || !this.audioCtx) return;
        const osc = this.audioCtx.createOscillator(); const gain = this.audioCtx.createGain();
        osc.connect(gain); gain.connect(this.audioCtx.destination);
        osc.frequency.value = 800; gain.gain.value = 0.1;
        osc.start(); gain.gain.exponentialRampToValueAtTime(0.00001, this.audioCtx.currentTime + 0.5);
        osc.stop(this.audioCtx.currentTime + 0.5);
    },
    start(s) {
        this.initAudio(); this.timeLeft = s; this.defaultTime = s; this.isActive = true;
        document.getElementById('timer-modal').classList.remove('hidden'); this.updateMuteIcon(); this.render(); this.run();
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
        if(btn) { btn.innerHTML = p ? '<i data-lucide="pause" class="w-5 h-5 fill-current"></i>' : '<i data-lucide="play" class="w-5 h-5 fill-current"></i>'; lucide.createIcons(); }
    }
};

const notesManager = {
    cid: null,
    open(id) { this.cid = id; document.getElementById('note-input').value = store.data.notes[id] || ''; document.getElementById('notes-modal').classList.remove('hidden'); },
    save() { store.data.notes[this.cid] = document.getElementById('note-input').value; store.save(); this.close(); router.renderDetail(document.getElementById('main-content'), router.currentParams); },
    close() { document.getElementById('notes-modal').classList.add('hidden'); }
};

const settings = {
    open() { document.getElementById('settings-modal').classList.remove('hidden'); },
    close() { document.getElementById('settings-modal').classList.add('hidden'); },
    clearAll() { if(confirm('RESETAR TUDO?')) { localStorage.removeItem('zoro_v4_data'); location.reload(); } },
    exportData() {
        const blob = new Blob([JSON.stringify(store.data)], {type: 'application/json'});
        const url = URL.createObjectURL(blob); const a = document.createElement('a');
        a.href = url; a.download = `zoro_v4_${utils.getTodayDate()}.json`; a.click();
    },
    importData(i) {
        const f = i.files[0]; if(!f) return;
        const r = new FileReader();
        r.onload = e => { try { store.data = JSON.parse(e.target.result); store.save(); alert('Sucesso!'); location.reload(); } catch(e) { alert('Erro.'); } };
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
        container.innerHTML = plates.length ? plates.map(p => `<span class="bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-xs font-bold text-white">${p}</span>`).join('') : '<span class="text-zinc-500 text-xs">Insira a carga total</span>';
    }
};

const router = {
    currentParams: null,
    navigate(route, params = {}) {
        this.currentParams = params;
        const app = document.getElementById('main-content');
        const header = document.getElementById('main-header');
        const nav = document.getElementById('bottom-nav');
        app.innerHTML = '';
        
        // Router Switch
        if (route === 'home') { header.classList.add('hidden'); nav.classList.remove('hidden'); this.renderHome(app); }
        else if (route === 'detail') { header.classList.remove('hidden'); nav.classList.add('hidden'); this.renderDetail(app, params); }
        else if (route === 'stats') { header.classList.add('hidden'); nav.classList.remove('hidden'); this.renderStats(app); }
        else if (route === 'tools') { header.classList.add('hidden'); nav.classList.remove('hidden'); this.renderTools(app); }
        else if (route === 'history') { header.classList.add('hidden'); nav.classList.remove('hidden'); app.innerHTML = '<div class="p-10 text-center text-zinc-500 flex flex-col items-center justify-center h-full"><i data-lucide="calendar-off" class="w-12 h-12 mb-4 opacity-50"></i><p>Histórico completo em breve...</p></div>'; }
        
        lucide.createIcons();
    },

    renderHome(c) {
        const rank = utils.getRank(store.data.xp);
        const next = utils.getNextRank(store.data.xp);
        let pct = 100, txt = `${store.data.xp} XP (Máx)`;
        if(next) {
            pct = Math.min(100, Math.round(((store.data.xp - rank.minXP) / (next.minXP - rank.minXP)) * 100));
            txt = `${store.data.xp} / ${next.minXP} XP`;
        }

        const days = utils.getWeekDays().map(d => {
            const done = store.data.workoutHistory[d.iso];
            return `<div class="flex flex-col items-center gap-1"><div class="w-8 h-10 rounded border flex items-center justify-center text-xs font-bold transition-all ${done ? 'bg-theme border-theme text-black shadow-[0_0_10px_var(--theme-glow)]' : 'bg-zinc-900 border-zinc-800 text-zinc-600'}">${done ? '<i data-lucide="check" class="w-4 h-4"></i>' : d.lbl}</div></div>`;
        }).join('');

        c.innerHTML = `
            <div class="px-4 animate-fade-in pb-10">
                <div class="mb-6 pt-2">
                    <div class="flex justify-between items-end mb-2">
                        <div><h2 class="text-xs font-bold text-zinc-500 uppercase">Nível Atual</h2><h1 class="text-2xl font-bold text-white tracking-tight text-theme drop-shadow-md">${rank.name}</h1></div>
                        <span class="text-[10px] font-mono text-zinc-400">${txt}</span>
                    </div>
                    <div class="h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800"><div class="h-full bg-theme animate-progress shadow-[0_0_10px_var(--theme-glow)]" style="--target-width: ${pct}%"></div></div>
                </div>
                <div class="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 mb-6 backdrop-blur-sm"><div class="flex justify-between mb-3"><h3 class="text-xs font-bold text-zinc-400 uppercase">Consistência</h3></div><div class="flex justify-between">${days}</div></div>
                
                <!-- Thermo Flame Reminder (Fixo) -->
                <div class="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/30 p-4 rounded-2xl flex items-center gap-4 mb-6 backdrop-blur-sm">
                    <div class="bg-red-500/20 p-2 rounded-lg">
                        <i data-lucide="flame" class="w-6 h-6 text-red-500"></i>
                    </div>
                    <div>
                        <h4 class="text-red-200 font-bold text-sm">Thermo Flame Ativo</h4>
                        <p class="text-red-400/60 text-xs">Lembrete: Tomar 30min antes do treino.</p>
                    </div>
                </div>

                <div class="grid gap-3">${WORKOUT_PLAN.map(day => {
                    let done = 0; day.exercises.forEach(ex => { for(let i=0;i<4;i++) if(store.data.completedSets[`${ex.id}-${i}`]) done++; });
                    const p = Math.round((done/(day.exercises.length*4))*100);
                    const isComplete = p === 100;
                    return `<button onclick="router.navigate('detail', {id: '${day.id}'})" class="relative w-full bg-zinc-900 border ${isComplete?'border-theme':'border-zinc-800'} p-4 rounded-2xl text-left overflow-hidden group active:scale-[0.98] transition-all hover:border-zinc-700">
                        <div class="absolute left-0 top-0 bottom-0 bg-theme opacity-10 transition-all duration-700" style="width: ${p}%"></div>
                        <div class="flex items-center gap-4 relative z-10">
                            <div class="h-10 w-10 rounded-xl ${isComplete?'bg-theme text-black':'bg-zinc-950 text-zinc-600 group-hover:text-theme'} border border-zinc-800 flex items-center justify-center font-bold text-lg transition-colors shadow-lg">${isComplete?'<i data-lucide="check" class="w-6 h-6"></i>':day.letter}</div>
                            <div class="flex-1"><h3 class="text-white font-bold text-sm">${day.title}</h3><p class="text-zinc-500 text-[10px] uppercase font-bold mt-0.5">${day.focus}</p></div>
                            <span class="text-xs font-mono font-bold ${p>0?'text-theme':'text-zinc-700'}">${p}%</span>
                        </div>
                    </button>`;
                }).join('')}</div>
                <div class="h-10"></div>
            </div>`;
    },

    renderDetail(c, p) {
        const w = WORKOUT_PLAN.find(x => x.id === p.id); if(!w) return;
        let load = 0; let totalSets = w.exercises.length * 4; let setsDone = 0;
        
        w.exercises.forEach(ex => {
            const wt = parseFloat(store.data.weights[ex.id]) || 0;
            for(let i=0;i<4;i++) if(store.data.completedSets[`${ex.id}-${i}`]) { load += wt * 10; setsDone++; }
        });

        document.getElementById('main-header').innerHTML = `
            <button onclick="router.navigate('home')" class="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors"><i data-lucide="chevron-left" class="w-6 h-6"></i></button>
            <div class="text-center"><h2 class="text-white font-bold text-sm tracking-wide uppercase">Treino ${w.letter}</h2><span class="text-[9px] text-zinc-500 font-mono block">Volume: ${load.toLocaleString()}kg</span></div>
            <button onclick="actions.reset('${w.id}')" class="p-2 -mr-2 text-zinc-600 hover:text-red-500 transition-colors"><i data-lucide="rotate-ccw" class="w-5 h-5"></i></button>`;

        c.innerHTML = `<div class="px-4 space-y-4 animate-slide-up pb-10">
            ${w.exercises.map((ex, i) => {
                const hasNote = (store.data.notes[ex.id]||'').trim().length > 0;
                const isVideoVisible = store.data.visibleVideos && store.data.visibleVideos[ex.id];
                const vidBtnClass = isVideoVisible ? 'text-theme border-theme bg-theme/10' : 'text-zinc-500 border-zinc-700 hover:text-white';
                
                // YouTube Content
                const videoContent = isVideoVisible ? `
                    <div class="mt-3 w-full rounded-xl overflow-hidden bg-black aspect-video border border-zinc-800 animate-fade-in relative group flex items-center justify-center">
                         <iframe class="w-full h-full" src="https://www.youtube.com/embed/${ex.youtube}?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end pointer-events-none">
                            <span class="text-[9px] text-zinc-300 font-mono bg-black/50 px-1 rounded truncate max-w-[120px]">${ex.machine || 'Kikos Generica'}</span>
                        </div>
                    </div>
                ` : '';

                return `<div class="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 relative shadow-sm transition-all">
                    <div class="flex justify-between items-start mb-3">
                        <div class="flex-1 pr-2">
                            <span class="text-zinc-500 text-[10px] font-bold uppercase mb-0.5 block">0${i+1} // ${ex.name}</span>
                            <div class="flex items-center gap-2 mt-1">
                                <div class="relative"><input type="number" value="${store.data.weights[ex.id]||''}" onchange="actions.weight('${ex.id}',this.value)" class="input-dark w-16 py-1 px-2 text-sm font-bold rounded-lg text-center" placeholder="kg"></div>
                                <button onclick="notesManager.open('${ex.id}')" class="relative w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center ${hasNote?'text-theme':'text-zinc-500'} border border-zinc-700 hover:border-theme transition-colors"><i data-lucide="clipboard" class="w-4 h-4"></i>${hasNote?'<span class="has-note-indicator"></span>':''}</button>
                                <button onclick="actions.toggleVideo('${ex.id}')" class="relative w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center border transition-colors ${vidBtnClass}"><i data-lucide="play-circle" class="w-4 h-4"></i></button>
                            </div>
                        </div>
                        <div class="flex gap-2 justify-end">
                            <div class="bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800 inline-flex items-center gap-1"><i data-lucide="repeat" class="w-3 h-3 text-theme"></i><span class="text-xs font-mono font-bold text-zinc-300">${ex.reps}</span></div>
                            <div class="bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800 inline-flex items-center gap-1"><i data-lucide="timer" class="w-3 h-3 text-theme"></i><span class="text-xs font-mono font-bold text-zinc-300">${ex.rest}s</span></div>
                        </div>
                    </div>
                    ${videoContent}
                    <div class="grid grid-cols-4 gap-2 mt-3">${[0,1,2,3].map(j => {
                        const done = store.data.completedSets[`${ex.id}-${j}`];
                        return `<button onclick="actions.toggle('${ex.id}',${j},${ex.rest})" class="btn-set h-10 rounded-lg flex flex-col items-center justify-center gap-0.5 ${done?'active':'bg-zinc-950 border-zinc-800 text-zinc-600'}"><span class="text-[9px] font-bold">SET ${j+1}</span></button>`;
                    }).join('')}</div>
                </div>`
            }).join('')}
            
            <div class="bg-zinc-900/50 rounded-2xl p-5 border border-zinc-800 mt-6 relative overflow-hidden group">
                <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity"><i data-lucide="flame" class="w-24 h-24"></i></div>
                <div class="flex items-center justify-between relative z-10">
                    <div><h3 class="text-white font-bold text-lg">Cardio Finish</h3><p class="text-zinc-400 text-xs">20 min Esteira • Thermo Flame</p></div>
                    <button onclick="actions.cardio()" class="w-12 h-12 rounded-full border-2 ${store.data.cardioHistory[utils.getTodayDate()]?'bg-theme border-theme text-black':'border-zinc-700 text-transparent'} flex items-center justify-center transition-all shadow-[0_0_15px_var(--theme-glow)]"><i data-lucide="check" class="w-6 h-6"></i></button>
                </div>
            </div>

            ${setsDone === totalSets && totalSets > 0 ? `
            <div class="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent z-20 flex justify-center pb-8 animate-slide-up">
                <button onclick="actions.finish()" class="w-full max-w-sm bg-theme hover:brightness-110 text-black font-bold py-4 rounded-2xl shadow-lg shadow-theme/20 flex items-center justify-center gap-2 transition-all transform hover:scale-105 animate-bounce-subtle"><i data-lucide="trophy" class="w-6 h-6"></i>CONCLUIR MISSÃO</button>
            </div><div class="h-24"></div>` : '<div class="h-10"></div>'}
        </div>`;
        
        // Re-run icons creation after updating innerHTML
        lucide.createIcons();
    },

    renderStats(c) {
        const days = utils.getWeekDays().reverse();
        const mockVolume = [12000, 14500, 0, 13200, 15000, 11000, 0]; 
        const maxVol = Math.max(...mockVolume);
        const bars = days.map((d, i) => {
            const h = (mockVolume[i] / maxVol) * 100;
            return `<div class="chart-bar-wrapper"><div class="chart-bar bg-theme animate-bar-grow" style="--target-height: ${h}%"></div><span class="text-[9px] text-zinc-500 font-bold">${d.lbl[0]}</span></div>`;
        }).join('');

        c.innerHTML = `
        <div class="px-4 animate-fade-in pt-6">
            <h1 class="text-2xl font-bold text-white mb-6">Estatísticas</h1>
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-4 shadow-sm">
                <h3 class="text-xs font-bold text-zinc-400 uppercase mb-4">Volume Semanal (Kg)</h3>
                <div class="chart-container items-end h-32 flex justify-between gap-2 border-b border-zinc-800 pb-2">${bars}</div>
            </div>
            <div class="grid grid-cols-2 gap-3">
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-4"><span class="text-xs text-zinc-500 block mb-1">Total Treinos</span><span class="text-2xl font-bold text-white font-mono">${Object.keys(store.data.workoutHistory).length}</span></div>
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-4"><span class="text-xs text-zinc-500 block mb-1">Séries Totais</span><span class="text-2xl font-bold text-theme font-mono">${store.data.xp}</span></div>
            </div><div class="h-10"></div>
        </div>`;
    },

    renderTools(c) {
        c.innerHTML = `
        <div class="px-4 animate-fade-in pt-6">
            <h1 class="text-2xl font-bold text-white mb-6">Ferramentas</h1>
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-4 shadow-sm">
                <div class="flex items-center gap-2 mb-4"><i data-lucide="calculator" class="w-5 h-5 text-theme"></i><h3 class="font-bold text-white">Estimativa 1RM</h3></div>
                <div class="flex gap-3 mb-4">
                    <div class="flex-1"><label class="text-[10px] text-zinc-500 block mb-1">CARGA (KG)</label><input type="number" id="rm-weight" class="w-full input-dark rounded-lg p-2 text-sm" placeholder="Ex: 60"></div>
                    <div class="flex-1"><label class="text-[10px] text-zinc-500 block mb-1">REPS</label><input type="number" id="rm-reps" class="w-full input-dark rounded-lg p-2 text-sm" placeholder="Ex: 8"></div>
                </div>
                <button onclick="tools.calc1RM()" class="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 rounded-lg text-xs mb-3 border border-zinc-700 transition-colors">CALCULAR</button>
                <div class="bg-zinc-950 rounded-lg p-3 text-center border border-zinc-800"><span class="text-xs text-zinc-500 uppercase tracking-widest">Resultado Teórico</span><div id="rm-result" class="text-2xl font-bold text-white font-mono mt-1">-- kg</div></div>
            </div>
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-sm">
                <div class="flex items-center gap-2 mb-4"><i data-lucide="disc" class="w-5 h-5 text-theme"></i><h3 class="font-bold text-white">Calculadora Anilhas</h3></div>
                <div class="mb-4"><label class="text-[10px] text-zinc-500 block mb-1">CARGA TOTAL (KG)</label><input type="number" id="plate-target" class="w-full input-dark rounded-lg p-2 text-sm mb-2" placeholder="Ex: 80"><p class="text-[10px] text-zinc-600">*Considerando barra de 20kg</p></div>
                <button onclick="tools.calcPlates()" class="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 rounded-lg text-xs mb-3 border border-zinc-700 transition-colors">CALCULAR (LADO ÚNICO)</button>
                <div id="plate-result" class="flex flex-wrap gap-2 justify-center bg-zinc-950 p-3 rounded-lg border border-zinc-800 min-h-[50px] items-center"><span class="text-zinc-600 text-xs">Anilhas aparecerão aqui</span></div>
            </div><div class="h-10"></div>
        </div>`;
    }
};

const actions = {
    toggle(ex, i, rest) {
        const k = `${ex}-${i}`; const d = !store.data.completedSets[k]; store.data.completedSets[k] = d;
        if(d) {
            if(navigator.vibrate) navigator.vibrate(50);
            store.data.xp = (store.data.xp || 0) + 1;
            timer.start(rest);
            store.data.workoutHistory[utils.getTodayDate()] = router.currentParams.id;
        } else {
            store.data.xp = Math.max(0, (store.data.xp || 0) - 1);
        }
        store.save(); router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    weight(ex, v) { store.data.weights[ex] = v; store.save(); router.renderDetail(document.getElementById('main-content'), router.currentParams); },
    cardio() { const d = utils.getTodayDate(); store.data.cardioHistory[d] = !store.data.cardioHistory[d]; store.save(); router.renderDetail(document.getElementById('main-content'), router.currentParams); },
    toggleVideo(exId) { // Atualizado para Video
        if(!store.data.visibleVideos) store.data.visibleVideos = {};
        store.data.visibleVideos[exId] = !store.data.visibleVideos[exId];
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    reset(id) {
        if(!confirm('Resetar treino?')) return;
        const w = WORKOUT_PLAN.find(x => x.id === id); let rm = 0;
        w.exercises.forEach(ex => { for(let i=0;i<4;i++) if(store.data.completedSets[`${ex.id}-${i}`]) { rm++; delete store.data.completedSets[`${ex.id}-${i}`]; } });
        store.data.xp = Math.max(0, store.data.xp - rm); store.save(); router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    finish() { alert('Treino Concluído! +100XP'); router.navigate('home'); }
};

document.addEventListener('DOMContentLoaded', () => { store.load(); router.navigate('home'); });