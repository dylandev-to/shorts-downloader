import Ad from "./components/ad/Ad"
import Download from "./components/download/Download"
import Downloader from "./components/downloader/Downloader"
import NavBar from "./components/header/NavBar"
import Hero from "./components/hero/Hero"
import { useEffect, useState } from "react"

function App() {
  // Download info that passes from downloader to download prompt
  const [downloadInfo, setDownloadInfo] = useState({})

  // Logs the download info
  useEffect(() => {
    console.log(downloadInfo)
  }, [downloadInfo])

  return (
    <>
      <NavBar />
      <Ad/>
      <Hero />
      <Downloader setDownloadInfo={setDownloadInfo} />
      <Download downloadInfo={downloadInfo} />
      <Ad/>
    </>
  )
}

export default App