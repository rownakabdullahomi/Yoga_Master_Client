import { Outlet } from "react-router-dom"


const MainLayout = () => {
  return (
    <div>
        <nav>Navbar</nav>
        <main><Outlet /></main>
        <footer>Footer</footer>
    </div>
  )
}

export default MainLayout