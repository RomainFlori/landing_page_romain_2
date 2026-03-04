import { useState, useEffect } from "react"
import Link from "next/link"
import MobileNav from "./mobileNavBar"
import BasicModal from "../Button"

const Topbar = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  const links = [
    {
      id: 1,
      linkName: "Pourquoi me choisir ?",
      link: "#why",
    },
    {
      id: 2,
      linkName: "Mes projets",
      link: "#projects",
    },
  ]

  // Détection de défilement
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolling(scrollY > 50) // Modifie la valeur selon le seuil voulu
    }

    // Initial check on component mount
    const initialScrollY = window.scrollY
    setIsScrolling(initialScrollY > 50)

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // smooth scrolling
  const handleLinkClick = (e, link) => {
    if (link.startsWith("#")) {
      e.preventDefault()
      const targetElement = document.getElementById(link.substring(1))

      if (targetElement) {
        const y = targetElement.getBoundingClientRect().top + window.scrollY - 100
        window.scrollTo({ top: y, behavior: "smooth" })
      }
    }
  }

  return (
    <div className={`fixed w-full z-50 transition-opacity duration-500 ${isScrolling ? "opacity-0" : "opacity-100"}`}>
      <div className="flex ... items-center w-full min-h-24 md:px-11 px-6 text-white">
        <div className="flex-1 flex-col justify-start w-34 ... hidden md:flex">
          <p className="font-gray">Liens rapides</p>
          <ul className="flex items-center">
            {links.map(({ id, link, linkName }) => (
              <li key={id} className="my-animation myFont nav-links mr-2 cursor-pointer text-black hover:scale-105 duration-200 link-underline">
                <Link passHref href={link} onClick={(e) => handleLinkClick(e, link)}>
                  {linkName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* mobile */}
        <div className="flex grow md:hidden flex justify-between">
          <ul className="items-center px-4 justify-between">
            <MobileNav />
          </ul>
        </div>

        <div className="flex-1 flex-col w-34 ... justify-center  items-center hidden md:flex">
          <p className="font-gray">Bonjour, mon nom est</p>
          <p className="m-0 myFont my-animation">Romain Flori-Cantrelle</p>
        </div>

        <div className="flex-1 flex-col items-end w-34 ... hidden md:flex">
          <div className="flex justify-end  items-center">
            <span className="mr-2 status-dot" />
            <p className="font-gray">Disponible immédiatement</p>
          </div>
          <BasicModal firstletter="M" title="e contacter" />
        </div>
      </div>
    </div>
  )
}

export default Topbar
