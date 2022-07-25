import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './styles/index.scss';
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Archive } from "./pages/Archive";
import { NotFound404 } from "./pages/NotFound404";
import { Default } from "./theme/Default";

export const App = () => (
  <>
    <Default>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/post/:slug" element={<Single/>} />
          <Route path="/categoria/:slug" element={<Archive/>} />
          <Route path="/tag/:slug" element={<Archive/>} />
          <Route path="*" element={<NotFound404/>} />
        </Routes>
      </BrowserRouter>
    </Default>
  </>
);