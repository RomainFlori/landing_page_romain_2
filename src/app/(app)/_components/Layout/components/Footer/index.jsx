/* eslint-disable jsx-a11y/control-has-associated-label */

import "./animation.js"

const Footer = () => (
  <>
    <div className="md:flex-column items-center w-full md:px-11 px-5 pb-5 bg-black text-white">
      <div className="all-divider-line my-10"></div>
      <div className="flex myfont graycolor flex-row">
        <div className="w-1/2">
          <h2>Liens du site</h2>
        </div>
        <div className="w-1/2">
          <h2>Autres liens</h2>
        </div>
      </div>
      <div className="my-5 flex w-full flex-row graycolor ">
        <div className="w-1/2">
          <a className="link-underline link-underline-black hover:scale-105 duration-200" href="/">
            <p>Haut de page</p>
          </a>
		      <a className="link-underline link-underline-black hover:scale-105 duration-200" href="#why">
            <p>Pourquoi me choisir ?</p>
          </a>
          <a className="link-underline link-underline-black hover:scale-105 duration-200" href="#projects">
            <p>Mes projets</p>
          </a>
        </div>

        <div className="w-1/2 flex items-center space-x-2">
          <a className="link-underline link-underline-black hover:scale-105 duration-200" target="_blank" href="https://www.linkedin.com/in/romain-flori-cantrelle/">
            <img src="/svg/linkedin.svg" className="hover:scale-105 duration-200 cursor-pointer"></img>
          </a>
        </div>
      </div>

      <div className="all-divider-line mt-10 mb-4"></div>

      <div className="w-full">
        <div className="flex font-semibold">
          <p className="glitchtext myFont" title="©Romain Flori-Cantrelle">
            ©Romain Flori-Cantrelle {new Date().getFullYear()}.
          </p>
        </div>
        <div className="justify-end flex font-semibold mt-3">
          <p className="graycolor justify-end myFont flex">Site développé avec Next.js - TailwindCss</p>
        </div>
      </div>
    </div>
  </>
)

export default Footer
