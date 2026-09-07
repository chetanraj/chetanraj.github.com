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
              href="https://chetanraj.dev/blog/"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="bg"></div>
        <div className="container flex flex-col justify-center h-82">
          <div className="tagline text-base opacity-50">
            DESIGNER & DEVELOPER
          </div>
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
            Currently Lead Product Developer at{" "}
            <a href="https://active.ai/">Active.ai</a>
          </div>
        </div>
        <div className="footer flex h-2 justify-between">
          <div className="text-base opacity-50 pt-1">
            <a href="mailto:chetan.narian@gmail.com">chetan.narian@gmail.com</a>
          </div>
          <div className="flex pl-6 opacity-50">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase pl-3 pr-3"
              href="https://www.instagram.com/thecjstream/"
            >
              <svg
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="uppercase pl-3 pr-3"
              href="https://x.com/chetan_raj"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase pl-3 pr-3"
              href="https://github.com/chetanraj"
            >
              <svg
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
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
