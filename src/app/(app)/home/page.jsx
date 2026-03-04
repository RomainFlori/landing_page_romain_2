"use client"

import Image from "next/image"
import "../../../styles/cyberpunk.css"
import {useEffect, useState, useRef} from "react"
import Card from "../_components/Layout/components/Card"

export default function HomePage() {
  // First useEffect: For graycube sliding effect
  const [scrollY, setScrollY] = useState(0)

  // Handle scroll to track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll")

    if (elements.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Fade In
              entry.target.classList.remove("opacity-0")
              entry.target.classList.add("opacity-100")
            } else {
              // Fade Out
              entry.target.classList.remove("opacity-100")
              entry.target.classList.add("opacity-0")
            }
          })
        },
        {
          root: null, // Default is the viewport
          rootMargin: "-8% 0px -8% 0px", // Adjust to trigger earlier/later
          threshold: 0.5, // Trigger as soon as it starts leaving/entering
        }
      )

      elements.forEach((el) => observer.observe(el)) // Observe each element

      return () => {
        elements.forEach((el) => observer.unobserve(el)) // Cleanup observer on unmount
      }
    }
  }, [])

  return (
    <>
      <div className="relative h-screen w-full">
        <div className="relative z-10 flex items-center h-full text-white">
          <div className="md:p-4 p-2">
            <h1 className="myFont text-[40px] sm:text-[80px] lg:text-[110px] xl:text-[150px] 2xl:text-[200px] leading-none">DEVELOPPEUR</h1>
            <h1 className="myFont text-[40px] sm:text-[80px]  lg:text-[110px] xl:text-[150px] 2xl:text-[200px] leading-none">
              FULLSTACK<span className="cyberglitch3">_</span>
            </h1>
          </div>
        </div>
      </div>

      <div id="why" className="flex flex-col py-20 relative">
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-right" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-right" />

        <div className="animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out px-4 w-1/2 md:w-2/3 sm:w-full text-white myFont 2xl:text-6xl text-3xl lg:text-4xl">
          <h3 className="">DEVELOPPEMENT WEB.</h3>
          <h3 className="glitchtext" title="API.">
            API.
          </h3>
          <h3 className="">BASE DE DONNEE.</h3>
        </div>

        <div className="px-4 flex w-full justify-end my-20 animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
          <p className="text-sm md:text-lg myFont graycolor md:w-1/2 w-full">
            Je suis Romain Flori-Cantrelle, diplômé d'un <b>Master 5 en programmation</b> à Epitech Paris. Durant mes études, j'ai réalisé cinq stages, bien au-delà de la moyenne, privilégiant les
            projets concrets et utiles en entreprise. En 4ᵉ année, je suis parti à New York pour mes études, me permettant de perfectionner mon anglais. Mon stage de fin d'études chez{" "}
            <b>Loopsider</b> en fullstack JavaScript m'a confirmé ma passion pour le développement. Aujourd'hui, je recherche un <b>CDI en programmation</b> pour continuer à évoluer et m'épanouir dans
            ce métier.
          </p>
        </div>
      </div>

      <div className="py-10 px-10">
        <div className="all-divider-line"></div>
      </div>

      <div className="flex flex-col pt-5 pb-20 relative">
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-right" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-right" />
        <div className=" px-4 text-white myFont 2xl:text-6xl text-3xl lg:text-4xl my-20 ">
          <h3 className="animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out glitchtext" title="MES STAGES & ALTERNANCES.">
            MES STAGES & ALTERNANCES.
          </h3>
        </div>
        <div className=" px-4 flex w-full justify-end my-20 animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
          <p className="text-lg myFont graycolor xl:mb-20 md:mb-10">
            Pendant mes études j'ai fais un total de <u>3 stages</u> et <u>2 alternances</u>.
          </p>
        </div>

        <div className="xl:px-10 md:px-2 hidden	w-full my-20 py-10 justify-between 2xl:flex ">
          <div
            style={{
              transform: `translateY(${scrollY * 0.1 - 210}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <Card
              cardId="card-81"
              avatar="/img/sokeo_logo.jpg"
              year="2019"
              workExperience="Développement de landing page et implémentation de nouveaux design fait par un designer"
              description="Php, Javascript, Css, Html, Boostrap"
              fullname="Sokeo"
              jobtitle="Développeur front-end"
              internship="STAGE"
            />
          </div>

          <div
            style={{
              transform: `translateY(${scrollY * -0.3 + 640}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <Card
              cardId="card-5410"
              avatar="/img/polyconseil.webp"
              year="2023"
              workExperience="Développement Backend Typescript |
            Développement d'un projet pour la Française des jeux (FDJ) |
            Méthode agile, équipe de 20 développeurs backend, utilisation d'APIs
                  "
              description="Typescript, Postman, APIs, Agile"
              fullname="Polyconseil"
              jobtitle="Développeur Backend"
              internship="ALTERNANCE"
            />
          </div>

          <div
            style={{
              transform: `translateY(${scrollY * 0.3 - 510}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <Card
              cardId="card-120"
              avatar="/img/loopsider_logo.jpg"
              year="2024"
              workExperience="Développement du produit Sherp.ai |
                  Développement du site vitrine: Sherp.ai |
                  Développement du site web officiel de Loopsider en Next.js
                  "
              description="Javascript, React.js, Agile"
              fullname="Loopsider"
              jobtitle="Développeur Fullstack"
              internship="STAGE"
            />
          </div>
          <div
            className="2xl:flex hidden"
            style={{
              transform: `translateY(${scrollY * 0.1 - 210}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <Card
              cardId="card-10"
              avatar="/img/sokeo_logo.jpg"
              year="2020"
              workExperience="Développement d'un e-commerce avec intégration de l'API Stripe'"
              description="Cakephp, React.js, Boostrap"
              fullname="Sokeo"
              jobtitle="Développeur fullstack"
              internship="ALTERNANCE"
            />
          </div>
        </div>

        <div className="2xl:flex hidden pb-20 px-10 flex w-full justify-between ">
          <div
            style={{
              transform: `translateY(${scrollY * 0.1 - 210}px)`,
              transition: "transform 0.5s ease-out",
            }}
          >
            <Card
              cardId="card-177"
              avatar="/img/sokeo_logo.jpg"
              year="2021"
              workExperience="Développement de site web avec backoffice et implémentation de design"
              description="Php, Symphony, tailwindCss, React.Js"
              fullname="Sokeo"
              jobtitle="Développeur fullstack PHP"
              internship="STAGE"
            />
          </div>
        </div>
        {/* RESPONSIVE */}
        <div className="2xl:hidden  w-full flex flex-col items-center">
          {/* Row 1 */}
          <div className="flex w-full md:flex-row flex-col">
            <div className="mt-10 w-full md:mr-5">
              <Card
                cardId="card-120"
                avatar="/img/loopsider_logo.jpg"
                year="2024"
                workExperience="Développement du produit Sherp.ai
            Développement du site vitrine: Sherp.ai 
            Développement du site web officiel de Loopsider en Next.js
            "
                description="Javascript, React.js, Agile"
                fullname="Loopsider"
                jobtitle="Développeur Fullstack"
                internship="STAGE"
              />
            </div>
            <div className="mt-10 w-full md:ml-5">
              <Card
                cardId="card-5410"
                avatar="/img/polyconseil.webp"
                year="2023"
                workExperience="Développement Backend Typescript
            Développement d'un projet pour la Française des jeux (FDJ)
            Méthode agile, équipe de 20 développeurs backend, utilisation d'APIs
            "
                description="Typescript, Postman, APIs, Agile"
                fullname="Polyconseil"
                jobtitle="Développeur Backend"
                internship="ALTERNANCE"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex w-full  md:flex-row flex-col">
            <div className="mt-10 w-full md:mr-5">
              <Card
                cardId="card-177"
                avatar="/img/sokeo_logo.jpg"
                year="2021"
                workExperience="Développement de site web avec backoffice et implémentation de design"
                description="Php, Symphony, tailwindCss, React.Js"
                fullname="Sokeo"
                jobtitle="Développeur fullstack PHP"
                internship="STAGE"
              />
            </div>
            <div className="mt-10 w-full md:ml-5">
              <Card
                cardId="card-10"
                avatar="/img/sokeo_logo.jpg"
                year="2020"
                workExperience="Développement d'un e-commerce avec intégration de l'API Stripe'"
                description="Cakephp, React.js, Boostrap"
                fullname="Sokeo"
                jobtitle="Développeur fullstack"
                internship="ALTERNANCE"
              />
            </div>
          </div>

          {/* Single Card */}
          <div className="mt-10 w-full">
            <Card
              cardId="card-81"
              avatar="/img/sokeo_logo.jpg"
              year="2019"
              workExperience="Développement de landing page et implémentation de nouveaux design fait par un designer"
              description="Php, Javascript, Css, Html, Boostrap"
              fullname="Sokeo"
              jobtitle="Développeur front-end"
              internship="STAGE"
            />
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="all-divider-line"></div>
      </div>

      <div className="py-10 relative" id="projects">
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-top-right" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-left" />
        <img src="/svg/corner.svg" alt="corner" className="small-corner is-bottom-right" />
        <div className="px-4 md:w-1/2 w-full text-white myFont 2xl:text-6xl text-3xl lg:text-4xl my-20 animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
          <h3 className="">MES PROJETS EN LIGNE.</h3>
        </div>
        <div className="lg:px-10 md:px-5 px-1">
          <div className="w-full pb-5 md:px-4 px-0 my-10 flex  animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className=" w-full flex flex-col items-end	">
              <div className="lg:w-3/4 w-full fg-dark transition duration-500 zoom">
                <a href="https://sherpai.fr/" target="blank_">
                  <img alt="img" src="/img/sherpai.png" />
                </a>
                <p className="graycolor text-center mt-2">Développé avec Javascript & React.js</p>
              </div>
            </div>
          </div>

          <div className=" py-10 md:px-4 px-0  my-10 flex animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className="flex flex-col">
              <div className="fg-dark lg:w-3/4 w-full  transition duration-500 zoom">
                <a href="https://loopsider.com/" target="blank_">
                  <img alt="img" src="/img/loopsider.png" />
                </a>
                <p className="graycolor text-center mt-2">Développé avec Next.js</p>
              </div>
            </div>
          </div>

          <div className="md:px-4 px-0  py-10 my-10 flex justify-end animate-on-scroll opacity-0 transition-opacity duration-2000 ease-in-out">
            <div className="flex flex-col items-end">
              <div className="fg-dark lg:w-3/4 w-full  transition duration-500 zoom">
                <a href="https://messagerservices.com/pages/contact" target="blank_">
                  <img alt="img" src="/img/coursier.png" />
                </a>
                <p className="graycolor text-center mt-2">Développé avec PHP & React.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10"></div>
    </>
  )
}
