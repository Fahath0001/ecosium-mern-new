
import Footer from './footer'
import { Outlet } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Navbar from './Navbar';

export default function MainLayout() {
  return (
    <div className="w-full h-auto hidden xxs:block">
      <Navbar />
      <ScrollToTop />
      <div className="mt-36">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
