import { useNavigate } from "react-router-dom"

export const NavigationBar = () => {
   const navigate = useNavigate()

   return (
      <div>
         <p onClick={() => navigate('/home')}>Home</p>
         <p onClick={() => navigate('/information')}>Information</p>
         <p onClick={() => navigate('/about')}>About</p>
         <p onClick={() => navigate('/chat')}>Chat</p>
      </div>
   )
}