'use client'

import Link from 'next/link'
import Time from '../components/time'
import Image from 'next/image'
import img from '../viv0dd.webp'
import img2 from '../gemafawell.webp'
import dev from '../dev.webp'
import maintenance from '../maintenance.webp'
import seo from '../seo.webp'
import Greeting from './date'
import AnimatedRoutes from '../animatedRoutes'

export default function Page() {
  return (
    <AnimatedRoutes>
      <div className='mx-auto my-10 h-full'>
        <section suppressHydrationWarning={true} className="flex flex-col rounded-t-xl justify-center items-center bg-gradient-to-t from-slate-900 to-slate-950 text-gray-200 text-xl h-20">
          Welcome! The time is <Time />.
          <Greeting />
        </section>
        <section className="flex flex-row justify-around items-center bg-gradient-to-t from-purple-900 via-purple-950 to-purple-900 text-light text-xl h-20">
          <div className="flex flex-col justify-center text-center items-center font-semibold">
            <h2 className="text-2xl">Hey! We&apos;re Texas WebGems.</h2>
            <p className="text-lg">We&apos;re a web development and design firm based in Austin, TX.</p>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-gradient-to-br from-black via-gray-900 to-black text-white text-xl py-8">
          <h2 className="text-2xl pb-8 font-semibold">Our services include:</h2>
          <ul className="flex flex-row w-4/5 justify-around items-center">
            <li className="flex flex-col justify-center items-center">
              <Image priority={false} className='rounded-md' src={dev} alt="a computer desk is pictured; an all-in-one Macbook stands at center; an iPhone sits on a stand to the right. The MacBook has magenta backlighting." width={192} height={192} />
              <p className='my-2'>Web Development</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className='rounded-md' src={maintenance} alt="lines of JavaScript code" width={192} height={192} />
              <p className='my-2'>Website Maintenance</p>
            </li>
            <li className="flex flex-col justify-center items-center">
              <Image className='rounded-md' src={seo} alt="a notebook is positioned at a distance over a keyboard; the notebook is full of differing ideas centered around the phrase 'Amazon Optimizing.' Phrases include 'headline search ads,' 'sponsored product ads,' and 'amazon marketing services'. Two pencils are on top of the notebook, one with black color and one with red color." width={192} height={192} />
              <p className='my-2'>SEO Optimization</p>
            </li>
          </ul>
        </section>
        <section className="bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-400 text-black font-semibold text-xl py-8">
          <h2 className="text-2xl text-center pb-8" id='#portfolio'>Portfolio</h2>
          <section className="flex flex-col justify-center items-center w-4/5 m-auto">
            <div className='flex flex-col justify-center items-center text-center'>
              <Link className='text-xl text-purple-900' href="https://odd-thoughts.netlify.app/" target='_blank'>Odd Thoughts, a Blog by vivacious0dd (Next.js, TypeScript, MongoDB, Express, Node, Firebase, GCP)</Link>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <Link className='text-xl text-purple-900' href="https://healthdata.dshs.texas.gov" target='_blank'>Texas DSHS Health Data (C#, Razor, Bootstrap, jQuery, JSON)</Link>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <Link className='text-xl text-purple-900' href='https://www.gianinecarbonedesigns.com/' target='_blank'>Gianine Carbone Designs (Shopify Liquid, CSS, JavaScript)</Link>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <Link className='text-xl text-purple-900' href='https://www.dshs.texas.gov/center-health-statistics/advanced-analytics-team' target='_blank'>DSHS Advanced Analytics Page (Drupal)</Link>
            </div>
            <div className='flex flex-col justify-center items-center text-center'>
              <h3>I also built this site!</h3>
            </div>
          </section>
        </section>
        <section className="flex flex-col items-center justify-center bg-gradient-to-br from-purple-800 to-yellow-400 text-black text-xl py-8">
          <h2 className="text-2xl text-center text-white pb-4 font-semibold">Testimonials</h2>
          <div className="lg:w-3/5 col-span-2 sm:w-4/5 mx-auto">
            <blockquote className="flex flex-col justify-center items-center text-white text-xl p-4 rounded-xl bg-gradient-to-bl from-slate-800 to-yellow-500">
              <p>I found Gemini through a local online group, where someone had recommended her to help me with my website. I was really in a bind. I already had a website on one platform but needed to switch to a different platform that interfaces with Instagram. Not only did Gemini help me, but she did it so quickly and was in touch during the whole process. She also took the time to help me get hooked up to my Instagram page, which I&apos;d been unable to do with my previous website. It all looks great and she showed me how to add items to my website as they get made. She was very thorough. I&apos;m so so grateful. Thank you Gemini!</p>
              <cite className='font-semibold'>- <Link href="https://instagram.com/gianinecarbonedesigns" target='_blank' className='text-black underline'>Gianine Carbone</Link>, <Link href='https://www.gianinecarbonedesigns.com' className='text-black underline' target='_blank'>Gianine Carbone Designs</Link></cite>
            </blockquote>
          </div>
          <div className="lg:w-3/5 sm:w-4/5 my-6 mx-auto">
            <blockquote className="flex flex-col justify-center items-center bg-gradient-to-br from-purple-900 to-gray-500 text-white text-xl px-8 py-4 rounded-xl">
              <p>Texas WebGems did a fantastic job creating my blog. Communication was fast and easy, I was able to get clarify on where we were on the project within 24 hours. The owner, Gem was a delight to work with, I wound up wanting some extra features after the project was completed and they were quick to accommodate. I&apos;ll be using them again for future projects!</p>
              <cite className='font-semibold'>- <Link href="https://x.com/vivacious0dd" className='text-yellow-400 underline'>vivacious0dd</Link>, Odd Thoughts</cite>
            </blockquote>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center bg-purple-900 text-light text-xl h-40 rounded-b-xl font-semibold">
          <h2 className="text-2xl">Want to work with us?</h2>
          <p>Fill out our <Link href="/contact" className='text-yellow-400 underline'>contact form</Link>!</p>
        </section>
      </div>
    </AnimatedRoutes>
  )
}