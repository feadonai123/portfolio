import Timeline from "../src/timeline"

const timeline = [
  {
    title: 'TÉCNICO INTEGRADO EM ELETRÔNICA',
    where: 'UTFPR - Universidade Tecnológica Federal do Paraná',
    when: 'JUL/2017 - DEZ/2020',
    description: ''
  },
  {
    title: 'BACHARELADO EM SISTEMAS DE INFORMAÇÃO',
    where: 'UTFPR - Universidade Tecnológica Federal do Paraná',
    when: 'JAN/2022 - HOJE',
    description: ''
  },
]

export default function Formation() {
  return <Timeline timeline={timeline} />
}
