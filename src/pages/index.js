/** @jsxImportSource theme-ui */

import React from "react";

import { Box } from 'theme-ui';

import CoreLayout from '@components/CoreLayout';
import signature from '@images/signature.png';

function SubtleEmphasis({ children }) {
  return (
    <span sx={{ fontFamily: 'triplicate-t4, monospace' }}>
      {children}
    </span>
  );
}

export default function IndexPage() {
  return (
    <CoreLayout>
      <main sx={{ fontSize: ['1.2rem', '1.6rem'] }}>
        <p sx={{
          fontFamily: "triplicate-t4, monospace",
          paddingBottom: '2rem',
        }}>
          <span sx={{ fontSize: ['2.2rem', '3.3rem'] }}>
            Daniel Brady
          </span>
          <br />
          <span sx={{ fontSize: ['1.2rem', '1.8rem'], fontStyle: 'italic' }}>
            Software maintenance and remodeling
          </span>
        </p>

        <p>
          I squash&nbsp;<SubtleEmphasis>bugs</SubtleEmphasis>, renovate&nbsp;
          <SubtleEmphasis>systems</SubtleEmphasis>, and burn down&nbsp;
          <SubtleEmphasis>backlogs</SubtleEmphasis> for overwhelmed engineering teams.
        </p>
      </main>

      {/* Footer */}
      <footer sx={{
        maxWidth: ['80vw', '65vw', '45vw'],
        position: 'fixed',
        bottom: '2rem',
        right: [0, '3rem'],
      }}>
        <img src={signature} sx={{ width: '100%' }}/>
        <aside sx={{
          marginTop: '0.5rem',
          marginRight: '1.5rem',
          fontSize: ['0.6rem', '0.8rem'],
          textAlign: 'right',
        }}>
          ©2023 Scrappy Poet LLC
        </aside>
      </footer>
    </CoreLayout>
  );
}

export const Head = () => <title>Home Page</title>;
