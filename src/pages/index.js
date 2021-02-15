import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import WorkerIcon from "../components/worker-icon"
import MainTitle from "../components/main-title"
import FbChatHead from "../components/fb-chat-head"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Home" />
      <div className="max-w-screen-lg mx-auto md:mt-10 mt-4">
        <MainTitle />
        <div
          style={{ maxWidth: 400, maxHeight: 300 }}
          className="table h-full w-full mx-auto md:mt-20 mt-16"
        >
          <div className="table-cell h-full align-middle">
            <div className="w-auto h-auto text-center p-4 relative">
              <div className="rounded absolute inset-0 bg-gray-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6"></div>
              <div
                className="rounded bg-gray-100 relative shadow border p-4"
                style={{ maxWidth: 400, maxHeight: 300 }}
              >
                <WorkerIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    <FbChatHead />
  </>
)

export default IndexPage
