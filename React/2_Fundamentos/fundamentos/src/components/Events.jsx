// Eventos

const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log("Executou")
    }

    // 8 - Função de renderização
    const renderSomething = (x) => {
        if (x) {
            return <h3>Renderizando isso!</h3>
        } else {
            return <h3>Renderizando outra coisa!</h3>
        }
    }

    // return 10 < 2 && <p>Carregando...</p>

    return (
        <div>
            <div>
                <button onClick={() => console.log("Testando um evento")}>Clique aqui - Com React</button>
            </div>
            {/* 7 - Evento com função */}
            <div>
                <button onClick={handleClick}>Clique aqui - Com Função</button>
            </div>
            {/* 8 - Função com render */}
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events