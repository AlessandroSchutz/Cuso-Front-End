// 4 - Refatorando com hook 
import { useCounterContext } from "../hooks/useCounterContext"

// 5 - Contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"

const Contact = () => {
  const {counter} = useCounterContext()

  const {color} = useTitleColorContext()

  return (
    <div>
      <h1 style={{color: color }}>Página de contato</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}

export default Contact