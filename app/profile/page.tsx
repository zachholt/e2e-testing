'use client'

import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link";

export default function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulating login success and setting localStorage
    if (name && email) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
      alert('Saved info successful!');
      window.location.href = "/profile";
    } else {
      alert('Please fill in both fields.');
    }
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Profile Page</h1>
        <p className={styles.description}>
          <Link href="/">&larr; Go Back</Link>
        </p>
        <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name"
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
      </main>
    </div>
  );
}
