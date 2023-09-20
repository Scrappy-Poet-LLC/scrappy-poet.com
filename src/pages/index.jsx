/** @jsxImportSource theme-ui */

import React, { useEffect, useRef } from "react";

import { Box } from 'theme-ui';

import CoreLayout, {
  ActionButton,
  CTA,
  Fader,
  Footer,
  Main,
  P,
  Section,
  SubtleEmphasis,
} from '@components/CoreLayout';
import HeroHeading from '@components/HeroHeading';

export default function IndexPage() {
  return (
    <CoreLayout>

      <Main>
        <Section>
          <HeroHeading />

          <P sx={{
            display: 'block',
            padding: '1.5rem 0 2.5rem 0',
            lineHeight: '130%',
            fontSize: ['1.2rem', '1.4rem'],
          }}>
            I squash&nbsp;<SubtleEmphasis>bugs</SubtleEmphasis>, renovate&nbsp;
            <SubtleEmphasis>systems</SubtleEmphasis>, and burn down&nbsp;
            <SubtleEmphasis>backlogs</SubtleEmphasis> for overwhelmed engineering teams.
          </P>

          <nav sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            float: 'right',
            paddingRight: ['1.5rem', '3rem'],
            a: {
              display: 'inline-block',
              padding: '0.5rem',
            },
          }}>
            <CTA sx={{
              '> div': {
                transform: 'rotate(-2deg)',
              }
            }}/>

            <ActionButton sx={{
              paddingTop: '0.5rem',
              paddingLeft: '1rem',
              '> div': {
                transform: 'rotate(2deg)',
              },
            }}>
              <a href='/services'>
                <SubtleEmphasis>
                  services →
                </SubtleEmphasis>
              </a>
            </ActionButton>
          </nav>
        </Section>

        <Section>
          <P>
            As a kid, I used to love helping my dad fix the house. I’d shadow him on his projects, amazed at how he seemed to know everything. In reality, he didn’t know much at all: he just dove into everything with <strong>grit and gumption</strong>, and relied on his friends to have his back whenever he was out of his depth. He never studied: he learned on the job, and succeeded through trial and failure and support.
          </P>

          <P>
            Today, I carry his energy with me in my own practice. If your team is underwater from trying to meet deadlines while the foundations are rotting under their feet, I can help. If you’ve got a business component that needs fixing but no one left alive understands how it works, bring me in. If you’ve got a codebase that could use a good spit-shine to make it maintainable, let me take a whack at it.
          </P>

          <P>
            My near-decade of experience as a maker has honed my strengths as a mender. <strong>I’m the maintenance guy</strong>, and I leave people, places, and things better than I found them.
          </P>

          <Footer/>
        </Section>
      </Main>

    </CoreLayout>
  );
}

export const Head = () => <title>Scrappy Poet LLC</title>;
