import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { CardByID } from "../pages/CardByID";

export function AppRoutes() {
    return (
        <Routes>

        <Route path="/" element={<Home />} />
        <Route path=":id" element={<CardByID/>}/>
        </Routes>
    )
}