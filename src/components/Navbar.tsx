import Logo from '../assets/logo.svg'
import { RiShoppingCart2Line, RiShoppingCartFill } from 'react-icons/ri'
import Search from './Search'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const iconsProps = {
  color: 'white',
  size: 24
}

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="items-center text-white px-[120px] max-sm:p-[30px_50px] absolute flex justify-between max-md:flex-col max-md:h-[200px] h-[100px] w-screen z-10">
      <img src={Logo} alt="Tratotech logo" className='cursor-pointer' onClick={() => navigate('/')}/>

      <div className='flex justify-start gap-[20px] max-md:hidden'>
        <Link to="/" className={`text-white text-[22px] ${location.pathname === '/' && 'font-bold underline'}`}>Página Inicial</Link>
      </div>

      <div className='items-center bg-white rounded-lg shadow-lg flex py-[14px] px-[16px] max-md:w-full w-2/4'>
        <Search />
      </div>

      <div className='flex justify-center gap-[20px] '>
        <Link to="/cart">
          {location.pathname === '/cart' ? <RiShoppingCartFill {...iconsProps}/> : <RiShoppingCart2Line {...iconsProps}/>}
        </Link>
      </div>

    </div>

  )
}

export default Navbar