import React from 'react';
import PropTypes from 'prop-types';
import MaskedInput from 'react-text-mask';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const TextMaskCustom = (props) => {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[ /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
      placeholderChar={'\u2000'}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};




const Telephone = ({value, handlePhoneChange}) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    textmask: '( )    -    ',
    
  });
  console.log('valu----e:::', setValues)

  

  return (
    <div className={classes.root}>
      <FormControl>
        
        <TextField required
          {...handlePhoneChange}
          variant="outlined"
          value={values.textmask}
          onChange={handlePhoneChange}
          name="textmask"
          id="formatted-text-mask-input"
          label="Telephone"
          InputProps={{
            inputComponent: TextMaskCustom,
            value
          }}
          
        />
        
      </FormControl>
     
    </div>
  );
}


export default Telephone;