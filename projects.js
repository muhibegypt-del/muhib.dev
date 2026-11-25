/* PRAISED portfolio. Individual credits from Muhib Rashid's career, before and since PRAISED.
   Each project: client, title, year, roles, image or logo, and a short story (brief, what I did, outcome).
   Sources: Muhib's handover and CV, the live sites, and each site's repository. No figures are estimated. */

const GROUPS = [
  ["film", "Films"],
  ["campaign", "Campaigns"],
  ["web", "Websites and copy"]
];

const PROJECTS = [
{
  id: "with-you-we-can", group: "film", featured: true,
  client: "Penny Appeal Canada", title: "With you, we can", year: "2023",
  roles: ["Script"],
  img: "img/penny-appeal-canada", video: "4g_SJN-kkX0",
  status: "1.4M views",
  line: "A Ramadan campaign film, from my script.",
  url: "https://www.youtube.com/watch?v=4g_SJN-kkX0", urlLabel: "Watch on YouTube",
  facts: [["Client", "Penny Appeal Canada"], ["Year", "2023"], ["My role", "Script"], ["Views", "About 1.4 million"]],
  story: [
    ["The brief", "Penny Appeal Canada needed the film at the centre of its Ramadan campaign."],
    ["What I did", "I wrote the script."],
    ["The result", "About 1.4 million views."],
    ["Why it worked", "The script was built around one clear ask, so every line moves the viewer towards giving."]
  ]
},
{
  id: "100-million-meals", group: "film", featured: true,
  client: "Orphans In Need", title: "100 Million Meals", year: "2024",
  roles: ["Script"],
  img: "img/orphans-in-need", video: "_9vb_mBRBoo", pos: "center 22%",
  status: "Milestone film",
  line: "A film marking the charity's 100 millionth meal, from my script.",
  url: "https://www.youtube.com/watch?v=_9vb_mBRBoo", urlLabel: "Watch on YouTube",
  facts: [["Client", "Orphans In Need"], ["Year", "2024"], ["My role", "Script"], ["Marks", "The charity's 100 millionth meal"]],
  story: [
    ["The brief", "Orphans In Need reached its 100 millionth meal and wanted a film to mark it."],
    ["What I did", "I wrote the script."],
    ["A note on credit", "The 100 million meals are the charity's achievement. My job was a film worthy of it."]
  ]
},
{
  id: "another-blessed-ramadan", group: "campaign", featured: true,
  client: "Al Mustafa Welfare Trust", title: "Another Blessed Ramadan", year: "2023",
  roles: ["Campaign development", "Film script", "48-page appeal report"],
  img: "img/al-mustafa-ramadan-2023", video: "NRyu1rqd2c0", pos: "center 28%",
  status: "238K views",
  line: "The charity's whole Ramadan 2023 campaign: the line, the film script and a 48-page appeal report.",
  url: "https://www.youtube.com/watch?v=NRyu1rqd2c0", urlLabel: "Watch the ad on YouTube",
  facts: [["Client", "Al Mustafa Welfare Trust"], ["Year", "Ramadan 2023"], ["My role", "Campaign development and script"], ["Film views", "238K on YouTube"]],
  gallery: [
    ["img/amwt-report-cover.jpg", "The appeal report cover"],
    ["img/amwt-report-food.jpg", "But not just another food parcel"],
    ["img/amwt-report-sight.jpg", "But not just another cataract surgery"],
    ["img/amwt-report-water.jpg", "But not just another water well"]
  ],
  story: [
    ["The brief", "Al Mustafa's Ramadan 2023 appeal, in a year when disasters and a cost-of-living crisis had stretched its supporters."],
    ["The idea", "Another Blessed Ramadan. And our commitment remains the same. Every appeal then opens with the same turn of phrase: but not just another food parcel, cataract surgery, orphan sponsorship or water well. One line turns a long list of appeals into one campaign."],
    ["What I did", "Developed the whole campaign: the line, the script for the film, and the 48-page appeal report that carries it through every appeal, from food aid and eye care to water and emergency relief."],
    ["The result", "The campaign film has 238,000 views on YouTube."]
  ]
},
{
  id: "new-beginnings-gala", group: "film",
  client: "New Beginnings", title: "A film for a fundraising gala",
  roles: ["Script"],
  img: "img/new-beginnings", video: "Mshw24A08ZQ",
  status: "Gala dinner film",
  line: "A short fundraising film made to be shown to major donors at a gala dinner.",
  url: "https://www.youtube.com/watch?v=Mshw24A08ZQ", urlLabel: "Watch on YouTube",
  facts: [["Client", "New Beginnings"], ["Format", "Short film for a fundraising gala"], ["Audience", "Major donors"], ["My role", "Script"]],
  story: [
    ["The brief", "New Beginnings needed a short film to show at its fundraising gala: a room of major donors, one chance to make the case."],
    ["What I did", "I wrote the script."],
    ["Why it matters", "A gala film has a few minutes to move a room before the ask. Every line has to earn its place."]
  ]
},
{
  id: "al-mustafa-ramadan-2024", group: "campaign",
  client: "Al Mustafa Welfare Trust", title: "Ramadan 2024 campaign", year: "2024",
  roles: ["Campaign development"],
  logo: "logos/al-mustafa.svg", tint: "amwt", logoWhite: true, coverSub: "Ramadan 2024",
  status: "Second Ramadan",
  line: "The charity's Ramadan campaign the following year.",
  facts: [["Client", "Al Mustafa Welfare Trust"], ["Year", "Ramadan 2024"], ["My role", "Campaign development"]],
  story: [
    ["The brief", "A year after Another Blessed Ramadan, the charity came back for its next Ramadan campaign."],
    ["What I did", "Campaign development for its Ramadan 2024 appeal."]
  ]
},
{
  id: "al-mustafa-support", group: "campaign",
  client: "Al Mustafa Welfare Trust", title: "Three years with the team",
  roles: ["Creative support", "SEO"],
  logo: "logos/al-mustafa.svg", tint: "ink2", coverSub: "Three years",
  status: "3 years",
  line: "Ongoing creative support and search help for a £10.6M charity.",
  url: "https://www.almustafatrust.org", urlLabel: "Visit almustafatrust.org",
  facts: [["Client", "Al Mustafa Welfare Trust"], ["Length", "Three years"], ["My role", "Creative support and SEO"], ["Charity size", "£10.6M yearly income"]],
  story: [
    ["The client", "Al Mustafa Welfare Trust has worked since 1983 on food aid, eye care, clean water, orphan care and emergency relief, and reported helping more than 15 million people in a single year."],
    ["What I did", "Three years alongside its team: consistent creative support across its appeals, and help with SEO so supporters find the charity when they search."],
    ["Why it matters", "Campaigns land better when the person writing them already knows the charity, its supporters and its voice."]
  ]
},
{
  id: "penny-appeal-flagship", group: "campaign",
  client: "Penny Appeal Canada and Australia", title: "Flagship campaigns in two countries",
  roles: ["Campaign development"],
  logo: "logos/penny-appeal.svg", tint: "pa", logoWhite: true, coverSub: "Canada · Australia",
  status: "C$19.1M yearly income",
  line: "Campaign development on Penny Appeal's flagship fundraising campaigns in Canada and Australia.",
  facts: [["Client", "Penny Appeal Canada and Penny Appeal Australia"], ["My role", "Campaign development"], ["Charity size", "C$19.1M yearly income in Canada (2024)"]],
  story: [
    ["The client", "Penny Appeal is an international aid charity founded in 2009, working in 30 crisis-hit countries, with offices in the UK, Canada and Australia."],
    ["What I did", "Campaign development on flagship campaigns for the Canadian and Australian offices, alongside the film With you, we can in Canada."]
  ]
},
{
  id: "penny-appeal-uk", group: "campaign",
  client: "Penny Appeal UK", title: "A Ramadan campaign",
  roles: ["Campaign development"],
  logo: "logos/penny-appeal.svg", tint: "ink", coverSub: "United Kingdom",
  status: "£85.8M in five years",
  line: "Campaign development on Penny Appeal UK's Ramadan campaign.",
  facts: [["Client", "Penny Appeal UK"], ["My role", "Campaign development"], ["Charity size", "£85.8M income over the last five years"]],
  story: [
    ["The client", "The UK home of Penny Appeal, an international aid charity working in 30 crisis-hit countries."],
    ["What I did", "Developed its Ramadan campaign: what it needed to say, and how each piece would say it."]
  ]
},
{
  id: "new-roots", group: "campaign",
  client: "New Roots", title: "Building the creative from the ground up", year: "2021",
  roles: ["Head of Creative", "Head of Curriculum", "Fundraising dinners"],
  tint: "warm",
  status: "Head of Creative",
  line: "Built a Birmingham community organisation's creative work from scratch, and led what its youth programmes teach.",
  url: "https://nwrts.co.uk/our-story/", urlLabel: "Visit nwrts.co.uk",
  facts: [["Client", "New Roots, Birmingham"], ["Year", "2021"], ["My role", "Head of Creative and Development, Head of Curriculum and Head of Youth"], ["Programmes", "Youth clubs and Open Circle, for up to 60 teenagers a week"]],
  story: [
    ["The client", "New Roots is a Birmingham community organisation, set up in 2014, running youth clubs and Open Circle, a weekly programme for up to 60 teenagers."],
    ["What I did", "Built its creative side from the ground up as Head of Creative and Development, and led the team behind its creative work and fundraising dinners."],
    ["Curriculum", "As Head of Curriculum, I shaped what its youth programmes teach. I also served as Head of Youth."]
  ]
},
{
  id: "latif-foundation", group: "web", featured: true,
  client: "The Latif Foundation", title: "A website that reads like a memorial",
  roles: ["Brand", "Website", "Copy"],
  img: "img/latif-foundation", logo: "logos/latif-foundation.svg",
  status: "Brand, site and copy",
  line: "The whole website and every word of it, for a memorial foundation.",
  url: "https://www.thelatiffoundation.org", urlLabel: "Visit thelatiffoundation.org",
  facts: [["Client", "The Latif Foundation"], ["Year", "2026"], ["My role", "Brand, website and all of the copy"], ["Live at", "thelatiffoundation.org"]],
  story: [
    ["The brief", "The foundation is in memory of Abdul Lateef Ayodele. The site had to raise support without forgetting that it is, first, a memorial."],
    ["What I did", "Wrote the whole website and all of its copy, and shaped how it feels. The opening became a dedication page, like the front of a book. Two loud buttons became one quiet link. Six versions, each calmer than the last."],
    ["What it taught me", "Restraint was the brief. Most of the improvement came from taking things away."]
  ]
},
{
  id: "iac-uk", group: "web",
  client: "IAC UK", title: "One voice across every programme",
  roles: ["Website copy"],
  logo: "logos/iac-uk.svg", tint: "iac", logoWhite: true, coverSub: "Birmingham, UK",
  status: "Full website copy",
  line: "The full website copy for International Aid Charity UK.",
  url: "https://iacharity.uk", urlLabel: "Visit iacharity.uk",
  facts: [["Client", "International Aid Charity UK"], ["My role", "Website copy"], ["Charity", "A Birmingham grant-maker working in Africa, Asia and Türkiye"]],
  story: [
    ["The brief", "A charity with several different programmes, each of which needed explaining, without the site sounding like several different charities."],
    ["What I did", "Wrote the full website copy, so every programme speaks in one consistent voice. The copy is mine; the design and build are not."]
  ]
},
{
  id: "soul-caravan", group: "web",
  client: "Soul Caravan Foundation", title: "Appeals for Kenya, told story first",
  roles: ["Website design", "Appeals"],
  img: "img/soul-caravan", logo: "logos/soul-caravan.svg",
  status: "Live",
  line: "An appeals website for a foundation supporting communities in Kenya.",
  url: "https://scwesbitef.vercel.app", urlLabel: "Visit the site",
  facts: [["Client", "Soul Caravan Foundation"], ["Years", "2025 to 2026"], ["My role", "Website design and build"]],
  story: [
    ["The brief", "The foundation runs appeals for water wells, education and orphan care in Kenya. Donors need to see the story, then the appeal, then a way to give."],
    ["What I did", "Designed and built a story-first site. A film opens the page, every appeal has its own page, and newsletter and fundraiser sign-ups keep supporters close."],
    ["The result", "Live, and running the foundation's appeals for Kenya."]
  ]
},
{
  id: "guardian-malaysia", group: "web",
  client: "Guardian Malaysia", title: "Free jiu-jitsu for 929 children",
  roles: ["Website design"],
  img: "img/guardian-malaysia", logo: "logos/guardian-malaysia.png",
  status: "929 children reached",
  line: "One page that shows a youth charity's impact and makes it easy to support.",
  url: "https://www.guardianmalaysia.org", urlLabel: "Visit guardianmalaysia.org",
  facts: [["Client", "Guardian Malaysia"], ["My role", "Website design and build"], ["Reach", "929 children"]],
  story: [
    ["The brief", "Guardian Malaysia gives children free jiu-jitsu scholarships. They needed one page that shows the impact and makes it easy to support them."],
    ["What I did", "Designed and built the page with real numbers and real photos only, no stock. Cut their social links down to the one channel they actually use."],
    ["The result", "Live on guardianmalaysia.org, showing 929 children reached."]
  ]
},
{
  id: "briggs-book-club", group: "web",
  client: "Briggs' Book Club", title: "A reading circle of 500+ members",
  roles: ["Brand", "Website", "Copy"],
  tint: "dark", word: "Briggs' Book Club",
  status: "500+ members",
  line: "A year of work on a pay-what-you-can reading circle's brand and website.",
  url: "https://www.briggsbook.club", urlLabel: "Visit briggsbook.club",
  facts: [["Client", "Briggs' Book Club"], ["Years", "2025 to 2026"], ["My role", "Brand, website and copy"], ["Members", "500+"]],
  story: [
    ["The brief", "A teacher runs a reading circle on classical texts, funded by monthly pay-what-you-can pledges. The site has to explain the circle, show what's being read now, and make joining easy."],
    ["What I did", "The page became six chapters you scroll through like a book. I rewrote the copy in plain, direct sentences, then led a rebrand, a design system and a members' replay library."],
    ["The result", "A circle of 500+ members."]
  ]
},
{
  id: "khaled-siddiq", group: "artist",
  client: "Khaled Siddiq", title: "A membership page led by film",
  roles: ["Landing page design"],
  img: "img/khaled-siddiq",
  status: "Live",
  line: "A video-first membership page for a UK artist.",
  url: "https://www.khaledsiddiq.com", urlLabel: "Visit khaledsiddiq.com",
  facts: [["Client", "Khaled Siddiq, UK artist"], ["Years", "2025 to 2026"], ["My role", "Landing page design"]],
  story: [
    ["The brief", "The artist wanted a single page that sells a membership: their film first, then one clear way to join."],
    ["What I did", "Let the film carry the page: no headline over it, one membership tier, and a single button straight to checkout."],
    ["The result", "Live at khaledsiddiq.com."]
  ]
}
];
