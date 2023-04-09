import { Link, useNavigate } from "react-router-dom";
import logo from "assets/logoNaturdoc.svg";
import { Container, Box, Button, Typography, Divider, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const AuthHOC = (WrappedComponent) => {

  const authType = WrappedComponent.name;
  const title = authType === "Login" ? "Login with your Naturedoc account" : "Create an Account";
  const alterURL = authType === "Login" ? "/signup" : "/login"
  const alterButtonText = authType === "Login" ? "Create Account" : "Login"; 
 
    function WrapperComponent(props ) {
      let navigate = useNavigate();
      return (
       <>
        <Box sx={{display:"flex", justifyContent:"flex-end"}}>
         <IconButton variant="outlined" onClick={() => navigate(-1)}>
          <CloseIcon fontSize="large" />
         </IconButton>
        </Box>
        <Container component="section" maxWidth="sm">
         <Box
          sx={{
           display: 'flex',
           flexDirection: 'column',
           minHeight: '80vh',
           marginBottom: 14,
           margin: 3,
          }}
          component="main"
         >
          <Container>
           <Box
            sx={{
             marginTop: 0,
             display: 'flex',
             flexDirection: 'column',
             alignItems: 'center',
            }}
           >
            <img src={logo} width={120} alt={logo} />
            <Box sx={{ mt: 4, mb: 2, pl: 2, width: '100%' }}>
             <Typography component="h1" variant="authenticationTitle">
              {title}
             </Typography>
            </Box>
            <WrappedComponent {...props} />
            <Divider variant="authenticationDivider">or</Divider>
            <Button fullWidth variant="authenticationButtonAlt" sx={{ mb: 2 }}>
             <Link
              to={alterURL}
              style={{ textDecoration: 'none', color: 'white' }}
             >
              {alterButtonText}
             </Link>
            </Button>
           </Box>
          </Container>
         </Box>
        </Container>
       </>
      );
  }
  return WrapperComponent;
}
export default AuthHOC;