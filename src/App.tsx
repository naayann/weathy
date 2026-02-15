import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/layout"
import { ThemeProvider } from "./context/theme-provider"
import Dashboard from "./pages/dashboard"
import CityPage from "./pages/city-page"

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark">
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/city/:cityName" element={<CityPage/>}/>
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App