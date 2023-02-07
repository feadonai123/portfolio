'use client'

import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import { useState, useEffect, useRef } from 'react'

import Home from 'components/home'
import About from 'components/about'
import Formation from 'components/formation'
import Courses from 'components/courses'
import Experience from 'components/experience'
import Skills from 'components/skills'
import Projects from 'components/projects'

import BooksIcon from '../../assets/icons/books.js'
import PerfilIcon from '../../assets/icons/perfil.js'
import ProjectIcon from '../../assets/icons/project.js'
import SchoolIcon from '../../assets/icons/school.js'
import StarIcon from '../../assets/icons/star.js'
import BriefcaseIcon from '../../assets/icons/briefcase.js'
import MenuIcon from '../../assets/icons/menu.js'

const pages : { [key: string]: string } = {
  "/": "",
  "/about": "Sobre mim",
  "/formation": "Formação",
  "/courses": "Cursos e Voluntariado",
  "/experience": "Carreira",
  "/skills": "Habilidades e competências",
  "/projects": "Projetos"
}

const animationsIn : { [key: string]: string } = {
  "top" : styles.pageInTop,
  "left" : styles.pageInLeft,
  "right" : styles.pageInRight
}

export default function LandingPage() {

  const navRef = useRef<HTMLDivElement>(null)
  const [ page, setPage ] = useState("/")
  const pageTitle = pages[page]
  const [ isMenuOpen, setIsMenuOpen ] = useState(false)

  const goTo = (path: string) => {
    if(path === page) return
    
    isMenuOpen && setIsMenuOpen(false)
    const card = document.getElementById("card")
    const randomAnimation = Math.floor(Math.random() * 3)
    const animation = Object.values(animationsIn)[randomAnimation]

    if(!card) return

    card.classList.add(styles.pageOut)
    setTimeout(() => {
      setPage(path)
      card.classList.remove(styles.pageOut)
      card.classList.add(animation)

      setTimeout(() => {
        card.classList.remove(animation)
      }, 500)
    }, 500)
  }


  const handleOpenMenu = () => {
    setIsMenuOpen(true)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event : MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Element)) {
        handleCloseMenu();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleCloseMenu]);


  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.menuOpen : ""}`}>
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.perfil} onClick={() =>goTo("/")}>
          <Image src="/photo.jpeg" alt="Logo" width={100} height={100} />
          <h4>Felipe Adonai</h4>
        </div>
        <ul>
          <li className={page === "/about" ? styles.active : ""}>
            <Link onClick={() =>goTo("/about")} href="/">
              Sobre mim
              <PerfilIcon />
            </Link>
          </li>
          <li className={page === "/formation" ? styles.active : ""}>
            <Link onClick={() =>goTo("/formation")} href="/">
              Formação
              <SchoolIcon />
            </Link>
          </li>
          <li className={page === "/courses" ? styles.active : ""}>
            <Link onClick={() =>goTo("/courses")} href="/">
              Cursos e Voluntariado
              <BooksIcon />
            </Link>
          </li>
          <li className={page === "/experience" ? styles.active : ""}>
            <Link onClick={() =>goTo("/experience")} href="/">
              Carreira
              <BriefcaseIcon />
            </Link>
          </li>
          <li className={page === "/skills" ? styles.active : ""}>
            <Link onClick={() =>goTo("/skills")} href="/">
              Habilidades e competências
              <StarIcon />
            </Link>
          </li>
          <li className={page === "/projects" ? styles.active : ""}>
            <Link onClick={() =>goTo("/projects")} href="/">
              Projetos
              <ProjectIcon />
            </Link>
          </li>
        </ul>
      </nav>

      <span className={styles.menu} onClick={handleOpenMenu}>
        <MenuIcon />
      </span>

      <main className={styles.main}>
        <div className={`${styles.card}`} id="card" data-is-home={page === "/"}>
          <div className={styles.header} >
            <span className={styles.borderLeft}/>
            <h2>{pageTitle}</h2>
          </div>
          { page === "/" && <Home /> }
          { page === "/about" && <About /> }
          { page === "/formation" && <Formation /> }
          { page === "/courses" && <Courses /> }
          { page === "/experience" && <Experience /> }
          { page === "/skills" && <Skills /> }
          { page === "/projects" && <Projects /> }
        </div>
      </main>
    </div>
  )
}
