import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx'
import MovieDetails from './components/MovieDetails.tsx'


const router = createHashRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/details/:id",
    element: <MovieDetails />
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
