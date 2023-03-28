import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/home';
import ItemDetailContainer from './components/ItemDetailContainer/itemdetailcontainer';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer';
import Navbar from './components/Navbar/navbar';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categoria/:categoriaNombre" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
      
    </div>
  )
}

export default App;
