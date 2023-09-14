/** @jsxImportSource theme-ui */

import React from "react";

import { P } from '@components/CoreLayout';

export default function HeroHeading({ className }) {
  return (
    <div className={className} sx={{
      paddingTop: ['2rem', '4rem'],
    }}>
      <P sx={{
        display: 'block',
        paddingBottom: '0.5rem',
        fontSize: ['2.2rem', '3.3rem'],
      }}>
        Daniel Brady
      </P>

      <P sx={{
        display: 'block',
        fontSize: ['1.2rem', '1.8rem'],
        fontStyle: 'italic',
        lineHeight: '115%',
      }}>
        Software maintenance and remodeling
      </P>
    </div>
  );
}
