type HeaderProps = {
  title: string,
  description: string, 
  image?: string,
  classname?: string
}

const Header = ({title, description, image, classname} : HeaderProps) => {
  return (
    <header className={`bg-[url('./assets/header.png')] grid grid-cols-[2fr_4fr] max-md:grid-cols-[4fr] gap-10 bg-no-repeat bg-cover p-[150px_120px_100px_120px] relative max-md:pt-[20px] max-sm:p-[210px_50px_120px_50px] ${classname}`}>
      
      <div className="flex flex-col gap-10 content-center justify-center">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
        <h2 className="text-white md:text-2xl max-md:text-xl">{description}</h2>
      </div>
      
      <div className="flex justify-center max-md:hidden">
        {image && <img className="rounded-[100px]" src={image} alt={title}/>}
      </div>
    </header>
  )
}

export default Header