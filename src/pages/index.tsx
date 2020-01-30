import React from 'react';
import i18next from 'i18next';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

import Layout from 'components/layout';
import SEO from 'components/seo';
import { COLORS, mq } from 'themes/constants';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO />
    <h1 css={h1Style}>{i18next.t('COMMON.HELLO')}</h1>
  </Layout>
);

const h1Style = css({
  color: COLORS.PRIMARY,
  backgroundColor: 'white',
  [mq[1]]: {
    color: 'white',
    backgroundColor: COLORS.PRIMARY,
  },
});

export default IndexPage;
