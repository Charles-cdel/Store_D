import { BrowserRouter, Routes , Route} from "react-router-dom"
import Home from "./pages/Home"
import  Search  from "./pages/Search"
import Menu from './pages/Menu'




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Search" element={<Search />}/>
        <Route path="/Menu" element={<Menu/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
