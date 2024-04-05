/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        formats: ["image/webp"],
        remotePatterns: [
            {
                hostname: "i.scdn.co",
            },
        ],
    },
};

module.exports = nextConfig;
