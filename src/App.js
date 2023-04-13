import './App.css';
import { Nav, Footer } from './components';
import { Routes } from './routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="flex flex-col h-screen min-h-screen w-screen">
      <Nav />
      <Toaster position="top-center" />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
