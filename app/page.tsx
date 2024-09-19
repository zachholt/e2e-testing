'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the login key exists in localStorage and its value is 'true'
    const loginStatus = localStorage.getItem('login');
    if (loginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleProfileClick = (e) => {
    if (!isLoggedIn) {
      e.preventDefault(); // Prevent the default behavior of the link
      window.location.href = "/login";
    }
  };

  const handleLogoutClick = (e) => {
    if (isLoggedIn) {
      e.preventDefault(); // Prevent the default behavior of the link
      localStorage.removeItem('login');
      window.location.href = "/";
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
      {!isLoggedIn && <Link href="/login">Login</Link>}
      {isLoggedIn && <Link href="/" onClick={handleLogoutClick}>Logout</Link>}
      <Link href="/profile" onClick={handleProfileClick}>Profile</Link>
    </div>
  );
}