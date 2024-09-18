import {DocsFooter, DocsNavBar, DocsTripleCard, DocsHeaderWrapper, DocsHeaderLeft, DocsHeaderRight, DocsHeaderSubtitle, Button, DocsPageLayout } from '@cqcl/quantinuum-ui'

import Image from 'next/image'
import Link from 'next/link'
import { InquantoLogo } from './InquantoLogo';

const navConfig = {
  navTextLinks: [
    {
      title: 'Getting Started',
      href: '/intro.html',
      pathMatch: '/intro',
    },
    {
      title: 'User Guide',
      href: '/pipeline.html',
      pathMatch: '/pipeline',
    },
    {
      title: 'Tutorials',
      href: '/tutorials/sentence-input.html',
      pathMatch: '/tutorials/sentence-input',
    },
    {
      title: 'Code Examples',
      href: '/notebooks.html',
      pathMatch: '/notebooks',
    },
    {
      title: 'API Reference',
      href: '/root-api.html',
      pathMatch: '/root-api',
    },
  ],
  navProductName: '\u03BBambeq',
  navIconLinks: [
  ],
}

const footerConfig = {
  columns: [
    {
      title: "Solutions",
      items: [
        { name: "Nexus", href: "https://docs.quantinuum.com/nexus" },
        { name: "TKET", href: "https://docs.quantinuum.com/tket" },
        { name: "InQuanto", href: "https://docs.quantinuum.com/inquanto" },
        { name: "\u03BBambeq", href: "https://docs.quantinuum.com/lambeq" },
      ],
    },
    {
      title: "Hardware",
      items: [
        { name: "H-Series", href: "https://docs.quantinuum.com/h-series" },
        {
          name: "Get Access",
          href: "https://www.quantinuum.com/hardware#access",
        },
      ],
    },
    {
      title: "Quantinuum",
      items: [
        { name: "About", href: " https://www.quantinuum.com/about" },
        { name: "Research", href: "https://www.quantinuum.com/publications" },
        { name: "Events", href: "https://www.quantinuum.com/events" },
      ],
    },
  ],
  subtitle: "",
};

const cardConfig = [
  {
    "title": "Getting Started",
    "subtitle": "Learn the basics of \u03BBambeq and compositional models of meaning.",
    "links": [
        {
            "title": "\u03BBambeq pipeline",
            "description": "Understand how a sentence is converted into a quantum circuit.",
            "link": "/pipeline.html"
        },
        {
            "title": "\u03BBambeq use cases",
            "description": "Read about the various use cases on which \u03BBambeq can help you advance your research.",
            "link": "/use-cases.html"
        }
    ]
  },
  {
    "title": "Tutorials",
    "subtitle": "Jump into hands-on tutorials to learn how to put \u03BBambeq to work.",
    "links": [
        {
            "title": "Convert sentences into circuits",
            "description": "Overview on \u03BBambeq's stages, e.g. diagram creation, rewriting and parameterisation.",
            "link": "/tutorials/sentence-input.html"
        },
        {
            "title": "Training models",
            "description": "Learn how to use the provided state-of-the-art trainers to train your models for language processing tasks.",
            "link": "/training.html"
        }
    ]
  },
  {
    "title": "Advanced",
    "subtitle": "Specialist information for DIY \u03BBambeq users.",
    "links": [
        {
            "title": "Low-level \u03BBambeq",
            "description": "Delve into the mathematics and see how string diagrams fit to monoidal categories theory.",
            "link": "/advanced.html"
        },
        {
            "title": "Extending \u03BBambeq",
            "description": "Learn how to take advantage of the extensible nature of \u03BBambeq and how to add new features tailored to you work.",
            "link": "/tutorials/extend-lambeq.html"
        }
    ]
  }
]

export default function Home() {


  return <>
  <DocsNavBar activePath="/"  {...navConfig}  />
  <DocsPageLayout>
      <DocsHeaderWrapper>
        <DocsHeaderLeft>
        <InquantoLogo
         width={169} height={17}
          className="w-[24rem] md:w-[28rem] h-[3rem]"
        />
        <DocsHeaderSubtitle>Quantum Chemistry on Quantum Computers</DocsHeaderSubtitle>
        <div className="flex flex-col md:flex-row max-w-[32rem] gap-3">

        <Button
            variant="default"
            className="-mt-px flex-grow py-[1.38rem]"
            asChild
        >
            <a href="https://www.quantinuum.com/computationalchemistry/inquanto">
           Access Inquanto
            </a>
        </Button>
        <Button
            variant="secondary"
            className="-mt-px flex-grow py-[1.38rem] border-border border bg-background"
            asChild
        >
            <Link href="manual/howto.html">
     Getting Started
            </Link>
        </Button>
        </div>

        </DocsHeaderLeft>
        <DocsHeaderRight>
          <div className='mt-8'>
        <Image
      className="rounded-xl overflow-hidden dark:hidden brightness-110 -m-8 scale-[130%]"
      src="inquanto_molecule.avif"
      height={370}
      priority
      width={400}
      alt=""
    />
    </div>
        </DocsHeaderRight>
      </DocsHeaderWrapper>
      <DocsTripleCard cards={cardConfig}  imageComponent={Image}/>
    <DocsFooter {...footerConfig}/>
    </DocsPageLayout>
</>
  
}
