import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User, UserPlus, ArrowRight } from 'lucide-react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock registration
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/');
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="bg-mesh"></div>
            <div className="glass-card w-full max-w-md p-8 relative overflow-hidden group">
                {/* Decorative elements */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-all duration-500"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-all duration-500"></div>

                <div className="relative z-10">
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold mb-2 text-gradient">Join the Academy</h1>
                        <p className="text-text-muted">Start your transformation today</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-muted">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
                                <input
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="glass-input w-full pl-11 pr-4 py-3 rounded-xl"
                                    placeholder="John Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-text-muted">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted w-5 h-5" />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="glass-input w-full pl-11 pr-4 py-3 rounded-xl"
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
                                    className="glass-input w-full pl-11 pr-4 py-3 rounded-xl"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-4"
                        >
                            <UserPlus size={20} />
                            Create Account
                            <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                    </form>

                    <p className="mt-8 text-center text-text-muted text-sm">
                        Already have an account?{' '}
                        <Link to="/login" className="text-secondary hover:underline font-semibold transition-colors">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
