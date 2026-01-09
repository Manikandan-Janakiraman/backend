import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, Activity, ArrowUpRight, Code, Terminal, Box, Play, Info, Layers, RefreshCw, Globe, ArrowRight } from 'lucide-react';

import DashboardLayout from './layouts/DashboardLayout';
import { topicData } from './data/topicData';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

// Keep the existing visuals for now as they are used in TopicViewer
const ConditionVisual = () => {
  const [hour, setHour] = useState(12);
  const isDay = hour < 18;

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full">
      <div className={`
        relative w-48 h-48 rounded-full border-4 flex items-center justify-center overflow-hidden transition-colors duration-700
        ${isDay ? 'bg-sky-200 border-sky-400' : 'bg-indigo-950 border-indigo-500'}
      `}>
        <div className={`
           absolute transition-all duration-700 ease-in-out transform
           ${isDay ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
         `}>
          <div className="w-20 h-20 bg-yellow-400 rounded-full shadow-[0_0_40px_rgba(251,191,36,0.6)] animate-[pulse_3s_infinite]"></div>
        </div>
        <div className={`
           absolute transition-all duration-700 ease-in-out transform
           ${!isDay ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
         `}>
          <div className="w-16 h-16 bg-slate-100 rounded-full shadow-[0_0_20px_rgba(248,250,252,0.4)] relative">
            <div className="absolute top-2 right-4 w-3 h-3 bg-slate-200 rounded-full opacity-50"></div>
            <div className="absolute bottom-4 left-4 w-5 h-5 bg-slate-200 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-xs text-center">
        <div className="text-2xl font-bold mb-2 transition-colors duration-500" style={{ color: isDay ? '#0284c7' : '#6366f1' }}>
          {isDay ? "Good day! ☀️" : "Good evening! 🌙"}
        </div>
        <label className="block text-sm text-slate-500 mb-2 font-mono">hour = {hour}</label>
        <input
          type="range"
          min="0"
          max="23"
          value={hour}
          onChange={(e) => setHour(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
        />
      </div>
    </div>
  );
};

const ArrayVisual = ({ initialData }) => {
  const [fruits, setFruits] = useState(initialData || ["🍎", "🍌", "🍇"]);
  const handlePush = () => {
    const extraFruits = ["🍊", "🍋", "🍉", "🍍", "🥝", "🍒", "🍓"];
    setFruits(prev => [...prev, extraFruits[Math.floor(Math.random() * extraFruits.length)]]);
  };
  const handlePop = () => setFruits(prev => prev.slice(0, -1));

  return (
    <div className="flex flex-col items-center justify-center p-6 w-full">
      <div className="min-h-[80px] flex items-end justify-center gap-4 mb-8 flex-wrap">
        {fruits.map((fruit, idx) => (
          <div key={idx} className="text-4xl md:text-5xl animate-[bounce_0.5s_ease-out]">{fruit}</div>
        ))}
      </div>
      <div className="flex gap-4">
        <button onClick={handlePush} className="flex items-center gap-2 px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg font-medium transition-colors shadow-sm active:transform active:scale-95"><Box size={18} /> Push</button>
        <button onClick={handlePop} className="flex items-center gap-2 px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg font-medium transition-colors shadow-sm active:transform active:scale-95 disabled:opacity-50" disabled={fruits.length === 0}><Layers size={18} /> Pop</button>
      </div>
    </div>
  );
};

const LoopVisual = () => {
  const [index, setIndex] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setIndex(prev => {
        if (prev >= 4) { setIsRunning(false); return -1; }
        return prev + 1;
      });
    }, 800);
    return () => clearInterval(interval);
  }, [isRunning]);

  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex gap-2">
        {[0, 1, 2, 3, 4].map(i => (
          <div key={i} className={`w-12 h-12 flex items-center justify-center rounded-lg border-2 font-bold text-lg transition-all duration-300 ${index === i ? 'bg-indigo-600 border-indigo-600 text-white scale-110 shadow-lg' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>{i}</div>
        ))}
      </div>
      <button onClick={() => { setIndex(-1); setIsRunning(true); }} disabled={isRunning} className="flex items-center gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50"><Play size={16} /> {isRunning ? "Running..." : "Run Loop"}</button>
    </div>
  );
};

const FunctionVisual = () => {
  const [p1, setP1] = useState(5);
  const [p2, setP2] = useState(10);
  const [result, setResult] = useState(50);
  const [isAnimating, setIsAnimating] = useState(false);

  const calculate = () => {
    setIsAnimating(true);
    setTimeout(() => { setResult(p1 * p2); setIsAnimating(false); }, 500);
  }

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex items-center gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl relative text-slate-900">
        <input type="number" value={p1} onChange={e => setP1(Number(e.target.value))} className="w-16 p-2 border rounded text-center" />
        <input type="number" value={p2} onChange={e => setP2(Number(e.target.value))} className="w-16 p-2 border rounded text-center" />
        <div className={`flex flex-col items-center justify-center w-24 h-24 bg-slate-900 text-white rounded-xl shadow-lg z-10 transition-transform ${isAnimating ? 'scale-110' : 'scale-100'}`}><Code size={20} className="mb-2 text-indigo-400" /><span className="font-mono text-sm">Func</span></div>
        <div className="w-16 p-2 bg-green-100 text-green-700 border border-green-200 rounded text-center font-bold">{result}</div>
      </div>
      <button onClick={calculate} className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700">Calculate</button>
    </div>
  );
}

const OperatorVisual = () => {
  const [a, setA] = useState(10);
  const [b, setB] = useState(5);
  const [op, setOp] = useState('+');
  const res = { '+': a + b, '-': a - b, '*': a * b, '/': b !== 0 ? (a / b).toFixed(2) : 'Err' }[op];

  return (
    <div className="flex items-center justify-center gap-4 text-xl font-mono text-slate-800">
      <input type="number" value={a} onChange={e => setA(Number(e.target.value))} className="w-16 p-2 border rounded text-center" />
      <select value={op} onChange={e => setOp(e.target.value)} className="p-2 border rounded bg-slate-100 cursor-pointer"><option value="+">+</option><option value="-">-</option><option value="*">×</option><option value="/">÷</option></select>
      <input type="number" value={b} onChange={e => setB(Number(e.target.value))} className="w-16 p-2 border rounded text-center" />
      <span className="text-slate-400">=</span>
      <div className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-lg font-bold min-w-[3rem] text-center">{res}</div>
    </div>
  );
}

const AsyncVisual = () => {
  const [step, setStep] = useState(0);
  const runAsync = () => {
    setStep(1);
    setTimeout(() => { setStep(2); setTimeout(() => setStep(0), 2000); }, 2000);
  };
  return (
    <div className="flex flex-col items-center gap-6 w-full text-slate-800">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all ${step >= 0 ? 'bg-indigo-600 scale-110' : 'bg-slate-300'}`}>1</div>
        <ArrowRight className={`transition-colors ${step >= 1 ? 'text-indigo-600' : 'text-slate-300'}`} />
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all ${step >= 1 ? 'bg-yellow-500 animate-pulse scale-125' : 'bg-slate-300'}`}>{step === 1 ? "..." : "2"}</div>
        <ArrowRight className={`transition-colors ${step >= 2 ? 'text-indigo-600' : 'text-slate-300'}`} />
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white transition-all ${step === 2 ? 'bg-green-500 scale-110' : 'bg-slate-300'}`}>3</div>
      </div>
      <button onClick={runAsync} disabled={step !== 0} className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50">Start Process</button>
    </div>
  )
};

const VariableVisual = () => {
  const [val, setVal] = useState("John");
  return (
    <div className="flex flex-col items-center gap-4 w-full text-slate-800">
      <div className="flex items-center gap-3 p-4 bg-slate-100 rounded-xl border border-slate-200">
        <span className="font-mono font-bold text-primary">let</span>
        <span className="font-mono">name = </span>
        <input type="text" value={val} onChange={e => setVal(e.target.value)} className="bg-white px-3 py-1 rounded border border-slate-300 font-mono w-32" />
      </div>
      <p className="text-sm text-slate-500 italic">Try changing the value!</p>
    </div>
  )
}

const ObjectVisual = () => {
  const [obj, setObj] = useState({ name: "Alice", age: 25 });
  return (
    <div className="flex flex-col gap-4 w-full max-w-xs text-slate-800">
      <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 shadow-lg">
        <div className="text-xs text-slate-400 uppercase font-bold mb-4 tracking-widest">Memory Heap</div>
        {Object.entries(obj).map(([k, v]) => (
          <div key={k} className="flex justify-between font-mono py-2 border-b border-slate-50 last:border-0">
            <span className="text-indigo-600">{k}:</span>
            <span className="text-emerald-600">"{v}"</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const ClassVisual = () => {
  const [instances, setInstances] = useState([]);
  return (
    <div className="flex flex-col items-center gap-6 w-full text-slate-800">
      <div className="flex gap-4">
        <button onClick={() => setInstances([...instances, { id: Date.now(), color: 'bg-indigo-500' }])} className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm">new Dog()</button>
        <button onClick={() => setInstances([])} className="px-4 py-2 bg-rose-100 text-rose-600 rounded-lg text-sm">Clear</button>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {instances.map(i => (
          <div key={i.id} className={`w-16 h-16 ${i.color} rounded-2xl shadow-lg flex items-center justify-center text-white font-bold animate-[bounce_0.5s]`}>Dog</div>
        ))}
      </div>
    </div>
  )
}

const TopicViewer = ({ topic }) => {
  const data = topicData[topic] || topicData['default'];
  const renderVisual = () => {
    switch (data.visualType) {
      case 'loop-visual': return <LoopVisual />;
      case 'function-visual': return <FunctionVisual />;
      case 'operator-visual': return <OperatorVisual />;
      case 'condition-interactive': return <ConditionVisual />;
      case 'array-interactive': return <ArrayVisual initialData={data.visualData} />;
      case 'async-visual': return <AsyncVisual />;
      case 'variable-visual': return <VariableVisual />;
      case 'object-visual': return <ObjectVisual />;
      case 'class-visual': return <ClassVisual />;
      case 'text-animation': return <div className="text-5xl font-bold text-gradient animate-pulse">{data.visualContent}</div>;
      default: return <div className="mt-4 p-8 bg-slate-50 rounded-xl border-2 border-dashed border-slate-200 text-slate-500">Visual coming soon...</div>;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="glass-card p-8 border-none bg-white text-slate-900 shadow-xl">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-4">
          <span className="p-3 bg-primary/10 rounded-2xl text-primary"><Code size={32} /></span>
          {data.title || topic}
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed max-w-4xl">{data.definition}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-white/5">
          <div className="bg-slate-900 px-6 py-3 flex items-center justify-between border-b border-white/5">
            <span className="text-slate-400 text-sm font-mono flex items-center gap-2"><Terminal size={14} /> index.js</span>
            <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-rose-500"></div><div className="w-3 h-3 rounded-full bg-amber-500"></div><div className="w-3 h-3 rounded-full bg-emerald-500"></div></div>
          </div>
          <div className="p-6 overflow-x-auto"><pre className="font-mono text-base text-indigo-300"><code>{data.code}</code></pre></div>
        </div>
        <div className="glass-card p-8 bg-white text-slate-900 border-none shadow-xl">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Interactive Preview</h3>
          <div className="bg-slate-50 rounded-2xl p-6 min-h-[300px] flex items-center justify-center border border-slate-100">{renderVisual()}</div>
        </div>
      </div>
    </div>
  );
}

const TutorialPage = ({ currentTopic, setCurrentTopic }) => (
  <TopicViewer topic={currentTopic} />
);

function App() {
  const [currentTopic, setCurrentTopic] = useState('Introduction');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<DashboardLayout onMenuSelect={setCurrentTopic}><Home /></DashboardLayout>} />
        <Route path="/profile" element={<DashboardLayout onMenuSelect={setCurrentTopic}><Profile /></DashboardLayout>} />
        <Route path="/tutorials" element={<DashboardLayout onMenuSelect={setCurrentTopic}><TutorialPage currentTopic={currentTopic} setCurrentTopic={setCurrentTopic} /></DashboardLayout>} />

        {/* Redirect if unknown route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
