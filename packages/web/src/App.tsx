import './styles/index.css';
import Header from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Header
        user={null}
        signOut={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </div>
  );
}

export default App;
