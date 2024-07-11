const Container = ({ children }) => {
    return (
        <div>
            <h3>Conteúdo do componente pai:</h3>
            {children}
        </div>
    )
}

export default Container