// 3 - Alterando valor
//import { useContexT } from "react"
// import {CounterContext} from "../context/CounterContext"

import ChangeCounter from "../components/ChangeCounter"

// 4 - Refatorando com hook 
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - Contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Home = () => {
  // const {counter} = useContext(CounterContext)

  const {counter} = useCounterContext()

  const {color, dispatch} = useTitleColorContext()

  // 6 - Alterando contexto complexo 
  const setTitleColor = (color) => {dispatch({type:color})}

  return (
    <div>
      <h1 style={{color: color}}>Home</h1> 
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />

      {/* 6 - Alterando contexto complexo */}

      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Azul</button>
        <button onClick={() => setTitleColor("DEFAULT")}>Padrão</button>
      </div>
    </div>
  )
}

export default Home