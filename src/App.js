import React from 'react';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import Circus from './Circus';
import Golden from './Golden';
import Strong from './Strong';
import Wine from './Wine';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Spritz from './Spritz';
function App() {
  const [menuIsOpened, setMenuState] = React.useState(false);

  function openMenu() {
    menuIsOpened = !menuIsOpened;
  }
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Header menuClick={openMenu} state={menuIsOpened} />
          <Menu />
          <Routes>

            <Route path='/circus' element={<Circus />}>

            </Route>

            <Route path='/golden' element={<Golden/>}>


            </Route>

            <Route path='/spritz' element={<Spritz />}>


            </Route>

            <Route path='/strong' element={<Strong />}>


            </Route>
            <Route path='/wine' element={<Wine />}>


            </Route>

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
