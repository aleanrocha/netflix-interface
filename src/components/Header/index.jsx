import { NetflixLogo, TranslateSelectIcon, TranslateSimbolIcon } from '../Icons'

export const Header = () => {
  return (
    <header className="flex justify-center items-center px-4 py-6 z-10 w-full absolute">
      <section className="flex justify-between items-center w-full text-white-flix p4 md:max-w-7xl md:m-auto">
        <div className="w-20 md:w-36">
          <NetflixLogo />
        </div>
        <div className="flex gap-4">
          <div className="w-16 md:w-36 border border-highlight-flix rounded py-1 flex items-center gap-2 relative">
            <TranslateSimbolIcon />
            <select
              name="lenguage"
              id="lenguage"
              className="appearance-none w-full bg-transparent text-transparent md:text-white-flix md:text-center z-10 "
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
          <button
            type="button"
            className="bg-accent-flix font-bold px-3 py-1 border-none rounded transition hover:opacity-90"
          >
            Entrar
          </button>
        </div>
      </section>
    </header>
  )
}
