import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Evita confundir o lockfile da raiz (Vite) com o do backend no trace de deploy
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
