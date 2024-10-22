import './App.scss'
import { ArroeIcon } from './components/arrow-icon'
import { Logo } from './components/logo'

function App() {
  return (
    <main>
      <header className='header-container'>

        <Logo />

        <nav className="menu-options">
          <a href="">What we offer</a>
          <a href="">How it works</a>
          <a href="">Portifolio</a>
        </nav>

        <button>
          <div className="btn-face-white">
            Contact us
            <ArroeIcon />
          </div>
          <div className="btn-face-purple">
            Contact us
            <ArroeIcon />
          </div>
        </button>

      </header>




    </main>
  )
}

export default App
