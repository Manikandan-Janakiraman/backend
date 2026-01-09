import React, { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import {
    LayoutDashboard,
    BarChart3,
    Settings,
    Menu,
    X,
    User,
    Database,
    Globe,
    Code2,
    ChevronDown,
    ChevronRight,
    LogOut,
    Search,
    Bell
} from 'lucide-react';

const DashboardLayout = ({ children, onMenuSelect }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState('Lesson Topics');
    const location = useLocation();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
    const toggleSubMenu = (label) => {
        setExpandedMenu(expandedMenu === label ? null : label);
    };

    const isTutorialPage = location.pathname === '/tutorials';

    const menuItems = [
        {
            icon: LayoutDashboard,
            label: 'Overview',
            path: '/',
        },
        {
            icon: User,
            label: 'My Profile',
            path: '/profile',
        },
        {
            icon: BookOpenIcon,
            label: 'Lesson Topics',
            path: '/tutorials',
            subItems: [
                { label: 'Introduction' },
                { label: 'Variables' },
                { label: 'Data types' },
                { label: 'Operators' },
                { label: 'Conditions' },
                { label: 'Loops' },
                { label: 'Functions' },
                { label: 'Arrow Functions' },
                { label: 'Template Literals' },
                { label: 'Destructuring' },
                { label: 'Array Method' },
                { label: 'Try/Catch' },
                { label: 'Inheritance' },
                { label: 'Async/Await' },
            ]
        },
    ];

    return (
        <div className="flex h-screen bg-transparent overflow-hidden">
            <div className="bg-mesh"></div>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed md:relative z-50 h-full w-72 bg-slate-900/80 backdrop-blur-xl border-r border-white/5 text-white transition-transform duration-300 ease-in-out
                    ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                `}
            >
                <div className="p-8 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30">
                            <Code2 size={24} className="text-white" />
                        </div>
                        <h1 className="text-xl font-bold tracking-tight">Edu<span className="text-primary">Tutorial</span></h1>
                    </Link>
                    <button onClick={() => setIsSidebarOpen(false)} className="md:hidden text-slate-400 hover:text-white">
                        <X size={24} />
                    </button>
                </div>

                <nav className="px-4 space-y-1 overflow-y-auto max-h-[calc(100vh-200px)] custom-scrollbar">
                    {menuItems.map((item, index) => (
                        <div key={index} className="mb-2">
                            {item.subItems ? (
                                <div className="space-y-1">
                                    <button
                                        onClick={() => toggleSubMenu(item.label)}
                                        className={`
                                            w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all
                                            ${(isTutorialPage || expandedMenu === item.label)
                                                ? 'bg-white/5 text-white'
                                                : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                            }
                                        `}
                                    >
                                        <div className="flex items-center gap-3">
                                            <item.icon size={20} />
                                            <span className="font-medium">{item.label}</span>
                                        </div>
                                        {expandedMenu === item.label ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                                    </button>

                                    {expandedMenu === item.label && (
                                        <div className="pl-11 pr-2 py-2 space-y-1">
                                            {item.subItems.map((sub, subIndex) => (
                                                <button
                                                    key={subIndex}
                                                    onClick={() => {
                                                        if (location.pathname !== '/tutorials') {
                                                            // Navigate to tutorials first if not there
                                                            // but for now we assume onMenuSelect handles it
                                                        }
                                                        onMenuSelect && onMenuSelect(sub.label);
                                                        setIsSidebarOpen(false);
                                                    }}
                                                    className="block w-full text-left py-2 px-3 rounded-lg text-sm text-slate-400 hover:bg-white/5 hover:text-primary transition-all relative group"
                                                >
                                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                    {sub.label}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <NavLink
                                    to={item.path}
                                    className={({ isActive }) => `
                                        w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                                        ${isActive
                                            ? 'bg-primary text-white shadow-lg shadow-primary/20'
                                            : 'text-slate-400 hover:bg-white/5 hover:text-white'
                                        }
                                    `}
                                    onClick={() => setIsSidebarOpen(false)}
                                >
                                    <item.icon size={20} />
                                    <span className="font-medium">{item.label}</span>
                                </NavLink>
                            )}
                        </div>
                    ))}
                </nav>

                <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="glass-card bg-white/5 border-white/5 p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                            <User size={20} className="text-white" />
                        </div>
                        <div className="overflow-hidden">
                            <p className="text-sm font-bold text-white truncate">John Doe</p>
                            <p className="text-xs text-slate-400 truncate">Premium Member</p>
                        </div>
                        <button className="ml-auto p-2 text-slate-400 hover:text-accent transition-colors">
                            <LogOut size={18} />
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col h-full overflow-hidden">
                <header className="h-20 bg-slate-900/40 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-6 md:px-10">
                    <div className="flex items-center gap-4">
                        <button onClick={toggleSidebar} className="md:hidden p-2 text-slate-400 hover:text-white">
                            <Menu size={24} />
                        </button>
                        <div className="hidden md:flex items-center gap-2 text-slate-400">
                            <Search size={18} />
                            <input type="text" placeholder="Search lessons..." className="bg-transparent border-none outline-none focus:ring-0 text-white w-64" />
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
                            <Bell size={22} />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full border-2 border-slate-900"></span>
                        </button>
                        <div className="h-8 w-px bg-white/10"></div>
                        <Link to="/profile" className="flex items-center gap-3 group">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" className="w-9 h-9 rounded-full bg-slate-800 p-0.5 border border-white/10 group-hover:border-primary transition-all" />
                            <span className="hidden md:block text-sm font-medium text-slate-300 group-hover:text-white transition-colors">John Doe</span>
                        </Link>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

const BookOpenIcon = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
    </svg>
);

export default DashboardLayout;
