import '../nav.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';

const Nav = () => {


    return (
        <div id="nav">
            <Link to="/"><IconButton><HomeIcon className="navButton" fontSize="medium" /></IconButton></Link>
            <Link to="/about-skills"><IconButton><PersonIcon className="navButton" fontSize="medium" /></IconButton></Link>
            <Link to="/projects"><IconButton><WorkIcon className="navButton" fontSize="medium" /></IconButton></Link>
            <Link to="/contact"><IconButton><EmailIcon className="navButton" fontSize="medium" /></IconButton></Link>
        </div>
    );
}

export default Nav;