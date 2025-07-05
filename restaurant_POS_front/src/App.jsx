import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Auth, Orders } from "./pages"
import Sidebar from "./components/shared/Sidebar"
import Header from "./components/shared/Header"


function App() {

  return (
    <>
  <Router>
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
        </main>
      </div>
    </div>
  </Router>
</>

  )
}

export default App;