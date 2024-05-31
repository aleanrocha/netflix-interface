import { Fragment } from 'react'

import { Banner } from '../../components/Banner'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export const Login = () => {
  return (
    <Fragment>
      <Header />
      <section className="relative border-b-2 border-highlight-flix border-opacity-70 md:border-none">
        <div className="hidden md:block">
          <Banner />
        </div>
        <form className="w-full md:max-w-md py-20 md:py-12 px-6 md:px-16 flex flex-col gap-4 rounded-md md:absolute md:top-96 md:left-2/4 md:-translate-x-2/4  md:-translate-y-2/4 md:bg-black-login-flix">
          <h2 className="text-3xl font-bold">Entrar</h2>
          <div className="border border-border-flix w-full border-opacity-60 rounded h-14 focus-within:border-white-flix relative">
            <input
              type="text"
              name="email"
              id="email"
              className="bg-transparent w-full h-full outline-none p-2 absolute top-2 left-2 peer"
              required
            />
            <label
              htmlFor="email"
              className=" absolute top-4 left-4 text-border-flix transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs"
            >
              Email ou número de celular
            </label>
          </div>
          <div className="border border-border-flix border-opacity-60 w-full rounded h-14 focus-within:border-white-flix relative">
            <input
              type="text"
              name="email"
              id="email"
              className="bg-transparent w-full h-full outline-none p-2 absolute top-2 left-2 peer"
              required
            />
            <label
              htmlFor="email"
              className=" absolute top-4 left-4 text-border-flix transition-all duration-300 peer-focus:top-2 peer-focus:text-xs peer-valid:top-2 peer-valid:text-xs"
            >
              Senha
            </label>
          </div>
          <input
            type="submit"
            value="Entrar"
            className=" bg-accent-flix text-lg rounded h-9 px-8 cursor-pointer transition-300 hover:opacity-90"
          />
          <div className="text-center text-border-flix">OU</div>
          <a
            href="#"
            className="p-2 bg-highlight-flix bg-opacity-85 transition hover:bg-opacity-60 rounded text-center"
          >
            Usar um código de acesso
          </a>
          <a
            href="#"
            className="text-center hover:text-border-flix hover:underline"
          >
            Esqueceu a senha?
          </a>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="checkMe"
              id="checkMe"
              className="w-5 h-5"
            />
            <label htmlFor="checkMe">Lembre-se de mim</label>
          </div>
          <p className="text-border-flix">
            Novo por aqui?{' '}
            <a href="#" className="text-white-flix hover:underline">
              Assine agora.
            </a>
          </p>
          <p className="text-border-flix text-xs ">
            Esta página é protegida pelo Google reCAPTCHA para garantir que você
            não é um robô.{' '}
            <a href="#" className="text-link-flix hover:underline">
              Saiba mais
            </a>
          </p>
        </form>
      </section>
      <Footer />
    </Fragment>
  )
}
