import { useLocation } from 'react-router-dom'

import { Input } from '../input'

export const Banner = () => {
  const { pathname } = useLocation()

  return (
    <section className="bg-banner-home-flix bg-top bg-cover w-screen h-max-90 md:h-screen overflow-hidden relative top-0 left-0 z-0 flex justify-center items-center">
      <span className="bg-black-overlay absolute top-0 left-0 w-full h-screen"></span>
      {pathname === '/' && (
        <>
          <span className="bg-banner-mask-flix absolute top-0 left-0 w-full h-screen"></span>
          <div className="z-10 text-center p-8 flex flex-col gap-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Filmes, séries e muito mais, sem limites
            </h1>
            <p className="text-xl md:text-2xl">
              Assista onde quiser. Cancele quando quiser.
            </p>
            <div className="mt-2">
              <p className="text-xl mb-4">
                Quer assistir? Informe seu email para criar ou reiniciar sua
                assinatura.
              </p>
              <Input />
            </div>
          </div>
        </>
      )}
    </section>
  )
}
