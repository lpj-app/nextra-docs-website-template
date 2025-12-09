import { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
  contentDirBasePath: "/",
});

const securityHeaders = [
    //Prevents loading of the page in an iframe and clickjacking attacks
    { key: 'X-Frame-Options', value: 'DENY' },
    // Prevents MIME-type sniffing and forces browsers to render in a standardized mode, prevents exec of scripts hidden as images
    { key: 'X-Content-Type-Options', value: 'nosniff' },
    // Enhances privacy by disabling the ability to track users across sites
    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    //Disables browser features like camera and microphone access unless explicitly allowed by the user
    { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
];

const nextConfig: NextConfig = withNextra({
    reactStrictMode: true,
    output: "standalone",
    experimental: {
        serverActions: {
            // Allow server actions to be called from white listed origins only
            allowedOrigins: [
                '<your-domain>',
                'blog.<your-domain>',
                'www.<your-domain>',
                'www.blog.<your-domain>',
                'localhost:3000'
            ],
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.blog.<your-domain>',
            },
        ],
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: securityHeaders,
            },
        ];
    },
});

export default nextConfig;