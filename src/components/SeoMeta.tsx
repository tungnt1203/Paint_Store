import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_INFO } from '../constants';
import {
  canonicalUrl,
  DEFAULT_OG_IMAGE,
  SEO_DEFAULT_LOCALE,
} from '../seo';

type SeoMetaProps = {
  title: string;
  description: string;
  /** Đường dẫn bắt đầu bằng /, ví dụ /catalog */
  path: string;
  image?: string;
  noIndex?: boolean;
};

/**
 * Meta chuẩn SEO + Open Graph + Twitter cho các trang thông thường.
 */
export function SeoMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  noIndex,
}: SeoMetaProps) {
  const url = canonicalUrl(path);
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex ? (
        <meta name="robots" content="noindex, follow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}
      <link rel="canonical" href={url} />
      <meta property="og:site_name" content={CONTACT_INFO.name} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={SEO_DEFAULT_LOCALE} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
