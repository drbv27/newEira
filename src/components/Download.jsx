export const Download = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-screen-sm sm:text-center sm:mx-auto">
          <a
            href="/"
            aria-label="View"
            className="inline-block mb-5 rounded-full sm:mx-auto"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-slate-100">
              <svg
                className="w-12 h-12 text-eirateal-500"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Chase ball of string eat
          </h2>
          <p className="text-base text-gray-700 md:text-lg sm:px-4">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
          <hr className="w-full my-8 border-gray-300" />
          <div className="flex items-center mb-3 sm:justify-center">
          <a href="/" className="mr-3 transition duration-300 hover:shadow-xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
          <a href="/" className="transition duration-300 hover:shadow-xl">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png"
              className="object-cover object-top w-32 mx-auto"
              alt=""
            />
          </a>
        </div>
        </div>
      </div>
    );
  };