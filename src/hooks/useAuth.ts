"use client";
import { useState, useEffect } from "react";

const ADMIN_USER = { username: "admin", password: "amigumi2024" };
const SESSION_KEY = "amigurumi_admin";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem(SESSION_KEY);
    setIsLoggedIn(session === "true");
    setIsLoading(false);
  }, []);

  const login = (username: string, password: string): boolean => {
    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
      localStorage.setItem(SESSION_KEY, "true");
      setIsLoggedIn(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setIsLoggedIn(false);
  };

  return { isLoggedIn, isLoading, login, logout };
}