import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, LogIn, ArrowRight } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-mesh"></div>
            <div className="glass-card w-full max-w-md p-8 relative overflow-hidden group">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-all duration-500"></div>

                <div className="relative z-10">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
                        <p className="text-text-muted">Login to continue your learning journey</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-muted">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="glass-input w-full pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/50"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-muted">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="glass-input w-full pl-11 pr-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/50"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" className="rounded bg-slate-800 border-slate-700 text-primary" />
                                <span className="text-text-muted">Remember me</span>
                            </label>
                            <a href="#" className="text-primary hover:text-primary-hover transition-colors">Forgot password?</a>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                        >
                            <LogIn size={20} />
                            Login
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-text-muted text-sm">
                        Don't have an account?{' '}
                        <Link to="/register" className="text-primary hover:text-primary-hover font-semibold transition-colors">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
