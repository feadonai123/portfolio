import Link from "next/link";
import LinkIcon from "../../assets/icons/link.js";
import Cards from "components/src/cards";

const courses = [
  {
    title: "DESENVOLVEDOR VOLUNTÁRIO",
    where: "UTFPR - Universidade Tecnológica Federal do Paraná",
    when: "JUL/2022 - HOJE",
    description: <>
      <p>Colabora no projeto NÓS - Nosso Olhar Solidário da UTFPR, como parte do time de desenvolvedores do aplicativo e site de doações de itens para pessoas carentes</p>
      <br/>
      <Link href="https://nossoolharsolidario.com.br" target="_blank"><LinkIcon/> Nosso Olhar Solidário</Link>
    </>
  },
  {
    title: "CURSO DE INGLÊS",
    where: "UTFPR - Universidade Tecnológica Federal do Paraná",
    when: "JAN/2018 - DEZ-2020",
    description: <>
      <p>Curso ofertado pelo departamento de Línguas estrangeiras CALEN da UTFPR</p>
      <br/>
      <Link href="certificadoCalen.pdf" target="_blank"><LinkIcon/>Certificado</Link>
    </>
  }
]

export default function Courses() {
  return <Cards items={courses} />
}
