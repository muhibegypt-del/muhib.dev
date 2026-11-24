/* Portfolio case studies. Every node: N(title, body, ...children). Bodies support `code`.
   E(hash, message) is a commit reference. Sources: the git history of each repo, the live sites,
   the local project files, and Muhib's portfolio brief. */
const N = (t, d, ...c) => ({ t, d, c });
const E = (h, m) => ({ e: h, m });
/* Commits that live in a different public repo from the project's default. */
const COMMIT_REPO = {
  f423683: "muhibhome2-spec/thelatiffoundationfinal",
  acb360c: "muhibegypt-del/scwesbitef",
  "69997f4": "muhibegypt-del/members-area-lite",
  "8c48adf": "muhibegypt-del/members-area-lite"
};

const GROUPS = [
  ["ai", "AI products and enablement"],
  ["charity", "Charity and community websites"],
  ["client", "Client websites"],
  ["apps", "Apps and tools"]
];

const PROJECTS = [
/* ------------------------------------------------------------------ COMPANION */
{
  id: "companion", group: "ai", name: "Companion",
  status: "Acquired · 1M+ words",
  line: "Recorded lectures in, publication-ready articles and typeset books out.",
  facts: [["Stack", "React, Vite, Tailwind · Python FastAPI · Node"], ["Model", "Gemini 3 Pro, hosted on Replicate"], ["Built with", "Claude Code"], ["Outcome", "Acquired, in production"]],
  flows: [{ steps: [
    ["", "Lecture or stream", "Audio upload or a YouTube link"],
    ["ai", "Scholar-editor pass", "The model reads the audio and writes the article"],
    ["ai", "Parallel agents", "Each agent takes one job on the book draft"],
    ["", "Typeset book", "Print-ready pages, non-Latin glyphs intact"]
  ]}],
  tree: [
    N("Why I built it",
      "Philosophical lectures given in foreign languages switch languages mid-sentence and quote primary texts in the original. Turning one recording into a readable English article meant transcribing it, handling the foreign-language passages, checking every quotation and cleaning up the speech by hand. A whole book of them took weeks."),
    N("What it does", "",
      N("Two ways in", "Upload an audio file, or paste a YouTube link. For links, `yt-dlp` pulls the best audio stream and FFmpeg converts it to a 192 kbps MP3."),
      N("One endpoint", "A FastAPI `/process` route accepts either a file or a URL and returns the finished article, so the front end never has to know which path was taken."),
      N("The editorial brain", "The system prompt casts the model as a subject expert, chief editor and linguist, then gives it rules a human editor would follow:",
        N("Multilingual protocol", "Quoted passages stay in their original language and script, followed by the speaker's own translation, or a standard one if they gave none."),
        N("Citations", "Quotations from primary texts become blockquotes with their source, and the wording is checked against the named work."),
        N("Names and terms", "Spellings of names and technical terms are standardised across every article."),
        N("Speech to prose", "Fillers, false starts and stutters are removed; the speaker's meaning and voice stay.")),
      N("Scale", "The production version runs as a multi-agent orchestration: several agents work on a book in parallel, each with one job, and the result is typeset with correct glyphs for non-Latin scripts.")),
    N("Decisions I made", "",
      N("Let the model hear the audio, not a transcript", "One pass from audio keeps the speaker's code-switching and the foreign-language passages together, instead of handing the model a transcript that has already flattened them."),
      N("Use a hosted model", "Gemini 3 Pro through Replicate meant no GPUs to manage and one API for files and prompts."),
      N("Make it runnable by a non-developer", "A one-click launcher checks Python and Node are installed, creates the virtual environment, installs dependencies, starts both servers, opens the browser, and shuts everything down when the window closes.")),
    N("Troubleshooting", "",
      N("Audio wasn't reaching the model reliably", "I isolated it in steps instead of guessing:",
        N("Test 1: prompt only", "Does the model answer at all? (`diagnostic_test.mjs`)"),
        N("Test 2: a known public audio file", "Does audio work at all, with a file nobody could dispute? (`test_public_audio.mjs`)"),
        N("Test 3: our file through the Files API", "Does our upload path work? (`test_files_api.mjs`)"),
        N("Read the model's input schema", "`inspect_schema.py` pulls the model's OpenAPI schema to see exactly what it expects."),
        N("The fix", "Upload through Replicate's Files API with an explicit content type. File types are detected with libmagic, then Python's mimetypes, then a safe `audio/mpeg` fallback. The code still carries the comment: “THIS IS THE KEY FIX”.")),
      N("Two back ends", "I rebuilt the back end in Node alongside Python to compare how each SDK handled uploads before settling the production path.")),
    N("Result", "Acquired by a company and in production use. 1M+ words transcribed and hundreds of hours of streamed content processed. A full book draft in about two hours, down from weeks."),
    N("What I learned", "The hardest bug was plumbing, not AI. Getting the file type right on upload mattered more than any prompt change.")
  ]
},
/* ------------------------------------------------------------------ DONOR CRM */
{
  id: "donor-crm", group: "ai", name: "Charity donor CRM",
  status: "Launched and sold",
  line: "A donor CRM built for a UK charity, with Gift Aid handled properly.",
  facts: [["Stack", "Next.js, React, Tailwind, Recharts, Supabase"], ["Client", "A UK charity"], ["Built with", "Claude Code"], ["Outcome", "Launched and sold"]],
  flows: [{ steps: [
    ["", "Charity's brief", "How they track donors, gifts and Gift Aid today"],
    ["ai", "Clickable demo", "Claude Code builds every screen on realistic mock data"],
    ["human", "Client walk-through", "They judge the product, not a spec"],
    ["ai", "Built out on Supabase", "Real data and sign-in replace the mock data"],
    ["", "Launched and sold", ""]
  ]}],
  tree: [
    N("Why I built it", "Generic donor CRMs don't fit how a UK charity actually works: Gift Aid has to be claimed from HMRC, some gifts are restricted to particular uses, and staff need to see at a glance who to thank and who is drifting away. I built a CRM around those, and a demo the charity could click through before committing."),
    N("What's in it", "",
      N("Dashboard", "KPI cards, a stacked monthly-raised chart, an action queue and progress on every campaign."),
      N("Donors", "A list with engagement rings, and a profile with a gift timeline, an AI summary slot and a Gift Aid panel."),
      N("Gifts", "A ledger with Gift Aid and restricted-fund flags on each gift."),
      N("Campaigns", "Progress against goal across all eight active programmes."),
      N("Communications", "A thank-you queue with template previews."),
      N("Gift Aid claim builder", "Finds eligible, unclaimed gifts and totals the 25% uplift, in the shape of an HMRC R68(i) claim.")),
    N("Decisions I made", "",
      N("An engagement score staff can explain", "A transparent RFM formula instead of a black box:",
        N("Weights", "Recency 40%, frequency 30%, money 30%."),
        N("Money is square-rooted", "One very large gift can't make a donor look more engaged than a loyal monthly giver."),
        N("New donors are capped at 50", "Nobody is labelled a champion on their first gift."),
        N("Seven plain-English tiers", "Champion, loyal, potential, at risk, lapsed, dormant, new.")),
      N("Gift Aid visible everywhere", "Unclaimed Gift Aid is money left on the table, so eligibility shows on every screen, not just at claim time."),
      N("Demo first, plumbing later", "Deterministic mock data, no database, no login. An honest “not built” list (auth, persistence, CSV import, a live model call, PDF reports, automation) kept the demo about the product."),
      N("A brand, not a dashboard template", "Lowercase navigation, warm earth tones, Source Serif 4 with Inter, and a dark mode designed as a peer of light, not an afterthought.")),
    N("From demo to product", "",
      N("The demo sold the idea", "The charity judged the CRM by clicking through it, not by reading a spec."),
      N("Then the plumbing", "The launched version replaced the mock data with a Supabase back end: a real database and sign-in, kept deliberately simple.")),
    N("Troubleshooting", "",
      N("The Vercel build failed", "React 19 needs Next.js 15.1 or later to build reliably. I bumped Next and the deploy went green.",
        E("cef9239", "fix: bump next to 15.1+ for stable react 19 (vercel build)"))),
    N("Result", "Built out on Supabase, launched and sold. The launched version's address has since been retired."),
    N("What I learned", "A clickable demo with honest mock data answered the client's questions faster than any spec would have.")
  ]
},
/* ------------------------------------------------------------------ DOCUMENTARY */
{
  id: "documentary", group: "ai", name: "Documentary editing skill",
  status: "Built and tested",
  line: "A Claude Code skill that turns writer-led documentary editing in Remotion into a guided workflow.",
  facts: [["Type", "Claude Code skill, plus a voice-cleanup skill"], ["Video", "Remotion"], ["Archives", "Met, LOC, Smithsonian, Europeana, Wellcome"], ["Audio", "ClearVoice MossFormer2, offline"]],
  flows: [
    { label: "Before: by hand", steps: [["", "Watch all the footage", ""], ["", "Transcribe", ""], ["", "Choose cuts by feel", ""], ["", "Hunt for archive images", ""], ["", "Fix the audio", ""], ["", "Build the timeline", ""]] },
    { label: "After: with the skill", steps: [
      ["", "Interview and transcript", "Recording with synced text"],
      ["ai", "Beat sheet and cut plan", "Claude classes each beat, proposes cuts and images"],
      ["ai", "Validator", "A script checks the plan before render"],
      ["human", "Review in Remotion Studio", "I judge the joins and borderline cuts"],
      ["", "Rendered film", "Clean audio, plain end titles"]
    ]}
  ],
  tree: [
    N("Why I built it", "Short films about a writer's life live or die on restraint. Left alone, AI edits reach for zooms, kinetic type and stock footage, and the emotion goes. I wanted Claude to edit the way a careful documentary editor would."),
    N("The rulebook Claude follows", "",
      N("Start from the face", "The cut begins as the speaker alone. Every departure has to give the viewer something the face can't. Ties go to the face."),
      N("Six kinds of beat", "Each beat is classed as fact, memory, teaching, turn, confession or thesis, given one job (hold, transport, contrast) and one owner (face, paper, world)."),
      N("Paper is thought, film is memory", "Teaching passages appear as typeset pages in EB Garamond; memories as full-bleed archive stills with one shared film grade."),
      N("A priority order for conflicts", "Emotion has first veto, story second, rhythm third."),
      N("What's banned", "No energy zooms, kinetic type, stock gestures, fake film damage, or cuts added just to fill a gap.")),
    N("How it's built", "",
      N("References loaded only when needed", "`editorial.md`, `remotion.md`, a cut-plan contract and evaluation cases for testing the skill itself."),
      N("A validator", "`check_cut.py` checks the cut plan frame by frame and pulls sample frames for visual review."),
      N("Archive search through MCP", "Connected tools search five public collections for memory sequences with clear licences."),
      N("A second opinion", "When allowed, a read-only subagent is given the transcript and rendered frames and asked one question, such as “Which cut hides a change in the performance?”. The edit decision stays in the main session.")),
    N("The voice-cleanup skill", "",
      N("Offline speech cleanup", "Runs the ClearVoice MossFormer2 model locally on the CPU, so recordings never leave the machine."),
      N("Made for phone footage", "Outputs 48 kHz audio, or swaps the cleaned track straight into an MP4 or MOV, including iPhone ProRes."),
      N("A strength dial", "Mixes cleaned and original audio when the full effect sounds processed.")),
    N("Pitfalls I designed around", "",
      N("Don't clean a finished mix", "A film mix with music in it gets the music suppressed. The skill insists on the original speech recording."),
      N("Echo stays", "The model removes noise, not room echo, so the skill says so instead of over-promising."),
      N("Check alignment before swapping audio", "Long files are processed in overlapping windows so the sample count, and lip sync, is preserved.")),
    N("What I learned", "Rules beat style prompts. Writing down what not to do changed the output more than describing the look I wanted.")
  ]
},
/* ------------------------------------------------------------------ PITCH ANGLE */
{
  id: "pitch-angle", group: "ai", name: "Pitch Angle Finder",
  status: "Used on my own outreach",
  line: "A Claude skill that finds the strongest pitch angle for a charity before I contact them.",
  facts: [["Type", "Claude skill"], ["Window", "Next 6 to 12 months"], ["Output", "A Loom script for the decision-maker"]],
  flows: [{ steps: [
    ["", "Charity name or URL", "One line to start"],
    ["ai", "Research and rank angles", "Claude finds upcoming moments and links every claim"],
    ["human", "Check sources, pick one", "I open the links and choose the angle"],
    ["", "Loom script", "Recorded and sent"]
  ]}],
  tree: [
    N("Why I built it", "A good pitch to a charity hangs on what it has coming up in the next six to twelve months. Researching that by hand is slow, so most outreach stays generic."),
    N("How it works", "",
      N("Research", "Claude researches the named charity and finds what is really happening for it in the coming months."),
      N("The giving calendar is built in", "Angles are tied to the charity's peak giving seasons, including US year-end giving."),
      N("The deliverable", "A Loom script written for the decision-maker, ending in a discovery-call ask.")),
    N("Decisions I made", "",
      N("No link, no claim", "Every claim must link to its source, and every angle must attach to something real."),
      N("A script, not a report", "The output is the thing I record, so there's no second writing step.")),
    N("What I learned", "Making sources mandatory is what makes an angle safe to put in front of a charity's director.")
  ]
},
/* ------------------------------------------------------------------ GUARDIAN */
{
  img: "img/guardian-malaysia", repo: "muhibegypt-del/guardianmalaysia", id: "guardian-malaysia", group: "charity", name: "Guardian Malaysia",
  status: "Live · guardianmalaysia.org",
  line: "The website for a non-profit giving free youth jiu-jitsu scholarships in Malaysia.",
  url: "https://www.guardianmalaysia.org",
  facts: [["Stack", "Next.js App Router, Tailwind"], ["Hosting", "Netlify, then Vercel with a custom domain"], ["Built with", "Claude Code, Playwright MCP"], ["History", "Feb to Mar 2026"]],
  flows: [{ steps: [
    ["", "Charity's story", "What they do and who for"],
    ["ai", "First build in one session", "Claude Code builds the whole single page"],
    ["human", "My audit passes", "Typography, real numbers, partner changes"],
    ["", "Live site", "On the charity's own domain"]
  ]}],
  tree: [
    N("Why", "Guardian Malaysia gives children free jiu-jitsu scholarships. They needed one page that shows the impact and makes it easy to support them."),
    N("Build", "",
      N("One session, one page", "Claude Code built the first version: sticky nav that turns solid on scroll, full-screen hero, impact stats, an image marquee in pure CSS, mission blocks, story, gallery, call to action, partner logos and footer.",
        E("be4a09f", "feat: build Guardian Malaysia single-page website")),
      N("No fake photos", "Image slots were marked with REPLACE comments so nothing stock made it to the live site.")),
    N("My passes after the first build", "",
      N("Typography audit", "Removed em-dashes, added kicker labels, normalised the type scale, strengthened the call to action, added a favicon.",
        E("d785ebe", "UI/UX & typography audit")),
      N("Real numbers and names", "Updated the stat to 929 kids, renamed Guardian Gym to Guardian Project, added the AJJFP as a partner, used a real group photo behind the call to action.",
        E("9f157c8", "Update stats (929 kids), rename Guardian Gym to Guardian Project, add AJJFP partner")),
      N("Socials cut to where they're active", "Instagram stays; Facebook and YouTube went.",
        E("2cdf411", "Update social links: add IG and remove FB/YT"))),
    N("Troubleshooting", "",
      N("Nav background invisible on scroll", "The transparent-to-solid transition left the nav unreadable over some sections. Fixed the scroll state.",
        E("6f0611d", "Fix navbar scroll background visibility issue")),
      N("Visual checks", "Playwright MCP let the agent screenshot the page and check its own layout changes.")),
    N("Result", "Live on guardianmalaysia.org, showing 929 children reached."),
    N("What I learned", "A first build in one session is the easy part. The value is in the passes after it: real numbers, real photos, fewer channels done well.")
  ]
},
/* ------------------------------------------------------------------ LATIF */
{
  repo: "muhibhome2-spec/ltfweb", id: "latif-foundation", group: "charity", name: "The Latif Foundation",
  status: "Live · thelatiffoundation.org",
  line: "A memorial foundation's website, rebuilt through several versions until it felt like a memorial, not a campaign.",
  url: "https://www.thelatiffoundation.org",
  facts: [["Stack", "React, Vite, TypeScript, Tailwind"], ["Repos", "6 iterations, about 100 commits"], ["Built with", "Bolt, then Claude Code"], ["History", "Feb to May 2026"]],
  flows: [{ steps: [
    ["", "First draft in Bolt", "Seasonal-appeal-led, heavily decorated"],
    ["ai", "Redesign and accessibility pass", "Claude Code on pull-request branches"],
    ["human", "Tone decision", "A memorial, not a campaign"],
    ["ai", "Clean rebuild", "Design tokens, guidelines, an appeal page"],
    ["", "Live site", "Custom domain"]
  ]}],
  tree: [
    N("Why", "The foundation is in memory of Abdul Lateef Ayodele. The site has to raise support without forgetting that it is, first, a memorial."),
    N("Version history", "",
      N("Feb 2026: first build and restructure", "A Bolt draft, then a full restructure, then Claude Code redesigning the home page, navigation and footer on its own branch."),
      N("Feb 2026: accessibility overhaul", "A WCAG 2.1 AA pass (details under Troubleshooting)."),
      N("Feb 2026: a parallel rebuild in phases", "A second repo rebuilt the design from a written plan: phase 1 foundations, phase 2 the global shell, phase 3 the home page."),
      N("Apr 2026: brand tokens", "Brand colours and spacing moved into design tokens with uniform scaling."),
      N("May 2026: recast as a memorial", "The hero became a book's dedication page: the foundation's name small at the top, “In loving memory of” in italic, his name as the centrepiece, one quiet link to his story.",
        E("f423683", "Recast hero as a memorial dedication page")),
      N("May 2026: the clean rebuild that's live", "A fresh repo applying web interface guidelines, an editorial split hero that keeps the face in frame, fluid type, and a seasonal appeal page.")),
    N("Decisions I made", "",
      N("Memorials don't shout", "Two loud buttons became one underlined link, and the nav and footer were quietened to match."),
      N("Remove the seasonal page", "A seasonal page dates a memorial site, so it went in the guidelines pass."),
      N("One donate link, in one place", "The donation URL was duplicated five times. It became a single constant."),
      N("Delete decoration", "Zellige separators, stained-glass overlays and Moroccan pattern backgrounds were all removed in the final rebuild.")),
    N("Troubleshooting and pitfalls", "",
      N("Decoration destroyed readability", "A Moroccan pattern was fixed over the whole page and a stained-glass overlay sat on the text. Pattern limited to the hero, overlay halved, then both deleted."),
      N("Text failed contrast", "Body text moved from stone-500/600 to stone-600/700 to reach 4.5:1. Faded goal cards were made legible."),
      N("Smooth scrolling ignored reduced motion", "Lenis now respects `prefers-reduced-motion`, and a global rule stops animation for those users."),
      N("Layout shift from images", "Every image got width, height and async decoding."),
      N("Pages 404'd on refresh", "Direct links to client-side routes failed on Vercel. A `vercel.json` rewrite fixed it.",
        E("ce538e4", "fix: add vercel.json SPA rewrite for client-side routing")),
      N("Small leaks", "An unused Inter font (about 20 KB per visitor) removed; an OG image still named `gemini_generated_…` renamed.")),
    N("What I learned", "Restraint was the brief. Most of the improvement came from deleting things.")
  ]
},
/* ------------------------------------------------------------------ SOUL CARAVAN */
{
  img: "img/soul-caravan", repo: "muhibhome2-spec/scwesbitef", id: "soul-caravan", group: "charity", name: "Soul Caravan Foundation",
  status: "Live · 280+ commits",
  line: "An appeals website for a foundation supporting communities in Kenya.",
  url: "https://scwesbitef.vercel.app",
  facts: [["Stack", "React, Vite, TypeScript, Tailwind"], ["Integrations", "ImageKit video, MailerLite"], ["Built with", "Bolt, local AI agents, Playwright MCP"], ["History", "Dec 2025 to Mar 2026"]],
  flows: [{ steps: [
    ["", "Appeals and photos", "Water wells, education, orphan care"],
    ["ai", "Design system and components", "Built in numbered phases with AI agents"],
    ["human", "Device testing", "Real phones, real connections"],
    ["ai", "Performance rounds", "Video, images, headers"],
    ["", "Live site", "With newsletter and fundraiser sign-up"]
  ]}],
  tree: [
    N("Why", "The foundation runs appeals for water wells, education and orphan care in Kenya. Donors need to see the story, then the appeal, then a way to give."),
    N("How the build went", "",
      N("Dec 2025: first version in Bolt", "Appeal cards, a water well card and an appeal index."),
      N("Architecture refactor", "Design system, navigation, routing and component state reorganised before adding more pages."),
      N("Jan 2026: story first", "A hero video, a geometric-pattern design system, then a story-first hero, a component library, a cinematic story card and an appeal system."),
      N("Numbered phases", "Navigation standardised and routing cleaned (phase 10), footer call to action redesigned (phase 11), then a responsiveness pass across every block."),
      N("Asset tooling", "Scripts to inventory every image (`inventory_images.py`, `IMAGE_MANIFEST.md`) so nothing broken or oversized shipped.")),
    N("Troubleshooting", "",
      N("Routing broke on Vercel", "Four attempts, each one recorded: anchor tags swapped for router links, Vercel pointed at the Vite `dist` output, rewrites simplified, rebuild forced.",
        E("3ffc074", "Fix: Replace anchor tags with Router Links and add Vercel SPA config"),
        E("5d113c5", "Fix: Explicitly configure Vercel for Vite output dist"),
        E("0878160", "Fix: Simplify vercel.json rewrites for SPA routing")),
      N("Hero video wouldn't autoplay on phones", "Forced the `muted` property, tried programmatic play and a direct `src`, then moved the mobile video to ImageKit with a preload for the largest paint."),
      N("Menu overlapping content", "Fixed by lifting the menu state up so the page knew when it was open.")),
    N("Performance rounds", "",
      N("Backup first", "A backup commit before the optimisation audit, so any change could be rolled back.",
        E("acb360c", "backup: pre-performance optimization audit")),
      N("Round 1: images", "Preloading, lazy-loaded timeline images, card images resized to 600 px wide."),
      N("Round 2: video", "ImageKit-optimised mobile hero video."),
      N("Round 3: headers and SEO", "Security headers, SEO links, `robots.txt`, font-display swap.")),
    N("What I learned", "Take a backup before an optimisation pass, and test video on a real phone. Desktop browsers hide every autoplay problem.")
  ]
},
/* ------------------------------------------------------------------ BRIGGS */
{
  repo: "muhibhome2-spec/briggsbookclub", claude: [20, 48], id: "briggs-book-club", group: "charity", name: "Briggs' Book Club",
  status: "Live · 500+ members",
  line: "A pay-what-you-can reading circle's website, and a members' replay library, iterated over a year.",
  url: "https://www.briggsbook.club",
  facts: [["Stack", "React, Vite, Tailwind, Supabase"], ["Payments", "Memberful pledge form"], ["Built with", "Bolt, then Claude Code via pull requests"], ["History", "Dec 2025 to Nov 2026"]],
  flows: [{ steps: [
    ["", "A new reading or special", "What's being taught next"],
    ["ai", "Branch and pull request", "Claude Code makes the change on its own branch"],
    ["human", "I review and merge", "Copy, tone, mobile"],
    ["", "Live on Vercel", "With share cards and analytics"]
  ]}],
  tree: [
    N("Why", "A teacher runs a reading circle on classical texts. Membership is a monthly pay-what-you-can donation, so the site has to explain the circle, show what's being read now, and make joining easy."),
    N("A year of iterations", "",
      N("Dec 2025 to Mar 2026: Bolt", "Built and edited in Bolt's visual editor. One page was saved 14 times in a single day while I worked through it."),
      N("Apr 2026: a special series page", "A landing page for a special series, built by Claude Code on a branch and merged by pull request.",
        N("Hero image", "A historic manuscript page from a museum collection, with text kept inside the image so it couldn't bleed onto the page."),
        N("Inclusive copy", "Region-specific wording replaced so every reader felt invited."),
        N("Iterated with the teacher's plans", "Retitled, then changed to a two-part special on 10 and 17 May, with a shorter route.")),
      N("Jul 2026: redesign, then put the soul back", "",
        N("Too simple", "A mobile-first single page cut seven sections down to one scroll."),
        N("A chaptered journey", "The next pass restored the spirit as six chapters a visitor scrolls through like a book."),
        N("Armed for conversion", "Preset amounts (£5, £10 marked Popular, £25), a five-question FAQ, reassurance under the button (“60 seconds, cancel in two taps”), share cards and analytics.",
          E("2cc75ef", "Arm the page for conversion: date, anchored pricing, FAQ, meta, analytics")),
        N("Plain language", "Copy rewritten in direct sentences, every em-dash removed.")),
      N("Aug 2026: rebrand and accessibility", "A rebrand to a new name and palette, and the join section moved to a light ground so the whole page meets WCAG 2.1 AA."),
      N("Sep 2026: a design system", "Two hidden concept routes (Manuscript and Sanctuary) and a review PDF. Sanctuary won and became a design system with tokens, components and its own unlisted `/design-system` page.",
        E("63e5222", "Rebuild the home page on the Sanctuary design system")),
      N("Nov 2026: the members' replay library", "A separate app at members.briggsbook.club (below).")),
    N("The members' area", "A separate app at members.briggsbook.club, built from scratch with Codex. It has its own case study under Apps and tools: Briggs' Book Club members area."),
    N("Troubleshooting", "",
      N("Refresh gave a 404", "Direct visits to client-side routes failed. A Vercel rewrite fixed them.",
        E("d3a1152", "Add vercel.json with SPA rewrite")),
      N("Hero text bled onto the page", "Moved text inside the image bounds."),
      N("Tiny text on phones", "Eyebrow labels raised from 11.2 px to 12 px.")),
    N("Result", "A live site for a circle of 500+ members, with a members' library on its own subdomain."),
    N("What I learned", "Simplifying cut the soul out. The next pass put it back as structure, and only then did I tune it for joining.")
  ]
},
/* ------------------------------------------------------------------ A TEXTURED WORD */
{
  img: "img/a-textured-word", repo: "muhibegypt-del/awesbite1", claude: [80, 97], before: { src: "img/a-textured-word-before.jpg", was: "August 2026: the first client preview", now: "November 2026: live, after five feedback rounds" }, id: "a-textured-word", group: "client", name: "a textured word",
  status: "100 accessibility · 98–100 performance",
  line: "A boutique site for an English tutor and voice artist, built with Claude Code through five rounds of client feedback.",
  url: "https://awesbite1.vercel.app",
  facts: [["Stack", "Astro, vanilla CSS, 6 KB of JavaScript"], ["Commits", "97, of which 80 with Claude Code"], ["History", "Aug to Nov 2026"], ["Client", "Aneesa, tutor and voice artist"]],
  flows: [{ steps: [
    ["", "Client feedback", "Numbered items with her screenshots"],
    ["ai", "One commit per item", "Claude Code works from CLAUDE.md rules"],
    ["ai", "Regression check", "Recorded in the project's single source of truth"],
    ["human", "Preview to client", "She signs off or sends the next round"],
    ["", "Live site", "Measured before and after"]
  ]}],
  tree: [
    N("Why", "Aneesa teaches English, voices adverts and repurposes content. She needed one site that sells all three without feeling like three sites."),
    N("How I set Claude Code up", "",
      N("CLAUDE.md as the contract", "Every client decision became a rule the agent can't forget:",
        N("Never black", "Text is a warm ink. The client rejected black."),
        N("Two accents, not interchangeable", "The terracotta fails contrast at small sizes (4.09:1), so small text uses a darker twin."),
        N("No shadows", "Depth comes from tone and hairlines."),
        N("One primary button per screen", ""),
        N("Copy lives in JSON", "Never inline, and unwritten copy stays as a visible placeholder. Never lorem ipsum."),
        N("Budgets", "LCP under 2 s on phones, layout shift under 0.05, home page under 900 KB.")),
      N("Docs the agent reads only when needed", "A full brief and a content slot map, kept out of routine work to save context."),
      N("A hook for cloud sessions", "A SessionStart hook installs dependencies so cloud sessions start ready."),
      N("A single source of truth", "Each feedback item, its fix and its regression result recorded in one table.")),
    N("Rounds with the client", "",
      N("Aug: draft preview and three palettes", "Terracotta, plum and sage, each with computed contrast. Sage was darkened until it cleared 4.62:1 rather than sitting on the 4.50 boundary."),
      N("Sep: two directions, she chose B", "Two design-direction collages. She chose Direction B with her portrait, and every page was rebuilt in it."),
      N("Oct: eight numbered changes", "One commit per item: plain offer first, real voice samples, one content page instead of five."),
      N("Oct: “the fonts change partway through”", "She spotted three styles in her introduction. Set in one style throughout."),
      N("Nov: palette and banner", "Forest green fought the mulberry; the banner became a deep aubergine from the same family (13.18:1 contrast)."),
      N("Nov: feedback 5, 27 items", "Each item its own commit: larger text on phones, a bigger discovery-call button, social badges as scalloped stamps like her picture, two more voice samples.")),
    N("Decisions I made", "",
      N("Astro and plain CSS", "Static pages, no framework, 6 KB of JavaScript in total."),
      N("Measure contrast, don't eyeball it", "On the portrait hero the italic moved from the accent to ink: about 6:1 instead of 2:1. The headline is sized to clear her face at every width from 1024 to 2560 px."),
      N("Third-party scripts on demand", "Calendly and Instagram load only when someone interacts.")),
    N("Troubleshooting", "",
      N("Fades died after the first page", "Two faults:",
        N("Navigation wiped a class", "Astro's client router replaced the attributes on the page root, removing the flag the fades relied on. Fixed by re-applying it on `astro:after-swap`."),
        N("The fail-safe raced the script", "A 3-second timer meant to rescue a failed script fired on slow connections and showed everything at once. Now cleared first, at 10 seconds.")),
      N("Then I replaced the whole system", "The scroll-timeline version was the wrong call. A plain observer replaced it, and a double setup that had left 32 blocks stuck invisible was fixed.",
        E("60c3a94", "Replace the reveal system with a plain scroll-in fade")),
      N("The contact form was losing enquiries", "",
        N("The honeypot was visible to screen readers", "Labelled “Do not fill this in”. Anyone who filled it had their enquiry silently discarded while being told it was sent."),
        N("Every untouched form filed as tuition", "The topic menu had a real value preselected. Now it starts empty so `required` works.")),
      N("The wrong font on Macs", "A local Avenir Next was loading instead of the self-hosted Jost. Removed from the font stack.")),
    N("Result: measured before and after", "Lighthouse 12.8, eight pages, phone and desktop:",
      N("Performance", "Phone 96–99 → 98–99. Desktop 100."),
      N("Accessibility", "100 on all 32 runs; axe-core WCAG 2.2 AA, zero violations."),
      N("Layout shift", "Up to 0.020 → 0.000 on every run."),
      N("Home page weight", "265 KB → 189 KB."),
      N("Best practices", "Contact page 79 → 100."),
      N("Security headers", "None of four → all four."),
      N("Still open", "The client's domain is parked, which needs her decision. Reported plainly in a one-page health check for her.")),
    N("What I learned", "Write the rules down once. CLAUDE.md turned every client decision into a rule Claude couldn't forget, so 27 feedback items landed with a regression check for each.")
  ]
},
/* ------------------------------------------------------------------ KHALED */
{
  img: "img/khaled-siddiq", repo: "muhibhome2-spec/khxledsiddiqwebapp", claude: [15, 85], id: "khaled-siddiq", group: "client", name: "Khaled Siddiq",
  status: "Live · khaledsiddiq.com",
  line: "A membership landing page for a UK artist, video-first, with Stripe checkout.",
  url: "https://www.khaledsiddiq.com",
  facts: [["Stack", "React, Vite, Tailwind"], ["Payments", "Stripe checkout link"], ["Built with", "Bolt, then Claude Code"], ["History", "Nov 2025 to Apr 2026, 85 commits"]],
  flows: [{ steps: [
    ["", "Artist's video and offer", "One membership tier"],
    ["ai", "Layout iterations", "Claude Code, one change per commit"],
    ["human", "I judge each on screen", "Desktop and phone"],
    ["", "Live page", "Stripe checkout"]
  ]}],
  tree: [
    N("Why", "The artist wanted a single page that sells a membership: their video first, then one clear way to join."),
    N("Two phases", "",
      N("Nov to Dec 2025: Bolt", "Many style experiments: glassmorphism, small caps, background photo opacity, parallax on then off."),
      N("Apr 2026: Claude Code", "Rebuilt the landing page on a branch, merged by pull request.")),
    N("Decisions I made", "",
      N("One tier", "Consolidated to a single membership price, then switched it to £4.99 because the artist is UK-based."),
      N("Let the video carry it", "Removed the hero title so the video fills the frame; the gold call to action appears on interaction."),
      N("Stripe checkout link", "The join button goes straight to Stripe. No custom payment code to maintain.")),
    N("The back-and-forth on desktop", "A vertical video on a wide screen took several rounds, each committed separately:",
      N("1. Letterbox the video", "Vertical video centred with grain, mobile untouched."),
      N("2. Editorial split screen", "Video one side, content the other."),
      N("3. Hide the seam", "A fade between video and panel, then moved into the panel so the video wasn't masked."),
      N("4. The portrait backdrop", "Full panel, then a faint ghost, then a tiny fragment, then resized: each time less."),
      N("5. Kill the dead zone", "Content anchored right so the screen had no empty middle."),
      N("6. Feather the corners", "A radial vignette, strengthened until the corners actually faded into black.")),
    N("Troubleshooting and pitfalls", "",
      N("AI builder syntax errors", "The Bolt phase produced repeated breakages: unterminated strings, comments and JSX, a duplicated component, a render loop that lagged the page. Each needed its own fix commit."),
      N("Mobile padding", "A right padding meant for desktop applied on every screen size. Fixed with a breakpoint.")),
    N("What I learned", "A vertical video on a desktop screen is a layout problem, not a styling one. Small, separate commits made each attempt easy to judge and undo.")
  ]
},
/* ------------------------------------------------------------------ MR STUDIOS */
{
  id: "mr-studios", group: "client", name: "MR Studios",
  status: "Live",
  line: "“The Ink of the Scholar”: a community-funded studio's site, restructured around the StoryBrand framework.",
  url: "https://umrstudio.vercel.app",
  facts: [["Stack", "Next.js, GSAP, Lenis, Framer Motion"], ["Built with", "Local AI agents in numbered phases, Playwright MCP"], ["History", "Feb 2026"]],
  flows: [{ steps: [
    ["", "Hero", ""], ["", "The problem", ""], ["", "The guide", ""], ["", "The plan", ""], ["", "The stakes", ""], ["", "The ask", ""]
  ], label: "StoryBrand page order" }],
  tree: [
    N("Why", "A studio funded by its community needed its site to tell a story people would back, not just show work."),
    N("How it was built", "",
      N("Numbered phases", "Phases 30 to 35: scroll-style pillars with acts, the hero reconceived, a folio-style works index, a clear type hierarchy and more breathing room between sections."),
      N("A clarity pass", "Hero trimmed to one sentence, works index reordered, support copy and button made clearer."),
      N("A StoryBrand overhaul", "A new Problem section, the studio as the guide with credentials, “Here's what we're building” as the plan, “Why now” as the stakes, and “Community-funded from day one” as the ask.")),
    N("Checks", "A Lighthouse report saved in the repo, and Playwright MCP for visual checks. The hero video is preloaded."),
    N("What I learned", "A framework is useful when it reorders the page. StoryBrand moved the problem above the work, which is where visitors needed it.")
  ]
},
/* ------------------------------------------------------------------ MEMBERS AREA */
{
  img: "img/members-area", repo: "muhibegypt-del/members-area-lite", id: "members-area", group: "apps", name: "Briggs' Book Club members area",
  status: "Live · open sign-up",
  line: "A members' dashboard built from an empty repo: accounts, a replay library, reading resources and saved progress.",
  url: "https://members.briggsbook.club",
  facts: [["Stack", "Vanilla JavaScript, Vite · Supabase Auth, Postgres, row-level security"], ["Email", "Resend through Supabase SMTP"], ["Built with", "Codex"], ["History", "Beta on 6 Nov 2026, open sign-up on 22 Nov"]],
  flows: [{ steps: [
    ["", "Plain-English brief", "Recordings, a player, progress and resources in one place"],
    ["ai", "Codex builds it", "Front end, database, access rules, deploys"],
    ["human", "I check the real site", "On the address members use, not a success message"],
    ["", "Live members area", "members.briggsbook.club"]
  ]}],
  tree: [
    N("Why I built it", "The club's recorded sittings sat in Google Drive. Members needed one branded place to watch them, find the readings and keep track of what they'd seen, without the club paying for a full learning platform or running a custom server."),
    N("What it does", "",
      N("Sign-up", "Enter an email, type the one-time code it receives, then choose a username and password. Returning members sign in with email and password, and can reset a forgotten password."),
      N("The library", "Recordings grouped by text, each sitting in an embedded player, with an Open in Drive fallback and the reading links for that text."),
      N("Progress", "Members mark sittings watched or unwatched, saved to their own account."),
      N("A demo mode", "A sample library with progress kept in the browser, so it can be shown without a real account.")),
    N("How it's built", "",
      N("Front end", "Plain HTML, CSS and JavaScript modules, bundled by Vite into static files on Vercel. No React, no app server."),
      N("Back end", "Supabase supplies sign-in, the Postgres database (profiles, texts, sittings, resources, watched) and row-level security that keeps each member's data to themselves."),
      N("Email", "Codes and password resets go out through Resend, connected to Supabase, from the club's own sending domain. Its DNS is set in Namecheap."),
      N("Video", "Each sitting's ID is its Google Drive file ID, so the player just builds Drive's preview link.")),
    N("Decisions I made", "",
      N("Keep it small", "Vanilla JavaScript and Vite were enough for one library, a player and progress. The trade-off: if it grows much bigger, the structure should be revisited."),
      N("Reuse Google Drive for video", "The recordings were already there. Video hosts bill by minutes stored and watched, so costs would have grown with every member. Drive kept the beta free to run."),
      N("Don't build accounts myself", "Supabase handles passwords, sessions and email codes, so no custom server was needed for the first release."),
      N("One shared sign-up link", "Open a link, verify your email, pick a name, start watching. No individual invitations to send."),
      N("Mark watched by hand", "Progress is a simple watched or unwatched switch, and updating it doesn't reload the player mid-recording."),
      N("Look like the club, not like software", "Warm paper backgrounds, muted greens and serif headings from the club's own site. I pushed back on a generic SaaS look and on repetitive animation.")),
    N("How the build went", "",
      N("6 Nov 2026: from empty repo to beta in a day", "",
        E("b9fb52b", "Build the Briggs Book Club replay library starter"),
        E("60928a4", "Explicitly lock down the private member roster"),
        E("6517ca6", "Open the replay player on the member dashboard"),
        E("18dd13b", "Finish account claim and deploy the unannounced beta")),
      N("7 Nov: first fix after launch", "",
        E("8c48adf", "Avoid clearing the sign-in screen twice on logout")),
      N("22 Nov: members-only to open to everyone", "People struggled to register when only listed club members could, so the club decided anyone could join.",
        E("69997f4", "Open registration to all verified email addresses"))),
    N("Troubleshooting", "",
      N("People couldn't get in", "Access was tied to an imported list of member emails, and sign-ups that didn't match it failed.",
        N("Two gates, not one", "The sign-up check and the database's access rule both used the list. Changing only one would have let people create accounts and then shown them an empty library, so both were changed in one migration."),
        N("Safety kept", "Email confirmation and each member's private data stayed exactly as before.")),
      N("Verification emails went missing", "Some codes never reached inboxes. I treated it as a sender problem, not an app problem: Supabase's email settings, Resend delivery and the sending domain's DNS. That improves delivery, but no one can guarantee every inbox."),
      N("A green deploy, but the old site", "GitHub showed a successful deploy, yet members still saw the old sign-up wording.",
        N("The cause", "GitHub Pages and the Vercel project behind members.briggsbook.club were two separate deploys. Only Pages had updated."),
        N("How I found it", "Loaded the real address and checked which JavaScript files it was actually serving."),
        N("The fix", "Published the release to the right Vercel project, then reloaded the live sign-up page to confirm the new wording.")),
      N("An expired Vercel login", "The command-line login had expired. Restored it with a device sign-in and an email check that I completed.")),
    N("Pitfalls I avoided", "",
      N("Shipping unrelated work", "Other dashboard changes were in progress locally, so the release was built from the repository baseline with only the sign-up change."),
      N("Assuming accounts protect videos", "Drive sharing and dashboard accounts are separate. Signing up doesn't change who can open a Drive file, and the README says so plainly.")),
    N("How I checked it", "",
      N("A local database test", "A PGlite test harness checked the rules before and after the change: unlisted emails accepted, unconfirmed accounts refused, anonymous visitors blocked, nobody able to write another member's progress, the old list still private, and the migration safe to run twice."),
      N("Live checks", "The sign-up check accepted an unlisted test email, the access rule no longer used the list, and the live page read “Everyone is welcome. Enter your email address to get started.”")),
    N("What it doesn't do yet", "No automatic import of new Drive recordings, no discussion forum, no automatic playback tracking, and two deploy paths that should become one."),
    N("Result", "A live members' dashboard at members.briggsbook.club. Anyone with a verified email can join, watch past sittings, find the readings and keep their progress."),
    N("What I learned", "“Done” means checked at the address members use. Changing the code, deploying GitHub Pages and updating the real domain were three separate steps.")
  ]
},
/* ------------------------------------------------------------------ BLOOB */
{
  repo: "muhibegypt-del/Bloob", claude: [123, 148], id: "bloob", group: "apps", name: "Bloob",
  status: "Built · version 5.0",
  line: "A native C++ film and series app for my own rooted LG TV, built over five weeks with Claude Code.",
  facts: [["Stack", "C++ native webOS app, Node service on the TV"], ["Commits", "148, of which 123 with Claude Code"], ["History", "12 Oct to 16 Nov 2026"], ["Versions", "0.3 to 5.0"]],
  flows: [{ steps: [
    ["", "One increment", "Next numbered item on the App Map"],
    ["ai", "Build and test", "Claude Code makes the change and runs checks"],
    ["human", "Watch it on the TV", "I report what felt wrong"],
    ["ai", "Plan from the report", "Feedback becomes numbered contracts"],
    ["", "TV package", "Versioned, with a handover"]
  ]}],
  tree: [
    N("Why", "I wanted a calm, premium TV app for my own films and series: clear artwork, predictable focus, quiet player controls, fast starts and correct HDR and audio on the TV's own hardware."),
    N("The biggest decision: go native", "",
      N("Web app first", "The first version ran as a web app on the TV. I then chose native, for playback on the TV's own hardware decoders and a more responsive interface."),
      N("Prove it before committing", "Built and loaded a 32-bit ARM binary on the TV first, and documented the approach that failed.",
        E("33c79e7", "Prove 32-bit ARM build and load on rooted TV"),
        E("68a30ff", "Document native host blockers and failed approach")),
      N("Then the whole app, natively", "C++ with the community webOS toolchain. Version 0.4 had every screen.")),
    N("How I ran Claude Code on it", "",
      N("An App Map", "The app split into 24 layers. Each has its job, files, state with evidence (seen on the TV, or only on desktop), gaps and numbered next increments."),
      N("A quality ranking", "Every layer scored against a written definition of quality."),
      N("Review by a second session", "An independent branch review, then a separate validation that confirmed all ten findings and added five more."),
      N("Handover docs", "HANDOVER.md for the next developer, and GitHub checks on every push.")),
    N("Feedback loops with myself as the user", "",
      N("“Looks right, but not intelligent”", "After watching a whole series on 2.0, the look was right but the behaviour wasn't. That report became a UX plan with 13 numbered contracts: progress, next episode, version continuity, track choice, the Back map and more."),
      N("Corrections recorded", "When I found Dolby Vision in MKV did work on my TV, the code and docs were updated as “owner's correction”."),
      N("Direct Play reversed", "Play once jumped straight to the best version. I wanted to choose, so Play now opens the versions list.")),
    N("Design rounds", "",
      N("Glass (2.0)", "Chosen from a concept canvas. Apple's tvOS type scale and safe areas, frosted panels baked per backdrop so text stays readable."),
      N("Spoken focus", "With LG Audio Guidance on, focus is read aloud: label, role and position."),
      N("Swiss (4.1)", "The first draft wasn't approved and was rebuilt to the concept, then 4.2 went back to Glass."),
      N("A rule for the reference app", "Copy its measured design values; never its code, assets, text or branding.")),
    N("A detour I cut", "I built TV calibration into the app, proved it on a simulated TV, then removed it in 4.1 to keep the app focused on watching.",
      E("4f63094", "4.1 part 1: remove calibration, HDR10 by default, faster 4K starts")),
    N("Troubleshooting", "",
      N("No shell access under the TV's profile", "The standard tool wasn't available, so logs are read over SSH."),
      N("Crashes on exit", "Unload before unsubscribing, and log every command, state event, first frame and seek.",
        E("69ea069", "native 0.3.1: unload before unsubscribing")),
      N("Audio the TV can't decode", "Tracks it can't play are skipped, and versions that only have them are explained instead of failing."),
      N("A Bluetooth report of 0", "Means “unknown”, not zero. Handled as such, with timeouts.")),
    N("What I learned", "An agent needs a map more than a prompt. Separating “seen on the TV” from “passed on desktop” stopped false claims that something was done.")
  ]
}
];