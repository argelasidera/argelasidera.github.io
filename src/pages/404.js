import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div style={{ height: "100vh" }} className="table w-full mx-auto">
      <div className="table-cell h-full align-middle">
        <div className="w-auto h-auto text-center p-4 relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlnsSvgjs="http://svgjs.com/svgjs"
            version="1.1"
            width="128"
            height="128"
            x="0"
            y="0"
            viewBox="0 0 490 490"
            style={{ enableBackground: "new 0 0 512 512" }}
            xmlSpace="preserve"
            class="mx-auto mt-1"
          >
            <g>
              <g xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="157.651"
                  cy="175.289"
                  r="42.642"
                  fill="#e2e8f0"
                  data-original="#000000"
                />
                <circle
                  cx="332.349"
                  cy="175.289"
                  r="42.642"
                  fill="#e2e8f0"
                  data-original="#000000"
                />
                <path
                  d="M137.723,364.15c4.396-3.26,108.787-78.91,214.584,0l18.303-24.554c-124.414-92.81-249.965-0.912-251.221,0.015   L137.723,364.15z"
                  fill="#e2e8f0"
                  data-original="#000000"
                />
                <path
                  d="M69.086,490h351.829C459.001,490,490,459.001,490,420.914V69.086C490,30.991,459.001,0,420.914,0H69.086   C30.999,0,0,30.991,0,69.086v351.829C0,459.001,30.999,490,69.086,490z M30.625,69.086c0-21.204,17.256-38.461,38.461-38.461   h351.829c21.204,0,38.461,17.257,38.461,38.461v351.829c0,21.204-17.257,38.461-38.461,38.461H69.086   c-21.204,0-38.461-17.257-38.461-38.461V69.086z"
                  fill="#e2e8f0"
                  data-original="#000000"
                />
              </g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
              <g xmlns="http://www.w3.org/2000/svg"></g>
            </g>
          </svg>
          <h4 className="block m-auto mt-2 text-gray-500">Page not found!</h4>
          <Link
            className="text-blue-400 hover:text-blue-600 transform ease-linear divide-purple-500"
            to="/"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  </>
)

export default NotFoundPage
