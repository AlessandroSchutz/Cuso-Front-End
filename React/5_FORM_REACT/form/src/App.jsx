import './App.css' 

 // 1 - Criação de form
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <h1>Form em React</h1>

      {/* 1 - Criação de form */}
      <MyForm userName="Alessandro" userEmail="alessandro@gmail.com"/>
    </>
  )
}

export default App
