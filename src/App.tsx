import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const {data} = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  
  return (
      <div className='container'>
        <h1>Cardapio</h1>
        <div className="card-grid">
          {data?.map(foodData => 
          <Card 
          preco={foodData.preco} 
          titulo={foodData.titulo} 
          imagem={foodData.imagem}
          />
        )}
        {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
        <button onClick={handleOpenModal}>novo</button>
        </div>
      </div>
     
  )
}

export default App
