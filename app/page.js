// import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="container mx-auto flex justify-center text-5xl font-mono text-black dark:text-white">
          Vasishta Malisetty
        </h1>
        <p className="container mx-auto flex justify-center pt-2 pb-2 text-2xl font-mono text-black dark:text-white">
          Electrical & Computer Engineering @ Northeastern
        </p>
        <img
          className="rounded-full w-64 h-64 container mx-auto pt-2"
          src="/assets/images/Website-Photo.png"
        ></img>
      </div>
      <div className="p-5 container mx-auto max-w-2xl">
        <h2 className="text-3xl underline underline-offset-4 py-2 font-mono font-bold text-black dark:text-white">
          ABOUT
        </h2>
        <p className="text-lg font-mono pb-4 text-black dark:text-white">
          Hey! I&apos;m Vasishta Malisetty, an Electrical and Computer Engineering
          major at Northeastern University. Funny enough, I actually started
          college as a biochemistry major, but I quickly realized I wanted
          something more hands-on. That&apos;s when I made the switch to Electrical &
          Computer Engineering, and I&apos;ve been hooked ever since, exploring both
          the software and hardware sides of tech. Outside of work and school,
          you&apos;ll probably find me playing sports, trying new foods, or just
          hanging out with friends. I&apos;m super passionate about Product
          Development and always looking to meet new people!
        </p>
        <a
          href="/projects"
          className="flex w-full max-w-36 container mx-auto outline-solid bg-black-500 text:black hover:bg-black hover:text-white dark:hover:bg-white dark:text-white dark:hover:text-black font-bold p-2 rounded font-mono justify-center"
        >
          Portfolio
        </a>
      </div>

      <div className="p-5 container mx-auto max-w-2xl">
        <h2 className="text-3xl underline underline-offset-4 py-6 font-mono font-bold text-black dark:text-white">
          BIO
        </h2>

        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              Fall 2004
            </time>
            <h3 className="text-lg font-mono text-black dark:text-white">
              Born in Pittsburgh, PA
            </h3>
          </li>
          <li className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              Summer 2018
            </time>
            <h3 className="text-lg font-mono text-black dark:text-white">
              Moved to Hopkinton, MA
            </h3>
          </li>
          <li className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              Summer 2022
            </time>
            <h3 className="text-lg font-mono text-gray-900 dark:text-white">
              Graduated from Hopkinton High School
            </h3>
          </li>
          <li className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              Fall 2022
            </time>
            <h3 className="text-lg font-mono text-gray-900 dark:text-white">
              Started attending Northeastern University
            </h3>
          </li>
          <li className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              Summer 2023
            </time>
            <h3 className="text-lg font-mono text-gray-900 dark:text-white">
              Data Security Intern @ Rite Aid
            </h3>
          </li>
          <li className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              Fall 2023
            </time>
            <h3 className="text-lg font-mono text-gray-900 dark:text-white">
              Hardware Engineer @ Generate Product Development Studio
            </h3>
          </li>
          <li className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              Spring 2024
            </time>
            <h3 className="text-lg font-mono text-gray-900 dark:text-white">
              Hardware Test Engineering Co-op @ Philips
            </h3>
          </li>
          <li className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              Summer 2024
            </time>
            <h3 className="text-lg font-mono text-gray-900 dark:text-white">
              Systems Engineering Intern @ Raytheon
            </h3>
          </li>
          <li className="mb-5 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              Fall 2024
            </time>
            <h3 className="text-lg font-mono text-gray-900 dark:text-white">
              Lead Electrical Engineer @ Generate Product Development Studio
            </h3>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-mono leading-none text-gray-400 dark:text-gray-500">
              PRESENT
            </time>
            <h3 className="text-lg font-mono text-gray-900 dark:text-white">
              Hardware Development Engineering Co-op @ Amazon Robotics
            </h3>
          </li>
        </ol>
      </div>

      <div className="p-5 container mx-auto max-w-2xl">
        <h3 className="text-3xl underline underline-offset-4 py-2 font-mono font-bold text-black dark:text-white">
          HOBBIES
        </h3>
        <p className="text-lg font-mono text-black dark:text-white">
          Pittsburgh Steelers, Chelsea FC, Chess, Basketball, Video Games, Board
          Games, Clash of Clans
        </p>
      </div>

      <div className="p-5 container mx-auto max-w-2xl">
        <h3 className="text-3xl underline underline-offset-4 py-2 font-mono font-bold text-black dark:text-white">
          LINKS
        </h3>
        <a
          href="/assets/files/Vasishta-Malisetty-Resume-2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-3 text-base font-mono text-black dark:hover:outline-solid dark:text-white rounded-lg hover:outline-solid"
        >
          <svg
            className="w-6 h-6 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M11 4.717c-2.286-.58-4.16-.756-7.045-.71A1.99 1.99 0 0 0 2 6v11c0 1.133.934 2.022 2.044 2.007 2.759-.038 4.5.16 6.956.791V4.717Zm2 15.081c2.456-.631 4.198-.829 6.956-.791A2.013 2.013 0 0 0 22 16.999V6a1.99 1.99 0 0 0-1.955-1.993c-2.885-.046-4.76.13-7.045.71v15.081Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="w-full px-2 text-black dark:text-white">Resume</span>
        </a>
        <a
          href="https://www.linkedin.com/in/vmalisetty/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-3 text-base font-mono text-black dark:hover:outline-solid dark:text-white rounded-lg hover:outline-solid"
        >
          <svg
            className="w-6 h-6 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z"
              clipRule="evenodd"
            />
            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
          </svg>
          <span className="w-full px-2 text-black dark:text-white">LinkedIn</span>
        </a>
        <a
          href="https://github.com/vmalisetty-23"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-3 text-base font-mono text-black dark:hover:outline-solid dark:text-white rounded-lg hover:outline-solid"
        >
          <svg
            className="w-6 h-6 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="w-full px-2 text-black dark:text-white">GitHub</span>
        </a>
        <a
          href="https://www.instagram.com/vmalisetty_23/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center p-3 text-base font-mono text-black dark:hover:outline-solid dark:text-white rounded-lg hover:outline-solid"
        >
          <svg
            className="w-6 h-6 text-black dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              clipRule="evenodd"
            />
          </svg>
          <span className="w-full px-2 text-black dark:text-white">Instagram</span>
        </a>
      </div>
    </>
  );
}
