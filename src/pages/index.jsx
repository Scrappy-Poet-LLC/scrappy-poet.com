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

          <nav sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            float: 'right',
            paddingRight: ['1.5rem', '3rem'],
          }}>
            <CTA grouped sx={{
              '> div': {
                transform: 'rotate(-2deg)',
              }
            }}/>

            <ActionButton grouped sx={{
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
            userSelect: 'none',
          }}>

            <CTA />

            <Box sx={{
              alignSelf: 'flex-end',
              padding: ['4rem 0 0 0', '2.5rem 0'],
            }}>
              <img
                src={signature}
                alt="Daniel Brady's signature"
                draggable={false}
                sx={{
                  maxWidth: ['80vw', '65vw', '45vw'],
                }}
              />
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

function ActionButton({
  children,
  className,
  tooltip = null,
  disabled = false,
  grouped = false,
}) {
  return (
    <Fader
      className={className}
      fadeMargin='-50px 0px -50px 0px'
      sx={grouped && {
        position: 'relative',
        '&:before, &:after': {
          zIndex: -1,
          content: '""',
          position: 'absolute',
          left: '4rem',
          background: 'accent',
          width: '0.85rem',
          height: '1rem',
        },
        '&:before': {
          top: '-1rem',
        },
        '&:first-child:before': {
          top: 'calc(-1rem + 1px)',
          borderRadius: '6px 6px 0 0',
        },
        '&:after': {
          display: 'none',
        },
        '&:last-child:after': {
          display: 'unset',
          bottom: 'calc(-4rem + 1px)',
          height: '4rem',
          borderRadius: '0 0 6px 6px',
        },
      }}
    >
      <div sx={{
        display: 'inline-block',
        width: 'fit-content',
        padding: '0.5rem',
        fontSize: '1rem',
        border: '2px dashed',
        borderColor: 'accent',
        borderRadius: '12px',
        transition: 'all 0.3s ease',
        backgroundColor: 'background',
        userSelect: 'none',
        position: 'relative',
        '&:hover:after, &:active:after': {
          content: `"${tooltip ?? ''}"`,
          position: 'absolute',
          top: '110%',
          left: '1rem',
          padding: '0 0.2rem',
          fontSize: '0.5rem',
          color: 'white',
          backgroundColor: '#282828',
          boxShadow: '2px 2px 10px grey',
          borderRadius: '2px',
        },
        ...(disabled
            ? {
              backgroundColor: '#f0eeeb',
              '&:before': {
                display: 'block',
                position: 'absolute',
                content: '""',
                width: '105%',
                height: '10px',
                background: 'linear-gradient(to bottom right, #996663, #996663)',
                opacity: '0.2',
                transform: [
                  'rotate(15deg) translate(-10px, 10px)',
                  'rotate(15deg) translate(-10px, 10px)',
                  'rotate(17deg) translate(-12px, 16px)',
                ],
                borderRadius: '6px',
              },
            }
            : {
              '&:hover, &:active': {
                transform: 'scale(105%) translate(10px, 0)',
              }
            }
           ),
        'p': { margin: 0 },
      }}>
        {children}
      </div>
    </Fader>
  );
}

function CTA({ className, grouped = false }) {
  return (
    <ActionButton className={className} grouped={grouped}>
      <a href='mailto:daniel.13rady+scrappy@gmail.com'>
        <SubtleEmphasis>← get in touch</SubtleEmphasis>
      </a>
    </ActionButton>
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
