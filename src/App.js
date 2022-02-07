import './App.css';
import OptionPage from './pages/OptionPage';
import ArticlePage from './pages/Article';
import HomePage from './pages/Homepage';
import HeaderComponent from './components/header';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <OptionPage />
    </div>
  );
}

export default App;
