"use client"

export const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://example.com"; // https://v2ds.netlify.app

  return base_url;
};

const fetchData = async () => {
  const response = await fetch(checkEnvironment() + '/api/json', {
    method: "GET"
  })
  const data = await response.json();
  console.log(data);
}

export default function Home() {
  return (
    <div className="flex place-items-center justify-center mt-10">
      <p className="text-black dark:text-white">
        ✨Unlock the limitless potential of your developer portfolio with a highly customizable starter package – Craft Your Digital Showcase! 🏗
      </p>
    </div>
  )
}
