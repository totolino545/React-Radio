
import { Link } from 'react-router-dom';

function BottomNavBar() {
    return (
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center pt-2 pb-2 px-6 bg-surface-container/60 backdrop-blur-2xl border-t border-outline-variant/30 z-50 rounded-t-xl">

            <ul className="flex flex-row items-start gap-5 text-sm ">
                <li>
                    <Link to="/" className="flex flex-col items-center justify-center w-32 rounded-full border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none dark:border-indigo-300 dark:bg-indigo-300 dark:text-gray-900 dark:hover:bg-indigo-200 dark:focus-visible:ring-indigo-700">
                        <span className="material-symbols-outlined">home</span>
                        <span className="font-label-sm text-label-sm">Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/discover" className="flex flex-col items-center justify-center w-32 rounded-full border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:ring-4 focus-visible:ring-indigo-200 focus-visible:outline-none dark:border-indigo-300 dark:bg-indigo-300 dark:text-gray-900 dark:hover:bg-indigo-200 dark:focus-visible:ring-indigo-700">
                        <span className="material-symbols-outlined">explore</span>
                        <span className="font-label-sm text-label-sm">Discover</span>
                    </Link>
                </li>



                {/* <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-transform" href="#">
                    <span className="material-symbols-outlined">explore</span>
                    <span className="font-label-sm text-label-sm">Discover</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-transform" href="#">
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="font-label-sm text-label-sm">Favorites</span>
                </a>
                <a className="flex flex-col items-center justify-center text-on-surface-variant hover:text-primary active:scale-90 transition-transform" href="#">
                    <span className="material-symbols-outlined">person</span>
                    <span className="font-label-sm text-label-sm">Profile</span>
                </a> */}
            </ul>
        </nav>
    )

}

export default BottomNavBar