
import './App.css';
import { AuthProvider } from './Content/AuthContent';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <AuthProvider>
    <Navbar/>
      </AuthProvider>
   
    </div>
  );
}

export default App;
