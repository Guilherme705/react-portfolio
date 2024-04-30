import styles from './ButtonA.module.css'

function ButtonA({text, link}){
    return (
        <div>
            <a href={link}>
                <button  className={styles.buttonA}>{text}</button>
            </a>
        </div>
    )
}

export default ButtonA