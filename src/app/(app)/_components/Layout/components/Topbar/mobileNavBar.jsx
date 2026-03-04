import {useState} from "react"
import {Squash as Hamburger} from "hamburger-react"
import Link from "next/link"
import BasicModal from "../Button"

const NavMobile = () => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="md:hidden flex space-between">
      <Hamburger toggled={isOpen} size={20} toggle={setOpen} />
      {isOpen && (
        <div className="fixed left-0 p-5 pt-0 right-0 top-[5.5rem] z-50	">
          <ul className="rounded-xl bg-white p-5 w-full">
            <li className="rounded-xl w-full">
              <ul className="flex flex-col px-4 space-y-5">
                <p className="myFont  text-black text-lg font-medium">
                  Mon téléphone: <span className="text-black"><b>0699197324</b></span>
                </p>
                <p className="myFont text-black text-lg font-medium">
                  Mon email:{" "}
                  <span href="mailto:romain.flori-cantrelle@epitech.eu" className="myFont text-black hover:underline cursor-pointer">
                  <b>romain.flori-cantrelle@epitech.eu</b>
                  </span>
                </p>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default NavMobile
