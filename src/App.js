import Acasa from './pages/acasa.js';
import Politica from './pages/politica.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Totalmente()
{
return(
  <BrowserRouter>
    <Routes>
      <Route index element = {<Acasa />} />
      <Route path='/acasa' element = {<Acasa />} />
      <Route path='/politica' element = {<Politica />} />
    </Routes>
  </BrowserRouter>
);
}

export default Totalmente;