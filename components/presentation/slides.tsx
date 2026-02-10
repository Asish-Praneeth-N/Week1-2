"use client"

import {
  Slide,
  AnimatedBlock,
  SlideNumber,
  CodeBlock,
  Badge,
  Divider,
} from "./slide"

const TOTAL = 22

/* ─── 01. Agenda ─────────────────────────────────────────── */
export function AgendaSlide() {
  return (
    <Slide id="agenda">
      <div className="flex max-w-3xl flex-col items-center gap-8 text-center">
        <AnimatedBlock delay={0.1}>
          <Badge>Week 3 Agenda</Badge>
        </AnimatedBlock>
        <AnimatedBlock delay={0.25}>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-primary md:text-6xl lg:text-7xl">
            How Everything Connects
          </h1>
        </AnimatedBlock>
        <AnimatedBlock delay={0.4}>
          <div className="flex flex-col gap-4 text-left">
             {[
               "How the browser understands your code",
               "Why HTML becomes DOM and CSS becomes CSSOM",
               "The real problem React was created to solve",
               "How React thinks (components, state, data flow)",
               "How frontend talks to backend using APIs",
               "Why authentication & roles are not UI concepts",
               "Where real security actually lives",
               "The complete mental model of a modern web app",
             ].map((item, i) => (
                <p key={i} className="text-lg text-muted-foreground">
                  • {item}
                </p>
             ))}
          </div>
        </AnimatedBlock>
         <AnimatedBlock delay={0.65}>
            <p className="mt-8 font-mono text-xs tracking-widest text-muted-foreground">
              SCROLL TO BEGIN LEARNING
            </p>
          </AnimatedBlock>
      </div>
      <SlideNumber current={1} total={TOTAL} />
    </Slide>
  )
}

/* ─── 02. The Browser Is a Machine ───────────────────────── */
export function BrowserMachineSlide() {
  const steps = [
    { step: "Parse", mean: "Read HTML & CSS" },
    { step: "Decide", mean: "Calculate layout & styles" },
    { step: "Paint", mean: "Draw pixels on screen" },
  ]
  return (
    <Slide id="browser-machine">
        <div className="flex w-full max-w-4xl flex-col gap-10">
            <AnimatedBlock>
                <Badge>The Browser</Badge>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                    The Browser Is a Machine (Not Magic)
                </h2>
                 <p className="mt-3 text-xl text-muted-foreground">Every browser does only three core jobs: Parse → Decide → Paint</p>
            </AnimatedBlock>
            <div className="grid gap-4 md:grid-cols-3">
                {steps.map((s, i) => (
                    <AnimatedBlock key={s.step} delay={0.2 + i * 0.1}>
                        <div className="rounded-lg border border-border bg-card p-6 text-center">
                            <h3 className="text-2xl font-bold text-primary">{s.step}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">{s.mean}</p>
                        </div>
                    </AnimatedBlock>
                ))}
            </div>
             <AnimatedBlock delay={0.6}>
                <p className="text-center text-sm text-accent">📌 Everything you write (HTML, CSS, JS, React) feeds into this pipeline.</p>
            </AnimatedBlock>
        </div>
        <SlideNumber current={2} total={TOTAL} />
    </Slide>
  )
}

/* ─── 03. Why HTML Becomes a Tree (DOM) ──────────────────── */
export function HtmlTreeSlide() {
  return (
      <Slide id="html-tree">
          <div className="flex w-full max-w-4xl flex-col gap-10">
            <AnimatedBlock>
                <Badge>DOM</Badge>
                <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                    Why HTML Becomes a Tree (DOM)
                </h2>
                <p className="mt-3 text-lg text-muted-foreground">HTML is nested, so the browser converts it into a tree structure.</p>
            </AnimatedBlock>
            <AnimatedBlock delay={0.2}>
                <div className="rounded-lg border border-border bg-card p-8">
                     <h3 className="mb-4 text-xl font-semibold">Why a tree?</h3>
                     <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                         <li>Parent–child relationships</li>
                         <li>Fast traversal</li>
                         <li>Efficient updates</li>
                     </ul>
                </div>
            </AnimatedBlock>
            <AnimatedBlock delay={0.4}>
                <p className="text-center font-mono text-sm text-accent">📌 JavaScript never touches HTML directly — it talks to the DOM tree.</p>
            </AnimatedBlock>
          </div>
          <SlideNumber current={3} total={TOTAL} />
      </Slide>
  )
}

/* ─── 04. Why CSS Becomes a Separate Tree (CSSOM) ────────── */
export function CssTreeSlide() {
    return (
        <Slide id="css-tree">
             <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                    <Badge>CSSOM</Badge>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Why CSS Becomes a Separate Tree
                    </h2>
                </AnimatedBlock>
                <div className="grid gap-6 md:grid-cols-2">
                    <AnimatedBlock delay={0.2} direction="left">
                        <div className="rounded-lg border border-border bg-card p-6">
                            <h3 className="mb-2 text-lg font-semibold">Browser Builds:</h3>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li><strong>DOM</strong> → structure</li>
                                <li><strong>CSSOM</strong> → styling rules</li>
                            </ul>
                            <div className="mt-4 border-t border-border pt-4">
                                <p className="font-semibold">Combines into: Render Tree</p>
                            </div>
                        </div>
                    </AnimatedBlock>
                     <AnimatedBlock delay={0.3} direction="right">
                        <div className="flex h-full flex-col justify-center rounded-lg border border-border bg-muted/20 p-6">
                            <p className="mb-2 font-semibold text-primary">This explains:</p>
                             <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                                <li>Why CSS can block rendering</li>
                                <li>Why layout changes are expensive</li>
                            </ul>
                        </div>
                    </AnimatedBlock>
                </div>
             </div>
             <SlideNumber current={4} total={TOTAL} />
        </Slide>
    )
}

/* ─── 05. The Core Performance Problem ───────────────────── */
export function PerformanceProblemSlide() {
    return (
        <Slide id="perf-problem">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                    <Badge>Performance</Badge>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        The Core Performance Problem
                    </h2>
                     <p className="mt-3 text-xl text-destructive">Too many DOM updates = slow website</p>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.2}>
                    <div className="rounded-lg border border-border bg-card p-8">
                        <h3 className="mb-4 text-xl font-semibold">Why?</h3>
                        <div className="grid gap-4 md:grid-cols-2">
                             <div className="rounded bg-muted p-4">
                                <span className="block font-bold">Reflow</span>
                                <span className="text-sm text-muted-foreground">Layout recalculation</span>
                             </div>
                             <div className="rounded bg-muted p-4">
                                <span className="block font-bold">Repaint</span>
                                <span className="text-sm text-muted-foreground">Pixels redrawn</span>
                             </div>
                        </div>
                        <p className="mt-4 text-center text-sm font-medium text-muted-foreground">Expensive browser work</p>
                    </div>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                     <p className="text-center font-mono text-sm text-accent">📌 Direct DOM manipulation does not scale.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={5} total={TOTAL} />
        </Slide>
    )
}

/* ─── 06. Why React Exists ───────────────────────────────── */
export function WhyReactSlide() {
    return (
        <Slide id="why-react">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                    <Badge>React Philosophy</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Why React Exists
                    </h2>
                </AnimatedBlock>
                <AnimatedBlock delay={0.2}>
                     <blockquote className="border-l-4 border-primary pl-6 text-xl italic text-muted-foreground">
                        “Don’t tell the browser how to update the UI. Tell React what the UI should look like.”
                    </blockquote>
                </AnimatedBlock>
                <div className="grid gap-6 md:grid-cols-3">
                     {["When to update", "What to update", "How little to update"].map((item, i) => (
                         <AnimatedBlock key={item} delay={0.3 + i * 0.1}>
                             <div className="flex h-24 items-center justify-center rounded-lg border border-border bg-card p-4 text-center font-semibold">
                                 {item}
                             </div>
                         </AnimatedBlock>
                     ))}
                </div>
                 <AnimatedBlock delay={0.6}>
                     <p className="text-center font-mono text-sm text-accent">📌 You control state, React controls the DOM.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={6} total={TOTAL} />
        </Slide>
    )
}

/* ─── 07. Components Are Functions ───────────────────────── */
export function ComponentsAreFunctionsSlide() {
    return (
        <Slide id="components-functions">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                    <Badge>Components</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Components Are Functions, Not HTML
                    </h2>
                     <p className="mt-2 text-lg text-muted-foreground">A React component is a function that returns UI based on data.</p>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.2}>
                    <CodeBlock label="Example">
{`function BlogCard({ title }) {
  return <h2>{title}</h2>;
}`}
                    </CodeBlock>
                 </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                      <p className="text-center font-mono text-sm text-accent">📌 UI is a pure result of data, not manual updates.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={7} total={TOTAL} />
        </Slide>
    )
}

/* ─── 08. Why Component Hierarchy Exists ─────────────────── */
export function ComponentHierarchySlide() {
    return (
        <Slide id="hierarchy">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                     <Badge>Hierarchy</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Why Component Hierarchy Exists
                    </h2>
                </AnimatedBlock>
                <div className="grid gap-6 md:grid-cols-2">
                    <AnimatedBlock delay={0.2} direction="left">
                         <div className="rounded-lg border border-border bg-card p-6">
                            <h3 className="mb-4 text-xl font-semibold">Because:</h3>
                            <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                                <li>Data must live somewhere</li>
                                <li>Ownership must be clear</li>
                            </ul>
                        </div>
                    </AnimatedBlock>
                    <AnimatedBlock delay={0.3} direction="right">
                         <div className="rounded-lg border border-border bg-accent/10 p-6">
                            <h3 className="mb-4 text-xl font-semibold text-accent">Rule:</h3>
                            <p className="text-lg">Who OWNS the data controls the UI</p>
                        </div>
                    </AnimatedBlock>
                </div>
            </div>
            <SlideNumber current={8} total={TOTAL} />
        </Slide>
    )
}

/* ─── 09. One-Way Data Flow ──────────────────────────────── */
export function OneWayDataFlowSlide() {
    return (
        <Slide id="data-flow">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                 <AnimatedBlock>
                     <Badge>Data Flow</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        One-Way Data Flow
                    </h2>
                     <p className="mt-2 font-mono text-lg text-muted-foreground">Parent → Child → Grandchild</p>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.2}>
                    <div className="rounded-lg border border-border bg-card p-8">
                        <h3 className="mb-4 text-lg font-semibold">Why upward flow is forbidden:</h3>
                         <ul className="space-y-2 text-muted-foreground">
                             <li>✅ Prevents circular updates</li>
                             <li>✅ Avoids unpredictable bugs</li>
                             <li>✅ Makes debugging possible</li>
                         </ul>
                    </div>
                 </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                      <p className="text-center font-mono text-sm text-accent">📌 This is discipline, not a limitation.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={9} total={TOTAL} />
        </Slide>
    )
}

/* ─── 10. Props vs State ─────────────────────────────────── */
export function PropsVsStateSlide() {
    return (
        <Slide id="props-state">
             <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                     <Badge>Props vs State</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Props vs State (Real Difference)
                    </h2>
                </AnimatedBlock>
                <AnimatedBlock delay={0.2}>
                     <div className="overflow-hidden rounded-lg border border-border">
                        <table className="w-full text-left">
                            <thead className="bg-muted">
                                <tr>
                                    <th className="p-4">Question</th>
                                    <th className="p-4">Props</th>
                                    <th className="p-4">State</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                                <tr><td className="p-4">Who owns it?</td><td className="p-4">Parent</td><td className="p-4">Component</td></tr>
                                <tr><td className="p-4">Can it change?</td><td className="p-4">❌</td><td className="p-4">✅</td></tr>
                                <tr><td className="p-4">Controls behavior?</td><td className="p-4">❌</td><td className="p-4">✅</td></tr>
                            </tbody>
                        </table>
                     </div>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                     <div className="flex justify-around text-lg font-semibold">
                         <span>Props = input</span>
                         <span>State = memory</span>
                     </div>
                 </AnimatedBlock>
             </div>
             <SlideNumber current={10} total={TOTAL} />
        </Slide>
    )
}

/* ─── 11. The Golden Rule of State Placement ─────────────── */
export function StatePlacementSlide() {
    return (
        <Slide id="state-placement">
             <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                    <Badge>State Management</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        The Golden Rule of State Placement
                    </h2>
                     <p className="mt-4 text-xl text-primary">State should live in the highest common parent</p>
                </AnimatedBlock>
                <AnimatedBlock delay={0.2}>
                    <div className="grid gap-4 md:grid-cols-3">
                         <div className="rounded-lg border border-border bg-card p-4">
                             <span className="block text-sm text-muted-foreground">Auth state</span>
                             <span className="text-lg font-bold">App level</span>
                         </div>
                         <div className="rounded-lg border border-border bg-card p-4">
                             <span className="block text-sm text-muted-foreground">Theme</span>
                             <span className="text-lg font-bold">Global</span>
                         </div>
                         <div className="rounded-lg border border-border bg-card p-4">
                             <span className="block text-sm text-muted-foreground">Input value</span>
                             <span className="text-lg font-bold">Local</span>
                         </div>
                    </div>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                     <p className="text-center font-mono text-sm text-destructive">📌 Wrong state placement = messy app logic.</p>
                 </AnimatedBlock>
             </div>
             <SlideNumber current={11} total={TOTAL} />
        </Slide>
    )
}

/* ─── 12. Child → Parent Communication ───────────────────── */
export function ChildParentCommSlide() {
    return (
        <Slide id="child-parent">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                    <Badge>Communication</Badge>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Child → Parent Communication
                    </h2>
                     <p className="mt-2 text-lg text-muted-foreground">Children never change state directly.</p>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.2}>
                    <div className="rounded-lg border border-border bg-card p-8">
                        <p className="mb-4 font-semibold">They:</p>
                        <ul className="list-disc space-y-2 pl-6">
                            <li>Trigger events</li>
                            <li>Call parent callbacks</li>
                            <li>Request changes</li>
                        </ul>
                    </div>
                 </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                      <p className="text-center font-mono text-sm text-accent">📌 Parent always stays in control.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={12} total={TOTAL} />
        </Slide>
    )
}

/* ─── 13. Events Trigger State ───────────────────────────── */
export function EventsTriggerStateSlide() {
    return (
        <Slide id="events-state">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                    <Badge>Events</Badge>
                    <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Events Trigger State, Not UI
                    </h2>
                </AnimatedBlock>
                <div className="grid gap-6 md:grid-cols-2">
                     <AnimatedBlock delay={0.2} direction="left">
                        <div className="rounded-lg border border-border bg-card p-6">
                             <h3 className="mb-4 text-lg font-semibold">Common Events:</h3>
                             <ul className="space-y-1 font-mono text-sm text-muted-foreground">
                                 <li>onClick</li>
                                 <li>onChange</li>
                                 <li>onSubmit</li>
                             </ul>
                        </div>
                     </AnimatedBlock>
                     <AnimatedBlock delay={0.3} direction="right">
                         <div className="rounded-lg border border-border bg-card p-6">
                             <h3 className="mb-4 text-lg font-semibold">Flow:</h3>
                             <p className="font-mono text-sm text-primary">Event → Handler → State Change → Re-render</p>
                         </div>
                     </AnimatedBlock>
                </div>
                 <AnimatedBlock delay={0.4}>
                     <p className="text-center font-mono text-sm text-accent">📌 You never manually update the UI in React.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={13} total={TOTAL} />
        </Slide>
    )
}

/* ─── 14. Virtual DOM ────────────────────────────────────── */
export function VirtualDomSlide() {
    return (
        <Slide id="virtual-dom">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                 <AnimatedBlock>
                     <Badge>Performance</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Virtual DOM (Why React Is Fast)
                    </h2>
                </AnimatedBlock>
                <AnimatedBlock delay={0.2}>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4 rounded-lg bg-card p-4 border border-border">
                            <span className="font-bold text-accent">1</span>
                            <span>Builds virtual tree</span>
                        </div>
                         <div className="flex items-center gap-4 rounded-lg bg-card p-4 border border-border">
                            <span className="font-bold text-accent">2</span>
                            <span>Diffs old vs new</span>
                        </div>
                         <div className="flex items-center gap-4 rounded-lg bg-card p-4 border border-border">
                            <span className="font-bold text-accent">3</span>
                            <span>Updates minimal real DOM</span>
                        </div>
                    </div>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                      <p className="text-center font-mono text-sm text-accent">📌 Performance comes from diffing, not magic.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={14} total={TOTAL} />
        </Slide>
    )
}

/* ─── 15. Frontend vs Backend ────────────────────────────── */
export function FrontendBackendSlide() {
    return (
        <Slide id="fe-be">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                     <Badge>Architecture</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Frontend vs Backend
                    </h2>
                </AnimatedBlock>
                <div className="grid gap-6 md:grid-cols-2">
                     <AnimatedBlock delay={0.2} direction="left">
                         <div className="rounded-lg border border-border bg-card p-6">
                             <h3 className="mb-4 text-xl font-bold">Frontend</h3>
                             <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                                 <li>UI</li>
                                 <li>Events</li>
                                 <li>Display logic</li>
                             </ul>
                         </div>
                     </AnimatedBlock>
                      <AnimatedBlock delay={0.3} direction="right">
                         <div className="rounded-lg border border-border bg-card p-6">
                             <h3 className="mb-4 text-xl font-bold">Backend</h3>
                             <ul className="list-disc space-y-2 pl-6 text-muted-foreground">
                                 <li>Authentication</li>
                                 <li>Database</li>
                                 <li>Authorization</li>
                                 <li>Business rules</li>
                             </ul>
                         </div>
                     </AnimatedBlock>
                </div>
                 <AnimatedBlock delay={0.4}>
                     <p className="text-center font-mono text-sm text-destructive">📌 Frontend must never trust itself.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={15} total={TOTAL} />
        </Slide>
    )
}

/* ─── 16. APIs & JSON ────────────────────────────────────── */
export function ApisJsonSlide() {
    return (
        <Slide id="api-json">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                    <Badge>Communication</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        APIs & JSON
                    </h2>
                     <p className="mt-2 text-xl text-muted-foreground">“I request → You respond (JSON)”</p>
                </AnimatedBlock>
                <AnimatedBlock delay={0.2}>
                    <div className="rounded-lg border border-border bg-card p-8">
                        <h3 className="mb-4 text-lg font-semibold">Why JSON?</h3>
                         <div className="flex gap-4">
                             <Badge variant="outline">Lightweight</Badge>
                             <Badge variant="outline">Universal</Badge>
                             <Badge variant="outline">Language-independent</Badge>
                         </div>
                    </div>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                      <p className="text-center font-mono text-sm text-accent">📌 APIs decouple frontend and backend.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={16} total={TOTAL} />
        </Slide>
    )
}

/* ─── 17. async / await ──────────────────────────────────── */
export function AsyncAwaitSlide() {
    return (
        <Slide id="async-await">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                 <AnimatedBlock>
                     <Badge>JS Patterns</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        async / await (Why Two Awaits Exist)
                    </h2>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.2}>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Badge>1</Badge> <span>Network request</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <Badge>2</Badge> <span>Reading response body</span>
                        </div>
                    </div>
                 </AnimatedBlock>
                 <AnimatedBlock delay={0.3}>
                     <CodeBlock label="Example">
{`const res = await fetch(url);
const data = await res.json();`}
                     </CodeBlock>
                 </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                     <p className="text-center font-mono text-sm text-destructive">📌 Missing one await breaks logic.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={17} total={TOTAL} />
        </Slide>
    )
}

/* ─── 18. Authentication Is a Flow ───────────────────────── */
export function AuthFlowSlide() {
    return (
        <Slide id="auth-flow">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                     <Badge>Authentication</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Authentication Is a Flow
                    </h2>
                     <p className="mt-2 text-lg text-muted-foreground">Authentication is not a page.</p>
                </AnimatedBlock>
                <AnimatedBlock delay={0.2}>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Credentials sent", "Server verifies", "Tokens issued", "Session stored", "UI updates"].map((s, i) => (
                            <div key={s} className="flex items-center gap-2">
                                <span className="font-semibold">{s}</span>
                                {i < 4 && <span className="text-muted-foreground">→</span>}
                            </div>
                        ))}
                    </div>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                      <p className="text-center font-mono text-sm text-accent">📌 Login page is just the entry point.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={18} total={TOTAL} />
        </Slide>
    )
}

/* ─── 19. Roles = Authorization ──────────────────────────── */
export function RolesAuthSlide() {
    return (
        <Slide id="roles-auth">
            <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                    <Badge>Authorization</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Roles = Authorization
                    </h2>
                </AnimatedBlock>
                <div className="grid gap-6 md:grid-cols-2">
                     <AnimatedBlock delay={0.2} direction="left">
                         <div className="rounded-lg border border-border bg-card p-6">
                            <h3 className="mb-2 text-lg font-bold">Authentication:</h3>
                            <p className="text-muted-foreground">Who are you?</p>
                         </div>
                         <div className="mt-4 rounded-lg border border-border bg-card p-6">
                            <h3 className="mb-2 text-lg font-bold">Authorization:</h3>
                            <p className="text-muted-foreground">What can you do?</p>
                         </div>
                     </AnimatedBlock>
                     <AnimatedBlock delay={0.3} direction="right">
                         <div className="rounded-lg border border-border bg-muted/20 p-6">
                             <h3 className="mb-4 text-lg font-bold">Roles:</h3>
                             <ul className="list-disc space-y-2 pl-6">
                                 <li>user</li>
                                 <li>creator</li>
                                 <li>admin</li>
                             </ul>
                         </div>
                     </AnimatedBlock>
                </div>
                 <AnimatedBlock delay={0.4}>
                     <p className="text-center font-mono text-sm text-accent">📌 Permissions are enforced after login.</p>
                 </AnimatedBlock>
            </div>
            <SlideNumber current={19} total={TOTAL} />
        </Slide>
    )
}

/* ─── 20. RLS: Where Real Security Lives ─────────────────── */
export function RlsSecuritySlide() {
    return (
        <Slide id="rls-security">
             <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                     <Badge>Security</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        RLS: Where Real Security Lives
                    </h2>
                     <p className="mt-2 font-mono text-sm text-muted-foreground">React → Supabase API → RLS → Database</p>
                </AnimatedBlock>
                <AnimatedBlock delay={0.2}>
                    <div className="rounded-lg border border-border bg-destructive/10 p-6">
                         <p className="mb-2 font-bold text-destructive">Even if:</p>
                         <ul className="list-disc space-y-1 pl-6 text-muted-foreground">
                             <li>UI is hacked</li>
                             <li>API is misused</li>
                         </ul>
                         <p className="mt-4 font-bold text-primary">👉 Database still protects data.</p>
                    </div>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                      <p className="text-center font-mono text-sm text-accent">📌 Security belongs at the lowest layer.</p>
                 </AnimatedBlock>
             </div>
             <SlideNumber current={20} total={TOTAL} />
        </Slide>
    )
}

/* ─── 21. Why Pagination, Storage & State Exist ──────────── */
export function PaginationStorageSlide() {
    return (
        <Slide id="pagination-storage">
             <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                     <Badge>Concepts</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Why Pagination, Storage & State Exist
                    </h2>
                </AnimatedBlock>
                <AnimatedBlock delay={0.2}>
                    <div className="space-y-4">
                         <div className="flex justify-between rounded-lg border border-border bg-card p-4">
                             <span className="font-bold">Pagination</span>
                             <span className="text-muted-foreground">performance</span>
                         </div>
                         <div className="flex justify-between rounded-lg border border-border bg-card p-4">
                             <span className="font-bold">Storage</span>
                             <span className="text-muted-foreground">files ≠ text</span>
                         </div>
                         <div className="flex justify-between rounded-lg border border-border bg-card p-4">
                             <span className="font-bold">Global state</span>
                             <span className="text-muted-foreground">shared memory</span>
                         </div>
                    </div>
                </AnimatedBlock>
                 <AnimatedBlock delay={0.4}>
                     <p className="text-center font-mono text-sm text-accent">📌 These solve real-world scale problems.</p>
                 </AnimatedBlock>
             </div>
             <SlideNumber current={21} total={TOTAL} />
        </Slide>
    )
}

/* ─── 22. Final Mental Model ─────────────────────────────── */
export function FinalMentalModelSlide() {
    return (
        <Slide id="mental-model">
             <div className="flex w-full max-w-4xl flex-col gap-10">
                <AnimatedBlock>
                     <Badge>Conclusion</Badge>
                     <h2 className="mt-4 text-3xl font-bold tracking-tight text-primary md:text-5xl">
                        Final Mental Model
                    </h2>
                </AnimatedBlock>
                <AnimatedBlock delay={0.2}>
                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2 rounded-lg border border-border bg-card p-6">
                            <p className="font-semibold">Browser builds trees</p>
                            <p className="font-semibold">React controls updates</p>
                            <p className="font-semibold">State drives UI</p>
                            <p className="font-semibold">APIs move data</p>
                            <p className="font-semibold">Security lives in DB</p>
                        </div>
                        <div className="flex flex-col justify-center rounded-lg border border-border bg-muted/20 p-6">
                             <p className="font-semibold text-primary">If you understand this:</p>
                             <ul className="mt-2 list-disc space-y-1 pl-4 text-muted-foreground">
                                 <li>Frameworks become easy</li>
                                 <li>Bugs become explainable</li>
                                 <li>You think like an engineer</li>
                             </ul>
                        </div>
                    </div>
                </AnimatedBlock>
             </div>
             <SlideNumber current={22} total={TOTAL} />
        </Slide>
    )
}
