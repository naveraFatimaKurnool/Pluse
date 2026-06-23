import {
  TrendingUp,
  Activity,
  Moon,
  Leaf,
  Zap,
  Gauge,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

const metrics = [
  {
    label: 'Overall Score',
    value: 92,
    change: '+3',
    changeUp: true,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    label: 'Smooth Braking',
    value: 88,
    change: '+12',
    changeUp: true,
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    label: 'Speed Compliance',
    value: 95,
    change: '+2',
    changeUp: true,
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
  },
  {
    label: 'Night Driving',
    value: 72,
    change: '-5',
    changeUp: false,
    color: 'text-amber-500',
    bg: 'bg-amber-50 dark:bg-amber-950/30',
  },
  {
    label: 'Eco Driving',
    value: 84,
    change: '+8',
    changeUp: true,
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    label: 'Distance This Week',
    value: '342',
    unit: 'km',
    change: '+42',
    changeUp: true,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
  },
]

const detailedMetrics = [
  {
    label: 'Speed Analysis',
    icon: Zap,
    score: 95,
    color: 'text-violet-500',
    desc: 'You maintained speed limits on 95% of your trips. Excellent.',
    details: [
      'Average speed: 52 km/h',
      'Top speed: 118 km/h',
      'Speeding incidents: 2',
    ],
  },
  {
    label: 'Smooth Braking',
    icon: Activity,
    score: 88,
    color: 'text-blue-500',
    desc: 'Your braking has improved significantly this month.',
    details: [
      'Hard brakes: 8 (down from 21)',
      'Avg braking force: 32%',
      'Smooth stops: 92%',
    ],
  },
  {
    label: 'Night Driving',
    icon: Moon,
    score: 72,
    color: 'text-amber-500',
    desc: 'Night driving is your area for improvement.',
    details: [
      'Night trips: 12 this month',
      'Avg night score: 72',
      'Recommend reducing night drives',
    ],
  },
  {
    label: 'Eco Driving',
    icon: Leaf,
    score: 84,
    color: 'text-emerald-500',
    desc: 'Good eco-driving habits with room to grow.',
    details: [
      'CO₂ saved: 48 kg',
      'Fuel efficient trips: 78%',
      'Idle time: 3.2 hrs',
    ],
  },
]

export default function DrivingInsights() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Driving Insights
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Deep analysis of your driving behaviour
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm card-hover animate-fade-in stagger-${i + 1}`}
          >
            <div className={`p-2 rounded-xl ${m.bg} inline-block mb-3`}>
              {m.label === 'Overall Score' && (
                <Gauge className={`w-4 h-4 ${m.color}`} />
              )}
              {m.label === 'Smooth Braking' && (
                <Activity className={`w-4 h-4 ${m.color}`} />
              )}
              {m.label === 'Speed Compliance' && (
                <Zap className={`w-4 h-4 ${m.color}`} />
              )}
              {m.label === 'Night Driving' && (
                <Moon className={`w-4 h-4 ${m.color}`} />
              )}
              {m.label === 'Eco Driving' && (
                <Leaf className={`w-4 h-4 ${m.color}`} />
              )}
              {m.label === 'Distance This Week' && (
                <TrendingUp className={`w-4 h-4 ${m.color}`} />
              )}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wider mb-1">
              {m.label}
            </p>
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                {m.value}
              </span>
              {m.unit && (
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {m.unit}
                </span>
              )}
            </div>
            <div
              className={`flex items-center gap-0.5 text-xs font-medium mt-1 ${
                m.changeUp
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {m.changeUp ? (
                <ArrowUpRight className="w-3 h-3" />
              ) : (
                <ArrowDownRight className="w-3 h-3" />
              )}
              {m.change} vs last week
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {detailedMetrics.map((m, i) => (
          <div
            key={m.label}
            className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover animate-fade-in stagger-${i + 1}`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-xl ${m.color.replace('text', 'bg').replace('text-', 'text-')} bg-opacity-10`}>
                  <m.icon className={`w-5 h-5 ${m.color}`} />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {m.label}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                    {m.desc}
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold border-2 ${
                    m.score >= 90
                      ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                      : m.score >= 80
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-amber-500 text-amber-600 dark:text-amber-400'
                  }`}
                >
                  {m.score}
                </div>
                <p className="text-[10px] text-gray-400 mt-1">Score</p>
              </div>
            </div>

            <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden mb-5">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${
                  m.score >= 90
                    ? 'bg-emerald-500'
                    : m.score >= 80
                      ? 'bg-blue-500'
                      : 'bg-amber-500'
                }`}
                style={{ width: `${m.score}%` }}
              />
            </div>

            <div className="space-y-2">
              {m.details.map((d) => (
                <div
                  key={d}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0" />
                  {d}
                </div>
              ))}
            </div>

            <button className="mt-4 w-full py-2.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium text-blue-600 dark:text-blue-400 transition-colors">
              View Full Report
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
