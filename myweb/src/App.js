
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home.jsx'
import {BrowserRouter as Router,Routes,Link,Route} from 'react-router-dom'
import { CartMain } from './pages/CartMain/CartMain';
import Layout from './components/Layout/Layout';
function App() {
  return (
    <div className="App ">
      <Layout/>
    </div>
  );
}

export default App;
