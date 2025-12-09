/**
 * PROJETO ZORO V4.0 - CORE LOGIC
 * Autor: Fernando Rodrigues
 * Inovações: Stats Chart, Plate Math, 1RM Calc, Gamificação Avançada
 */

// --- CONFIGURAÇÃO DE TEMAS ---
const THEMES = {
    zoro:  { color: '#22c55e', hover: '#16a34a', glow: 'rgba(34, 197, 94, 0.5)', bgSoft: 'rgba(34, 197, 94, 0.1)' },
    luffy: { color: '#ef4444', hover: '#dc2626', glow: 'rgba(239, 68, 68, 0.5)', bgSoft: 'rgba(239, 68, 68, 0.1)' },
    sanji: { color: '#3b82f6', hover: '#2563eb', glow: 'rgba(59, 130, 246, 0.5)', bgSoft: 'rgba(59, 130, 246, 0.1)' },
    ace:   { color: '#f97316', hover: '#ea580c', glow: 'rgba(249, 115, 22, 0.5)', bgSoft: 'rgba(249, 115, 22, 0.1)' }
};

const RANKS = [
    { name: "Aprendiz", minXP: 0 }, 
    { name: "Caçador", minXP: 50 },
    { name: "Supernova", minXP: 200 }, 
    { name: "Shichibukai", minXP: 500 },
    { name: "Yonkou", minXP: 1000 }, 
    { name: "Rei do Inferno", minXP: 2000 }
];

// --- DADOS DO TREINO (ABCDEF) - Atualizado para 8-10 Reps ---
const WORKOUT_PLAN = [
    { id: 'day-a', letter: 'A', title: 'Peitoral & Abdômen', focus: 'Empurrar', exercises: [
        { id: 'a1', name: 'Supino Máquina', sets: 4, reps: '8-10', rest: 45 },
        { id: 'a2', name: 'Peck Deck', sets: 4, reps: '8-10', rest: 45 },
        { id: 'a3', name: 'Supino Inclinado', sets: 4, reps: '8-10', rest: 45 },
        { id: 'a4', name: 'Cross Over', sets: 4, reps: '8-10', rest: 45 },
        { id: 'a5', name: 'Abd. Machine', sets: 4, reps: '15-20', rest: 45 },
        { id: 'a6', name: 'Rotação Tronco', sets: 4, reps: '15-20', rest: 45 }
    ]},
    { id: 'day-b', letter: 'B', title: 'Dorsais & Lombar', focus: 'Puxar', exercises: [
        { id: 'b1', name: 'Puxada Alta', sets: 4, reps: '8-10', rest: 45 },
        { id: 'b2', name: 'Puxada Triângulo', sets: 4, reps: '8-10', rest: 45 },
        { id: 'b3', name: 'Remada Baixa', sets: 4, reps: '8-10', rest: 45 },
        { id: 'b4', name: 'Remada Máquina', sets: 4, reps: '8-10', rest: 45 },
        { id: 'b5', name: 'Pulldown', sets: 4, reps: '8-10', rest: 45 },
        { id: 'b6', name: 'Extensão Lombar', sets: 4, reps: '12-15', rest: 60 }
    ]},
    { id: 'day-c', letter: 'C', title: 'Quadríceps & Pant.', focus: 'Pernas Ant.', exercises: [
        { id: 'c1', name: 'Leg Press 45º', sets: 4, reps: '8-10', rest: 60 },
        { id: 'c2', name: 'Hack Machine', sets: 4, reps: '8-10', rest: 60 },
        { id: 'c3', name: 'Cad. Extensora', sets: 4, reps: '8-10', rest: 45 },
        { id: 'c4', name: 'Leg Horizontal', sets: 4, reps: '8-10', rest: 45 },
        { id: 'c5', name: 'Pant. Sentado', sets: 4, reps: '15-20', rest: 30 },
        { id: 'c6', name: 'Pant. Leg Press', sets: 4, reps: '15-20', rest: 30 }
    ]},
    { id: 'day-d', letter: 'D', title: 'Ombros & Trapézio', focus: 'Deltóides', exercises: [
        { id: 'd1', name: 'Desenv. Máq.', sets: 4, reps: '8-10', rest: 45 },
        { id: 'd2', name: 'Elev. Lateral', sets: 4, reps: '8-10', rest: 45 },
        { id: 'd3', name: 'Elev. Frontal', sets: 4, reps: '8-10', rest: 45 },
        { id: 'd4', name: 'Peck Deck Inv.', sets: 4, reps: '8-10', rest: 45 },
        { id: 'd5', name: 'Remada Alta', sets: 4, reps: '8-10', rest: 45 },
        { id: 'd6', name: 'Encolhimento', sets: 4, reps: '12-15', rest: 45 }
    ]},
    { id: 'day-e', letter: 'E', title: 'Bíceps & Tríceps', focus: 'Braços', exercises: [
        { id: 'e1', name: 'Tríceps Pulley', sets: 4, reps: '8-10', rest: 45 },
        { id: 'e2', name: 'Tríceps Corda', sets: 4, reps: '8-10', rest: 45 },
        { id: 'e3', name: 'Tríceps Máq.', sets: 4, reps: '8-10', rest: 45 },
        { id: 'e4', name: 'Rosca Scott', sets: 4, reps: '8-10', rest: 45 },
        { id: 'e5', name: 'Rosca Direta', sets: 4, reps: '8-10', rest: 45 },
        { id: 'e6', name: 'Rosca Martelo', sets: 4, reps: '8-10', rest: 45 }
    ]},
    { id: 'day-f', letter: 'F', title: 'Posterior & Glúteos', focus: 'Cadeia Post.', exercises: [
        { id: 'f1', name: 'Mesa Flexora', sets: 4, reps: '8-10', rest: 45 },
        { id: 'f2', name: 'Cad. Flexora', sets: 4, reps: '8-10', rest: 45 },
        { id: 'f3', name: 'Cad. Abdutora', sets: 4, reps: '12-15', rest: 45 },
        { id: 'f4', name: 'Glúteo Máq.', sets: 4, reps: '8-10', rest: 45 },
        { id: 'f5', name: 'Leg 45º Alto', sets: 4, reps: '8-10', rest: 60 },
        { id: 'f6', name: 'Cad. Adutora', sets: 4, reps: '12-15', rest: 45 }
    ]}
];

// --- STORE (Gestão de Estado Local) ---
const store = {
    data: { 
        completedSets: {}, 
        weights: {}, 
        notes: {}, 
        cardioHistory: {}, 
        workoutHistory: {}, // { '2023-10-27': 'day-a' }
        settings: { theme: 'zoro', soundEnabled: true }, 
        xp: 0 
    },

    load() {
        const saved = localStorage.getItem('zoro_v4_data');
        if (saved) { 
            this.data = { ...this.data, ...JSON.parse(saved) }; 
            // Migração segura para configurações
            if(!this.data.settings) this.data.settings = { theme: 'zoro', soundEnabled: true }; 
        }
        themeManager.apply(this.data.settings.theme);
    },

    save() {
        // Recalcular XP baseado no número real de sets completados
        this.data.xp = Object.values(this.data.completedSets).filter(Boolean).length;
        localStorage.setItem('zoro_v4_data', JSON.stringify(this.data));
    }
};

// --- THEME MANAGER (Cores Dinâmicas) ---
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
        store.data.settings.theme = key; 
        this.apply(key); 
        store.save();
        // Atualiza a Home se estiver visível para refletir cores
        if (document.getElementById('main-header').classList.contains('hidden')) {
            router.renderHome(document.getElementById('main-content'));
        }
    }
};

// --- UTILS (Matemática e Datas) ---
const utils = {
    getTodayDate: () => new Date().toISOString().split('T')[0],
    
    getRank(xp) { 
        return [...RANKS].reverse().find(r => xp >= r.minXP) || RANKS[0]; 
    },
    
    getNextRank(xp) { 
        return RANKS.find(r => r.minXP > xp); 
    },
    
    getWeekDays() {
        const d = []; const today = new Date();
        for(let i=6; i>=0; i--) {
            const date = new Date(today); 
            date.setDate(today.getDate()-i);
            d.push({ 
                obj: date, 
                iso: date.toISOString().split('T')[0], 
                lbl: date.toLocaleDateString('pt-BR', {weekday:'narrow'}).toUpperCase() 
            });
        }
        return d;
    },
    
    // Fórmula de Epley para 1RM
    calculate1RM(weight, reps) { 
        return Math.round(weight * (1 + reps/30)); 
    },
    
    // Algoritmo Guloso para Anilhas
    calculatePlates(targetWeight, barWeight = 20) {
        let remaining = (targetWeight - barWeight) / 2;
        if(remaining <= 0) return [];
        
        // Anilhas padrão em academias (kg)
        const plates = [25, 20, 15, 10, 5, 2.5, 1.25];
        const result = [];
        
        for(let plate of plates) {
            while(remaining >= plate) {
                result.push(plate);
                remaining -= plate;
            }
        }
        return result;
    }
};

// --- MODULES (Componentes Isolados) ---

const timer = {
    interval: null, timeLeft: 0, defaultTime: 45, isActive: false, audioCtx: null,
    
    initAudio() { 
        if(!this.audioCtx) this.audioCtx = new (window.AudioContext || window.webkitAudioContext)(); 
    },
    
    toggleMute() { 
        store.data.settings.soundEnabled = !store.data.settings.soundEnabled; 
        store.save(); 
        this.updateMuteIcon(); 
    },
    
    updateMuteIcon() {
        const btn = document.getElementById('btn-mute');
        if(btn) btn.innerHTML = store.data.settings.soundEnabled 
            ? '<i data-lucide="volume-2" class="w-4 h-4"></i>' 
            : '<i data-lucide="volume-x" class="w-4 h-4 text-red-500"></i>';
        lucide.createIcons();
    },
    
    beep() {
        if(!store.data.settings.soundEnabled || !this.audioCtx) return;
        const osc = this.audioCtx.createOscillator(); 
        const gain = this.audioCtx.createGain();
        osc.connect(gain); gain.connect(this.audioCtx.destination);
        osc.frequency.value = 800; gain.gain.value = 0.1;
        osc.start(); 
        gain.gain.exponentialRampToValueAtTime(0.00001, this.audioCtx.currentTime + 0.5);
        osc.stop(this.audioCtx.currentTime + 0.5);
    },
    
    start(s) {
        this.initAudio(); this.timeLeft = s; this.defaultTime = s; this.isActive = true;
        document.getElementById('timer-modal').classList.remove('hidden'); 
        this.updateMuteIcon(); this.render(); this.run();
    },
    
    run() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) { 
                this.timeLeft--; this.render(); 
            } else { 
                this.beep(); 
                if(navigator.vibrate) navigator.vibrate([200, 100, 200]); // Feedback tátil
                this.pause(); 
                this.render(); 
            }
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
            btn.innerHTML = p 
                ? '<i data-lucide="pause" class="w-5 h-5 fill-current"></i>' 
                : '<i data-lucide="play" class="w-5 h-5 fill-current"></i>'; 
            lucide.createIcons(); 
        }
    }
};

const notesManager = {
    cid: null,
    open(id) { 
        this.cid = id; 
        document.getElementById('note-input').value = store.data.notes[id] || ''; 
        document.getElementById('notes-modal').classList.remove('hidden'); 
    },
    save() { 
        store.data.notes[this.cid] = document.getElementById('note-input').value; 
        store.save(); 
        this.close(); 
        // Atualiza a UI para mostrar o indicador de nota
        router.renderDetail(document.getElementById('main-content'), router.currentParams); 
    },
    close() { document.getElementById('notes-modal').classList.add('hidden'); }
};

const settings = {
    open() { document.getElementById('settings-modal').classList.remove('hidden'); },
    close() { document.getElementById('settings-modal').classList.add('hidden'); },
    clearAll() { 
        if(confirm('ATENÇÃO: Isso apagará TODOS os dados. Continuar?')) { 
            localStorage.removeItem('zoro_v4_data'); 
            location.reload(); 
        } 
    },
    exportData() {
        const blob = new Blob([JSON.stringify(store.data)], {type: 'application/json'});
        const url = URL.createObjectURL(blob); 
        const a = document.createElement('a');
        a.href = url; a.download = `zoro_v4_backup_${utils.getTodayDate()}.json`; 
        a.click();
    },
    importData(i) {
        const f = i.files[0]; if(!f) return;
        const r = new FileReader();
        r.onload = e => { 
            try { 
                store.data = JSON.parse(e.target.result); 
                store.save(); 
                alert('Dados importados com sucesso!'); 
                location.reload(); 
            } catch(e) { alert('Erro ao importar arquivo.'); } 
        };
        r.readAsText(f);
    }
};

// --- FERRAMENTAS MATEMÁTICAS ---
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
            ? plates.map(p => `<span class="bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-xs font-bold text-white shadow-sm">${p}</span>`).join('') 
            : '<span class="text-zinc-500 text-xs italic">Insira a carga total (Barra 20kg)</span>';
    }
};

// --- ROTEAMENTO E RENDERIZAÇÃO ---
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
                <!-- Rank Card -->
                <div class="mb-6 pt-2">
                    <div class="flex justify-between items-end mb-2">
                        <div>
                            <h2 class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Nível Atual</h2>
                            <h1 class="text-2xl font-bold text-white tracking-tight text-theme drop-shadow-md">${rank.name}</h1>
                        </div>
                        <span class="text-[10px] font-mono text-zinc-400">${txt}</span>
                    </div>
                    <div class="h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800"><div class="h-full bg-theme animate-progress shadow-[0_0_10px_var(--theme-glow)]" style="--target-width: ${pct}%"></div></div>
                </div>
                
                <!-- Consistency -->
                <div class="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 mb-6 backdrop-blur-sm">
                    <div class="flex justify-between mb-3"><h3 class="text-xs font-bold text-zinc-400 uppercase">Consistência</h3></div>
                    <div class="flex justify-between">${days}</div>
                </div>
                
                <!-- Workout List -->
                <div class="grid gap-3">
                    ${WORKOUT_PLAN.map(day => {
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
                    }).join('')}
                </div>
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
                return `<div class="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 relative shadow-sm">
                    <div class="flex justify-between items-start mb-3">
                        <div class="flex-1 pr-2"><span class="text-zinc-500 text-[10px] font-bold uppercase mb-0.5 block">0${i+1} // ${ex.name}</span>
                            <div class="flex items-center gap-2 mt-1">
                                <div class="relative"><input type="number" value="${store.data.weights[ex.id]||''}" onchange="actions.weight('${ex.id}',this.value)" class="input-dark w-16 py-1 px-2 text-sm font-bold rounded-lg text-center" placeholder="kg"></div>
                                <button onclick="notesManager.open('${ex.id}')" class="relative w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center ${hasNote?'text-theme':'text-zinc-500'} border border-zinc-700 hover:border-theme transition-colors"><i data-lucide="clipboard" class="w-4 h-4"></i>${hasNote?'<span class="has-note-indicator"></span>':''}</button>
                            </div>
                        </div>
                        <div class="flex gap-2 justify-end">
                            <div class="bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800 inline-flex items-center gap-1"><i data-lucide="repeat" class="w-3 h-3 text-theme"></i><span class="text-xs font-mono font-bold text-zinc-300">${ex.reps}</span></div>
                            <div class="bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800 inline-flex items-center gap-1"><i data-lucide="timer" class="w-3 h-3 text-theme"></i><span class="text-xs font-mono font-bold text-zinc-300">${ex.rest}s</span></div>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-2">${[0,1,2,3].map(j => {
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
    },

    renderStats(c) {
        // Mock Data for Charts (Simulação)
        const days = utils.getWeekDays().reverse();
        const mockVolume = [12000, 14500, 0, 13200, 15000, 11000, 0]; // Simulação
        const maxVol = Math.max(...mockVolume);

        const bars = days.map((d, i) => {
            const h = (mockVolume[i] / maxVol) * 100;
            return `<div class="chart-bar-wrapper">
                <div class="chart-bar bg-theme animate-bar-grow" style="--target-height: ${h}%"></div>
                <span class="text-[9px] text-zinc-500 font-bold">${d.lbl[0]}</span>
            </div>`;
        }).join('');

        c.innerHTML = `
        <div class="px-4 animate-fade-in pt-6">
            <h1 class="text-2xl font-bold text-white mb-6">Estatísticas</h1>
            
            <!-- Chart Card -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-4 shadow-sm">
                <h3 class="text-xs font-bold text-zinc-400 uppercase mb-4">Volume Semanal (Kg)</h3>
                <div class="chart-container items-end h-32 flex justify-between gap-2 border-b border-zinc-800 pb-2">
                    ${bars}
                </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
                    <span class="text-xs text-zinc-500 block mb-1">Total Treinos</span>
                    <span class="text-2xl font-bold text-white font-mono">${Object.keys(store.data.workoutHistory).length}</span>
                </div>
                <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-4">
                    <span class="text-xs text-zinc-500 block mb-1">Séries Totais</span>
                    <span class="text-2xl font-bold text-theme font-mono">${store.data.xp}</span>
                </div>
            </div>
            <div class="h-10"></div>
        </div>`;
    },

    renderTools(c) {
        c.innerHTML = `
        <div class="px-4 animate-fade-in pt-6">
            <h1 class="text-2xl font-bold text-white mb-6">Ferramentas</h1>

            <!-- 1RM Calculator -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 mb-4 shadow-sm">
                <div class="flex items-center gap-2 mb-4"><i data-lucide="calculator" class="w-5 h-5 text-theme"></i><h3 class="font-bold text-white">Estimativa 1RM</h3></div>
                <div class="flex gap-3 mb-4">
                    <div class="flex-1"><label class="text-[10px] text-zinc-500 block mb-1">CARGA (KG)</label><input type="number" id="rm-weight" class="w-full input-dark rounded-lg p-2 text-sm" placeholder="Ex: 60"></div>
                    <div class="flex-1"><label class="text-[10px] text-zinc-500 block mb-1">REPS</label><input type="number" id="rm-reps" class="w-full input-dark rounded-lg p-2 text-sm" placeholder="Ex: 8"></div>
                </div>
                <button onclick="tools.calc1RM()" class="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 rounded-lg text-xs mb-3 border border-zinc-700 transition-colors">CALCULAR</button>
                <div class="bg-zinc-950 rounded-lg p-3 text-center border border-zinc-800">
                    <span class="text-xs text-zinc-500 uppercase tracking-widest">Resultado Teórico</span>
                    <div id="rm-result" class="text-2xl font-bold text-white font-mono mt-1">-- kg</div>
                </div>
            </div>

            <!-- Plate Calculator -->
            <div class="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-sm">
                <div class="flex items-center gap-2 mb-4"><i data-lucide="disc" class="w-5 h-5 text-theme"></i><h3 class="font-bold text-white">Calculadora Anilhas</h3></div>
                <div class="mb-4">
                    <label class="text-[10px] text-zinc-500 block mb-1">CARGA TOTAL (KG)</label>
                    <input type="number" id="plate-target" class="w-full input-dark rounded-lg p-2 text-sm mb-2" placeholder="Ex: 80">
                    <p class="text-[10px] text-zinc-600">*Considerando barra de 20kg</p>
                </div>
                <button onclick="tools.calcPlates()" class="w-full bg-zinc-800 hover:bg-zinc-700 text-white font-bold py-2 rounded-lg text-xs mb-3 border border-zinc-700 transition-colors">CALCULAR (LADO ÚNICO)</button>
                <div id="plate-result" class="flex flex-wrap gap-2 justify-center bg-zinc-950 p-3 rounded-lg border border-zinc-800 min-h-[50px] items-center">
                    <span class="text-zinc-600 text-xs">Anilhas aparecerão aqui</span>
                </div>
            </div>
            <div class="h-10"></div>
        </div>`;
    }
};

const actions = {
    toggle(ex, i, rest) {
        const k = `${ex}-${i}`; 
        const d = !store.data.completedSets[k]; 
        store.data.completedSets[k] = d;
        
        if(d) {
            if(navigator.vibrate) navigator.vibrate(50); // Feedback Hápitico
            store.data.xp = (store.data.xp || 0) + 1;
            timer.start(rest);
            store.data.workoutHistory[utils.getTodayDate()] = router.currentParams.id;
        } else {
            store.data.xp = Math.max(0, (store.data.xp || 0) - 1);
        }
        
        store.save(); 
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    weight(ex, v) { store.data.weights[ex] = v; store.save(); router.renderDetail(document.getElementById('main-content'), router.currentParams); },
    cardio() { 
        const d = utils.getTodayDate(); 
        store.data.cardioHistory[d] = !store.data.cardioHistory[d]; 
        store.save(); 
        router.renderDetail(document.getElementById('main-content'), router.currentParams); 
    },
    reset(id) {
        if(!confirm('Resetar treino de hoje?')) return;
        const w = WORKOUT_PLAN.find(x => x.id === id); let rm = 0;
        w.exercises.forEach(ex => { for(let i=0;i<4;i++) if(store.data.completedSets[`${ex.id}-${i}`]) { rm++; delete store.data.completedSets[`${ex.id}-${i}`]; } });
        store.data.xp = Math.max(0, store.data.xp - rm); 
        store.save(); 
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    finish() { 
        alert('Missão Cumprida! Excelente treino, guerreiro!'); 
        router.navigate('home'); 
    }
};

// --- BOOT ---
document.addEventListener('DOMContentLoaded', () => { 
    store.load(); 
    router.navigate('home'); 
});