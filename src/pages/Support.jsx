import { useState } from 'react'
import {
  Headphones,
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  Search,
  Send,
  Clock,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'

const faqs = [
  {
    q: 'How do I file a claim?',
    a: 'You can file a claim directly from your Dashboard under "Quick Actions" > "Report a Claim". Alternatively, call our 24/7 claims line or use the Live Chat feature below.',
  },
  {
    q: 'When will my premium change?',
    a: 'Premiums are reviewed monthly based on your driving score. You\'ll receive a notification 7 days before any change, with a full breakdown of how your driving behaviour affected the rate.',
  },
  {
    q: 'How is my driving score calculated?',
    a: 'Your score is calculated using 47 metrics including speed compliance, braking smoothness, cornering, time of day, distance, and consistency. Each factor is weighted by our AI model based on risk correlation.',
  },
  {
    q: 'Can I pause data sharing?',
    a: 'Yes, you can toggle data sharing off at any time in the Privacy Centre. Note that this may affect your personalized premium and you may lose access to certain discounts.',
  },
  {
    q: 'How do I update my personal info?',
    a: 'Go to your Profile settings (click your avatar in the top-right) to update your name, address, contact details, and vehicle information.',
  },
  {
    q: 'What happens if I cancel my policy?',
    a: 'You can cancel at any time with no early termination fees. Any prepaid premium will be prorated and refunded within 14 business days.',
  },
]

const contactMethods = [
  {
    icon: Phone,
    label: 'Phone Support',
    detail: '+353 1 234 5678',
    desc: 'Available 24/7',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    icon: Mail,
    label: 'Email',
    detail: 'help@pulseguard.ie',
    desc: 'Response within 4 hours',
    color: 'text-blue-500',
    bg: 'bg-blue-50 dark:bg-blue-950/30',
  },
  {
    icon: MessageCircle,
    label: 'Live Chat',
    detail: 'Chat with our AI assistant',
    desc: 'Average response: 30 seconds',
    color: 'text-violet-500',
    bg: 'bg-violet-50 dark:bg-violet-950/30',
  },
]

export default function Support() {
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [chatMessage, setChatMessage] = useState('')
  const [chatOpen, setChatOpen] = useState(false)

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
          Support
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          We're here to help, 24/7
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search frequently asked questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Headphones className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Frequently Asked Questions
            </h2>

            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No results found for "{searchQuery}"
                </p>
                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
                  Try a different search term or contact support
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {filteredFaqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden transition-all"
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
            )}
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              Live Chat
            </h2>

            {!chatOpen ? (
              <div className="text-center py-8">
                <div className="p-4 rounded-2xl bg-violet-50 dark:bg-violet-950/30 inline-block mb-4">
                  <MessageCircle className="w-10 h-10 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  Chat with PulseGuard AI
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Get instant answers from our AI assistant
                </p>
                <button
                  onClick={() => setChatOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                >
                  Start Chat
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div>
                <div className="h-64 rounded-xl bg-gray-50 dark:bg-gray-800/50 p-4 mb-4 overflow-y-auto space-y-3">
                  {[
                    { role: 'ai', text: 'Hello! I\'m the PulseGuard AI assistant. How can I help you today?' },
                    { role: 'user', text: 'I\'d like to know about my premium.' },
                    { role: 'ai', text: 'Of course! Your current premium is €520/year. With your current driving score of 92, you\'re eligible for up to €120 in potential savings. Would you like me to explain how you can unlock those?' },
                  ].map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                          msg.role === 'user'
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type your message..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm"
                    onKeyDown={(e) => e.key === 'Enter' && setChatMessage('')}
                  />
                  <button className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Phone className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Contact Support
            </h2>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50"
                >
                  <div className={`p-2 rounded-lg ${method.bg}`}>
                    <method.icon className={`w-4 h-4 ${method.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {method.label}
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                      {method.detail}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {method.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 text-white shadow-xl card-hover">
            <Clock className="w-8 h-8 mb-4 text-blue-200" />
            <h3 className="text-lg font-semibold mb-1">24/7 Availability</h3>
            <p className="text-sm text-blue-100 leading-relaxed mb-4">
              Our AI support is available around the clock. Phone support
              connects you to a human agent within 3 minutes.
            </p>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <CheckCircle className="w-4 h-4" />
              Average wait time: 30 seconds
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm p-6 card-hover">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Quick Links
            </h3>
            <div className="space-y-2">
              {[
                'Submit a Claim',
                'Policy Documents',
                'Report an Issue',
                'Feedback',
              ].map((link) => (
                <button
                  key={link}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 hover:text-gray-900 dark:hover:text-white transition-all"
                >
                  {link}
                  <ArrowRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
