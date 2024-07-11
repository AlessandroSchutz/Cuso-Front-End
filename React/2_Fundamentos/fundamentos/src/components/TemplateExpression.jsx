// 4 - Template Expression

const TemplateExpression = () => {
    const name = "Mateus"

    const data = {
        age: 31,
        job: "Programador"
    }


    return (
        <div>
            <p>A soma é {2 + 2} </p>
            <h3>Bem vindo {name} </h3>
            <p>Você tem {data.age} anos, e trabalha como {data.job}! </p>
        </div>
    )
}

export default TemplateExpression