export const Input = () => {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="">
      <div className="">
        <label htmlFor="user">Email ou número de celular</label>
        <input type="text" name="user" id="user" />
      </div>
      <input type="submit" value="Vamos lá >" />
    </form>
  )
}
