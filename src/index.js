  
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { TextField, FormControl, InputLabel, MenuItem, Select, Input, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Axios from 'axios'
import './index.css'
import logo from './logo.png'

/** Määritellään select-boxien ja submit-buttonin tyyliä
 * 
 */
const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  button: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


/** Määritellään useStatea käyttäen muuttujat valuutoille sekä kurssille ja muunnettavalle summalle. Asetetaan muuttujiin currency1 ja currency2 muunnettavat valuutat handleChange1- ja handleChange2-metodeissa. Metodissa getData haetaan APIn kautta haluttu data ja asetetaan rateksi kurssin ja muunnettavan summan tulo. Metodissa howMuch asetetaan muunnettavaksi summaksi textfieldissä annettu arvo. Lopussa renderöidään koko sovellus. 
 * 
 */
const App = () => {
  const [currency1, setCurrency1] = useState('')
  const [currency2, setCurrency2] = useState('')
  const [rate, setRate] = useState(0)
  const [howmuch, setHowmuch] = useState(0)
  const classes = useStyles();

  const handleChange1 = event => {
    setCurrency1(event.target.value);
  };

  const handleChange2 = event => {
    setCurrency2(event.target.value);
  };

  const getData = (props) => {
    const URL = `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`
    
    Axios.get(URL).then(response => {
      setRate((response.data.rates[currency2] * howmuch).toFixed(2))
    })
  }

  const howMuch = (e) => {
    const value = e.currentTarget.value;
    return(
      setHowmuch(value)
    )
  }

  return(
    <div>
      <header>
        <div>
          <img src={logo} alt="logo"/>
        </div>
      </header>
      <div className="container">
      <div className="cont1">
      <p>
        <FormControl className={classes.formControl}>
          <InputLabel id="currency1">From</InputLabel>
          <Select
            labelId="currency-label"
            id="currency1"
            value={currency1}
            onChange={handleChange1}
          >
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"GBP"}>GBP</MenuItem>
            <MenuItem value={"SEK"}>SEK</MenuItem>
            <MenuItem value={"JPY"}>JPY</MenuItem>
            <MenuItem value={"BGN"}>BGN</MenuItem>
            <MenuItem value={"CZK"}>CZK</MenuItem>
            <MenuItem value={"DKK"}>DKK</MenuItem>
            <MenuItem value={"HUF"}>HUF</MenuItem>
            <MenuItem value={"PLN"}>PLN</MenuItem>
            <MenuItem value={"RON"}>RON</MenuItem>
            <MenuItem value={"CHF"}>CHF</MenuItem>
            <MenuItem value={"ISK"}>ISK</MenuItem>
            <MenuItem value={"NOK"}>NOK</MenuItem> 
            <MenuItem value={"HRK"}>HRK</MenuItem>
            <MenuItem value={"RUB"}>RUB</MenuItem>
            <MenuItem value={"TRY"}>TRY</MenuItem>
            <MenuItem value={"AUD"}>AUD</MenuItem>  
            <MenuItem value={"BRL"}>BRL</MenuItem>
            <MenuItem value={"CAD"}>CAD</MenuItem>       
            <MenuItem value={"CNY"}>CNY</MenuItem>       
            <MenuItem value={"HKD"}>HKD</MenuItem>       
            <MenuItem value={"IDR"}>IDR</MenuItem>
            <MenuItem value={"ILS"}>ILS</MenuItem>       
            <MenuItem value={"INR"}>INR</MenuItem>  
            <MenuItem value={"KRW"}>KRW</MenuItem> 
            <MenuItem value={"MXN"}>MXN</MenuItem> 
            <MenuItem value={"MYR"}>MYR</MenuItem> 
            <MenuItem value={"NZD"}>NZD</MenuItem> 
            <MenuItem value={"PHP"}>PHP</MenuItem>  
            <MenuItem value={"SGD"}>SGD</MenuItem> 
            <MenuItem value={"THB"}>THB</MenuItem> 
            <MenuItem value={"ZAR"}>ZAR</MenuItem>     
            </Select>
        </FormControl>
      </p>

      <p>
        <FormControl className={classes.formControl}>
          <InputLabel id="currency2">To what</InputLabel>
          <Select
            labelId="currency2-label"
            id="currency2"
            value={currency2}
            onChange={handleChange2}
          >
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"GBP"}>GBP</MenuItem>
            <MenuItem value={"SEK"}>SEK</MenuItem>
            <MenuItem value={"JPY"}>JPY</MenuItem>
            <MenuItem value={"BGN"}>BGN</MenuItem>
            <MenuItem value={"CZK"}>CZK</MenuItem>
            <MenuItem value={"DKK"}>DKK</MenuItem>
            <MenuItem value={"HUF"}>HUF</MenuItem>
            <MenuItem value={"PLN"}>PLN</MenuItem>
            <MenuItem value={"RON"}>RON</MenuItem>
            <MenuItem value={"CHF"}>CHF</MenuItem>
            <MenuItem value={"ISK"}>ISK</MenuItem>
            <MenuItem value={"NOK"}>NOK</MenuItem> 
            <MenuItem value={"HRK"}>HRK</MenuItem>
            <MenuItem value={"RUB"}>RUB</MenuItem>
            <MenuItem value={"TRY"}>TRY</MenuItem>
            <MenuItem value={"AUD"}>AUD</MenuItem>  
            <MenuItem value={"BRL"}>BRL</MenuItem>
            <MenuItem value={"CAD"}>CAD</MenuItem>       
            <MenuItem value={"CNY"}>CNY</MenuItem>       
            <MenuItem value={"HKD"}>HKD</MenuItem>       
            <MenuItem value={"IDR"}>IDR</MenuItem>
            <MenuItem value={"ILS"}>ILS</MenuItem>       
            <MenuItem value={"INR"}>INR</MenuItem>  
            <MenuItem value={"KRW"}>KRW</MenuItem> 
            <MenuItem value={"MXN"}>MXN</MenuItem> 
            <MenuItem value={"MYR"}>MYR</MenuItem> 
            <MenuItem value={"NZD"}>NZD</MenuItem> 
            <MenuItem value={"PHP"}>PHP</MenuItem>  
            <MenuItem value={"SGD"}>SGD</MenuItem> 
            <MenuItem value={"THB"}>THB</MenuItem> 
            <MenuItem value={"ZAR"}>ZAR</MenuItem>   
          </Select>
        </FormControl>
      </p>
      <p>
        <Input
        onChange={howMuch}
        placeholder="How much??"
        />
      </p>
      <p>
        <Button onClick={getData} variant="contained" className={classes.button}>( ͡° ͜ʖ ͡°)</Button>
      </p>
      </div>
      <div className="cont2">{rate}</div>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)