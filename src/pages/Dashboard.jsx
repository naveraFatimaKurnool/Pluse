import {
  Gauge,
  Euro,
  TrendingDown,
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  Car,
  Shield,
  ChevronRight,
  Award,
  AlertTriangle,
  BrainCircuit,
} from 'lucide-react'

const stats = [
  {
    label: 'Driving Score',
    value: '92',
    unit: '/100',
    icon: Gauge,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
    change: '+3',
    changeUp: true,
  },
  {
    label: 'Current Premium',
    value: '€520',
    unit: '/year',
    icon: Euro,
    color: 'text-blue-600',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
    change: '€0',
    changeUp: true,
  },
  {
    label: 'Potential Savings',
    value: '€120',
    unit: '/year',
    icon: TrendingDown,
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
    change: '€15',
    changeUp: false,
  },
  {
    label: 'Risk Level',
    value: 'Low',
    unit: '',
    icon: Shield,
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
    change: 'Stable',
    changeUp: true,
  },
]

const weeklyData = [
  { day: 'Mon', score: 88 },
  { day: 'Tue', score: 94 },
  { day: 'Wed', score: 91 },
  { day: 'Thu', score: 96 },
  { day: 'Fri', score: 93 },
  { day: 'Sat', score: 90 },
  { day: 'Sun', score: 92 },
]

const quickActions = [
  { label: 'Report a Claim', icon: AlertTriangle, color: 'text-red-500' },
  { label: 'View Policy Details', icon: Shield, color: 'text-blue-500' },
  { label: 'Track a Repair', icon: Car, color: 'text-emerald-500' },
  { label: 'Get AI Advice', icon: BrainCircuit, color: 'text-violet-500' },
]

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
            Welcome back, James
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Here's your driving overview for today
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-950/30 rounded-xl text-sm text-blue-700 dark:text-blue-400 font-medium">
          <Sparkles className="w-4 h-4" />
          Last sync: 2 min ago
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={`bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm card-hover animate-fade-in stagger-${i + 1}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-2.5 rounded-xl ${stat.bg}`}>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </div>
              <span
                className={`flex items-center gap-0.5 text-xs font-medium px-2 py-0.5 rounded-full ${
                  stat.changeUp
                    ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30'
                    : 'text-red-600 bg-red-50 dark:bg-red-950/30'
                }`}
              >
                {stat.changeUp ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {stat.change}
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider">
              {stat.label}
            </p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
              {stat.value}
              {stat.unit && (
                <span className="text-sm font-normal text-gray-400 dark:text-gray-500">
                  {stat.unit}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover animate-fade-in stagger-5">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Monthly Driving Insights
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Your driving score trend this week
              </p>
            </div>
            <select className="text-sm border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>

          <div className="flex items-end justify-between gap-2 h-48 pt-4">
            {weeklyData.map((d) => (
              <div key={d.day} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {d.score}
                </span>
                <div
                  className="w-full max-w-[32px] rounded-lg bg-gradient-to-t from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 progress-bar"
                  style={{
                    height: `${d.score}%`,
                    animation: `fadeIn 0.5s ease-out forwards`,
                  }}
                />
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                  {d.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover animate-fade-in stagger-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg shadow-blue-500/20">
              <BrainCircuit className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                AI Recommendation
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Based on your driving patterns
              </p>
            </div>
          </div>

          <div className="mt-5 p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 dark:text-blue-300 leading-relaxed">
                Your smooth braking score improved by 12% this month. Consider
                reducing night driving to unlock an additional{' '}
                <strong className="text-blue-900 dark:text-blue-200">
                  €45 annual discount
                </strong>
                .
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Quick Tips
            </h3>
            <div className="space-y-2">
              {[
                'Maintain steady speeds on highways',
                'Avoid hard braking at intersections',
                'Reduce phone usage while driving',
              ].map((tip, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover animate-fade-in stagger-7">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map((action) => (
              <button
                key={action.label}
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-left group"
              >
                <div className={`p-2 rounded-lg bg-white dark:bg-gray-900 shadow-sm ${action.color}`}>
                  <action.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {action.label}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Click to start</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 transition-colors flex-shrink-0" />
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover animate-fade-in stagger-8">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Achievements
          </h2>
          <div className="space-y-4">
            {[
              { label: 'Safe Driver Bronze', progress: 100, icon: Award, color: 'text-amber-500', done: true },
              { label: 'Eco Champion', progress: 65, icon: Award, color: 'text-emerald-500', done: false },
              { label: 'Night Owl', progress: 30, icon: Award, color: 'text-blue-500', done: false },
            ].map((ach) => (
              <div key={ach.label} className="flex items-center gap-4">
                <div className={`p-2 rounded-lg bg-gray-50 dark:bg-gray-800 ${ach.color}`}>
                  <ach.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{ach.label}</p>
                  <div className="mt-1.5 w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-1000 ${
                        ach.done
                          ? 'bg-emerald-500'
                          : 'bg-gradient-to-r from-blue-500 to-blue-400'
                      }`}
                      style={{ width: `${ach.progress}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {ach.progress}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
