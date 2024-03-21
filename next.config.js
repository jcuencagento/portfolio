/** @type {import('next').NextConfig} */
const nextConfig = {
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    images: {
        formats: ["image/webp"],
    },
};

module.exports = nextConfig;
