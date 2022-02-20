import './App.css';
import OptionPage from './pages/OptionPage';
import UploadPage from './pages/UploadPage';
import ArticlePage from './pages/Article';
import HomePage from './pages/Homepage';
import HeaderComponent from './components/header';
import Gallery from './pages/Gallery';

import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useParams,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/option/:section" element={<OptionPage />} />

        <Route path="/:section/artworks" element={<Gallery />} />

        <Route path="/:section/articles" element={<TestPage />} />

        <Route path="/:section/articles/:id" element={<ArticlePage />} />

        <Route path="/404" element={<ErrorPage />} />

        <Route path="*" element={<Navigate replace to="/404" />} />

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
  const auth = true;
  //getAccessToken();

  return auth ? children : <Navigate to="/" />;
}

export default App;

/*
        <Route path="/:section/:type/:id" element={<TestPage />} />


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
*/

const TestPage = () => {
  let { section, type, id } = useParams();
  return (
    <div>
      <HeaderComponent />
      <div className='homepageText'>
        <p>{section}</p>
        <p>{type}</p>
        <p>{id}</p>

      </div>
    </div>
  );
}