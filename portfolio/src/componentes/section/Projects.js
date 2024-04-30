import ButtonB from './elements/ButtonB'
import styles from './Projects.module.css'
import Cards from './Cards'
import lpdnc from './image/projects/lpdnc.svg'
function Projects(){
    return (
        <div id='projects'className={styles.projetos}>
            <h1>
                Projetos
            </h1> 
            <Cards
                img={lpdnc}
                title="LP - DNC"
                tech="HTML, CSS e JS"
                description="Desenvolvimento de uma Landing Page o lançamento da formação em tecnologia"
                repo="https://github.com/Guilherme705/Landing-Page-DNC"
                site="https://escola-dnc-page.netlify.app/"
            />
            <ButtonB text='Acesse meu repositório' link='https://github.com/Guilherme705?tab=repositories'/>
        </div>
    )
}

export default Projects