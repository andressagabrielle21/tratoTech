import Header from "../components/Header"
import clock from '../assets/inicial.png'
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../hooks";

const Home = () => {
  const navigate = useNavigate()
  const categories = useAppSelector(state => state.categories)

  return (
    <div>
      <Header 
        title="Classificados Tech" 
        description="Compre diversos tipos de produtos no melhor site do Brasil."
        image={clock}
        classname="pb-[250px]"
      />

      <div className="items-center flex flex-col p-[0_100px_0] gap-8 transform max-md:translate-y-[-80px] md:translate-y-[-250px]">
        <div>
          <h1 className="text-white text-[40px]">Categorias</h1>
        </div>

        <div className="flex flex-wrap gap-[50px] justify-center top-[calc(100%_-_150px)] w-[90%]">
          {categories.map((item, index) => (
            <div key={index} className="items-center cursor-pointer flex flex-col" onClick={() => navigate(`/category/${item.id}`)}>
              <img src={item.thumbnail} alt={item.nome} className="rounded-[144px]"/>
              <h1 className="text-[#041833] text-[20px]">{item.nome}</h1>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home