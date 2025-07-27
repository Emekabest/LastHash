import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import viteLogo from '/vite.svg'
import Landing from './Pages/Landing/MyLanding'
import ConnectWalletPage from './Pages/ConnectWalletPage/ConnectWallet'
import PricingPage from './Pages/PricingPage/PricingPage'
import DashboardPage from './Pages/DashboardPage/DashboardPage'
import Beneficiaries from './Pages/BeneficiaryPage/Beneficiary'
import './App.css'  
// import 'bootstrap/dist/css/bootstrap.min.css';



// import Home from './Pages/Home/Home'
import './App.css'



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
           <Route path="/connectwallet" element={<ConnectWalletPage />} />
           <Route path="/pricing" element={<PricingPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
             <Route path="/benefit" element={<Beneficiaries />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;