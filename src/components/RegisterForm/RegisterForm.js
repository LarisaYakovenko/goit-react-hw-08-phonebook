import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';
import { Button, TextField, Box } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (

      <Box
        sx={{
          display: 'flex',
          margin: '0 auto',
          marginTop: 20,
          flexDirection: 'column',
          justifyContent: 'center',
          textAlign: 'center',
          width: 400,
          gap: 3,
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          autoFocus
          required
          type="text"
          name="name"
          label="Username"
          variant="outlined"
          autoComplete="off"
          size="small"
          
        />
        <TextField
          required
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          autoComplete="off"
          size="small"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          autoComplete="off"
          size="small"
        />
        <Button variant="contained" size="large" type="submit">
          Register
        </Button>
      </Box>

    // <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
    //   <label className={css.label}>
    //     Username
    //     <input type="text" name="name" />
    //   </label>
    //   <label className={css.label}>
    //     Email
    //     <input type="email" name="email" />
    //   </label>
    //   <label className={css.label}>
    //     Password
    //     <input type="password" name="password" />
    //   </label>
    //   <button type="submit">Register</button>
    // </form>
  );
};
