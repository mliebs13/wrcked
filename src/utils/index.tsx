export const shortenString = (string: string, length: number = 8): string => {
  return string.length <= length ? string : `${string.slice(0, length + 1)}...`;
};

export const getBaseUrl = (): string => {
  if (typeof window !== "undefined") return "";

  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;

  if (process.env.RENDER_INTERNAL_HOSTNAME)
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;

  return `http://localhost:${process.env.PORT ?? 3000}`;
};

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 960,
  xl: 1280,
  "2xl": 1536,
  "3xl": 2160,
};
