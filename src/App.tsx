import { DashboardPage } from '@components/pages'
import { Routes, Route } from 'react-router'

function App() {

  return (
    <Routes>
      <Route index element={<DashboardPage />} />
      <Route path="*" element={<span>No match</span>} />
    </Routes>
  )
}

export default App
