import { Button, TextField, Box, Typography} from "@mui/material";
import AuthHOC from "../layouts/AuthHOC";
import { Link } from "react-router-dom";


const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
   <>
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
     <TextField
      label="Your Email"
      margin="normal"
      required
      fullWidth
      id="email"
      name="email"
      autoComplete="email"
      autoFocus
     />
     <TextField
      label="Your Password"
      margin="normal"
      required
      fullWidth
      name="password"
      type="password"
      id="password"
      autoComplete="current-password"
     />
     <Button
      type="submit"
      fullWidth
      variant="authenticationButton"
     >
      Sign In
     </Button>
     <Box sx={{ textAlign: 'center' }}>
      <Link href="#">
       <Typography variant="authenticationLink">Get a new password</Typography>
      </Link>
     </Box>
    </Box>
   </>
  );
}

export default AuthHOC(Login);
