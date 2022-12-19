import classes from "./Header.module.css";

function Header() {
    return (
        <header className={classes.nav_bar}>
            <h2>HOME PAGE</h2>
            <a>
                <button className={classes.logout_btn}> Logout </button>
            </a>
        </header>
    )
}

export default Header