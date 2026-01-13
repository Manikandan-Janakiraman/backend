import { NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-60 bg-slate-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-gray-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-gray-300"
            }
          >
            Users
          </NavLink>

          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              isActive ? "text-blue-400 font-semibold" : "text-gray-300"
            }
          >
            Settings
          </NavLink>
        </nav>
      </aside>

      {/* Dashboard Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
