import {Button, TextField, FormControlLabel, Checkbox, Box } from "@mui/material";
import AuthHOC from "components/layouts/AuthHOC";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
   <>
    <Box component="form" onSubmit={handleSubmit}>
     <TextField
      label="Your Email Address"
      autoFocus
      required
      fullWidth
      id="email"
      name="email"
      autoComplete="email"
     />

     <TextField
      label="Your Username"
      required
      fullWidth
      id="username"
      name="username"
      autoComplete="username"
     />

     <TextField
      label="Your Password"
      required
      fullWidth
      name="password"
      type="password"
      id="password"
      autoComplete="new-password"
     />

     <FormControlLabel
      control={<Checkbox value="allowExtraEmails" color="primary" />}
      label="I accept the data privacy conditions."
     />

     <Button type="submit" fullWidth variant="authenticationButton" sx={{ mt: 3, mb: 2 }}>
      Create Account
     </Button>
    </Box>
   </>
  );
}

export default AuthHOC(SignUp);
