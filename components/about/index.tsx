import styles from './about.module.css'
import Link from 'next/link'
import GithubIcon from "../../assets/icons/github"
import Linkedin from "../../assets/icons/linkedin"

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.image}>
        <img src="photo.png" alt="Foto de perfil" />
      </div>
      <div className={styles.description}>
        <p className={styles.title}><strong>OBJETIVO PROFISSIONAL</strong></p>
        <p>
          <span className={styles.circle}></span>Aplicar meu conhecimento no desenvolvimento de soluções críticas.<br/><br/>
          <span className={styles.circle}></span>Desenvolver minha carreiro sob a supervisão e estímulo de uma empresa comprometida com a inovação.<br/><br/>
          <span className={styles.circle}></span>Sou altamente motivado a continuar aprendendo e melhorando minha técnica.<br/><br/>
        </p>
      </div>
      <div className={styles.details}>
        <p className={styles.title}><strong>DADOS PESSOAIS</strong></p>
        <ul className={styles.lista}>
          <li><strong>Idade</strong> 20</li>
          <li><strong>Localização</strong> Curitiba, Paraná</li>
          <li><strong>Telefone</strong> (41) 9 9654-4577</li>
          <li><strong>E-mail</strong> domfelipe.moraes@gmail.com</li>
        </ul>

        <ul className={styles.links}>
          <li>
            <Link href="https://github.com/feadonai123" target="_blank">
              <GithubIcon />
              Github
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/felipe-adonai-de-moraes-720812212/" target="_blank">
              <Linkedin />
              Linkedin
            </Link>
          </li>

        </ul>
      </div>
    </div>
  )
}
