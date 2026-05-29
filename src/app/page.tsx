'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Hand,
  Instagram,
  MessageCircle,
  PackageCheck,
  Sparkles,
  Star
} from 'lucide-react';

import { cn } from '@/lib/cn';

const whatsappUrl = 'https://wa.me/918796345554';
const instagramUrl = 'https://www.instagram.com/soleshifu';

const navItems = ['Philosophy', 'Transformations', 'Services', 'Process', 'Reviews'];

const transformations = [
  {
    title: 'Deep Clean',
    before: 'City wear, dust, dull midsoles.',
    after: 'Fresh texture, revived panels, collector-grade finish.',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=88'
  },
  {
    title: 'Sole Whitening',
    before: 'Oxidized edges and yellowed rubber.',
    after: 'Crisp soles restored with controlled brightening.',
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1400&q=88'
  },
  {
    title: 'Suede Restoration',
    before: 'Flattened nap and uneven marks.',
    after: 'Brushed softness, tonal balance, premium hand-feel.',
    image:
      'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=1400&q=88'
  },
  {
    title: 'Waterproofing Shield',
    before: 'Unprotected luxury materials.',
    after: 'Invisible defense for rain, spills, and daily movement.',
    image:
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1400&q=88'
  }
];

const services = [
  {
    name: 'Quick Refresh',
    price: '₹399',
    note: 'per pair',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1000&q=86',
    features: ['Light surface cleaning', 'Dust & minor dirt removal', 'No deep stain treatment']
  },
  {
    name: 'Basic Clean',
    price: '₹599',
    note: 'per pair',
    image: 'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=1000&q=86',
    features: ['Exterior & midsole cleaning', 'Lace wash', 'Odour neutralisation']
  },
  {
    name: 'Deep Clean',
    price: '₹799',
    note: 'per pair',
    badge: 'Most Chosen',
    image: 'https://images.unsplash.com/photo-1543508282-6319a3e2621f?auto=format&fit=crop&w=1000&q=86',
    features: ['Deep stain treatment', 'Midsole whitening', 'Insole surface clean']
  },
  {
    name: 'Deep Clean Plus',
    price: '₹999',
    note: 'per pair',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=86',
    features: ['Everything in Deep Clean', 'Hand detailing', 'Extra finishing care']
  },
  {
    name: 'Premium Restore',
    price: '₹1,399',
    note: 'per pair',
    image: 'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1000&q=86',
    features: ['White & luxury shoes', 'Suede / nubuck care', 'Restoration treatment']
  }
];

const process = [
  ['Inspect', 'Every pair begins with material review, condition notes, and honest restoration expectations.'],
  ['Cleanse', 'Surface, lace, sole, and interior care are selected according to the shoe and its wear pattern.'],
  ['Restore', 'Stains, midsoles, suede, nubuck, whites, and luxury materials receive patient hand attention.'],
  ['Return', 'The pair is finished, checked, and returned with the quiet confidence of proper care.']
];

const testimonials = [
  [
    'Rohan M., Noida',
    'Craftsmanship you can actually see',
    'I’ve tried shoe cleaning services before, but Sole Shifu feels different. They didn’t rush my sneakers or overpromise results. The cleaning was detailed, careful, and honest.'
  ],
  [
    'Ankit S., Delhi NCR',
    'Finally, someone who respects sneakers',
    'You can tell Sole Shifu understands shoes. They inspected my pair before starting, explained what could and couldn’t be fixed, and delivered exactly that.'
  ],
  [
    'Neha K., Noida',
    'Worth it for premium pairs',
    'I was nervous handing over an older pair that had sentimental value. Sole Shifu handled it with care and transparency. That honesty is rare.'
  ]
];

const socialImages = [
  'https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1465453869711-7e174808ace9?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1605408499391-6368c628ef42?auto=format&fit=crop&w=900&q=85',
  'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=900&q=85'
];

const heroValues = [
  {
    title: 'Pickup & Delivery',
    copy: 'Convenient, contactless service.',
    Icon: PackageCheck
  },
  {
    title: 'Expert Craftsmanship',
    copy: 'Trained hands. Premium materials.',
    Icon: Hand
  },
  {
    title: 'Results That Last',
    copy: 'Restored to look, feel, and perform.',
    Icon: Sparkles
  }
];

const sectionFrame =
  'relative px-5 py-20 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/[0.08] before:to-transparent after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-32 after:bg-gradient-to-b after:from-white/[0.018] after:to-transparent sm:px-8 sm:py-24 lg:py-32';

const compactSectionFrame =
  'relative px-5 py-16 before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/[0.08] before:to-transparent after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-28 after:bg-gradient-to-b after:from-white/[0.016] after:to-transparent sm:px-8 sm:py-20 lg:py-24';

function Logo({ className }: { className?: string }) {
  return (
    <Link href="#home" aria-label="Sole Shifu home" className={cn('group inline-flex items-center gap-3', className)}>
      <span className="relative block size-12 opacity-[0.92] transition duration-500 group-hover:opacity-100 sm:size-14">
        <Image
          src="/soleshifu-logo-official.png"
          alt=""
          fill
          priority
          className="object-contain"
          sizes="56px"
        />
      </span>
      <span className="flex flex-col leading-none max-sm:hidden">
        <span className="text-[11px] font-medium uppercase tracking-[0.34em] text-silver-100">Sole Shifu</span>
        <span className="mt-1.5 text-[9px] uppercase tracking-[0.3em] text-silver-300/[0.45]">Premium Shoe Care</span>
      </span>
    </Link>
  );
}

function SectionIntro({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-120px' }}
      transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.34em] text-silver-300/[0.45]">{eyebrow}</p>
      <h2 className="mt-6 text-4xl font-medium leading-[1.04] tracking-[-0.01em] text-silver-100 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {copy ? <p className="mt-7 text-base leading-8 text-silver-300/[0.58] sm:text-lg">{copy}</p> : null}
    </motion.div>
  );
}

function CTAButton({ href = whatsappUrl, children }: { href?: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group inline-flex h-10 items-center justify-center gap-2 rounded-[0.7rem] bg-silver-100 px-5 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-950 shadow-[0_18px_60px_rgba(235,233,228,0.08)] transition duration-700 hover:-translate-y-px hover:bg-white"
    >
      {children}
      <ArrowRight className="size-4 transition duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex h-10 items-center justify-center rounded-[0.7rem] border border-silver-100/[0.12] bg-white/[0.018] px-5 text-[12px] font-medium uppercase tracking-[0.14em] text-silver-100/[0.78] backdrop-blur transition duration-700 hover:-translate-y-px hover:border-silver-100/[0.24] hover:bg-white/[0.04]"
    >
      {children}
    </Link>
  );
}

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 92]);
  const heroOpacity = useTransform(scrollY, [0, 760], [1, 0.42]);

  return (
    <main id="home" className="overflow-hidden bg-ink-950 text-silver-100">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.055] bg-ink-950/[0.42] backdrop-blur-2xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-[4.5rem] sm:px-8">
          <Logo />
          <div className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[11px] font-medium uppercase tracking-[0.24em] text-silver-300/[0.48] transition duration-500 hover:text-silver-100"
              >
                {item}
              </Link>
            ))}
          </div>
          <Link
            href={whatsappUrl}
            className="hidden rounded-full border border-silver-100/[0.12] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-silver-100/[0.72] transition duration-500 hover:border-silver-100/[0.24] hover:bg-white/[0.04] sm:inline-flex"
          >
            Book
          </Link>
        </div>
      </nav>

      <section className="relative min-h-screen overflow-hidden px-5 pt-28 sm:px-8 lg:pt-32">
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
          <Image
            src="/sole-shifu-hero-cinematic.webp"
            alt="Premium shoe in cinematic studio light"
            fill
            priority
            className="object-cover object-[58%_50%] opacity-[0.82] saturate-[0.78] contrast-[0.96] max-sm:object-[62%_48%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_63%_42%,transparent,rgba(7,7,7,0.18)_38%,rgba(7,7,7,0.72)_92%)]" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink-950/88 via-ink-950/42 to-ink-950/10" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink-950 via-ink-950/62 to-transparent" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl pt-10 sm:pt-14 lg:pt-16"
          >
            <p className="mb-7 text-[10px] font-medium uppercase tracking-[0.42em] text-silver-300/[0.5] sm:text-[11px]">
              Premium Shoe Care / The restored silhouette
            </p>
            <h1 className="max-w-4xl text-[3.2rem] font-medium leading-[1.06] tracking-[-0.018em] text-silver-100 sm:text-6xl lg:text-[6.7rem]">
              Your Shoes Deserve Better.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-silver-300/[0.68] sm:text-lg">
              Premium shoe care and restoration crafted for people who care about every step.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <CTAButton>Book on WhatsApp</CTAButton>
              <GhostButton href="#transformations">View Transformations</GhostButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1 }}
            className="grid gap-0 border-y border-white/[0.075] bg-black/[0.14] backdrop-blur-md sm:grid-cols-3"
          >
            {heroValues.map(({ title, copy, Icon }) => (
              <div
                key={title}
                className="flex gap-4 border-b border-white/[0.06] px-1 py-5 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0"
              >
                <Icon className="mt-1 size-4 shrink-0 text-silver-100/[0.62]" strokeWidth={1.5} />
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-silver-100/[0.76]">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-silver-300/[0.54]">{copy}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="philosophy" className={sectionFrame}>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.05 }}
            className="space-y-12"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-silver-300/[0.38]">
              The Philosophy
            </p>
            <div className="hidden max-w-xs border-y border-white/[0.075] py-8 lg:block">
              {['Material respect', 'Doorstep convenience', 'No rushed treatment'].map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-white/[0.055] py-4 last:border-b-0">
                  <span className="text-[11px] uppercase tracking-[0.24em] text-silver-300/[0.42]">{item}</span>
                  <span className="h-px w-8 bg-silver-300/[0.28]" />
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.012em] text-silver-100 sm:text-5xl lg:text-6xl">
              A shoe is never just cleaned. It is prepared for its next appearance.
            </h2>
            <p className="mt-9 max-w-2xl text-base leading-8 text-silver-300/[0.58] sm:text-lg">
              Sole Shifu is built for sneaker people, collectors, stylists, founders, and anyone who understands that
              footwear carries posture. This is material care with a fashion-house eye.
            </p>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {[
                ['01', 'Every pair is inspected before treatment.'],
                ['02', 'The method follows the material, not a fixed script.'],
                ['03', 'The goal is revival without erasing character.']
              ].map(([number, copy]) => (
                <div key={number} className="border-t border-white/[0.075] pt-5">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-silver-300/[0.34]">{number}</p>
                  <p className="mt-4 text-sm leading-7 text-silver-300/[0.56]">{copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 py-6 sm:px-8 lg:py-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-ink-950 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto grid min-h-[64vh] max-w-7xl overflow-hidden border-y border-white/[0.075] lg:grid-cols-[0.92fr_1.08fr]"
        >
          <div className="relative min-h-[42vh] lg:min-h-full">
            <Image
              src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?auto=format&fit=crop&w=1400&q=90"
              alt="Luxury sneaker campaign detail"
              fill
              className="object-cover grayscale saturate-[0.28] contrast-[0.9] opacity-75"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/82 via-transparent to-transparent" />
          </div>
          <div className="flex flex-col justify-between bg-white/[0.018] p-7 sm:p-10 lg:p-16">
            <p className="text-[11px] uppercase tracking-[0.36em] text-silver-300/[0.34]">Lookbook / 2026</p>
            <div className="mt-14 lg:mt-16">
              <h2 className="max-w-2xl text-4xl font-medium leading-[1.03] tracking-[-0.012em] text-silver-100 sm:text-6xl">
                Restored for the room before you enter it.
              </h2>
              <p className="mt-9 max-w-lg text-base leading-8 text-silver-300/[0.56]">
                A cinematic care ritual for leather, suede, mesh, canvas, rubber, and the quiet confidence of a pair
                that looks intentional again.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-3 border-t border-white/[0.075] pt-6">
              {['Leather', 'Suede', 'Rubber'].map((item) => (
                <p key={item} className="text-[11px] uppercase tracking-[0.28em] text-silver-300/[0.38]">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section id="transformations" className={sectionFrame}>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Before / After"
            title="The transformation edit."
            copy="A visual study in shape, texture, contrast, and the difference careful hands can make."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16">
            {transformations.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.05, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group relative min-h-[440px] overflow-hidden border border-white/[0.075] bg-white/[0.018] p-6 shadow-soft transition-colors duration-700 hover:border-white/[0.14] lg:min-h-[480px]"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} sneaker care treatment`}
                  fill
                  className={cn(
                    'object-cover opacity-[0.48] contrast-[0.9] transition duration-[1400ms] group-hover:scale-[1.035] group-hover:opacity-[0.66]',
                    index % 2 === 0
                      ? 'grayscale-[0.45] saturate-[0.52] group-hover:grayscale-[0.18] group-hover:saturate-[0.72]'
                      : 'grayscale-[0.12] saturate-[0.62] group-hover:grayscale-0 group-hover:saturate-[0.82]'
                  )}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/62 to-ink-950/8" />
                <div className="relative z-10 flex h-full min-h-[390px] flex-col justify-between lg:min-h-[430px]">
                  <p className="inline-flex w-fit border border-white/10 bg-white/[0.035] px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-silver-300/[0.54]">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="text-3xl font-medium tracking-[-0.01em] text-silver-100 sm:text-4xl">{item.title}</h3>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="border-t border-white/[0.075] bg-black/15 p-4 backdrop-blur">
                      <p className="text-[11px] uppercase tracking-[0.26em] text-silver-300/[0.34]">Before</p>
                      <p className="mt-3 text-sm leading-6 text-silver-300/[0.58]">{item.before}</p>
                    </div>
                    <div className="border-t border-white/[0.12] bg-white/[0.055] p-4 backdrop-blur">
                      <p className="text-[11px] uppercase tracking-[0.26em] text-silver-300/[0.44]">After</p>
                      <p className="mt-3 text-sm leading-6 text-silver-100/[0.72]">{item.after}</p>
                    </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className={sectionFrame}>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Services"
            title="Choose your care ritual."
            copy="Professional shoe cleaning, selected by condition, material, and the level of restoration your pair deserves."
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:mt-16 xl:grid-cols-5">
            {services.map((service, index) => (
              <motion.article
                key={service.name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="group relative overflow-hidden border border-white/[0.075] bg-white/[0.018] transition-colors duration-700 hover:border-white/[0.14] hover:bg-white/[0.026] xl:min-h-[31rem]"
              >
                  <div className="relative h-48 overflow-hidden border-b border-white/[0.065] xl:h-40">
                  <Image
                    src={service.image}
                    alt={`${service.name} service`}
                    fill
                    className={cn(
                      'object-cover opacity-[0.52] contrast-[0.9] transition duration-[1400ms] group-hover:scale-[1.035] group-hover:opacity-[0.68]',
                      index === 2 || index === 4 ? 'grayscale-[0.18] saturate-[0.7]' : 'grayscale-[0.55] saturate-[0.45]'
                    )}
                    sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
                  {service.badge ? (
                    <span className="absolute left-4 top-4 border border-white/[0.12] bg-black/[0.28] px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-silver-100/[0.76] backdrop-blur">
                      {service.badge}
                    </span>
                  ) : null}
                </div>
                <div className="flex min-h-[17.5rem] flex-col p-6">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.28em] text-silver-300/[0.34]">0{index + 1}</p>
                    <h3 className="mt-5 text-2xl font-medium tracking-[-0.01em] text-silver-100">{service.name}</h3>
                    <div className="mt-5 flex items-end gap-2">
                      <p className="text-4xl font-medium tracking-[-0.02em] text-silver-100">{service.price}</p>
                      <p className="pb-1 text-xs uppercase tracking-[0.22em] text-silver-300/[0.42]">{service.note}</p>
                    </div>
                  </div>
                  <ul className="mt-7 space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex gap-3 text-sm leading-6 text-silver-300/[0.58]">
                        <span className="mt-2 h-px w-4 shrink-0 bg-silver-300/[0.32]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={whatsappUrl}
                    className="mt-auto inline-flex pt-7 text-[11px] font-medium uppercase tracking-[0.24em] text-silver-100/[0.68] transition duration-500 hover:text-silver-100"
                  >
                    Select service
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          <p className="mt-8 text-center text-xs leading-6 text-silver-300/[0.46]">
            Free pickup on Deep Clean & above. ₹99 pickup fee on lower services. Above rates are excluding taxes.
          </p>
        </div>
      </section>

      <section id="process" className={sectionFrame}>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="The Shifu Cycle"
            title="A disciplined care journey."
            copy="From doorstep pickup to final delivery, every pair moves through a patient sequence built around precision, honesty, and respect for materials."
          />
          <div className="mt-14 grid gap-6 lg:mt-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative min-h-[24rem] overflow-hidden border border-white/[0.075] lg:min-h-[28rem]"
            >
              <Image
                src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=1400&q=88"
                alt="Sole Shifu shoe care process"
                fill
                className="object-cover opacity-[0.54] grayscale-[0.35] saturate-[0.52] contrast-[0.9]"
                sizes="(min-width: 1024px) 45vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/46 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[11px] uppercase tracking-[0.34em] text-silver-300/[0.4]">Doorstep to return</p>
                <p className="mt-5 max-w-sm text-2xl font-light leading-9 text-silver-100/[0.82]">
                  Care should feel invisible until the pair comes back changed.
                </p>
              </div>
            </motion.div>
            <div className="grid gap-px overflow-hidden border border-white/[0.075] bg-white/[0.06] sm:grid-cols-2">
            {process.map(([title, copy], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.045, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-ink-950/95 p-7 transition duration-700 hover:bg-white/[0.025] sm:p-9"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-silver-300/[0.34]">Step 0{index + 1}</p>
                <h3 className="mt-14 text-3xl font-medium tracking-[-0.01em] text-silver-100 lg:mt-16">{title}</h3>
                <p className="mt-5 text-sm leading-7 text-silver-300/[0.54]">{copy}</p>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className={compactSectionFrame}>
        <div className="relative z-10 mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="What Our Customers Say"
            title="Trusted by people who care about their pairs."
            copy="Real notes from customers who wanted careful work, honest expectations, and shoes returned with confidence."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-14">
            {testimonials.map(([name, title, quote], index) => (
              <motion.figure
                key={name}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/[0.075] bg-white/[0.018] p-7 transition duration-700 hover:border-white/[0.14] hover:bg-white/[0.026]"
              >
                <div className="flex gap-1 text-silver-100/[0.78]" aria-label="Five star rating">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="size-4 fill-current stroke-[1.5]" />
                  ))}
                </div>
                <p className="mt-8 text-xl font-medium leading-8 tracking-[-0.01em] text-silver-100">{title}</p>
                <blockquote className="mt-5 text-base font-light leading-8 tracking-[-0.005em] text-silver-300/[0.68]">
                  <span aria-hidden="true">&ldquo;</span>
                  {quote}
                  <span aria-hidden="true">&rdquo;</span>
                </blockquote>
                <figcaption className="mt-10 text-[11px] uppercase tracking-[0.28em] text-silver-300/[0.38]">{name}</figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className={compactSectionFrame}>
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionIntro eyebrow="Social" title="Studio frames." />
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-silver-300/50 transition duration-500 hover:text-silver-100"
            >
              <Instagram className="size-4" />
              Instagram
            </Link>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 lg:mt-14">
            {socialImages.map((image, index) => (
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.035, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'group relative aspect-[4/5] overflow-hidden border border-white/[0.075] bg-white/[0.025]',
                  index === 0 || index === 5 ? 'md:aspect-auto md:row-span-2' : ''
                )}
              >
                <Image
                  src={image}
                  alt="Sole Shifu social sneaker care placeholder"
                  fill
                  className={cn(
                    'object-cover opacity-[0.56] contrast-[0.9] transition duration-1000 group-hover:scale-[1.025] group-hover:opacity-[0.74]',
                    index % 3 === 0 ? 'grayscale-[0.18] saturate-[0.68]' : 'grayscale-[0.55] saturate-[0.42]'
                  )}
                  sizes="(min-width: 768px) 33vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/[0.58] to-transparent opacity-70" />
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 bg-black/[0.22] px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-silver-100/[0.62] backdrop-blur">
                  <Check className="size-3" />
                  Archive
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/[0.014] to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 mx-auto max-w-7xl overflow-hidden border border-white/[0.075] bg-white/[0.025] px-6 py-20 text-center shadow-soft sm:px-10 lg:py-28"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(235,233,228,0.09),transparent_42%)]" />
          <div className="relative z-10">
            <p className="text-[11px] font-medium uppercase tracking-[0.36em] text-silver-300/[0.42]">Private booking</p>
            <h2 className="mt-7 text-5xl font-medium leading-[1.02] tracking-[-0.012em] text-silver-100 sm:text-7xl lg:text-8xl">
              We Clean. You Shine.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-silver-300/[0.58]">
              Premium care for the shoes that carry your story, handled with precision from pickup to return.
            </p>
            <div className="mt-10">
              <CTAButton>Book on WhatsApp</CTAButton>
            </div>
          </div>
        </motion.div>
      </section>

      <footer className="border-t border-white/[0.075] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Logo />
          <div className="flex flex-col gap-3 text-sm text-silver-300/[0.42] sm:flex-row sm:items-center sm:gap-8">
            <span>Premium Shoe Care</span>
            <Link href={whatsappUrl} className="transition duration-500 hover:text-silver-100">
              +91 87963 45554
            </Link>
            <span>&copy; 2026 Sole Shifu</span>
          </div>
        </div>
      </footer>

      <Link
        href={whatsappUrl}
        aria-label="Book Sole Shifu on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full border border-silver-100/[0.12] bg-silver-100 text-ink-950 shadow-[0_18px_60px_rgba(235,233,228,0.12)] transition duration-500 hover:-translate-y-px hover:bg-white"
      >
        <MessageCircle className="size-6" />
      </Link>
    </main>
  );
}
