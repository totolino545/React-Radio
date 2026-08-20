import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { RadiosProvider } from './context/RadiosContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RadiosProvider>
      <App />
    </RadiosProvider>
  </BrowserRouter>,
)
