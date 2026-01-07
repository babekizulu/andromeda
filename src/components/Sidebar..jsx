//components
import Link from "./Link";

function Sidebar() {
    return (
        <aside className='sidebar'>
            <nav>
                <ul>
                    <li>
                        <Link href='/' className='sidebar-item'>
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href='/monitors' className='sidebar-item'>
                            Monitors
                        </Link>
                    </li>
                    <li>
                        <Link href='/help' className='sidebar-item'>
                            Help
                        </Link>
                    </li>
                    <li>
                        <Link href='/settings' className='sidebar-item'>
                            Settings
                        </Link>
                    </li>
                    <li>
                        <Link href='/profile' className='sidebar-item'>
                            Profile
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;