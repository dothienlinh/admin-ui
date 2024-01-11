import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import DashboardV1 from './pages/DashboardV1/DashboardV1'
import DashboardV2 from './pages/DashboardV2/DashboardV2'
import DashboardV3 from './pages/DashboardV3/DashboardV3'

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="themes/v3/">
          <Route index element={<DashboardV1 />} />
          <Route path="dashboard-v1" element={<DashboardV1 />} />
          <Route path="dashboard-v2" element={<DashboardV2 />} />
          <Route path="dashboard-v3" element={<DashboardV3 />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
