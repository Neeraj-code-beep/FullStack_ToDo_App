import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ToastContainer } from 'react-toastify';
import TodoProvider from './context/TodoProvider.jsx';

createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
    <ToastContainer position="top-center" />
  </TodoProvider>,

  // <>
  //   <App />
  //   {/* Basically toastify is used for pop ups */}
  //   <ToastContainer position="top-center" />
  // </>
);
