import './App.css';
import ArticlePage from './pages/Article';
import HomePage from './pages/Homepage';
import ErrorPage from './pages/Errorpage';
import ArticlesPage from './pages/ArticlesPage';
import ArtworksPage from './pages/ArtworksPage';
import HeaderComponent from './components/header';

import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/404" element={<ErrorPage />} />
          <Route path="*" element={<Navigate replace to="/404" />} />

          <Route path="/option" element={<OptionPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/artworks" element={<ArtworksPage />} />

          <Route
            path="/upload"
            element={
              <PrivateRoute>
                <UploadPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

function PrivateRoute({ children }) {
  //const auth = getAccessToken();

  //return auth ? children : <Navigate to="/" />;
}

export default App;
