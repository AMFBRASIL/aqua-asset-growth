/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** URL base da API Next em api/ (ex.: http://localhost:3000) */
  readonly VITE_API_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
