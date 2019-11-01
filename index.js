import React from 'react';
import ReactDOM from 'react-dom';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleChange = (event) => {
    setCurrency(event.target.value);
  }

render(){
  return(
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currency}
          onChange={handleChange}
        >
          <MenuItem value={EUR}>EUR</MenuItem>
          <MenuItem value={USD}>USD</MenuItem>
          <MenuItem value={SEK}>SEK</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

}



ReactDOM.render(
  <App />,
  document.getElementById('root')
);