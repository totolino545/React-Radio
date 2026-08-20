
import Header from './Header';
import BottomNavBar from './BottomNavBar';
import { Outlet } from "react-router-dom";
// Todo lo que pongamos dentro de <Layout> en App.jsx será el "children".
export function Layout({ children }) {

    return (
        <div>
            <Header />
            <main>
                <Outlet/>
            </main>
            <BottomNavBar />
        </div>
    )
}

export default Layout