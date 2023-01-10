import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, name, type }) {
  return (
    <Helmet>
        <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
