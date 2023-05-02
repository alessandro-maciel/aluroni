import Item from './Item';
import items from './itens.json';
import styles from './Itens.module.scss';

export default function Itens(){
    return (
        <div className={styles.itens}>
            {items.map(item => (
                <Item key={item.id}/>
            ))}
        </div>
    );
}