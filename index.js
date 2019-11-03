import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { TextField, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

const App = () => {
  const [currency1, setCurrency1] = useState('')
  const [currency2, setCurrency2] = useState('')

  const handleChange1 = event => {
    setCurrency1(event.target.value);
  };

  const handleChange2 = event => {
    setCurrency2(event.target.value);
  };

  return(
    <div>
      <p>
        <FormControl>
          <InputLabel id="currency1">From</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
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
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={currency2}
            onChange={handleChange2}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"EUR"}>EUR</MenuItem>
            <MenuItem value={"SEK"}>SEK</MenuItem>
          </Select>
        </FormControl>
      </p>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
