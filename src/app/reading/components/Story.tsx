"use client";

import { useAppSelector } from "@/lib/redux/hooks";

const Story = () => {
  const story = useAppSelector((state) => state.main.story);

  return (
    <>
      <p className="indent-[6rem]">{story?.story}</p>
    </>
  );
};
export default Story;
