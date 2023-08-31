/** @jsxImportSource theme-ui */

import React, { useEffect, useRef } from "react";

import { Box } from 'theme-ui';

import CoreLayout from '@components/CoreLayout';

import signature from '@images/signature.png';

export default function IndexPage() {
  return (
    <CoreLayout>

      <main sx={{
        margin: ['1.5rem', '0 5.5rem'],
        display: 'flex',
        flexDirection: 'column',
      }}>
        <section sx={{
          minHeight: '100vh',
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

          <Box sx={{
            float: 'right',
            paddingRight: ['1.5rem', '3rem'],
          }}>
            <CTA/>
          </Box>
        </section>

        <section sx={{
          minHeight: '100vh',
          paddingTop: ['2rem', '4rem'],
        }}>
          <P fadeMargin='-50px 0px -100px 0px'>
            As a kid, I used to love helping my dad fix the house. I’d shadow him on his projects, amazed at how he seemed to know everything. In reality, he didn’t know much at all: he just dove into everything with <strong>grit and gumption</strong>, and relied on his friends to have his back whenever he was out of his depth. He never studied: he learned on the job, and succeeded through trial and failure and support.
          </P>

          <P>
            Today, I carry his energy with me in my own practice. If your team is underwater from trying to meet deadlines while the foundations are rotting under their feet, I can help. If you’ve got a business component that needs fixing but no one left alive understands how it works, bring me in. If you’ve got a codebase that could use a good spit-shine to make it maintainable, let me take a whack at it.
          </P>

          <P>
            My near-decade of experience as a maker has honed my strengths as a mender. <strong>I’m the maintenance guy</strong>, and I leave people, places, and things better than I found them.
          </P>

          <footer sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: ['2.5rem 0rem 1.5rem 0', '3rem -1.5rem 0 0'],
            transition: 'opacity 0.3s ease-in',
          }}>

            <CTA/>

            <Box sx={{
              alignSelf: 'flex-end',
              padding: ['0', '2.5rem 0'],
            }}>
              <img src={signature} alt="Daniel Brady's signature" sx={{
                maxWidth: ['80vw', '65vw', '45vw'],
              }}/>
              <aside sx={{
                marginTop: '0.5rem',
                marginRight: ['0', '1.5rem'],
                fontSize: ['0.6rem', '0.8rem'],
                textAlign: 'right',
              }}>
                ©2023 Scrappy Poet LLC
              </aside>
            </Box>
          </footer>
        </section>
      </main>

    </CoreLayout>
  );
}

export const Head = () => <title>Scrappy Poet LLC</title>;

/**** Helpers ****/

function CTA() {
  return (
    <P sx={{
      display: 'inline-block',
      width: 'fit-content',
      margin: ['0 0 4rem 0', '0'],
      padding: '0.3rem 0.5rem',
      fontSize: '1rem',
      border: '2px dashed',
      borderColor: 'accent',
      borderRadius: '12px',
      transform: 'rotate(-2deg)',
      transition: 'all 0.3s ease',
      '&:hover, &:active': {
        transform: 'scale(1.2) translate(10px, 0)',
      },
      'p': { margin: 0 },
    }}>
      <a
        href='mailto:daniel.13rady+scrappy@gmail.com'
        sx={{
          display: 'block',
          padding: '0.2rem 0',
          textAlign: 'right',
          textDecoration: 'none',
          '&:link, &:visited': {
            color: 'black'
          },
        }}
      ><SubtleEmphasis>← get in touch</SubtleEmphasis></a>
    </P>
  );
}

function SubtleEmphasis({ children }) {
  return (
    <span sx={{ fontFamily: 'lightBody' }}>
      {children}
    </span>
  );
}

function Fader({ children, className, opts = {} }) {
  var {
    root,
    startVisible,
    granularity,
    margin,
  } = {
    root: null,
    startVisible: false,
    granularity: 20,
    margin: '0px',
    ...opts,
  };
  var ref = useRef(null);

  useEffect(function modulateVisibility() {
    if (!ref.current) return null;

    var observer = new IntersectionObserver(
      function changeOpacity(entries) {
        for (let entry of entries) {
          entry.target.style.opacity = entry.intersectionRatio;
        }
      }, {
        root,
        rootMargin: margin,
        threshold: [0, ...Array(granularity).fill().map(function makeThreshold(_, index) {
          return (index + 1) / granularity;
        })],
      },
    );

    observer.observe(ref.current);

    return function stopWatching() {
      observer.disconnect();
    };
  }, [!!ref.current]);

  return (
    <span ref={ref} className={className} sx={{
      opacity: startVisible ? 1 : 0,
      transitionProperty: 'opacity',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'ease-in-out',
    }}>
      {children}
    </span>
  );
}

function P({ children, className, fadeMargin = '-50px 0px -50px 0px' }) {
  return (
    <Fader className={className} opts={{ margin: fadeMargin }}>
      <p>{children}</p>
    </Fader>
  );
}
