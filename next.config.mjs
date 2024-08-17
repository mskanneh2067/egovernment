/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'readlins.io'
            }
        ]
    }
};

export default nextConfig;
