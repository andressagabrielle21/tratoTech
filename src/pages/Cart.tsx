// import { createSelector } from '@reduxjs/toolkit';
import Item from '../components/Item';
import { useAppDispatch, useAppSelector } from '../hooks';
// import { RootState } from '../store';
import { resetCart as finalizeCart } from '../store/reducers/cart';
import Header from './../components/Header';

interface IItem {
  titulo?: string,
  descricao: string,
  foto: string,
  favorito?: boolean,
  preco: number,
  id: string,
  categoria: string,
  cart?: boolean,
  quantity?: number,
}

const Cart = () => {

  const dispatch = useAppDispatch()

  const {cart, total} = useAppSelector(state => {
    let total = 0;
    const typedArray: IItem[] = [];
    const regexp = new RegExp(state.search, 'i');

    const cartReduce = state.cart.reduce((items, itemInCart) => {
      const item = state.items.find(item => item.id === itemInCart.id && item.titulo.match(regexp));

      if(item) {
        total += (item.preco * itemInCart.quantity)
        items.push({
          ...item,
          quantity: itemInCart.quantity,
        });
      }
      return items;
    }, typedArray);
    return {
        cart: cartReduce,
        total,
      };
  });

  // const selectCartAndTotal = createSelector(
  //   (state: RootState) => state.cart,
  //   (state: RootState) => state.search,
  //   (cart, search) => {
  //     let total = 0;
  //     const typedArray: IItem[] = [];
  //     const regexp = new RegExp(search, 'i');

  //     const cartReduce = cart.reduce((items, itemInCart) => {
  //       const item = items.find(item => item.id === itemInCart.id && (item.titulo && item.titulo.match(regexp)));
  
  //       if(item) {
  //         total += (item.preco * itemInCart.quantity)
  //         items.push({
  //           ...item,
  //           quantity: itemInCart.quantity,
  //         });
  //       }

  //       return items;
  //     }, typedArray);

  //     return {cart: cartReduce, total};
  //   }
  // );
  // const {cart, total} = useAppSelector(selectCartAndTotal)

  return (
    <div>
      <Header 
        title='Carrinho de Compras'
        description="Confira os produtos que você quer levar para casa."
      />

      <div className="items-end flex flex-col gap-[30px] p-[50px_100px]">
      {cart.map((item) => (
          <Item key={item.id} {...item} cart />
        ))}

        <div className="bg-[#eff9ff] flex justify-between max-w-[800px] p-[16px] w-full">
          <span className='font-bold'>Resumo da compra</span>
          <span>Subtotal: <span className='font-bold'> R$ {total.toFixed(2)} </span> </span>
        </div>
        
        <button className="bg-[#041833] rounded-[36px] text-white cursor-pointer font-[24px] p-[20px_50px]" onClick={() => {dispatch(finalizeCart())}}>
          Finalizar compra
        </button>
      </div>

    </div>
  )
}

export default Cart