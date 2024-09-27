import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const RadioFilter = () =>{
    return (
        <FormControl >
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
        >
            <FormControlLabel value="female" control={<Radio style={{color:"red"}}/>} label="Female" />
            <FormControlLabel value="male" control={<Radio style={{color:"green"}}/>} label="Male" />
            <FormControlLabel value="other" control={<Radio style={{color:"blue"}}/>} label="Other" />
        </RadioGroup>
        </FormControl>
      );
    };


    export default RadioFilter;
