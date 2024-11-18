/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
    domains: ["dnm.nflximg.net"],
},
typescript: {
    ignoreBuildErrors: true,
},
staticPageGenerationTimeout: 400, 
};

export default nextConfig;
