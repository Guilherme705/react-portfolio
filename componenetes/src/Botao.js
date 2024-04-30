import styles from './Botao.module.css'
function Botao(props) {
    return(
        <div className={styles.btn}>
            <button>{props.text}</button>
        </div>
    );
}

export default Botao