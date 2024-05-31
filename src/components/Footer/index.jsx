import { useLocation } from 'react-router-dom'

import { TranslateSimbolIcon, TranslateSelectIcon } from '../Icons'

export const Footer = () => {
  const { pathname } = useLocation()

  return (
    <footer className="py-16 px-4 md:px-16">
      <div className="max-w-5xl m-auto grid gap-4 text-border-flix text-sm">
        <p className="mb-3  text-lg">
          Dúvidas? Ligue{' '}
          <a href="#" className="underline">
            0800 591 2876
          </a>
        </p>
        <nav className="w-full grid grid-cols-2 md:grid-cols-4 md:grid-reve gap-4 underline">
          {pathname === '/netflix-interface/login' ? (
            <>
              <a href="#">Perguntas frequentes</a>
              <a href="#">Central de Ajuda</a>
              <a href="#">Termos de Uso</a>
              <a href="#">Privacidade</a>
              <a href="#">Preferências de cookies</a>
              <a href="#">Informações corporativas</a>
            </>
          ) : (
            <>
              <a href="#">Perguntas frequentes</a>
              <a href="#">Central de Ajuda</a>
              <a href="#">Conta</a>
              <a href="#">Media Center</a>
              <a href="#">Relações com investidores</a>
              <a href="#">Carreiras</a>
              <a href="#">Resgatar cartão pré-pago</a>
              <a href="#">Comprar cartão pré-pago</a>
              <a href="#">Formas de assistir</a>
              <a href="#">Termos de Uso</a>
              <a href="#">Privacidade</a>
              <a href="#">Preferências de cookies</a>
              <a href="#">Informações corporativas</a>
              <a href="#">Entre em contato</a>
              <a href="#">Teste de velocidade</a>
              <a href="#">Avisos legais</a>
              <a href="#">Só na Netflix</a>
            </>
          )}
        </nav>
        <div className="w-36 border border-border-flix border-opacity-60 rounded py-1 flex items-center gap-2 mt-4 relative">
          <TranslateSimbolIcon />
          <select
            name="lenguage"
            id="lenguage"
            className="appearance-none w-full bg-transparent text-center z-10 "
          >
            <option value="pt" selected className="text-black-flix">
              Português
            </option>
            <option value="en" className="text-black-flix">
              Inglês
            </option>
          </select>
          <TranslateSelectIcon />
        </div>
        {pathname === '/netflix-interface/' && <p>Netflix Brasil</p>}
      </div>
    </footer>
  )
}
