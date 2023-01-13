import Link from "next/link"
import { signIn, signOut, useSession } from 'next-auth/client'

function Navbar() {
    const [session, loading] = useSession()

    return (
        <nav className="header">
            <h1 className="logo">
                <a href="#">NextAuth</a>
            </h1>
            <ul className="nav">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                {!session && (
                    <li>
                        <Link href="/api/auth/signin">Sign In</Link>
                    </li>
                )}
                {session && (
                    <li>
                        <Link href="/api/auth/signout">Sign Out</Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
