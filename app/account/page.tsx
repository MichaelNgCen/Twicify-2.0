"use client";

import Header from "@/components/Header";
import { RiLinkedinBoxLine, RiGithubLine, RiUserLine } from "react-icons/ri";
import { useState } from "react";

const Account = () => {
  const [isLinkedInHovered, setIsLinkedInHovered] = useState(false);
  const [isGitHubHovered, setIsGitHubHovered] = useState(false);
  const [isPortfolioHovered, setIsPortfolioHovered] = useState(false);

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/michaelngcen/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/MichaelNgCen", "_blank");
  };

  const handlePortfolioClick = () => {
    window.open("https://michaelngcen.com/", "_blank");
  };

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      <Header className="from-bg-neutral-900">
        <div className="mb-2 flex flex-col gap-y-6">
          <h1 className="text-white text-3xl font-semibold">Michael Ng</h1>
        </div>
      </Header>

      <div className="flex flex-col gap-y-4 px-6 py-4">
        <div
          className={`bg-white rounded-lg p-4 flex items-center justify-between ${
            isLinkedInHovered ? "bg-opacity-80" : ""
          }`}
          onMouseEnter={() => setIsLinkedInHovered(true)}
          onMouseLeave={() => setIsLinkedInHovered(false)}
          onClick={handleLinkedInClick}
        >
          <div className="flex items-center gap-x-4">
            <RiLinkedinBoxLine
              size={24}
              color="#2867B2"
              className={isLinkedInHovered ? "animate-bounce" : ""}
            />
            <div>
              <p className="text-gray-500 font-semibold">LinkedIn</p>
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-lg p-4 flex items-center justify-between ${
            isGitHubHovered ? "bg-opacity-80" : ""
          }`}
          onMouseEnter={() => setIsGitHubHovered(true)}
          onMouseLeave={() => setIsGitHubHovered(false)}
          onClick={handleGitHubClick}
        >
          <div className="flex items-center gap-x-4">
            <RiGithubLine
              size={24}
              color="#181717"
              className={isGitHubHovered ? "animate-bounce" : ""}
            />
            <div>
              <p className="text-gray-500 font-semibold">GitHub</p>
            </div>
          </div>
        </div>

        <div
          className={`bg-white rounded-lg p-4 flex items-center justify-between ${
            isPortfolioHovered ? "bg-opacity-80" : ""
          }`}
          onMouseEnter={() => setIsPortfolioHovered(true)}
          onMouseLeave={() => setIsPortfolioHovered(false)}
          onClick={handlePortfolioClick}
        >
          <div className="flex items-center gap-x-4">
            <RiUserLine
              size={24}
              color="#1C1C1C"
              className={isPortfolioHovered ? "animate-bounce" : ""}
            />
            <div>
              <p className="text-gray-500 font-semibold">Portfolio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
