import './styles/index.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './views/Layout';
import Main from './views/Main';
import Login from './views/Login';
import NotFound from './views/NotFound';
import Register from './views/Register';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
