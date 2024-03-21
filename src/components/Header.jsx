import classes from './Header.module.css';

const Header = () => {
  return( 
  <header className={classes.header}>

    <img src='https://raw.githubusercontent.com/ezhil56x/Investment-Calculator-React/main/src/assets/investment-calculator-logo.png' alt='logo' />
    <h1>investmen calculator</h1>
  </header>
    )
}

export default Header;
