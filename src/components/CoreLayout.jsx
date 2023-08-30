/** @jsxImportSource theme-ui */

import React from "react";
import { Box, Global } from "theme-ui";

import theme from '@styles/theme';

export default function CoreLayout({ children }) {
  return (
    <>
      <Global styles={theme.globals}/>
      <Box sx={{
        margin: ['2.5rem 1.5rem', '4rem 1.5rem', '4rem 0'],
      }}>
        {children}
      </Box>
    </>
  );
}
