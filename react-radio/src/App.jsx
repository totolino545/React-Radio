import { Routes, Route } from 'react-router-dom';
import Layout from "./components/layouts/Layout"
import Inicio from "./pages/Inicio"
import Discover from './pages/Discover';

function App() {


  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Inicio />} />
        <Route path='/discover' element={<Discover />} />

      </Route>
    </Routes>
  )
}

export default App
