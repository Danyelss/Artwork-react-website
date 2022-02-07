import './App.css';
import OptionPage from './pages/OptionPage';
import ArticlePage from './pages/Article';
import HomePage from './pages/Homepage';
import HeaderComponent from './components/header';

import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/option/:section" element={<OptionPage />} />

        <Route path="/:section/:type" element={<TestPage />} />

        <Route path="/:section/:type" element={<TestPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*
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
  let { section, type } = useParams();
  return (
    <div>
      <HeaderComponent />
      <div className='homepageText'>
        <h1>{section}</h1>
        <h1>{type}</h1>

      </div>
    </div>
  );
}