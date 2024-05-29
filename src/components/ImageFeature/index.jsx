import downloadIcon from '../../assets/download-icon.gif'
import strangerThings from '../../assets/stranger-things-flix.png'

export const ImageFeature = ({
  title,
  content,
  image,
  altImage,
  isReverse
}) => {
  return (
    <section className="border-b-8 border-highlight-flix border-opacity-50">
      <div
        className={`flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 py-16 px-4 max-w-7xl m-auto ${isReverse ? 'md:flex-row-reverse' : ''}`}
      >
        <div className="w-full max-w-lg text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold">{title}</h2>
          <p className="mt-4 text-lg md:text-2xl">{content}</p>
        </div>
        <div className="w-full max-w-lg flex flex-col justify-center items-center relative">
          <img src={image} alt={altImage} />
          {isReverse && (
            <div className="bg-black-flix flex items-center gap-4 border-2 border-highlight-flix rounded-lg p-2 absolute top-2/3">
              <img
                src={strangerThings}
                alt="capa do filme Stranger Things"
                className="w-8 md:w-12"
              />
              <div>
                <h3 className="text-sm md:text-base font-bold">
                  Stranger Things
                </h3>
                <p className="text-link-flix text-xs">
                  Download em andamento...
                </p>
              </div>
              <img
                src={downloadIcon}
                alt="imagem de download"
                className="w-8 md:w-12"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
