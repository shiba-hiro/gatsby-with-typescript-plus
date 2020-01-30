import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  lang?: string;
  title?: string;
  description?: string;
}


const SEO: React.FC<Props> = ({
  lang = 'en',
  title = 'gatsby with typescript plus',
  description = '',
}: Props) => (
  <Helmet
    htmlAttributes={{
      lang,
    }}
    title={title}
    meta={[
      {
        name: 'description',
        content: description,
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
    ]}
  />
);

export default SEO;
