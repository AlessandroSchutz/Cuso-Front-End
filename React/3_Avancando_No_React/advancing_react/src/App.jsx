import './App.css'

// 2- Imagem em assets
import night from "./assets/night.jpg"

// 3- useState
import Data from "./components/Data"

// 4- Renderização de lista
import ListRender from "./components/ListRender"

// 7- Render condicional
import ConditionalRender from './components/ConditionalRender'

// 8- props
import ShowUserName from './components/ShowUserName'

// 9 - Desestruturando Props
import CarDetails from './components/CarDetails'

// 11 - Renderização de listas com componente

const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

// 12 - Fragment
import Fragment from './components/Fragment'

// 13 - Children
import Container from './components/Container'

// 14 - Função em prop
import ExecuteFunction from './components/ExecuteFunction'

// 15 - State Lift
import MessageState from './components/MessageState'
import ChangeMessageState from './components/ChangeMessageState'
import { useState } from 'react'



function App() {

  // 14 - Função em prop
  function showMessage() {
    console.log("Evento do componete pai");
  }

  // 15 - State Lift

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App" style={{ paddingBottom: "500px" }}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/img.jpg" alt="imagem de dia" />

      {/* 2 - Imagem em assets */}
      <img src={night} alt="imagem de noite" />

      { /* 3 - useState */}
      <Data />

      {/* 4 - ListRener */}
      <ListRender />

      {/* 7 - render condicional */}
      <ConditionalRender />

      {/* 8 - Props */}
      <ShowUserName name="Mateus" />

      {/* 9 - Desestruturando Props */}
      <CarDetails brand="Toyota" km={120000} color="Cinza" />

      {/* 10 - Reaproveitamento de componentes */}
      <CarDetails brand="Honda" km={112342} color="Preto" />
      <CarDetails brand="Fiat" km={21566} color="Branco" />

      {/* 11 - Renderização de listas com componente */}

      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
      ))}

      {/* 12 - Fragments */}
      <Fragment />

      {/* 13 - Children */}
      <Container>
        <p> Alguma Coisa</p>
      </Container>
      <Container>
        <div>
          <h3>Teste</h3>
          <p>Meu Container</p>
        </div>
      </Container>

      {/* 14 - Função em prop */}
      <ExecuteFunction myFunction={showMessage} />

      {/* 15 - State Lift */}
      <MessageState msg={message}/>
      <ChangeMessageState handleMesage={handleMessage}/>

    </div>
  )
}

export default App
