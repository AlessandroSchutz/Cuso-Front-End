const ConditionalRender = () => {

    const x = 5

    const name = "Tiago"

    return (
        <div>
            {/* 7 - Render condicional */}

            <h3>Isso será exibido?</h3>
            {x > 2 && <p>Se x for true sim!</p>}

            {/* 8 - else */}

            <h3>Render Ternário</h3>
            {name === "João" ? (
                <div>
                    <p>Olá João!</p>
                </div>
            ): (
                <div>
                    <p>Nome não encontrado!</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender