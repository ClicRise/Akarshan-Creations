/** Prefix root-relative Lovable asset paths with Vite's deployment base path. */
export const assetUrl = (url: string) =>
  `${import.meta.env.BASE_URL}${url.replace(/^\/+/, "")}`;
