import ScrollToTop from './ScrollToTop'
import { Outlet } from 'react-router-dom'

const MinimalLayout = () => {
    return (
        <>
            <div className="w-full h-auto hidden xxs:block">
                <ScrollToTop />
                <div>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MinimalLayout