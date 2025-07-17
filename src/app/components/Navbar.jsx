'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/quotes">Quotes</Link></li>
        <li><Link href="/about">About</Link></li>
      </ul>
    </nav>
  );
}
