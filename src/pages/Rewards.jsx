import {
  Award,
  Gift,
  Star,
  Shield,
  Zap,
  Moon,
  Leaf,
  TrendingUp,
  Sparkles,
} from 'lucide-react'

const badges = [
  { label: 'Safe Starter', desc: '7 days accident-free', icon: Shield, earned: true, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  { label: 'Smooth Operator', desc: 'Smooth braking score >90', icon: Star, earned: true, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  { label: 'Eco Driver', desc: '50 km eco-friendly driving', icon: Leaf, earned: true, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { label: 'Night Guardian', desc: '10 safe night drives', icon: Moon, earned: false, color: 'text-violet-500', bg: 'bg-violet-50 dark:bg-violet-950/30' },
  { label: 'Speed Master', desc: 'Stay within limits for 30 days', icon: Zap, earned: false, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/30' },
  { label: 'Century Club', desc: 'Drive 1000 km safely', icon: TrendingUp, earned: false, color: 'text-cyan-500', bg: 'bg-cyan-50 dark:bg-cyan-950/30' },
]

const rewards = [
  {
    title: 'Safe Driving Reward',
    desc: 'Maintain a score above 85 for 3 consecutive months',
    reward: '€50 Premium Reduction',
    progress: 80,
    icon: Shield,
    color: 'text-blue-500',
  },
  {
    title: 'Low Mileage Discount',
    desc: 'Drive less than 10,000 km per year',
    reward: '€30 Annual Bonus',
    progress: 55,
    icon: TrendingUp,
    color: 'text-emerald-500',
  },
  {
    title: 'Eco Driving Bonus',
    desc: 'Achieve eco-friendly driving for 20+ trips/month',
    reward: '€25 Cashback',
    progress: 40,
    icon: Leaf,
    color: 'text-amber-500',
  },
  {
    title: 'Loyalty Reward',
    desc: 'Stay with PulseGuard for 12+ months',
    reward: '€100 Anniversary Bonus',
    progress: 75,
    icon: Star,
    color: 'text-violet-500',
  },
]

export default function Rewards() {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Rewards
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Earn rewards for being a safe driver
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-6 lg:p-8 text-white shadow-xl card-hover">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm font-medium text-blue-100">Your Rewards Overview</span>
            </div>
            <p className="text-3xl lg:text-4xl font-bold mt-2">€195</p>
            <p className="text-blue-100 mt-1">Total potential rewards available</p>
          </div>
          <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm">
            <Gift className="w-8 h-8" />
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-white rounded-full transition-all duration-1000"
              style={{ width: '62%' }}
            />
          </div>
          <span className="text-sm font-medium text-white">62% complete</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            Premium Discounts & Bonuses
          </h2>

          {rewards.map((r, i) => (
            <div
              key={r.title}
              className={`bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-5 card-hover animate-fade-in stagger-${i + 1}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className={`p-2.5 rounded-xl ${r.color.replace('text', 'bg').replace('text-', 'text-')} bg-opacity-10`}>
                    <div className={`p-1.5 rounded-lg bg-gray-50 dark:bg-gray-800 ${r.color}`}>
                      <r.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {r.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {r.desc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30">
                  <Sparkles className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    {r.reward}
                  </span>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex-1 h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000"
                    style={{ width: `${r.progress}%` }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                  {r.progress}%
                </span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-500" />
            Achievement Badges
          </h2>

          <div className="grid grid-cols-2 gap-3">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className={`rounded-2xl border p-5 card-hover animate-fade-in transition-all ${
                  badge.earned
                    ? 'bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 shadow-sm'
                    : 'bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800 opacity-60'
                }`}
              >
                <div className={`p-3 rounded-xl ${badge.bg} inline-block mb-3`}>
                  <badge.icon className={`w-6 h-6 ${badge.color}`} />
                </div>
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  {badge.label}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  {badge.desc}
                </p>
                {badge.earned ? (
                  <span className="inline-block mt-2 text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 px-2 py-0.5 rounded-full">
                    Earned
                  </span>
                ) : (
                  <span className="inline-block mt-2 text-xs font-medium text-gray-400 dark:text-gray-500">
                    Locked
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Monthly Rewards Progress
            </h3>
            <div className="space-y-4">
              {[
                { label: 'Trips Completed', current: 18, target: 25 },
                { label: 'Accident-Free Days', current: 23, target: 30 },
                { label: 'Eco-Friendly Trips', current: 12, target: 20 },
              ].map((m) => (
                <div key={m.label}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600 dark:text-gray-400">{m.label}</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {m.current}/{m.target}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-1000"
                      style={{ width: `${(m.current / m.target) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
