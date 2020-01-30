import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { COLORS } from 'themes/constants';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }: Props) => (
  <React.Fragment>
    <header css={headerStyle}>
      <span>header is here</span>
    </header>
    <main>{children}</main>
    <footer css={footerStyle}>
      <span>footer is here</span>
    </footer>
  </React.Fragment>
);

const headerStyle = css({
  backgroundColor: COLORS.BACKGROUND,
});

const footerStyle = css({
  backgroundColor: COLORS.GRAY,
});

export default Layout;
