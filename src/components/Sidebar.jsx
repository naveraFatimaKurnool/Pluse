import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Shield,
  Award,
  BarChart3,
  HeadphonesIcon,
  Sun,
  Moon,
  HeartPulse,
} from 'lucide-react'
import { useTheme } from './useTheme'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/privacy', icon: Shield, label: 'Privacy Centre' },
  { to: '/rewards', icon: Award, label: 'Rewards' },
  { to: '/insights', icon: BarChart3, label: 'Driving Insights' },
  { to: '/support', icon: HeadphonesIcon, label: 'Support' },
]

export default function Sidebar({ open, onClose }) {
  const { dark, setDark } = useTheme()

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30 w-64
          bg-white dark:bg-gray-900
          border-r border-gray-200 dark:border-gray-800
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex items-center gap-3 px-6 h-16 border-b border-gray-200 dark:border-gray-800">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <HeartPulse className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
              PulseGuard
            </h1>
            <p className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">
              AI Insurance Dashboard
            </p>
          </div>
        </div>

        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto scrollbar-thin">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-between bg-gray-50 dark:bg-gray-800/50 rounded-xl px-4 py-3">
            <button
              onClick={() => setDark(!dark)}
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              {dark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
              <span>{dark ? 'Light' : 'Dark'} Mode</span>
            </button>
            <div
              onClick={() => setDark(!dark)}
              className="relative w-9 h-5 cursor-pointer"
            >
              <div
                className={`absolute inset-0 rounded-full transition-colors ${
                  dark ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
              <div
                className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${
                  dark ? 'translate-x-4' : 'translate-x-0.5'
                }`}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
