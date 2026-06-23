import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ThemeProvider from './components/ThemeProvider'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import PrivacyCentre from './pages/PrivacyCentre'
import Rewards from './pages/Rewards'
import DrivingInsights from './pages/DrivingInsights'
import Support from './pages/Support'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/privacy" element={<PrivacyCentre />} />
            <Route path="/rewards" element={<Rewards />} />
            <Route path="/insights" element={<DrivingInsights />} />
            <Route path="/support" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
