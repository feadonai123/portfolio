import Timeline from "../src/timeline"

const timeline = [
  {
    title: 'ESTÁGIO COMO DESENVOLVEDOR',
    where: 'BOTPAG - Meios de pagamento e serviços LTDA',
    when: 'JUL/2021 - SET/2022',
    description: 'Atuou no desenvolvimento de soluções digitais da empresa, sendo responsável pela criação e manutenção de sites, servidores e banco de dados.'
  },
  {
    title: 'PROGRAMADOR JUNIOR',
    where: 'UNIPROJETEC - Soluções de Projetos',
    when: 'OUT/2021 - JAN/2022',
    description: 'Participou do desenvolvimento do painel WEB para fiscalização de infrações de trânsito. Foram utilizados a framework Next e um servidor com WebSockets para a comunicação com os radares.'
  },
  {
    title: 'PROGRAMADOR JUNIOR',
    where: 'BOTPAG - Meios de pagamento e serviços LTDA',
    when: 'SET/2022 - HOJE',
    description: 'Responsável pelo desenvolvimento e manutenção dos softwares da empresa que incluem soluções para parcelamento de débitos de veículo, assinatura biométrica de documentos, marketplace integrado com Correios, entre outros projetos nos quais estive envolvido em todas as etapas do desenvolvimento. '
  },
]

export default function Experience() {
  return <Timeline timeline={timeline} />
}
