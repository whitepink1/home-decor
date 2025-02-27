/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'myvwmwqbvvnhhlmreilo.supabase.co',
            port: '',
            pathname: '/storage/v1/object/sign/Images/**',
        }]
    }
};

export default nextConfig;
