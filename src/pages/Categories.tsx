import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { useAppSelector } from "../hooks"
import Item from "../components/Item";
import { RootState } from "../store";
import { createSelector } from "@reduxjs/toolkit";

function Categories() {
  const {nomeCategoria} = useParams();

  // DESTRUCT to make it easier
  // This snippet is functional BUT it creates a lot of rerenderings
  // const { categories, items } = useAppSelector(state => {
  //   return {
  //     categories: state.categories.find(categories => categories.id === nomeCategoria),
  //     items: state.items.filter(item => item.categoria === nomeCategoria)
  //   }
  // });

  // Selectors should be memoized to prevent unnecessary rerenders.
  // This is snippet is important to automatically memoizes the result of your selector 
  const regexp = (searchValue: string) => new RegExp(searchValue, 'i');

  const selectCategoriesAndItems = createSelector(
    (state: RootState) => state.categories,
    (state: RootState) => state.items,
    (state: RootState) => state.search,
    (categories, items, search) => {
      return { 
        categories: categories.find(category => category.id === nomeCategoria), 
        items: items.filter(item => item.categoria === nomeCategoria && item.titulo.match(regexp(search)))
      };
    }
  );
  const {categories, items} = useAppSelector(selectCategoriesAndItems)
  // createSelector also provides better performance by caching the result...

  return (
    <div>
      <Header 
        title={categories!.nome}
        description={categories!.descricao}
        image={categories!.header}
      />

      <div className="flex flex-wrap justify-center gap-[50px] m-[50px_50px]">
        {items?.map((item => (
          <Item 
            key={item.id}
            {...item}
          />
        )))}
      </div>
    </div>
  )
}

export default Categories