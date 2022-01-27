import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavigationBar } from "../components/NavigationBar"
import { AboutView } from "../view/AboutView"
import { ChatView } from "../view/ChatView"
import { HomeView } from "../view/HomeView"
import { InformationView } from "../view/InformationView"

export const Routing = () => {
   return (
      <BrowserRouter>
         <NavigationBar />
         <Routes>
            <Route path={'/home'} element={<HomeView />} />
            <Route path={'/information'} element={<InformationView />} />
            <Route path={'/about'} element={<AboutView />} />
            <Route path={'/chat'} element={<ChatView />} />
         </Routes>
      </BrowserRouter>
   )
}