'use client'
import parseHTML from "@/lib/html-parser";
import { convertMarkdownToHtml, checkEnvironment, cn } from '@/lib/utils';
import { Montserrat } from "next/font/google";
import { useEffect, useState } from 'react';

const mont = Montserrat({ subsets: ['latin'] })

export default function Home() {
  const [heroSection, setHeroSection] = useState<string>("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(checkEnvironment() + '/api/json', {
          method: "GET"
        })
        return await response.json();
      } catch (error) {
        return error;
      }
    }
    fetchData().then((data) => setHeroSection(convertMarkdownToHtml(data.markdownContent))).catch(err => console.log(err));
  }, [])
  return (
    <div className={cn("flex flex-col justify-center text-center mt-10", mont.className)} >
      {heroSection.length !== 0 && parseHTML(heroSection)}
    </div >
  )
}
