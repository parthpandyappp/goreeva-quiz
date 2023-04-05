import './App.css';
import { Nav, Footer } from './components';
import { Routes } from './routes';

function App() {
  return (
    <div className="flex flex-col h-screen min-h-screen w-screen">
      <Nav />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
