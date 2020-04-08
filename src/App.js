import React from 'react';

function App() {
  return (
    <div className="App">
      <div className="p-5 pb-0">
      <div className="header flex h-16 justify-between">
        <div className="text-2xl">Chetan Raj</div>
        <div className="flex px-6">
          <a
            className="uppercase pt-1"
            target="_blank"
            rel="noopener noreferrer"
            href="https://chetanraj.in/blog"
          >
            Blog
          </a>
        </div>
      </div>
      <div className="bg"></div>
      <div className="container flex flex-col justify-center h-80">
        <div className="tagline text-base opacity-50">DESIGNER & DEVELOPER</div>
        <div className="heroline text-2xl">
          Web Designer & Web Developer,{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/javascriptessentials/"
            className="underline"
          >
            Tech Instagrammer
          </a>
          ,<br /> Music, Movies, Gadgets, Iron Man, Batman
        </div>
        <div className="tagline text-base opacity-50 font-light">
          Currently Senior Web Developer at{" "}
          <a href="https://active.ai/">Active.ai</a>
        </div>
      </div>
      <div className="footer flex h-16 justify-between">
        <div className="text-base opacity-50 pt-1">
          <a href="mailto:chetan.narian@gmail.com">chetan.narian@gmail.com</a>
        </div>
        <div className="flex px-6 opacity-50">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase pl-3 pr-3"
            href="https://www.instagram.com/thecjstream/"
          >
            <svg
              data-v-19cd8ce6=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-instagram"
            >
              <rect
                data-v-19cd8ce6=""
                x="2"
                y="2"
                width="20"
                height="20"
                rx="5"
                ry="5"
              ></rect>
              <path
                data-v-19cd8ce6=""
                d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
              ></path>
              <line
                data-v-19cd8ce6=""
                x1="17.5"
                y1="6.5"
                x2="17.5"
                y2="6.5"
              ></line>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase pl-3 pr-3"
            href="https://twitter.com/chetan_raj"
          >
            <svg
              data-v-19cd8ce6=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-twitter"
            >
              <path
                data-v-19cd8ce6=""
                d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
              ></path>
            </svg>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase pl-3 pr-3"
            href="https://github.com/chetanraj"
          >
            <svg
              data-v-19cd8ce6=""
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-github"
            >
              <path
                data-v-19cd8ce6=""
                d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
