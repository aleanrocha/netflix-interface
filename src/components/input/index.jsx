export const Input = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-2 w-full max-w-xl mx-auto
    "
    >
      <div className="border border-border-flix w-full rounded h-14 focus-within:border-white-flix relative">
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
          Email
        </label>
      </div>
      <input
        type="submit"
        value="Vamos lá >"
        className=" bg-accent-flix text-2xl rounded h-14 px-8 cursor-pointer transition hover:opacity-90"
      />
    </form>
  )
}
