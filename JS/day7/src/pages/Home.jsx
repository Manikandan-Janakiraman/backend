import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Play, BookOpen, Clock, Users, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const progressionData = [
    { day: 'Mon', progress: 10 },
    { day: 'Tue', progress: 25 },
    { day: 'Wed', progress: 45 },
    { day: 'Thu', progress: 30 },
    { day: 'Fri', progress: 60 },
    { day: 'Sat', progress: 85 },
    { day: 'Sun', progress: 70 },
];

const Home = () => {
    return (
        <div className="space-y-8 animate-fade-in pb-12">
            {/* Hero Welcome */}
            <div className="glass-card bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-12 relative overflow-hidden">
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Master JavaScript <br /><span className="text-gradient">With Interactive Learning</span></h1>
                    <p className="text-text-muted text-lg mb-8">The most comprehensive guide to web development with real-time visual code execution and progressive tracking.</p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/courses" className="px-8 py-3 bg-primary rounded-xl font-bold hover:bg-primary-hover transition-all flex items-center gap-2">
                            Start Learning <ArrowRight size={20} />
                        </Link>
                        <button className="px-8 py-3 glass-input rounded-xl font-bold hover:bg-white/10 transition-all">
                            View Syllabus
                        </button>
                    </div>
                </div>
                {/* Abstract shape */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-primary/10 blur-3xl rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Progression Chart */}
                <div className="lg:col-span-2 glass-card p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold">Daily Learning Progression</h3>
                            <p className="text-sm text-text-muted">Your course completion progress this week</p>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-bold border border-green-500/20">
                            <TrendingUp size={14} /> +24% from last week
                        </div>
                    </div>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={progressionData}>
                                <defs>
                                    <linearGradient id="progGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                                <XAxis dataKey="day" stroke="#94a3b8" axisLine={false} tickLine={false} />
                                <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.5)' }}
                                    itemStyle={{ color: '#0ea5e9' }}
                                />
                                <Area type="monotone" dataKey="progress" stroke="#0ea5e9" strokeWidth={4} fillOpacity={1} fill="url(#progGradient)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* Continue Learning Card */}
                <div className="glass-card p-6 flex flex-col">
                    <h3 className="text-xl font-bold mb-6">Continue Learning</h3>
                    <div className="space-y-4 flex-1">
                        {[
                            { title: 'Array Methods', progress: 75, icon: <Play size={18} /> },
                            { title: 'Async/Await', progress: 30, icon: <Play size={18} /> },
                            { title: 'DOM Manipulation', progress: 90, icon: <CheckCircle2 size={18} className="text-green-400" /> },
                        ].map((course, i) => (
                            <div key={i} className="p-4 rounded-xl bg-slate-800/50 border border-white/5 group hover:border-primary/50 transition-all cursor-pointer">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                        {course.icon}
                                    </div>
                                    <h4 className="font-semibold text-sm">{course.title}</h4>
                                    <span className="ml-auto text-xs text-text-muted">{course.progress}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary transition-all duration-1000"
                                        style={{ width: `${course.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="mt-8 w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl font-semibold transition-colors">
                        View All Courses
                    </button>
                </div>
            </div>

            {/* Featured Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-amber-400/20 text-amber-400 rounded-full flex items-center justify-center mb-4">
                        <Star size={24} />
                    </div>
                    <h4 className="font-bold mb-2">Top Teacher</h4>
                    <p className="text-sm text-text-muted">Learn from the best industry experts with years of experience.</p>
                </div>
                <div className="glass-card p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-indigo-400/20 text-indigo-400 rounded-full flex items-center justify-center mb-4">
                        <BookOpen size={24} />
                    </div>
                    <h4 className="font-bold mb-2">Practice Lab</h4>
                    <p className="text-sm text-text-muted">Interactive coding sandboxes for every lesson.</p>
                </div>
                <div className="glass-card p-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-emerald-400/20 text-emerald-400 rounded-full flex items-center justify-center mb-4">
                        <Users size={24} />
                    </div>
                    <h4 className="font-bold mb-2">Community</h4>
                    <p className="text-sm text-text-muted">Join 10,000+ students and share your progress.</p>
                </div>
            </div>
        </div>
    );
};

// Help TrendingUp import
const TrendingUp = ({ size, className }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
        <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
);

export default Home;
