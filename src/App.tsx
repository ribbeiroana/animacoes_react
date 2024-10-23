import './App.scss'
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
          </div>
          <div className="btn-face-purple">
            Contact us
          </div>
        </button>

      </header>

      <div className="content-container">

        <div className="heading">
          <h2>Lets grow your</h2>
          <h2>social presence.</h2>
        </div>

        <div className="bubble target">🎯</div>
        <div className="bubble shop">🛍️</div>
        <div className="bubble rocket">🚀</div>
        <div className="bubble fire">🔥</div>
      </div>



    </main>
  )
}

export default App
