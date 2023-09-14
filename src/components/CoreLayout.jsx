/** @jsxImportSource theme-ui */

import React, { useEffect, useRef } from "react";

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
      paddingTop: ['2rem', '4rem'],
    }}>
      {children}
    </section>
  );
}

export function P({ children, className, fadeMargin = '-50px 0px -50px 0px' }) {
  return (
    <Fader className={className} opts={{ margin: fadeMargin }}>
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
