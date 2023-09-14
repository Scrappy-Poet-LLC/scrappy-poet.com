/** @jsxImportSource theme-ui */

import React from "react";

import CoreLayout, {
  Fader,
  Main,
  P,
  Section,
  SmallCaps,
  SubtleEmphasis,
} from '@components/CoreLayout';
import HeroHeading from '@components/HeroHeading';

function Skewed({ children }) {
  return (
    <Fader sx={{
      display: 'block',
      transform: 'rotate(-2deg)',
    }}>
      {children}
    </Fader>
  );
}

function ServiceItem({ children }) {
  return (
    children
  );
}

function ServiceLabel({ children }) {
  return (
    <Fader>
      <h2>{children}</h2>
    </Fader>
  );
}

export default function ServicesPage() {
  return (
    <CoreLayout>

      <Main>
        <a href="/" sx={{
          transition: 'all 0.3s ease-in-out',
          '&:hover, &:active': {
            transform: 'scale(1.02)'
          },
        }}>
          <HeroHeading/>
        </a>
        <Section sx={{ paddingTop: '1.5rem' }}>
          <Skewed>
            <h1>Services</h1>
          </Skewed>

          <ServiceItem>
            <ServiceLabel>Pest Control</ServiceLabel>
            <P>
              I’ll work with you to understand an issue or set of symptoms besetting your software and then scope out a solution. This service includes a root-cause analysis and recommended treatment plan, and for an additional fee I’ll squash the bugs myself.
              <br/>
              <br/>
              <SmallCaps fontFamily='lightBody'>Best for:&nbsp;</SmallCaps>
              teams with complex systems experiencing flakiness or recurring issues, and teams with tight deadlines and not enough hands to focus on urgent maintenance
            </P>
          </ServiceItem>

          <ServiceItem>
            <ServiceLabel>Pressure Relief</ServiceLabel>
            <P>
              I’ll work with you to become familiar with the team’s area of ownership within your ecosystem, then serve as an ‘extra pair of hands’ each sprint, taking care of pressing maintenance and backlog tasks while your developers focus on shipping features and meeting their project deadlines.
              <br/>
              <br/>
              <SmallCaps fontFamily='lightBody'>Best for:&nbsp;</SmallCaps>
              teams with tight deadlines and not enough hands to focus on urgent maintenance
            </P>
          </ServiceItem>

          <ServiceItem>
            <ServiceLabel>Process Optimization</ServiceLabel>
            <P>
              I’ll work with you to understand a mission-critical process that takes too damn long, has too many damn manual steps, or really has no organized structure to it at all; then I’ll have conversations with stakeholders and scope out a better version that fits into how you do work as an organization.
              <br/>
              <br/>
              <SmallCaps fontFamily='lightBody'>Best for:&nbsp;</SmallCaps>
              teams with limited resources and ‘organically grown’ processes that have become entrenched in their work but are weighing them down or aren’t slowing them down enough
            </P>
          </ServiceItem>

          <ServiceItem>
            <ServiceLabel>Software Remodeling</ServiceLabel>
            <P>
              I’ll help you clean up, organize, and transform your fixer-upper app or MVP into a customized, production-grade solution that works for your team and is easier to live with.
              <br/>
              <br/>
              <SmallCaps fontFamily='lightBody'>Best for:&nbsp;</SmallCaps>
              teams whose features are hard to get out the door, whose backlogs are full of bugs, or whose tests are taking forever
            </P>
          </ServiceItem>
        </Section>

        <Section>
          <Skewed>
            <h1>How I Work</h1>
          </Skewed>

          <ServiceItem>
            <ServiceLabel>Initial assessments</ServiceLabel>
            <P>
              When you hire a doctor to fix you, it’s impossible for them to make a diagnosis or take a course of action until they’ve gathered some information, and depending on what they’re evaluating, their assessment will change. I begin every non-trivial initiative with what I call a solution scope, in which I work with you to gather the context necessary to define the problem, scope a solution, and estimate the work required. And just like with a doctor, some of my clients find that an assessment and some advice is all they need and others need constant and ongoing care until their codebase and team are healthy enough to not need me.
            </P>
          </ServiceItem>

          <ServiceItem>
            <ServiceLabel>No black boxes</ServiceLabel>
            <P>
              For all changes to your existing software, I will request a small time commitment from one of your team members to review and sign-off on my work. This is to ensure you retain a certain level of oversight and responsibility for the modifications being made, and remain in a position to veto them or request changes as would benefit their eventual maintenance by your team. It also helps me limit my own liability for any downstream effects that I could not have foreseen without the perspective of a code owner.
            </P>
          </ServiceItem>

          <ServiceItem>
            <ServiceLabel>'No Size Fits All' Payment Options</ServiceLabel>
            <P>
              I’ve built my operation to be as flexible and responsive as possible. As your needs change, I adapt, scaling my efforts up or down as needed within my own capacity limits, and to achieve this I operate with a <SubtleEmphasis>first paid, first served</SubtleEmphasis> policy: After paying for your initial assessment, you’ll have three business days where you’re at the front of the queue for ongoing development. If you decide not to start development right away, no worries: like a restaurant, you can always come back, but I can’t guarantee how long of a wait there will be when you return.
            </P>
            <P>
              I work best with clients that are looking for an ongoing relationship rather than a short-term project, and I have arrangements designed to fit a wide variety of budgets and organization sizes.
            </P>
            <ul sx={{
              'li': {
                paddingBottom: '1rem'
              }
            }}>
              <Fader>
                <li>
                  <SmallCaps><strong>Retainers&nbsp;—&nbsp;</strong></SmallCaps>
                  My minimum retainer is four weeks and works similar to an attorney’s office: you pay upfront and that gives you me, as needed, up to an agreed-upon maximum capacity each week. Additional work beyond the max is invoiced as needed, and unused time can be paid back or converted to credit for future work as desired.
                  <br/>
                  <br/>
                  <SmallCaps fontFamily='lightBody'>Ideal for:&nbsp;</SmallCaps>
                  clients leveraging me as a ‘pressure release valve’ for their team, or who are looking to start with a small remodeling project
                </li>
              </Fader>

              <Fader>
                <li>
                  <SmallCaps><strong>Arrears&nbsp;—&nbsp;</strong></SmallCaps>
                  If you prefer to defer, as it were, I offer an arrears payment schedule for commitments of less than four weeks. My standard arrears terms are net-30, and I offer discounts for net-15 and upfront payments.
                  <br/>
                  <br/>
                  <SmallCaps fontFamily='lightBody'>Ideal for:&nbsp;</SmallCaps>
                  clients with small-scope asks or who only need me for a sprint or two
                </li>
              </Fader>

              <Fader>
                <li>
                  <SmallCaps><strong>Project-based&nbsp;—&nbsp;</strong></SmallCaps>
                  I’m also open to pricing on a per-project basis, and may recommend this model myself based on my initial assessment. Payment is collected at the end of the project or (for long projects) at regular milestones, and pricing can be renegotiated by either of us as development progresses if the original agreement feels off.
                  <br/>
                  <br/>
                  <SmallCaps fontFamily='lightBody'>Ideal for:&nbsp;</SmallCaps>
                  clients who would prefer a lump-sum payment experience, and high-value but murky projects that are hard to estimate
                </li>
              </Fader>
            </ul>
          </ServiceItem>
        </Section>
      </Main>

    </CoreLayout>
  );
}

export const Head = () => <title>Scrappy Poet LLC</title>;
