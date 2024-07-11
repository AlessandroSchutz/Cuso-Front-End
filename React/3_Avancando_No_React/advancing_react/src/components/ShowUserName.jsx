import PropTypes from 'prop-types';

const ShowUserName = (props) => {
    return (
        <div>
            <h2>O nome do usuário é: {props.name}</h2>
        </div>
    )
}

ShowUserName.propTypes = {
    name: PropTypes.string.isRequired, // Defina o tipo esperado para 'name'
};

export default ShowUserName