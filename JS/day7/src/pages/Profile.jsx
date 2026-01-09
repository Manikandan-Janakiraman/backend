import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { User, Mail, Award, Clock, BookOpen, TrendingUp, Calendar, ChevronRight } from 'lucide-react';

const data = [
    { name: 'Mon', hours: 2.5, progress: 40 },
    { name: 'Tue', hours: 3.8, progress: 55 },
    { name: 'Wed', hours: 1.5, progress: 45 },
    { name: 'Thu', hours: 4.2, progress: 70 },
    { name: 'Fri', hours: 3.2, progress: 85 },
    { name: 'Sat', hours: 5.0, progress: 95 },
    { name: 'Sun', hours: 2.8, progress: 90 },
];

const stats = [
    { label: 'Courses Completed', value: '12', icon: BookOpen, color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { label: 'Learning Hours', value: '156h', icon: Clock, color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { label: 'Achievements', value: '24', icon: Award, color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { label: 'Current Streak', value: '7 Days', icon: TrendingUp, color: 'text-green-400', bg: 'bg-green-400/10' },
];

const Profile = () => {
    return (
        <div className="space-y-8 animate-fade-in pb-12">
            {/* Header / Intro */}
            <div className="glass-card p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                    <User size={160} />
                </div>
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-primary to-secondary p-1">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden border-4 border-slate-900">
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                            alt="Avatar"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="text-center md:text-left relative z-10">
                    <h1 className="text-3xl font-bold mb-2">John Doe</h1>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-text-muted">
                        <span className="flex items-center gap-2"><Mail size={16} /> john.doe@example.com</span>
                        <span className="flex items-center gap-2"><Calendar size={16} /> Joined Jan 2024</span>
                    </div>
                </div>
                <div className="md:ml-auto flex gap-3">
                    <button className="px-4 py-2 bg-primary rounded-xl font-medium hover:bg-primary-hover transition-colors">Edit Profile</button>
                    <button className="px-4 py-2 glass-input rounded-xl font-medium hover:bg-white/10 transition-colors">Settings</button>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                    <div key={i} className="glass-card p-5 flex items-center gap-4 hover:translate-y-[-4px] transition-transform">
                        <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                            <stat.icon size={24} />
                        </div>
                        <div>
                            <p className="text-sm text-text-muted">{stat.label}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold">Learning Activity</h3>
                            <p className="text-sm text-text-muted">Weekly hours spent learning</p>
                        </div>
                        <select className="glass-input text-xs rounded-lg px-2 py-1">
                            <option>Last 7 Days</option>
                            <option>Last 30 Days</option>
                        </select>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data}>
                                <defs>
                                    <linearGradient id="colorHours" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                                <XAxis dataKey="name" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                    itemStyle={{ color: '#f8fafc' }}
                                />
                                <Area type="monotone" dataKey="hours" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorHours)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="glass-card p-6">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold">Course Progression</h3>
                            <p className="text-sm text-text-muted">Daily completion rate</p>
                        </div>
                    </div>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" />
                                <XAxis dataKey="name" stroke="#94a3b8" />
                                <YAxis stroke="#94a3b8" />
                                <Tooltip
                                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                />
                                <Bar dataKey="progress" radius={[4, 4, 0, 0]}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index === 5 ? '#0ea5e9' : '#334155'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Recent Badges / Certificates */}
            <div className="glass-card p-6">
                <h3 className="text-xl font-bold mb-6">Recent Achievements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                        { title: 'JavaScript Ninja', desc: 'Completed all advanced topics', date: '2 days ago' },
                        { title: 'Rapid Learner', desc: 'Finished 5 lessons in a day', date: '1 week ago' },
                        { title: 'Bug Hunter', desc: 'Passed all debugging exercises', date: '2 weeks ago' },
                    ].map((badge, i) => (
                        <div key={i} className="flex gap-4 p-4 rounded-xl bg-slate-800/50 border border-white/5 group hover:bg-slate-800 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Award size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold">{badge.title}</h4>
                                <p className="text-xs text-text-muted">{badge.desc}</p>
                                <p className="text-[10px] text-primary mt-1 uppercase font-bold tracking-wider">{badge.date}</p>
                            </div>
                            <ChevronRight className="ml-auto text-slate-600 self-center" size={16} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
