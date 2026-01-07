//components
import Header from "./components/Header";
import Route from './components/Route';
import Sidebar from "./components/Sidebar.";
//pages
import Dashboard from './components/pages/dashboard/Dashboard';
import Help from './components/pages/help/Help';
import Monitors from './components/pages/monitors/Monitors';
import Profile from './components/pages/profile/Profile';
import Settings from './components/pages/settings/Settings';

function App() {
    return (
        <div className='app'>
            <Header/>
            <Route path='/'>
                <Dashboard/>
            </Route>
            <Route path='/help'>
                <Help/>
            </Route>
            <Route path='/monitors'>
                <Monitors/>
            </Route>
            <Route path='/profile'>
                <Profile/>
            </Route>
            <Route path='/settings'>
                <Settings/>
            </Route>
            <Sidebar/>
        </div>
    )
}

export default App;