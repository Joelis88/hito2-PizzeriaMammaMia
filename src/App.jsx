// import Home from './components/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import  Navbarra  from './components/Navbarra'
import Footer from './components/Footer'
import Login from './components/Login'
// import Register from './components/Register'



function App() {
 

  return (
    <div>
      <Navbarra />
      {/* <Home /> */}
      {/* <Register /> */}
      <Login />
      <Footer />
    </div>
  )
}

export default App
