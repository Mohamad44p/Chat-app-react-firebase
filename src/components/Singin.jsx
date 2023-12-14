import React, { useState } from "react";
import { StyledStack, StyledForm, StyledTextField, StyledButton } from "./SigninStyles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Handle successful sign-in.
    } catch (error) {
      console.error("Error signing in with email and password", error);
    }
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      // Handle successful sign-in.
    } catch (error) {
      console.error("Error signing in with Google", error);
    }
  };

  return (
    <StyledStack>
      <StyledForm onSubmit={handleSignIn}>
        <Typography variant="h4" sx={{ marginBottom: "2rem" }}>
          Sign in
        </Typography>

        <StyledTextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyledTextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">Sign in</StyledButton>

        <Typography sx={{ margin: "1rem 0" }}>Or sign in with</Typography>
        <Box>
        <IconButton onClick={signInWithGoogle}>
          <GoogleIcon sx={{ color: "#db4437" }} />
        </IconButton>
          <Typography sx={{ margin: "1rem 0" }}>
            Don't have an account?{" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#6a11cb" }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </StyledForm>
    </StyledStack>
  );
};

export default Signin;
