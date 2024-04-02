import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const TextFieldComp = ({id,label}) => {
  return (
    <>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={id} label={label} variant="outlined" />
    </Box>
    </>
  )
}

export default TextFieldComp