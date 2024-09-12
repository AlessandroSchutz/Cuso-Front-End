import { createContext } from "react";
import "./App.css";

// 3 - Importação de componente
import FirstComponent from "./components/FirstComponent";

// 4 - Utilizando props
import SecondComponent from "./components/SecondComponent";

//  5 - Desestruturando objeto com props
import Destructuring, { Category } from "./components/Destructuring";

// 6 - Utilizando useState em TypeScript
import State from "./components/State";

// 10 - Consumindo context
import Context from "./components/Context";

//  8 - Type
type textOrNull = string | null;

type fixed = "Isso" | "Ou" | "Aquilo";

// 9 - Context
interface IAppContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

function App() {
  // 1 - Variaveis
  const name: string = "Alessandro";
  const age: number = 21;
  const isWorking: boolean = true;

  // 2 - funções

  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  //  8 - Type
  const myText: textOrNull = "Tem algum texto aqui";
  let mySecondText: textOrNull = null;
  // mySecondText = "Opa";

  const testandoFixed: fixed = "Aquilo";

  // 9 - Context
  const contextValue: IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <h2>Nome: {name}</h2>
        <p>Idade: {age}</p>
        {isWorking && (
          <div>
            <p>Está trabalhando!</p>
          </div>
        )}
        <h3>{userGreeting(name)}</h3>
        <FirstComponent />
        <SecondComponent name="Maria" />
        <Destructuring
          title="Primeiro post"
          content="Algum conteúdo"
          commentsQty={10}
          tags={["Ts"]}
          category={Category.TS}
        />
        <Destructuring
          title="Segundo post"
          content="Outro conteúdo"
          commentsQty={5}
          tags={["python"]}
          category={Category.P}
        />
        <State />
        {myText && <p>Tem texto na variável</p>}
        {mySecondText && <p>Tem texto na variável</p>}
        {testandoFixed}
        <Context />
      </div>
    </AppContext.Provider>
  );
}

export default App;

