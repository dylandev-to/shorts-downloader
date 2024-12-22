import Ad from "./components/ad/Ad"
import Downloader from "./components/downloader/Downloader"
import NavBar from "./components/header/NavBar"
import Hero from "./components/hero/Hero"

function App() {
  return (
    <>
      <NavBar/>
      <Ad/>
      <Hero/>
      <Downloader/>
      <Ad/>
    </>
  )
}

export default App