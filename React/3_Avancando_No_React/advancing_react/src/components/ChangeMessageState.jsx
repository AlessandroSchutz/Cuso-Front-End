const ChangeMessageState = ({ handleMesage }) => {
    const messages = ["Oi", "Olá", "Tudo bem?"];

    return (
        <div>
            <button onClick={() => handleMesage(messages[0])}>1</button>
            <button onClick={() => handleMesage(messages[1])}>2</button>
            <button onClick={() => handleMesage(messages[2])}>3</button>
        </div>
    )
}

export default ChangeMessageState