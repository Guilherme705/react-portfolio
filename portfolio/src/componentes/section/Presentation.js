import styles from './Presentation.module.css'
import ButtonA from './elements/ButtonA'

function Presentation(){
    return (
        <div className={styles.presentation} id="presentation">
           <p><strong>Bem-vindo ao meu Portfólio</strong></p>
           <h1>Olá, eu sou o Guilherme Muniz!</h1>
           <h4>
                Sou um apaixonado por tecnologia e soluções inovadoras.<br/>
                Como Desenvolvedor, eu tenho o compromisso de resolver problemas<br/>
                complexos e trazer resultados excepcionais para seus negócios. <br/>
                Meus projetos já geraram excelentes receitas anuais.<br/>
                Estou sempre em busca de novos desafios para superar.
           </h4>
           <ButtonA link='https://www.linkedin.com/in/guilherme-muniz0402/' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation