import Acasa from './pages/acasa.js';
import Politica from './pages/politica.js';
import Contact from './pages/contact.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Totalmente()
{
return(
  <BrowserRouter>
    <Routes>
      <Route index element = {<Acasa />} />
      <Route path='/acasa' element = {<Acasa />} />
      <Route path='/politica' element = {<Politica />} />
      <Route path='/contact' element = {<Contact />} />
    </Routes>
  </BrowserRouter>
);
}

export default Totalmente;