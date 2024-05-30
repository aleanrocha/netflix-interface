import { Fragment } from 'react'

import desktopFlix from '../../assets/desktop-flix.png'
import kidsFlix from '../../assets/kids-flix.png'
import imageMovieFlix from '../../assets/serie-offline-flix.jpg'
import tvFlix from '../../assets/tv-flix.png'
import { Banner } from '../../components/Banner'
import { FaqSection } from '../../components/FaqSection'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { PopcornIcon } from '../../components/Icons'
import { ImageFeature } from '../../components/ImageFeature'
import { VideoFeature } from '../../components/VideoFeature'
import rodolfoVideo from '../../videos/rodolfo.mp4'
import tiringaVideo from '../../videos/tiringa.mp4'

export const Home = () => {
  return (
    <Fragment>
      <Header />
      <Banner />
      <div className="bg-box-radial-mobile-flix md:bg-box-radial-desktop-flix w-11/12 md:w-4/5 mx-auto mt-4 p-6 pt-16 md:pt-6 rounded-md flex flex-col md:flex-row gap-2 md:gap-8 md:justify-center md:-mt-[72px] md:relative">
        <PopcornIcon />
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold">
            A Netflix que você adora por apenas R$ 20,90.
          </h3>
          <p>Assine o plano Padrão com anúncios.</p>
          <a href="#" className="text-link-flix underline">
            Saiba mais
          </a>
        </div>
      </div>
      <VideoFeature
        title={'Aproveite na TV'}
        content={
          'Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos.'
        }
        image={tvFlix}
        altImage={'Imagem Smart TV'}
        video={rodolfoVideo}
      />
      <VideoFeature
        title={'Assista onde quiser'}
        content={
          'Assista a quantos filmes e séries quiser no celular, tablet, laptop e TV.'
        }
        image={desktopFlix}
        altImage={'Imagem Desktop'}
        video={tiringaVideo}
        isReverse
      />
      <ImageFeature
        title={'Crie perfis para crianças'}
        content={
          'Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso.'
        }
        image={kidsFlix}
        altImage={'Imagem de Crianças'}
      />
      <ImageFeature
        title={'Baixe séries para assistir offline'}
        content={'Assista em um avião, trem ou submarino.'}
        image={imageMovieFlix}
        altImage={'Imagem de Crianças'}
        isReverse
      />
      <FaqSection />
      <Footer />
    </Fragment>
  )
}
