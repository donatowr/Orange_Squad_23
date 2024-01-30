
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility, { TextField } from '@mui/material';
import VisibilityOff from '@mui/material';



const BotaoSenha = () => {
    const [showPassword, setPassword] = useState(false);

return(

    <TextField variant="outlined" style={{width: '100%', marginTop:10}} >
    <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
    <OutlinedInput
    id="Password"
    type={showPassword ? 'text' : 'password'}
    onChange={e => setPassword(e.target.value)}
    endAdornment={
        <InputAdornment position="end">
        <IconButton
        aria-label="toggle password visibility"
        onClick={e => setShowPassword(!showPassword)}
        edge="end"
        >
        {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
        </InputAdornment>
    }
    labelWidth={120}
    />
    </TextField>
    
    )
}

export default BotaoSenha;