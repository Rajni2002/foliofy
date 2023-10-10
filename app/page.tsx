'use client'
import parseHTML from "@/lib/html-parser";
import { convertMarkdownToHtml, checkEnvironment, cn } from '@/lib/utils';
import { Montserrat } from "next/font/google";
import { useEffect, useState } from 'react';

// export async function getStaticProps() {
//   // Specify the path to your Markdown file
//   const markdownFilePath = path.join(process.cwd(), 'example.md');

//   try {
//     // Read the contents of the Markdown file as a string
//     const markdownContent = fs.readFileSync(markdownFilePath, 'utf-8');

//     // Pass the markdownContent as a prop to your component
//     return {
//       props: {
//         markdownContent,
//       },
//     };
//   } catch (error) {
//     console.error('Error reading Markdown file:', error);
//     return {
//       props: {
//         markdownContent: '',
//       },
//     };
//   }
// }

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
