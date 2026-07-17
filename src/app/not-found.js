import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{ textAlign: 'center', padding: '100px 20px' }}>
            <h1 style={{ fontSize: '72px', color: '#0072c6' }}>404</h1>
            <h2>Page Not Found</h2>
            <p>The page you are looking for does not exist or has been moved.</p>
            <Link href="/" style={{
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 20px',
                backgroundColor: '#0072c6',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '5px'
            }}>
                Go Back Home
            </Link>
        </div>
    );
}