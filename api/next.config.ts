import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  // Raiz do trace = pasta deste app Next (monorepo com web/ + api/)
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
