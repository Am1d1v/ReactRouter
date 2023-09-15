import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About'
import Contacts from './components/Contacts'
import Home from './components/Home'
import NotFound from './components/NotFound';


function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path='about' element={<About />} />   
            <Route path='contacts' element={<Contacts />} />   
            <Route path='*' element={<NotFound />} />  
          </Route>   
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;