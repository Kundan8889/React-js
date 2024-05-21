import Login from "./componets/Login"
import Profile from "./componets/Profile"
import UserContextProvider from "./context/UserContextProvider"
import './App.css'
function App() {
  return (
    <UserContextProvider>
      <div className="app-container">
    <h1> I learn React js FrameWork </h1>
    <Login/>
    <Profile/>
    </div>
    </UserContextProvider>
  )
}
export default App
