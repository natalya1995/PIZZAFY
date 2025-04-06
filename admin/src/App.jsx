import AppRouter from "./components/AppRouter"
import Sidebar from "./components/Sidebar"
import "./assets/css/style.css"
function App() {

  return (
    <>
<main className="wrapper">
  <Sidebar/>
  <AppRouter/>

</main>

    </>
    
  )
}

export default App
