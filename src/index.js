import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { TextField, FormControl, InputLabel, MenuItem, Select, Input } from '@material-ui/core'
import Axios from 'axios'

const App = () => {
  const [currency1, setCurrency1] = useState('')
  const [currency2, setCurrency2] = useState('')
  const [rate, setRate] = useState(0)
  const [howmuch, setHowmuch] = useState(0)

  const handleChange1 = event => {
    setCurrency1(event.target.value);
  };

  const handleChange2 = event => {
    setCurrency2(event.target.value);
  };

  const getData = (props) => {
    const URL = `https://api.exchangeratesapi.io/latest?base=${currency1}&symbols=${currency2}`
    
    Axios.get(URL).then(response => {
      setRate(response.data.rates[currency2] * howmuch)
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
      <p>
        <FormControl>
          <InputLabel id="currency1">From</InputLabel>
          <Select
            labelId="currency-label"
            id="currency1"
            value={currency1}
            onChange={handleChange1}
          >
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"SEK"}>SEK</MenuItem>
          </Select>
        </FormControl>
      </p>

      <p>
        <FormControl>
          <InputLabel id="currency2">To what</InputLabel>
          <Select
            labelId="currency2-label"
            id="currency2"
            value={currency2}
            onChange={handleChange2}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"SEK"}>SEK</MenuItem>
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
        <button onClick={getData}>-></button>
      </p>
      <p>{rate}</p>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
