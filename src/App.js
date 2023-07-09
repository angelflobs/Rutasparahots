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
import { Hello } from './pages/Hello';
// import { Sorpresa } from './pages/Surprise';
import { Maodalpage } from './pages/Modalpage';
import { ModalCalend } from './pages/Modalfecha';
import { Deletmodal } from './pages/Modaldelet';
import { Checkmodal } from './pages/Modalchek';
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
    element: <Calend/>,
  },
  {
    path: "/Hello",
    element: <Hello/>,
  },
  {
    path: "/Ventamodal",
    element: <Maodalpage/>,  
  },
  {
    path: "/ModalCaled",
    element: <ModalCalend/>
  },
  {
    path: "/Modaldelet",
    element: <Deletmodal/>,
  },
  {
    path:"/Modalcheck",
    element: <Checkmodal/>,
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
