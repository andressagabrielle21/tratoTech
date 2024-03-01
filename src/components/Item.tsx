import {
  AiOutlineHeart,
  AiFillHeart,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from 'react-icons/ai';
import {
  FaCartPlus
} from 'react-icons/fa';
import { isFavorite } from '../store/reducers/items';
import { useAppDispatch, useAppSelector } from '../hooks';
import { changeCart, quantityItem } from '../store/reducers/cart';

interface IItem {
  titulo?: string,
  descricao: string,
  foto: string,
  favorito: boolean,
  preco: number,
  id: string,
  categoria: string,
  cart?: boolean,
  quantity?: number,
}

// const quantityProps = {
//   size: 32,
// }

// The VIEW (Components) are resposible to DISPATCH an ACTION to the reducer 
// (The reducer changes the store) and then the STORE sends a new state to the component

// Type is the TYPE of the ACTION
// And PAYLOAD that is the value in each ACTION

const Item = ({
  titulo,
  descricao,
  foto,
  favorito,
  preco,
  id,
  cart,
  quantity = 0,
} : IItem) => {

  // This is necessary considering that we CAN'T use HOOKS inside simple functions
  const dispatch = useAppDispatch();
  const onCart = useAppSelector(state => state.cart.some(itemOnCart => itemOnCart.id === id));

  function changeFavorite() {
    dispatch(isFavorite(id))
  }


  const toBuy = () => {
    dispatch(changeCart(id))
  }

  return (
    <div className={` ${cart ? 'items-center w-full flex flex-row flex-wrap': 'bg-white rounded-[10px] flex filter drop-shadow-sm flex-col overflow-hidden w-[300px]'}`}>
      <div className='m-[0_auto]'>
        <img src={foto} alt={titulo} />
      </div>

      <div className="bg-[#EFF9FF] flex flex-col justify-between flex-1">

        <div className="p-[16px_16px_0_16px]">
          <h2 className="text-[#1875e8] text-[20px] font-medium">{titulo}</h2>
          <p className="text-[#444] text-xs">{descricao}</p>
        </div>

        <div className="flex justify-between">
          <div className="items-center bg-[#1875e8] text-white flex text-[20px] h-[70px] justify-center w-[170px]">
            R$ {preco.toFixed(2)}
          </div>

          <div className='items-center flex flex-1 justify-evenly'>
            {favorito ? <AiFillHeart color="#ff0000" size={24} className='items-center bg-transparent border-none cursor-pointer flex flex-col gap-[5px]' onClick={changeFavorite}/> 
              : <AiOutlineHeart color="#041833" size={24} className='items-center bg-transparent border-none cursor-pointer flex flex-col gap-[5px]' onClick={changeFavorite}/>}

            {cart ? 
              (<div className='items-center flex gap-[10px] justify-center'>
                Quantidade: 
                <AiFillMinusCircle size={32} color="#1875e8" className='cursor-pointer' 
                  onClick={() => {if (quantity >= 1) {dispatch(quantityItem({id: id, quantity: -1}))}} }/> 
                  <span>{String(quantity || 0).padStart(2, '0')}</span>
                <AiFillPlusCircle size={32} color="#1875e8" className='cursor-pointer' onClick={() => dispatch(quantityItem({id: id, quantity: +1}))}/>
              </div>)
               : 
              <FaCartPlus
                size={24}
                color={onCart ? '#1875e8' : "#041833"}
                className='items-center bg-transparent border-none cursor-pointer flex flex-col gap-[5px]'
                onClick={toBuy}
              />
              
            }
          </div>

        </div>

      </div>
    </div>
  )
}

export default Item