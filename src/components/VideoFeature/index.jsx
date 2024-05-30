export const VideoFeature = ({
  title,
  content,
  image,
  altImage,
  video,
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
        <div className="w-full max-w-lg">
          <div className="relative">
            <video
              src={video}
              autoPlay
              muted
              loop
              className={`absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 -z-10 ${isReverse ? 'w-[65%] top-[33%]' : 'w-[80%]'}`}
            ></video>
            <img src={image} alt={altImage} />
          </div>
        </div>
      </div>
    </section>
  )
}
