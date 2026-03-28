/** Gốc URL site (canonical, OG, JSON-LD). Đặt VITE_SITE_URL trong .env khi deploy. */
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, '') || 'https://sonnganpaint.vn'
) as string;

export function canonicalUrl(pathname: string): string {
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${SITE_URL}${p}`;
}

/** Ảnh OG mặc định (URL tuyệt đối, kích thước ~1200×630). */
export const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1562664377-709f2c337eb2?auto=format&fit=crop&w=1200&h=630&q=80';

export const SEO_DEFAULT_LOCALE = 'vi_VN';
