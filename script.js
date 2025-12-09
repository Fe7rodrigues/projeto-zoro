/**
 * PROJETO ZORO V3.2 - CORE LOGIC
 * Autor: Fernando Rodrigues
 * Stack: Vanilla JS + Tailwind
 * Atualização: Reps 8-10 & Feedback Hápitico
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
    { name: "Caçador de Piratas", minXP: 50 },
    { name: "Supernova", minXP: 200 },
    { name: "Shichibukai", minXP: 500 },
    { name: "Yonkou", minXP: 1000 },
    { name: "Rei do Inferno", minXP: 2000 }
];

// --- DADOS DO TREINO (ABCDEF) - Atualizado para 8-10 Reps ---
const WORKOUT_PLAN = [
    {
        id: 'day-a', letter: 'A', title: 'Peitoral & Abdômen', focus: 'Empurrar',
        exercises: [
            { id: 'a1', name: 'Supino Sentado Máquina', sets: 4, reps: '8-10', rest: 45 },
            { id: 'a2', name: 'Peck Deck (Voador)', sets: 4, reps: '8-10', rest: 45 },
            { id: 'a3', name: 'Supino Inclinado Máquina', sets: 4, reps: '8-10', rest: 45 },
            { id: 'a4', name: 'Cross Over Polia', sets: 4, reps: '8-10', rest: 45 },
            { id: 'a5', name: 'Abdominal Machine', sets: 4, reps: '15-20', rest: 45 }, // Abdômen mantém reps mais altas
            { id: 'a6', name: 'Rotação de Tronco', sets: 4, reps: '15-20', rest: 45 },
        ]
    },
    {
        id: 'day-b', letter: 'B', title: 'Dorsais & Lombar', focus: 'Puxar',
        exercises: [
            { id: 'b1', name: 'Puxada Alta Aberta', sets: 4, reps: '8-10', rest: 45 },
            { id: 'b2', name: 'Puxada Triângulo', sets: 4, reps: '8-10', rest: 45 },
            { id: 'b3', name: 'Remada Baixa Sentada', sets: 4, reps: '8-10', rest: 45 },
            { id: 'b4', name: 'Remada Máquina', sets: 4, reps: '8-10', rest: 45 },
            { id: 'b5', name: 'Pulldown Polia Alta', sets: 4, reps: '8-10', rest: 45 },
            { id: 'b6', name: 'Extensão Lombar', sets: 4, reps: '12-15', rest: 60 },
        ]
    },
    {
        id: 'day-c', letter: 'C', title: 'Quadríceps & Panturrilha', focus: 'Pernas Anterior',
        exercises: [
            { id: 'c1', name: 'Leg Press 45º (Baixo)', sets: 4, reps: '8-10', rest: 60 },
            { id: 'c2', name: 'Hack Machine', sets: 4, reps: '8-10', rest: 60 },
            { id: 'c3', name: 'Cadeira Extensora', sets: 4, reps: '8-10', rest: 45 },
            { id: 'c4', name: 'Leg Press Horizontal', sets: 4, reps: '8-10', rest: 45 },
            { id: 'c5', name: 'Panturrilha Sentado', sets: 4, reps: '15-20', rest: 30 },
            { id: 'c6', name: 'Panturrilha Leg Press', sets: 4, reps: '15-20', rest: 30 },
        ]
    },
    {
        id: 'day-d', letter: 'D', title: 'Ombros & Trapézio', focus: 'Deltóides',
        exercises: [
            { id: 'd1', name: 'Desenvolvimento Máq.', sets: 4, reps: '8-10', rest: 45 },
            { id: 'd2', name: 'Elevação Lateral Máq.', sets: 4, reps: '8-10', rest: 45 },
            { id: 'd3', name: 'Elevação Frontal Polia', sets: 4, reps: '8-10', rest: 45 },
            { id: 'd4', name: 'Peck Deck Inverso', sets: 4, reps: '8-10', rest: 45 },
            { id: 'd5', name: 'Remada Alta Polia', sets: 4, reps: '8-10', rest: 45 },
            { id: 'd6', name: 'Encolhimento Máq.', sets: 4, reps: '12-15', rest: 45 },
        ]
    },
    {
        id: 'day-e', letter: 'E', title: 'Bíceps & Tríceps', focus: 'Braços',
        exercises: [
            { id: 'e1', name: 'Tríceps Pulley Barra', sets: 4, reps: '8-10', rest: 45 },
            { id: 'e2', name: 'Tríceps Corda', sets: 4, reps: '8-10', rest: 45 },
            { id: 'e3', name: 'Tríceps Máquina', sets: 4, reps: '8-10', rest: 45 },
            { id: 'e4', name: 'Rosca Scott Máquina', sets: 4, reps: '8-10', rest: 45 },
            { id: 'e5', name: 'Rosca Direta Polia', sets: 4, reps: '8-10', rest: 45 },
            { id: 'e6', name: 'Rosca Martelo Polia', sets: 4, reps: '8-10', rest: 45 },
        ]
    },
    {
        id: 'day-f', letter: 'F', title: 'Posterior & Glúteos', focus: 'Cadeia Posterior',
        exercises: [
            { id: 'f1', name: 'Mesa Flexora', sets: 4, reps: '8-10', rest: 45 },
            { id: 'f2', name: 'Cadeira Flexora', sets: 4, reps: '8-10', rest: 45 },
            { id: 'f3', name: 'Cadeira Abdutora', sets: 4, reps: '12-15', rest: 45 },
            { id: 'f4', name: 'Glúteo Máquina', sets: 4, reps: '8-10', rest: 45 },
            { id: 'f5', name: 'Leg Press 45º (Alto)', sets: 4, reps: '8-10', rest: 60 },
            { id: 'f6', name: 'Cadeira Adutora', sets: 4, reps: '12-15', rest: 45 },
        ]
    }
];

// --- STORE (Gerenciamento de Estado) ---
const store = {
    data: {
        completedSets: {},
        weights: {},
        notes: {},
        cardioHistory: {},
        workoutHistory: {},
        settings: {
            theme: 'zoro',
            soundEnabled: true
        },
        xp: 0 
    },

    load() {
        const saved = localStorage.getItem('zoro_v3_data');
        if (saved) {
            const parsed = JSON.parse(saved);
            this.data = { ...this.data, ...parsed };
            // Garante que configurações existam para usuários antigos
            if(!this.data.settings) this.data.settings = { theme: 'zoro', soundEnabled: true };
        }
        themeManager.apply(this.data.settings.theme);
    },

    save() {
        // Recalcular XP baseado nos sets completados para consistência de dados
        this.data.xp = Object.values(this.data.completedSets).filter(Boolean).length;
        localStorage.setItem('zoro_v3_data', JSON.stringify(this.data));
    }
};

// --- THEME MANAGER (Gerenciador de Temas) ---
const themeManager = {
    apply(themeKey) {
        const theme = THEMES[themeKey] || THEMES['zoro'];
        const root = document.documentElement;
        root.style.setProperty('--theme-color', theme.color);
        root.style.setProperty('--theme-hover', theme.hover);
        root.style.setProperty('--theme-glow', theme.glow);
        root.style.setProperty('--theme-bg-soft', theme.bgSoft);
    },
    setTheme(key) {
        store.data.settings.theme = key;
        this.apply(key);
        store.save();
        // Se não estiver na home, não precisamos re-renderizar a home imediatamente
        if (document.getElementById('main-header').classList.contains('hidden')) {
             router.renderHome(document.getElementById('main-content'));
        }
    }
};

// --- UTILS (Funções Utilitárias) ---
const utils = {
    getTodayDate: () => new Date().toISOString().split('T')[0],
    
    getRank(xp) {
        return [...RANKS].reverse().find(r => xp >= r.minXP) || RANKS[0];
    },

    getNextRank(xp) {
        return RANKS.find(r => r.minXP > xp);
    },

    getWeekDays() {
        const dates = [];
        const today = new Date();
        for(let i=6; i>=0; i--) {
            const d = new Date(today);
            d.setDate(today.getDate() - i);
            dates.push({
                dateObj: d,
                iso: d.toISOString().split('T')[0],
                label: d.toLocaleDateString('pt-BR', { weekday: 'narrow' }).toUpperCase()
            });
        }
        return dates;
    }
};

// --- MODULES (Componentes Lógicos) ---

const timer = {
    interval: null,
    timeLeft: 0,
    defaultTime: 45,
    isActive: false,
    audioCtx: null,

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
        if(!store.data.settings.soundEnabled) return;
        if(!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.connect(gain);
        gain.connect(this.audioCtx.destination);
        osc.frequency.value = 800;
        gain.gain.value = 0.1;
        osc.start();
        gain.gain.exponentialRampToValueAtTime(0.00001, this.audioCtx.currentTime + 0.5);
        osc.stop(this.audioCtx.currentTime + 0.5);
    },

    start(seconds) {
        this.initAudio();
        this.timeLeft = seconds;
        this.defaultTime = seconds;
        this.isActive = true;
        document.getElementById('timer-modal').classList.remove('hidden');
        this.updateMuteIcon();
        this.render();
        this.run();
    },

    run() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
                this.render();
            } else {
                this.beep();
                // Vibração ao fim do timer
                if(navigator.vibrate) navigator.vibrate([200, 100, 200]);
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

    toggle() { this.isActive ? this.pause() : this.run(); },
    
    reset() {
        this.timeLeft = this.defaultTime;
        this.isActive = true;
        this.run();
    },
    
    addTime(sec) { this.timeLeft += sec; this.render(); },
    
    close() {
        this.pause();
        document.getElementById('timer-modal').classList.add('hidden');
    },

    render() {
        const el = document.getElementById('timer-display');
        if(!el) return;
        const min = Math.floor(this.timeLeft / 60);
        const sec = this.timeLeft % 60;
        el.innerText = `${min < 10 ? '0'+min : min}:${sec < 10 ? '0'+sec : sec}`;
        el.classList.toggle('text-theme', this.timeLeft === 0);
    },

    updateBtn(isPlaying) {
        const btn = document.getElementById('timer-toggle-btn');
        if(btn) {
            btn.innerHTML = isPlaying 
                ? '<i data-lucide="pause" class="w-5 h-5 fill-current"></i>' 
                : '<i data-lucide="play" class="w-5 h-5 fill-current"></i>';
            lucide.createIcons();
        }
    }
};

const notesManager = {
    currentId: null,
    open(id) {
        this.currentId = id;
        document.getElementById('note-input').value = store.data.notes[id] || '';
        document.getElementById('notes-modal').classList.remove('hidden');
    },
    save() {
        const txt = document.getElementById('note-input').value;
        store.data.notes[this.currentId] = txt;
        store.save();
        this.close();
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    close() { document.getElementById('notes-modal').classList.add('hidden'); }
};

const settings = {
    open() { document.getElementById('settings-modal').classList.remove('hidden'); },
    close() { document.getElementById('settings-modal').classList.add('hidden'); },
    clearAll() {
        if(confirm('RESETAR TUDO? Essa ação é irreversível.')) {
            localStorage.removeItem('zoro_v3_data');
            location.reload();
        }
    },
    exportData() {
        const blob = new Blob([JSON.stringify(store.data)], {type: 'application/json'});
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `zoro_v3_backup_${utils.getTodayDate()}.json`;
        a.click();
    },
    importData(input) {
        const file = input.files[0];
        if(!file) return;
        const r = new FileReader();
        r.onload = e => {
            try {
                store.data = JSON.parse(e.target.result);
                store.save();
                alert('Backup restaurado!');
                location.reload();
            } catch(e) { alert('Arquivo inválido.'); }
        };
        r.readAsText(file);
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
        
        if (route === 'home') {
            header.classList.add('hidden');
            nav.classList.remove('hidden');
            this.renderHome(app);
        } else if (route === 'detail') {
            header.classList.remove('hidden');
            nav.classList.add('hidden');
            this.renderDetail(app, params);
        }
        lucide.createIcons();
    },

    renderHome(container) {
        const weekDays = utils.getWeekDays();
        const currentRank = utils.getRank(store.data.xp);
        const nextRank = utils.getNextRank(store.data.xp);
        
        let progressPct = 100;
        let xpText = `${store.data.xp} XP (Máximo)`;
        
        if (nextRank) {
            const prevXP = currentRank.minXP;
            const range = nextRank.minXP - prevXP;
            const currentInRank = store.data.xp - prevXP;
            progressPct = Math.min(100, Math.round((currentInRank / range) * 100));
            xpText = `${store.data.xp} / ${nextRank.minXP} XP`;
        }

        const streakHtml = weekDays.map(d => {
            const done = store.data.workoutHistory[d.iso];
            const isToday = d.iso === utils.getTodayDate();
            let classes = 'bg-zinc-900 border-zinc-800 text-zinc-600';
            if (done) classes = 'bg-theme border-theme text-black';
            else if(isToday) classes = 'bg-zinc-900 border-theme text-theme animate-pulse';
            
            return `
            <div class="flex flex-col items-center gap-1">
                <div class="w-8 h-10 rounded border flex items-center justify-center text-xs font-bold ${classes}">
                    ${done ? '<i data-lucide="check" class="w-4 h-4"></i>' : d.label}
                </div>
            </div>`;
        }).join('');

        container.innerHTML = `
            <div class="px-4 animate-fade-in pb-10">
                <!-- Header Rank -->
                <div class="mb-6 pt-2">
                    <div class="flex justify-between items-end mb-2">
                        <div>
                            <h2 class="text-xs font-bold text-zinc-500 uppercase tracking-widest">Nível Atual</h2>
                            <h1 class="text-2xl font-bold text-white tracking-tight text-theme">${currentRank.name}</h1>
                        </div>
                        <span class="text-[10px] font-mono text-zinc-400">${xpText}</span>
                    </div>
                    <div class="h-2 bg-zinc-900 rounded-full overflow-hidden border border-zinc-800">
                        <div class="h-full bg-theme animate-progress" style="--target-width: ${progressPct}%"></div>
                    </div>
                </div>

                <!-- Consistency Board -->
                <div class="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-4 mb-6 relative overflow-hidden">
                    <div class="absolute inset-0 bg-theme opacity-5 pointer-events-none"></div>
                    <div class="flex justify-between items-center mb-3 relative z-10">
                        <h3 class="text-xs font-bold text-zinc-400 uppercase">Consistência</h3>
                        <div class="px-2 py-0.5 rounded bg-black/50 border border-zinc-800 text-[10px] text-zinc-300">
                            Esta Semana
                        </div>
                    </div>
                    <div class="flex justify-between relative z-10">
                        ${streakHtml}
                    </div>
                </div>

                <!-- Treinos -->
                <div class="grid gap-3">
                    ${WORKOUT_PLAN.map(day => {
                        const total = day.exercises.length * 4;
                        let done = 0;
                        day.exercises.forEach(ex => {
                            for(let i=0; i<4; i++) if(store.data.completedSets[`${ex.id}-${i}`]) done++;
                        });
                        const pct = Math.round((done/total)*100);
                        const isComplete = pct === 100;

                        return `
                        <button onclick="router.navigate('detail', {id: '${day.id}'})" 
                            class="relative w-full bg-zinc-900 border ${isComplete ? 'border-theme' : 'border-zinc-800'} p-4 rounded-2xl text-left transition-all active:scale-[0.98] group overflow-hidden">
                            <div class="absolute left-0 top-0 bottom-0 bg-theme opacity-10 transition-all duration-700" style="width: ${pct}%"></div>
                            <div class="flex items-center gap-4 relative z-10">
                                <div class="h-10 w-10 rounded-xl ${isComplete ? 'bg-theme text-black' : 'bg-zinc-950 text-zinc-600 group-hover:text-theme'} border border-zinc-800 flex items-center justify-center font-bold text-lg transition-colors">
                                    ${isComplete ? '<i data-lucide="check" class="w-6 h-6"></i>' : day.letter}
                                </div>
                                <div class="flex-1">
                                    <h3 class="text-white font-bold text-sm leading-tight">${day.title}</h3>
                                    <p class="text-zinc-500 text-[10px] uppercase font-bold mt-0.5">${day.focus}</p>
                                </div>
                                <span class="text-xs font-mono font-bold ${pct > 0 ? 'text-theme' : 'text-zinc-700'}">${pct}%</span>
                            </div>
                        </button>
                        `;
                    }).join('')}
                </div>

                <div class="h-10"></div>
            </div>
        `;
    },

    renderDetail(container, params) {
        const id = params.id || params;
        const workout = WORKOUT_PLAN.find(w => w.id === id);
        if(!workout) return;

        // Cálculo de Tonagem (Volume Load)
        let totalLoad = 0;
        workout.exercises.forEach(ex => {
            const weight = parseFloat(store.data.weights[ex.id]) || 0;
            // Estima repetições médias como 10 se não houver lógica complexa
            for(let i=0; i<4; i++) {
                if(store.data.completedSets[`${ex.id}-${i}`]) {
                    totalLoad += weight * 10; 
                }
            }
        });

        // Verifica conclusão
        const totalSets = workout.exercises.length * 4;
        let completedSets = 0;
        workout.exercises.forEach(ex => {
             for(let i=0; i<4; i++) if(store.data.completedSets[`${ex.id}-${i}`]) completedSets++;
        });
        const isWorkoutComplete = totalSets > 0 && totalSets === completedSets;

        // Header
        document.getElementById('main-header').innerHTML = `
            <button onclick="router.navigate('home')" class="p-2 -ml-2 text-zinc-400 hover:text-white transition-colors">
                <i data-lucide="chevron-left" class="w-6 h-6"></i>
            </button>
            <div class="text-center">
                <h2 class="text-white font-bold text-sm tracking-wide uppercase">Treino ${workout.letter}</h2>
                <span class="text-[9px] text-zinc-500 font-mono block">Tonagem: ${totalLoad.toLocaleString()}kg</span>
            </div>
            <button onclick="actions.reset('${workout.id}')" class="p-2 -mr-2 text-zinc-600 hover:text-red-500 transition-colors">
                <i data-lucide="rotate-ccw" class="w-5 h-5"></i>
            </button>
        `;

        // Content
        container.innerHTML = `
            <div class="px-4 space-y-4 animate-slide-up pb-10">
                ${workout.exercises.map((ex, idx) => {
                    const hasNote = (store.data.notes[ex.id] || '').trim().length > 0;
                    return `
                    <div class="bg-zinc-900 rounded-2xl p-4 border border-zinc-800 relative">
                        <div class="flex justify-between items-start mb-3">
                            <div class="flex-1 pr-2">
                                <span class="text-zinc-500 text-[10px] font-bold uppercase mb-0.5 block">0${idx+1} // ${ex.name}</span>
                                <div class="flex items-center gap-2 mt-1">
                                    <div class="relative">
                                        <input type="number" value="${store.data.weights[ex.id] || ''}" onchange="actions.weight('${ex.id}', this.value)" class="input-dark w-16 py-1 px-2 text-sm font-bold rounded-lg text-center" placeholder="kg">
                                    </div>
                                    <button onclick="notesManager.open('${ex.id}')" class="relative w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center ${hasNote ? 'text-theme' : 'text-zinc-500'} border border-zinc-700 hover:border-theme transition-colors">
                                        <i data-lucide="clipboard" class="w-4 h-4"></i>
                                        ${hasNote ? '<span class="has-note-indicator"></span>' : ''}
                                    </button>
                                </div>
                            </div>
                            <!-- ÁREA DE DADOS TÉCNICOS -->
                            <div class="flex gap-2 justify-end">
                                <!-- Badge Repetições -->
                                <div class="bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800 inline-flex items-center gap-1">
                                    <i data-lucide="repeat" class="w-3 h-3 text-theme"></i>
                                    <span class="text-xs font-mono font-bold text-zinc-300">${ex.reps}</span>
                                </div>
                                <!-- Badge Descanso -->
                                <div class="bg-zinc-950 px-2 py-1 rounded-md border border-zinc-800 inline-flex items-center gap-1">
                                    <i data-lucide="timer" class="w-3 h-3 text-theme"></i>
                                    <span class="text-xs font-mono font-bold text-zinc-300">${ex.rest}s</span>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-4 gap-2">
                            ${[0, 1, 2, 3].map(i => {
                                const done = store.data.completedSets[`${ex.id}-${i}`];
                                return `<button onclick="actions.toggle('${ex.id}', ${i}, ${ex.rest})" class="btn-set h-10 rounded-lg flex flex-col items-center justify-center gap-0.5 ${done ? 'active' : 'bg-zinc-950 border-zinc-800 text-zinc-600'}"><span class="text-[9px] font-bold">SET ${i+1}</span></button>`;
                            }).join('')}
                        </div>
                    </div>
                    `;
                }).join('')}

                <!-- Cardio -->
                <div class="bg-zinc-900/50 rounded-2xl p-5 border border-zinc-800 mt-6 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <i data-lucide="flame" class="w-24 h-24"></i>
                    </div>
                    <div class="flex items-center justify-between relative z-10">
                        <div>
                            <h3 class="text-white font-bold text-lg">Cardio Finish</h3>
                            <p class="text-zinc-400 text-xs">20 min Esteira • Thermo Flame</p>
                        </div>
                        <button onclick="actions.cardio()" class="w-12 h-12 rounded-full border-2 ${store.data.cardioHistory[utils.getTodayDate()] ? 'bg-theme border-theme text-black' : 'border-zinc-700 text-transparent'} flex items-center justify-center transition-all">
                            <i data-lucide="check" class="w-6 h-6"></i>
                        </button>
                    </div>
                </div>

                <!-- Botão de Conclusão de Treino -->
                ${isWorkoutComplete ? `
                <div class="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent z-20 flex justify-center pb-8 animate-slide-up">
                    <button onclick="actions.finish()" class="w-full max-w-sm bg-theme hover:brightness-110 text-black font-bold py-4 rounded-2xl shadow-lg shadow-theme/20 flex items-center justify-center gap-2 transition-all transform hover:scale-105 animate-bounce-subtle">
                        <i data-lucide="trophy" class="w-6 h-6"></i>
                        CONCLUIR MISSÃO
                    </button>
                </div>
                <div class="h-24"></div> 
                ` : '<div class="h-10"></div>'}

            </div>
        `;
    }
};

const actions = {
    toggle(ex, i, rest) {
        const k = `${ex}-${i}`;
        const wasDone = store.data.completedSets[k];
        store.data.completedSets[k] = !wasDone;
        
        if(!wasDone) {
            // Feedback Hápitico (Vibração curta)
            if(navigator.vibrate) navigator.vibrate(50);

            store.data.xp = (store.data.xp || 0) + 1;
            timer.start(rest);
            store.data.workoutHistory[utils.getTodayDate()] = router.currentParams.id;
        } else {
            store.data.xp = Math.max(0, (store.data.xp || 0) - 1);
        }
        
        store.save();
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    weight(ex, val) {
        store.data.weights[ex] = val;
        store.save();
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    cardio() {
        const d = utils.getTodayDate();
        store.data.cardioHistory[d] = !store.data.cardioHistory[d];
        store.save();
        router.renderDetail(document.getElementById('main-content'), router.currentParams);
    },
    reset(id) {
        if(!confirm('Resetar treino de hoje?')) return;
        const w = WORKOUT_PLAN.find(x => x.id === id);
        let setsRemoved = 0;
        w.exercises.forEach(ex => {
            for(let i=0; i<4; i++) {
                if(store.data.completedSets[`${ex.id}-${i}`]) setsRemoved++;
                delete store.data.completedSets[`${ex.id}-${i}`];
            }
        });
        store.data.xp = Math.max(0, store.data.xp - setsRemoved);
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