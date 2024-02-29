import './App.css'
import Logo from './component/logo/Logo'
import SideMenu from './component/sidemenu/SideMenu'
import TopMenu from './component/topmenu/TopMenu'
import Demo from './pages/demo/Demo'

function App() {
    return (
        <div className='app'>
            <nav>
                <Logo/>
                <TopMenu/>    
            </nav>
            <SideMenu/>
            <Demo/>
        </div>
    )
}

export default App
