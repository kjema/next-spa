import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<h2>Home</h2>} />
          <Route path="about" element={<h2>About</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
