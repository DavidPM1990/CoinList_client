import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/NavBar';
import AppRoutes from './routes/AppRoutes';
import { useLocation } from "react-router-dom";

function App() {

  const location = useLocation();

  return (
    <>

      {location.pathname !== '/signup' && location.pathname !== '/login' && <NavBar />}
      <AppRoutes />
    </>
  );
}

export default App;
