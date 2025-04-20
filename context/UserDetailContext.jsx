// app/context/UserDetailContext.jsx
"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { useGoogleLogin, googleLogout } from "@react-oauth/google";
import axios from "axios";

export const UserDetailContext = createContext();

export function UserDetailProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to fetch user profile
  const fetchUserProfile = async (accessToken) => {
    console.log("Fetching profile with token:", accessToken);
    try {
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
       
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      console.log("Profile fetched:", response.data);
      const userData = {
        name: response.data.name,
        email: response.data.email,
        picture: response.data.picture,
      };
      setUser(userData);
      // Store user data and token in localStorage
      localStorage.setItem("google_user", JSON.stringify(userData));
      localStorage.setItem("google_access_token", accessToken);
    } catch (error) {
      console.error("Fetch error:", error.response?.data || error.message);
      setUser(null);
      localStorage.removeItem("google_user");
      localStorage.removeItem("google_access_token");
    } finally {
      setLoading(false);
    }
  };

  // Check for stored token on page load
  useEffect(() => {
    const storedToken = localStorage.getItem("google_access_token");
    const storedUser = localStorage.getItem("google_user");
    if (storedToken && storedUser) {
      // Validate token by fetching user profile
      fetchUserProfile(storedToken);
    } else {
      setLoading(false);
    }
  }, []);

  // Google login handler
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      fetchUserProfile(tokenResponse.access_token);
    },
    onError: () => {
      console.error("Google login failed");
      setLoading(false);
    },
  });

  // Logout handler
  const logout = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem("google_user");
    localStorage.removeItem("google_access_token");
  };

  return (
    <UserDetailContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserDetailContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserDetailContext);
  if (!context) {
    throw new Error("useUser must be used within a UserDetailProvider");
  }
  return context;
}