import PropTypes from 'prop-types';

const CarDetails = ({ brand, km, color }) => {
    return (
        <div>
            <h2>Detalhes do carro:</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>Kilometragem: {km}</li>
                <li>Color: {color}</li>
            </ul>
        </div>
    )
}

CarDetails.propTypes = {
    brand: PropTypes.string.isRequired, 
    km: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};

export default CarDetails