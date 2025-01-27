import {DocsFooter, DocsNavBar, DocsTripleCard, DocsHeaderWrapper, DocsHeaderLeft, DocsHeaderRight, DocsHeaderSubtitle, Button, DocsPageLayout, CodeCopy, Card, CardHeader, CardTitle, CardDescription, DocsHelpCard } from '@cqcl/quantinuum-ui'

import { FaGithub, FaDiscord } from 'react-icons/fa'
import { LifeBuoyIcon, BookIcon } from "lucide-react";

import Image from 'next/image'
import NextLink from 'next/link'
import { LambeqLogo } from './LambeqLogo';

const cardConfig = [
  {
    "title": "Getting Started",
    "subtitle": "Learn the basics of \u03BBambeq and compositional models of meaning.",
    icon: "",
    "image_link": "",
    "image_description": "",
    "links": [
        {
            "title": "\u03BBambeq pipeline",
            "description": "Understand how a sentence is converted into a quantum circuit.",
            "link": "guide/pipeline.html"
        },
        {
            "title": "\u03BBambeq use cases",
            "description": "Read about the various use cases on which \u03BBambeq can help you advance your research.",
            "link": "guide/ml_use-cases.html"
        }
    ]
  },
  {
    "title": "Tutorials",
    "subtitle": "Jump into hands-on tutorials to learn how to put \u03BBambeq to work.",
    icon: "",
    "image_link": "",
    "image_description": "",
    "links": [
        {
            "title": "Convert sentences into circuits",
            "description": "Overview on \u03BBambeq's stages, e.g. diagram creation, rewriting and parameterisation.",
            "link": "tutorials/sentence-input.html"
        },
        {
            "title": "Training models",
            "description": "Learn how to use the provided state-of-the-art trainers to train your models for language processing tasks.",
            "link": "training.html"
        }
    ]
  },
  {
    "title": "Advanced",
    "subtitle": "Specialist information for DIY \u03BBambeq users.",
    icon: "",
    "image_link": "",
    "image_description": "",
    "links": [
        {
            "title": "Low-level \u03BBambeq",
            "description": "Delve into the mathematics and see how string diagrams fit to monoidal categories theory.",
            "link": "low-level.html"
        },
        {
            "title": "Extending \u03BBambeq",
            "description": "Learn how to take advantage of the extensible nature of \u03BBambeq and how to add new features tailored to you work.",
            "link": "tutorials/extend-lambeq.html"
        }
    ]
  }
]


const helpSectionConfig = {
  columns: [{
    title: "Get in touch for support",
    icon_description: "Support Icon",
    icon: LifeBuoyIcon,
    link: "https://www.quantinuum.com/contact/docs",
    description: "Need help? Contact our support team here",

  },
  {
    title: "Publications",
    icon_description: "Publications Icon",
    icon: BookIcon,
    link: "https://www.quantinuum.com/compositional-intelligence",
    description: "Find our latest research publications here",
  }],
};

export default function Home() {


  return <>
  <DocsNavBar activePath="/"  />
  <DocsPageLayout>
    <DocsHeaderWrapper>
      <DocsHeaderLeft>
        <LambeqLogo
         
          className="w-[16rem] md:w-[22rem] h-[3rem]"
        />
        <DocsHeaderSubtitle>Natural Language Processing on Quantum Computers</DocsHeaderSubtitle>
        <div className="flex-grow mt-4 w-[25rem] gap-3">
          <div className="dark:text-foreground text-background w-full flex  items-center justify-center self-start whitespace-nowrap rounded bg-gradient-to-r from-zinc-600 to-slate-600  py-0.5 pl-4 text-center text-sm font-semibold  dark:from-zinc-600 dark:to-slate-600">
            <CodeCopy textToCopy='pip install lambeq' className='font-mono'/>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <Button 
              variant="secondary"
              className="-mt-px flex-grow py-[1.38rem] border-border border bg-background"
              asChild
            >
              <NextLink href="https://github.com/CQCL/lambeq/">
                <FaGithub className="mr-2 h-6 w-6"></FaGithub>
                GitHub
              </NextLink>
            </Button>
            <Button 
              variant="secondary"
              className="-mt-px flex-grow py-[1.38rem] border-border border bg-background"
              asChild
            >
              <NextLink href="https://discord.gg/TA63zghMrC">
                <FaDiscord className="mr-2 h-6 w-6"></FaDiscord>
                Discord
              </NextLink>
            </Button>
          </div>
        </div>
      </DocsHeaderLeft>
      <DocsHeaderRight>
        <div className='mt-0'>
          <Image
          className="rounded-xl overflow-hidden dark:hidden brightness-110 ml-8"
          src="lambeq_cover.png"
          height={880 * 1.1}
          priority
          width={590 * 1.1}
          alt=""
          />
        </div>
      </DocsHeaderRight>
    </DocsHeaderWrapper>
    <DocsTripleCard cards={cardConfig}  imageComponent={Image} linkComponent={NextLink}/>
    <DocsHelpCard {...helpSectionConfig} />
    <DocsFooter/>
  </DocsPageLayout>
</>
  
}
