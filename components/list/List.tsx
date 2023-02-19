import Card from "@comp/card/Card";
import styles from './List.module.css';

const List: React.FC = ({ pokemons }: {pokemons: []}) => {
    return <div className={styles.list_container}>
        { pokemons.map(pokemon => <Card />)}
        
    </div>
}

List.defaultProps = {
    pokemons: Array(10).fill(''), 
}

export default List;