import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Main from './components/main/Main';

function App() {
  return (
    <>
      <RouterProvider router={
        createBrowserRouter([
          {
            path: "/",
            element:
              <div>
                <Main />
              </div>
            ,
          },
          {
            path: "/collections/:tab",
            element:
              <div>
                <Home />
              </div>
            ,
          },
        ])
      } />
    </>
  );
}

export default App;
