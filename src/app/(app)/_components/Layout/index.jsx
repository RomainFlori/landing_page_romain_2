"use client"

/* eslint-disable react/void-dom-elements-no-children */
import Topbar from "./components/Topbar"
import Footer from "./components/Footer"
// import Sidebar from "./components/Sidebar"

export default function Layout({children}) {
	// const [open, setOpen] = useState(false)

	// const handleOpenSidebar = () => {
	// 	setOpen(!open)
	// }

	return (
		
		<div style={{minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
			<link rel="preconnect" href="https://fonts.googleapis.com"/>
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
			<Topbar />
			<div className="bg-black">
				{/* <Sidebar open={open} handleOpenSidebar={handleOpenSidebar} /> */}
				<main>{children}</main>
			</div>

			<Footer />
		</div>
	)
}
