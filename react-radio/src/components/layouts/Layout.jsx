
import Header from './Header';
import BottomNavBar from './BottomNavBar';
import TagListContainer from './tags/TagsListContainer'
import CountriesListContainer from './countries/CountriesListContainer'
import { Outlet } from "react-router-dom";
// Todo lo que pongamos dentro de <Layout> en App.jsx será el "children".
export function Layout({ children }) {

    return (
        <div className="pt-20 px-5 max-w-7xl mx-auto">
            <Header />
            <TagListContainer />
            <CountriesListContainer />
            <main>
                <Outlet/>
            </main>
            <BottomNavBar />
        </div>
    )
}

export default Layout