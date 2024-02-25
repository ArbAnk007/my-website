import './styles/App.css'
import { Header, Footer, Container } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}

export default App
