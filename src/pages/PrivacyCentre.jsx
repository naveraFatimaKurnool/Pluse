import { useState } from 'react'
import {
  Shield,
  Database,
  Eye,
  FileText,
  BrainCircuit,
  Lock,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Info,
  Gavel,
  Server,
  Activity,
} from 'lucide-react'

const dataCollected = [
  { label: 'Speed & Location Data', desc: 'GPS coordinates and speed at time of trip', icon: Activity },
  { label: 'Driving Behaviour', desc: 'Braking patterns, acceleration, cornering', icon: Eye },
  { label: 'Trip Information', desc: 'Distance, duration, time of day', icon: FileText },
  { label: 'Vehicle Diagnostics', desc: 'Engine health, tire pressure, mileage', icon: Server },
]

const faqs = [
  {
    q: 'How is my driving data used?',
    a: 'Your driving data is analyzed by our AI to calculate your risk profile and personalize your insurance premium. We never sell your data to third parties.',
  },
  {
    q: 'Who has access to my data?',
    a: 'Only authorized PulseGuard employees and our regulated AI processing systems have access. All access is logged and audited monthly.',
  },
  {
    q: 'Can I request my data be deleted?',
    a: 'Yes, you can request full data deletion at any time via Settings or by contacting our Data Protection Officer. Processing may take up to 30 days.',
  },
]

export default function PrivacyCentre() {
  const [dataSharing, setDataSharing] = useState(true)
  const [expandedFaq, setExpandedFaq] = useState(null)

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Privacy Centre
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Your data. Your control. Our responsibility.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/30">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Driving Data Sharing
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5 max-w-md">
                    Control whether PulseGuard can collect and analyze your driving data
                    for personalized insurance pricing.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setDataSharing(!dataSharing)}
                className={`relative w-12 h-6 rounded-full transition-colors flex-shrink-0 ${
                  dataSharing ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-700'
                }`}
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${
                    dataSharing ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>

            {dataSharing && (
              <div className="mt-5 flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 text-sm">
                <CheckCircle className="w-4 h-4" />
                Data sharing is active — you're saving up to{' '}
                <strong>€120/year</strong>
              </div>
            )}
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              What Data We Collect
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {dataCollected.map((item) => (
                <div
                  key={item.label}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-2">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedFaq(expandedFaq === faq.q ? null : faq.q)
                    }
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800/30 transition-colors"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white pr-4">
                      {faq.q}
                    </span>
                    {expandedFaq === faq.q ? (
                      <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === faq.q && (
                    <div className="px-4 pb-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30">
                <Gavel className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  GDPR Compliance
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Fully compliant
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                'Right to access your data',
                'Right to rectification',
                'Right to erasure',
                'Data portability',
                'Automated decision transparency',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-violet-50 dark:bg-violet-950/30">
                <BrainCircuit className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  AI Transparency
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  How our AI works
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
              Our AI model evaluates over 47 driving metrics to calculate your
              personalized risk score. The model is audited quarterly by
              independent regulators.
            </p>
            <div className="space-y-2">
              {[
                'Model version: 3.2.1',
                'Last audit: June 2026',
                'Accuracy rate: 96.4%',
                'Bias testing: Passed',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400"
                >
                  <div className="w-1 h-1 rounded-full bg-violet-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/30">
                <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Data Security
                </h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Enterprise-grade protection
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Encryption', value: 'AES-256' },
                { label: '2FA Required', value: 'Active' },
                { label: 'Audit Logs', value: 'Real-time' },
                { label: 'Data Centers', value: 'EU-based' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-600 dark:text-gray-400">
                    {item.label}
                  </span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
