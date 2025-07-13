"use client";

import { storyList } from "@/mock/story.mock";
import TeaserStoryCard from "./components/TeaserStoryCard";
import DifficultyLevel from "./components/DifficultyLevel";
import { useCallback, useState } from "react";

const Main = () => {
  const [filteredStories, setFilteredStories] = useState(storyList);

  const handleSearch = useCallback((difficultyData: any) => {
    console.log("Searching with:", difficultyData);

    const filtered = storyList.filter((story) => {
      if (difficultyData.isAll) return true;
      if (difficultyData.isEasy && story.difficulty === "easy") return true;
      if (difficultyData.isMedium && story.difficulty === "medium") return true;
      if (difficultyData.isHard && story.difficulty === "hard") return true;
      if (
        !difficultyData.isEasy &&
        !difficultyData.isMedium &&
        !difficultyData.isHard
      )
        return true;
      return false;
    });

    setFilteredStories(filtered);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="w-[24rem] mx-auto">
        <p className="text-center">
          Start your reading journey, choose a short story that suits you and
          develop...
        </p>
      </div>

      {/* filter */}
      <DifficultyLevel onSearch={handleSearch} />

      {/* Story Card */}
      <div className="grid grid-cols-3 gap-4">
        {filteredStories &&
          filteredStories.map((item, i) => {
            return <TeaserStoryCard key={i} {...item} />;
          })}
      </div>
    </div>
  );
};
export default Main;
