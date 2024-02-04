import classes from './Header.module.css';

const Header = () => {
    return(
        <header className={classes.header}>
            <h1>Expense Tracker</h1>
            <nav>
                <ul>
                    <li>
                        <a href="">Expenses</a>
                    </li>
                    <li>
                        <a href="">products</a>
                    </li>
                    <li>
                        <a href="">Logout</a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
};

export default Header;