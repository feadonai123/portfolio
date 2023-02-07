'use client'

import 'photoswipe/dist/photoswipe.css'
import styles from "./projects.module.css";
import NodeIcon from "../../assets/icons/node"
import NextIcon from "../../assets/icons/next"
import DatabaseIcon from "../../assets/icons/database"
import LinkIcon from "../../assets/icons/link"
import Link from "next/link";
import ChipIcon from "../../assets/icons/chip"
import PrinterIcon from "../../assets/icons/printer"
import ArduinoIcon from "../../assets/icons/arduino"
import BluetoothIcon from "../../assets/icons/bluetooth"
import MobileIcon from "../../assets/icons/mobile"
import Signal from "../../assets/icons/signal"
import { Gallery, Item } from 'react-photoswipe-gallery'

export default function Projects() {
  return (
    <div className={styles.projects}>
      <div className={styles.project}>
        <div className={styles.title}>GESTÃO DE FROTA</div>
        <div className={styles.date}>AGO/2023 - HOJE</div>
        <div className={styles.description}>
          Sistema WEB para gerenciamento de frota de veículos. Ele permite aferir, inspecionar e monitor pneus e veículos, além de contar com um sistema de cadastro de empresas e gerenciamento de seus usuários. 
          <br/>
          O projeto foi realizado com Next no client-side, Node no servidor e Postgre como banco de dados.
        </div>
        <div className={styles.technologies}>
          <div className={styles.technology}>
            <NextIcon />
            Next
          </div>
          <div className={styles.technology}>
            <NodeIcon />
            Node
          </div>
          <div className={styles.technology}>
            <DatabaseIcon />
            Postgre
          </div>
        </div>
        <div className={styles.image}>
        <Gallery>
            <Item
              original={"/projects/gestaoFrota.png"}
              thumbnail={"/projects/gestaoFrota.png"}
              width="1600"
              height="1600"
            >
              {({ ref, open }: { ref: any, open: any }) => (
                <img 
                  ref={ref as any}
                  style={{ cursor: 'pointer' }}
                  onClick={open} 
                  src="/projects/gestaoFrota.png" 
                  alt="Gestão de Frota" 
                />
              )}
            </Item>
            <div className={styles.miniatures}>
              <Item
                original={"/projects/gestaoFrota2.png"}
                thumbnail={"/projects/gestaoFrota2.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/gestaoFrota2.png" 
                    alt="Gestão de Frota" 
                  />
                )}
              </Item>
              
              <Item
                original={"/projects/gestaoFrota3.png"}
                thumbnail={"/projects/gestaoFrota3.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/gestaoFrota3.png" 
                    alt="Drone" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/gestaoFrota4.png"}
                thumbnail={"/projects/gestaoFrota4.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/gestaoFrota4.png" 
                    alt="Drone" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/gestaoFrota5.png"}
                thumbnail={"/projects/gestaoFrota5.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/gestaoFrota5.png" 
                    alt="Drone" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/gestaoFrota6.png"}
                thumbnail={"/projects/gestaoFrota6.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/gestaoFrota6.png" 
                    alt="Drone" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/gestaoFrota7.png"}
                thumbnail={"/projects/gestaoFrota7.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/gestaoFrota7.png" 
                    alt="Drone" 
                  />
                )}
              </Item>
            </div>
          </Gallery>
        </div>
        <div className={styles.links}>
          <Link href="https://gestao-frota-front-git-polimento-feadonai123.vercel.app/" target="_blank">
            <LinkIcon />
            Acessar SITE
          </Link>
        </div>
      </div>


      <div className={`${styles.project} ${styles.projectRight}`}>
        <div className={styles.title}>DRONE</div>
        <div className={styles.date}>MAI/2021 - DEZ/2022</div>
        <div className={styles.description}>
          Desenvolvido como trabalho de conclusão de curso do técnico integrado em eletrônica. Foi projetado e construído um drone controlado tanto por controle remoto, quanto por dispositivo móvel através de um aplicativo com conexão bluetooth.
          <br/>
          Foi utilizado impressora 3D para confecção das partes mecânicas, arduino para as partes eletrônicas , e o software MIT App Inventor para desenvolvimento do aplicativo. O drone conta com sensores de rádio, bluetooth, giroscópio e ultrassom.
        </div>
        <div className={styles.technologies}>
          <div className={styles.technology}>
            <PrinterIcon />
            Impressora 3D
          </div>
          <div className={styles.technology}>
            <ArduinoIcon />
            Arduino
          </div>
          <div className={styles.technology}>
            <ChipIcon />
            Sensores
          </div>
          <div className={styles.technology}>
            <BluetoothIcon />
            Bluetooth
          </div>
          <div className={styles.technology}>
            <MobileIcon />
            Mobile App
          </div>
        </div>
        <div className={styles.image}>
          <Gallery>
            <Item
              original={"/projects/drone.jpeg"}
              thumbnail={"/projects/drone.jpeg"}
              width="1600"
              height="1600"
            >
              {({ ref, open }: { ref: any, open: any }) => (
                <img 
                  ref={ref as any}
                  style={{ cursor: 'pointer' }}
                  onClick={open} 
                  src="/projects/drone.jpeg" 
                  alt="Drone" 
                />
              )}
            </Item>

            <div className={styles.miniatures}>
              <Item
                original={"/projects/drone2.jpeg"}
                thumbnail={"/projects/drone2.jpeg"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/drone2.jpeg" 
                    alt="Drone" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/drone3.jpeg"}
                thumbnail={"/projects/drone3.jpeg"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/drone3.jpeg" 
                    alt="Drone" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/drone4.jpeg"}
                thumbnail={"/projects/drone4.jpeg"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/drone4.jpeg" 
                    alt="Drone" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/drone5.jpeg"}
                thumbnail={"/projects/drone5.jpeg"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/drone5.jpeg" 
                    alt="Drone" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/drone6.jpeg"}
                thumbnail={"/projects/drone6.jpeg"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/drone6.jpeg" 
                    alt="Drone" 
                  />
                )}
              </Item>
            </div>
          </Gallery>

        </div>
        <div className={styles.links}>
          <Link href="https://drive.google.com/file/d/1Y_PWbvqvlrO_JyStutjlF3F8E33frGFc/view?usp=share_link" target="_blank">
            <LinkIcon />
            Relatório do TCC
          </Link>
        </div>
      </div>


      <div className={styles.project}>
        <div className={styles.title}>MEDIDOR DE FLUXO DE AR ULTRASSÔNICO</div>
        <div className={styles.date}>MAR/2020 - SET/2020</div>
        <div className={styles.description}>
          Projeto de um respirador pulmonar desenvolvido durante a pandemia, junto com professores e alunos. Fui responsável pelo desenvolvimento de um circuito medidor das variações do fluxo de ar em um determinado condutor, para isso, foi utilizado sensores ultrassônicos controlados via Arduino, e um dispositivo PWM controlador do fluxo de ar.
        </div>
        <div className={styles.technologies}>
          <div className={styles.technology}>
            <Signal />
            Eletrônica Analógica
          </div>
          <div className={styles.technology}>
            <ArduinoIcon />
            Arduino
          </div>
          <div className={styles.technology}>
            <ChipIcon />
            Sensores
          </div>
        </div>
        <div className={styles.image}>
          <Gallery>
            <Item
              original={"/projects/medidorDeAr.png"}
              thumbnail={"/projects/medidorDeAr.png"}
              width="1600"
              height="1600"
            >
              {({ ref, open }: { ref: any, open: any }) => (
                <img 
                  ref={ref as any}
                  style={{ cursor: 'pointer' }}
                  onClick={open} 
                  src="/projects/medidorDeAr.png" 
                  alt="Medidor de Fluxo de Ar" 
                />
              )}
            </Item>

            <div className={styles.miniatures}>
              <Item
                original={"/projects/medidorDeAr2.png"}
                thumbnail={"/projects/medidorDeAr2.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/medidorDeAr2.png" 
                    alt="Medidor de Fluxo de Ar" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/medidorDeAr3.png"}
                thumbnail={"/projects/medidorDeAr3.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/medidorDeAr3.png" 
                    alt="Medidor de Fluxo de Ar" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/medidorDeAr4.png"}
                thumbnail={"/projects/medidorDeAr4.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/medidorDeAr4.png" 
                    alt="Medidor de Fluxo de Ar" 
                  />
                )}
              </Item>

              <Item
                original={"/projects/medidorDeAr5.png"}
                thumbnail={"/projects/medidorDeAr5.png"}
                width="1600"
                height="1600"
              >
                {({ ref, open }: { ref: any, open: any }) => (
                  <img 
                    ref={ref as any}
                    style={{ cursor: 'pointer' }}
                    onClick={open} 
                    src="/projects/medidorDeAr5.png" 
                    alt="Medidor de Fluxo de Ar" 
                  />
                )}
              </Item>
            </div>
          </Gallery>
        </div>
        <div className={styles.links}>
          <Link href="https://drive.google.com/file/d/18Zg57_cpfuzAcEON32btkWpRO-VbLs0D/view?usp=share_link" target="_blank">
            <LinkIcon />
            Vídeo do projeto
          </Link>
          <Link href="https://drive.google.com/file/d/1zprsPkywFxINvrlWX4tAUHQk9lmRwFDz/view?usp=share_link" target="_blank">
            <LinkIcon />
            Relatório do projeto
          </Link>
        </div>
      </div>
    </div>
  )
}
