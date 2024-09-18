import {DocsFooter, DocsNavBar, DocsTripleCard, DocsHeaderWrapper, DocsHeaderLeft, DocsHeaderRight, DocsHeaderSubtitle, Button, DocsPageLayout } from '@cqcl/quantinuum-ui'

import Image from 'next/image'
import Link from 'next/link'
import { InquantoLogo } from './InquantoLogo';

const navConfig = {
  navTextLinks: [
    {
      title: 'Introduction',
      href: 'introduction/overview.html',
      pathMatch: 'somewhere',
    },
    {
      title: 'User Guide',
      href: 'manual/howto.html',
      pathMatch: 'somewhere',
    },
    {
      title: 'Tutorials',
      href: 'tutorials/tutorial_overview.html',
      pathMatch: 'somewhere',
    },
    {
      title: 'Examples',
      href: 'tutorials/examples_overview.html',
      pathMatch: 'somewhere',
    },
    {
      title: 'API',
      href: 'api/inquanto_api_intro.html',
      pathMatch: 'somewhere',
    },
  ],
  navProductName: 'InQuanto',
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
        { name: "lambeq", href: "https://docs.quantinuum.com/lambeq" },
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
    "title": "Chemical Specification",
    "subtitle": "Model your chemical system, including tools for embedding.",
    "image_link": "",
    icon: "",
    "image_description": "description",
    "links": [
      {
        "title": "Tutorial: InQuanto-PySCF",
        "description": "Model the mean-field of your molecular or periodic system, and perform convenient post-HF.",
        "link": "extensions/inquanto-pyscf.html"
      },
      {
        "title": "Tutorial: Embedding",
        "description": "Efficiently model your system using tools, such as FMO and DMET.",
        "link": "tutorials/tutorial_overview.html#fragmentation-tutorials"
      }
    ]
  },
  {
    "title": "Program construction",
    "subtitle": "Choose algorithms and representation of states to build circuits.",
    icon: '',
    "image_link": "",
    "image_description": "description",
    "links": [
      {
        "title": "Tutorial: Algorithms QPE + VQE",
        "description": "Prebuilt algorithms or simply construct your own.",
        "link": "tutorials/tutorial_overview.html#core-tutorials"
      },
      {
        "title": "Manual: Protocols and Computables",
        "description": "Easily build complex custom expressions representing fermionic systems.",
        "link": "manual/computables/evaluating_w_protocols.html"
      }
    ]
  },
  {
    "title": "Execution and analysis",
    "icon": "",
    "subtitle": "Run hybrid quantum-computational programs and generate chemical results.",
    "image_link": "",
    "image_description": "",
    "links": [
      {
        "title": "Tutorial: Platform agnostic",
        "description": "Seamlessly compile and run your chemistry protocols on many platforms, from SV and TN simulators to quantum hardware..",
        "link": "tutorials/tutorial_overview.html#backend-tutorials"
      },
      {
        "title": "Manual: Error reduction tools",
        "description": "Greatly improve noisy results with a range of error mitigation and detection tools, including SPAM, PMSV and Qermit..",
        "link": "manual/errmit.html"
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
