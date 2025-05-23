import ScrollToTop from './ScrollToTop';
import { Outlet } from 'react-router-dom';

export default function MinimalLayout() {
  return (
    <div className="w-full h-auto hidden xxs:block">
      <ScrollToTop />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
