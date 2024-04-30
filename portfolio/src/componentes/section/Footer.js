import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from './Footer.module.css'
function Footer(){
    return(
        <div className={styles.footer}>
             <ul>
                <li><FaInstagram size={30}/></li>
                <li><a href='https://github.com/Guilherme705'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/guilherme-muniz0402/'><FaLinkedin size={30}/></a></li>
           </ul>
           <p>
                guilhermemuniz705@gmail.com
           </p>
           <p>
                Guilherme Muniz ©
           </p>
        </div>
    )
}

export default Footer