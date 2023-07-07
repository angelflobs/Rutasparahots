import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";

//Importacion de paginas
import { Index } from './pages/Index';
import { Userdatos } from './pages/Datauser';
import { MyAccount } from './pages/MyAccount';
import { Newreserv } from './pages/NewReservation';
import { Reservation } from './pages/Reservation';
import { Calend } from './pages/ReservationCaled';

const router = createBrowserRouter ([
  
  //Rutas de navegacion
  {
    path: "/", 
    element: <Index/>,
  },
  {
    path: "/Micuenta",
    element: <MyAccount/>,
  },
  {
    path: "/Reservaciones", 
    element: <Reservation/>,
  },
  {
    path: "/NuevaReservacion",
    element: <Newreserv/>,
  },

  //Rutas secundarias
  {
    path:"/Datosreservacion",
    element: <Userdatos/>,
  },
  {
    path: "/Reservacionescalendario",
    element: <Calend/>
  },
]);

function App() {
  return (
    <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
  );
}

export default App;
