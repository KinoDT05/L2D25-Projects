import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import Homepage from './pages/Home';
import Gacha from './pages/Gacha';
import Layout from './components/Layout';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="gacha" element={<Gacha />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
