import Home from './pages/Home/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import ProductView from './components/ProductView/ProductView';


const clientId = "1098893047515-pa59vs62ouon8n66vkb884oab9fbt1ot.apps.googleusercontent.com";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignInForm />} />
        <Route path='/signUp' element={<SignUpForm />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
        <Route path='/productView' element={<ProductView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
