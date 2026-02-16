import resctIcon from '../../assets/react.svg'
import classes from './Footer.module.css'
export default function Footer(){
    return (
        <footer className={classes.footer}>
            <nav>
                <img src={resctIcon} alt="" />
                <img src={resctIcon} alt="" />
                <img src={resctIcon} alt="" />
                <img src={resctIcon} alt="" />
            </nav>
             <p className={classes.copyright}>Copyright...</p>
        </footer>
    )
}