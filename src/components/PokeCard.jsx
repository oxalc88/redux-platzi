import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
import { StarButton } from './StarButton';
import './PokeList.css';


function PokeCard({ name, image, abilities, types, id, favorite }) {
    const dispatch = useDispatch();
    const typesString = types.map(type => type.type.name).join(', ')
    const handleOnFavorite = () => {
        dispatch(setFavorite({ pokemonId: id }))
    }
    return (
        <Card
            title={name}
            cover={< img src={image} alt={name} />}
            extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
        >
            <Meta description={`Type: ${typesString}`} />
            <Meta description={`Abilities: ${abilities}`} />
        </Card>
    )
}


export default PokeCard;