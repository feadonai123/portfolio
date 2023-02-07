import styles from "./skills.module.css";

type Skill = {
  title: string,
  percent: Number
};

type Skills = {
  [key: string]: Skill[]
};

const skills : Skills = {
  Linguagens : [
    {
      title: "JavaScript",
      percent: 90
    },
    {
      title: "TypeScript",
      percent: 60
    },
    {
      title: "PHP",
      percent: 30
    },
    {
      title: "C",
      percent: 60
    },
    {
      title: "C#",
      percent: 30
    },
    {
      title: "Assembly",
      percent: 40
    }
  ],
  Tecnologias : [
    {
      title: "React",
      percent: 85
    },
    {
      title: "Next.js",
      percent: 95
    },
    {
      title: "Vue",
      percent: 40
    },
    {
      title: "Node.js",
      percent: 95
    },
    {
      title: "Docker",
      percent: 70
    },
    {
      title: "Git",
      percent: 90
    },
    {
      title: "Linux",
      percent: 70
    },
    {
      title: "React Native",
      percent: 60
    }
  ],
  "Banco de Dados" : [
    {
      title: "MySQL",
      percent: 70
    },
    {
      title: "MongoDB",
      percent: 90
    },
    {
      title: "PostgreSQL",
      percent: 70
    }
  ],
  "Eletrônica" : [
    {
      title: "Arduino",
      percent: 90
    },
    {
      title: "Proteus",
      percent: 80
    },
    {
      title: "Confecção de placas de circuito",
      percent: 75
    },
    {
      title: "Quartus",
      percent: 50
    }
  ],
  "Outros" : [
    {
      title: "Unity",
      percent: 50
    },
    {
      title: "Métodos Ágeis - Scrum",
      percent: 90
    }
  ]
} 

export default function Skills() {
  return (
    <div className={styles.skills}>
      { Object.keys(skills).map((key, index) => (
        <div key={index} className={styles.item}>
          <h2 className={styles.title}>{key}</h2>
          <ul className={styles.list}>
            { skills[key].sort((a, b) => +b.percent - +a.percent).map((item, index) => (
              <li key={index}>
                <div className={styles.title}>{item.title}</div>
                <span className={styles.bar}>
                  <span className={styles.progress} style={{ width: `${item.percent}%` }}></span>
                  <span className={styles.percent}>{item.percent > 80 ? "Avançado" : item.percent > 50 ? "Intermediário" : "Básico"}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
