import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const clientId = '507690455930-1avgd000dd0cec8bfnva51kf2cmmmp3b.apps.googleusercontent.com';

function SignIn({ setUser }) {
  const navigate = useNavigate();

  const onSuccess = (credentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode(credentialResponse.credential);
      setUser({ name: decoded.name, email: decoded.email, picture: decoded.picture });
      navigate('/');
    }
  };

  return (
    <div className="home-content">
      <h2>Sign In to ByteChat</h2>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={onSuccess}
          onError={() => alert('Login Failed')}
          useOneTap
        />
      </GoogleOAuthProvider>
    </div>
  );
}

export default SignIn; 