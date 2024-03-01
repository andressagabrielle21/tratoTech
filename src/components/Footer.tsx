import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa"

const iconProps = {
  color: 'white',
  size: 24
}

const Footer = () => {
  return (
    <footer className="bg-[url('./assets/footer.png')] bg-cover bg-repeat b-0 flex h-[80px] justify-between px-[50px] w-100 items-center">
      <div className="flex gap-[50px]">
        <FaFacebook {...iconProps}/>
        <FaTwitter {...iconProps}/>
        <FaInstagram {...iconProps}/>
      </div>

      <span className="text-white text-lg text-center">
        Developed by Andressa.
      </span>
    </footer>
  )
}

export default Footer