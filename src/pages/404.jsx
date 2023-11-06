/** @jsxImportSource theme-ui */

import React from "react";

export default function NotFoundPage() {
  return (
    <main sx={{
      margin: ['1.5rem', '0 5.5rem'],
      display: 'flex',
      flexDirection: 'column',
    }}>
      <section sx={{
        minHeight: '100vh',
        paddingTop: ['2rem', '4rem'],
      }}>
        <pre>
          {`
     __//
    /.__.\\
    \\ \\/ /
 '__/    \\
  \\-      )
   \\_____/
_____|_|____
     " "
`}
        </pre>
        <p>
          This place doesn&rsquo;t exist.... The sadness.
        </p>
        <p>
          ...But then of course, if this place doesn&rsquo;t exist, are you really here?
        </p>
      </section>
    </main>
  );
}

export const Head = () => <title>Nothing to see here...</title>;
