import Aside from "./components/Aside"
import Footer from "./components/Footer"
import Nav from "./components/Header/Nav"
import Reviews from "./components/Reviews"
import Search from "./components/Search/Search"
import './App.css'
function App() {
 
  return (
    <>
      <Nav></Nav>
      <Search></Search>
      <Aside></Aside>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  )
}

export default App
