/** @jsxImportSource theme-ui */

import React, { useEffect, useRef } from "react";
import { Box } from 'theme-ui';

import signature from '@images/signature.png';
import smallCaps from '@utils/smallCaps';

export default function CoreLayout({ children }) {
  return (
    <>
      {children}
    </>
  );
}

export function Main({ children, className, }) {
  return (
    <main className={className} sx={{
      margin: ['1.5rem', '0 5.5rem'],
      display: 'flex',
      flexDirection: 'column',
    }}>
      {children}
    </main>
  );
}

export function Section({ children, className, }) {
  return (
    <section className={className} sx={{
      minHeight: '100vh',
      '&:not(:first-of-type)': {
        paddingTop: ['2rem', '4rem'],
      },
      '&:last-of-type': {
        paddingBottom: [0, '2rem'],
      },
    }}>
      {children}
    </section>
  );
}

export function P({ children, className, fadeMargin = '0px 0px 0px 0px' }) {
  return (
    <Fader
      className={className}
      sx={{ display: 'block' }}
      opts={{ margin: fadeMargin }}
    >
      <p>{children}</p>
    </Fader>
  );
}

export function SubtleEmphasis({ children, className, }) {
  return (
    <span className={className} sx={{ fontFamily: 'lightBody' }}>
      {children}
    </span>
  );
}

export function SmallCaps({ children, className, fontFamily = 'body' }) {
  return (
    <span sx={{
      textTransform: 'lowercase', // Equalize upper & lower case first
      fontFamily: smallCaps(fontFamily),
    }}>
      {children}
    </span>
  );
}

export function Fader({ children, className, opts = {} }) {
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

export function ActionButton({
  children,
  className,
  tooltip = null,
  disabled = false,
}) {
  return (
    <Fader className={className}>
      <div sx={{
        display: 'inline-block',
        width: 'fit-content',
        fontSize: '1rem',
        border: '2px dashed',
        borderColor: 'accent',
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
        'a': {
          display: 'inline-block',
          padding: '0.5rem',
        },
      }}>
        {children}
      </div>
    </Fader>
  );
}

export function CTA({ className }) {
  return (
    <ActionButton className={className} sx={{ display: 'inline-block'}}>
      <a href='mailto:aloha@scrappy-poet.com?subject=Availability%20enquiry:%20%3Cdesired service%3E'>
        <SubtleEmphasis>← get in touch</SubtleEmphasis>
      </a>
    </ActionButton>
  );
}

export function Footer({ children }) {
  return(
    <footer sx={{
      display: 'flex',
      flexDirection: 'column',
      margin: ['2.5rem 0rem 1.5rem 0', '3rem -1.5rem 0 0'],
      transition: 'opacity 0.3s ease-in',
      userSelect: 'none',
    }}>

      {children}

      <Box sx={{
        alignSelf: 'flex-end',
        padding: ['2rem 0 0 0'],
      }}>
        <a href='https://daniel13rady.com'>
          <img
            src={signature}
            alt="Daniel Brady's signature"
            draggable={false}
            sx={{
              maxWidth: ['80vw', '65vw', '45vw'],
            }}
          />
        </a>
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
  );
}

export function Anchor({ children }) {
  function getAnchorText(node) {
    if (node == null) return '';
    switch (typeof node) {
    case 'string':
    case 'number':
      return node.toString();
    case 'object': {
      if (node instanceof Array) return node.map(getAnchorText).join('');
      if ('props' in node) return getAnchorText(node.props.children);
      break;
    }
    default:
      return '';
    }
  }

  var anchorText = getAnchorText(children);
  var id = anchorText
      .replaceAll(/['"]/g, '')
      .replaceAll(' ', '-')
      .toLowerCase();

  return (
    <a id={id} href={`#${id}`}>
      {children}
    </a>
  );
}
