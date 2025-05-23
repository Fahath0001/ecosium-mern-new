import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Event from './pages/Event';
import NotFound from './pages/NotFound';
import Collection from './pages/Collection';
import PlaceOrder from './pages/PlaceOrder';
import Attractions from './pages/Attractions';
import NightLifePage from './pages/NightLifePage';
import MainLayout from './components/MainLayout';
import MinimalLayout from './components/MinimalLayout';

function App() {
  return (
    <>

      <div className="w-full h-auto hidden xxs:block">
        <Routes>
          {/* Layout with Navbar & Footer */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/nightlife" element={<NightLifePage />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/attrections" element={<Attractions />} />
            <Route path="/:slug/:id" element={<Event />} />
          </Route>

          {/* Layout without Navbar & Footer */}
          <Route element={<MinimalLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>

      {/* Small Device not Support */}
      {/* Small Device not Support */}
      {/* Small Device not Support */}
      <div className='flex items-center justify-center xxs:hidden min-h-screen p-1'>
        <h1 className='text-[14px] font-semibold text-primary text-center'>This Website can't suppot your Device</h1>
      </div>
    </>

  )
}

export default App
