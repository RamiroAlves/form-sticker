import logo from './logo.svg';
import './App.css';
import FormSticker from './components/Form';
import GlobalStyle from './util/globalStyle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './components/Checkout';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<FormSticker />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </BrowserRouter>

      <GlobalStyle />
      <Toaster />
    </div>
  );
}

export default App;
