import './App.css'

// 2 - Importando componente
import FirstComponents from './components/FirstComponent.jsx'

// 4 - Template Expression
import TemplateExpression from './components/TemplateExpression.jsx'

// 5 - Hierarquia de componentes
import MyComponent from './components/MyComponent.jsx'

// 6 - Events
import Events from './components/Events.jsx'

function App() {
  // 3 - Comentários
  return (
    <>
      {/* 3 - Comentário JSX*/}
      <h1>Fundamentos do React</h1>
      <FirstComponents />
      <TemplateExpression />
      <MyComponent />
      <Events />
    </>
  )
}

export default App
