import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Fotter from "../components/Footer/Fotter";
import "./Layout.css"



export default function Layout() {
  return (
    <div  className="layout_grid">
        <Header/>
        <main className="layout_main">
        <Outlet/>
        </main>
        <Fotter/>
    </div>
  )
}


