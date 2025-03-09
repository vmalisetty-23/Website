export default function Contact() {
  return (
    <>
      <section className="flex justify-center items-center">
        <div className="container px-6 py-12 mx-auto text-center">
          <h1 className="mt-2 text-2xl font-mono text-black dark:text-rose-50 md:text-3xl">
            Get in touch
          </h1>

          <div className="flex flex-col items-center mt-10 space-y-8">
            <div className="flex flex-col items-center text-center">
              <span className="p-2 text-black rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-mono text-black dark:text-rose-50">Email</h2>
              <a
                href="https://outlook.office.com/mail/deeplink/compose/?mailtouri=mailto%3amalisetty.v%40northeastern.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-black dark:text-rose-50 hover:bg-white hover:text-black hover:rounded-3xl p-2 font-mono"
              >
                malisetty.v@northeastern.edu
              </a>
            </div>
            <div className="flex flex-col items-center text-center">
              <span className="p-3 text-black rounded-full bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>

              <h2 className="mt-4 text-lg font-mono text-black dark:text-rose-50">Phone</h2>
              <p className="mt-2 text-black dark:text-rose-50 font-mono">724-420-0353</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
