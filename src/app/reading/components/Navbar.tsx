"use client";

import { Button } from "@/components/ui/button";
import { setStory } from "@/lib/redux/feature/main/mainSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const story = useAppSelector((state) => state.main.story);

  return (
    <div className="h-[80px] flex flex-row items-center mr-4 bg-white sticky top-0 relative">
      <Link
        href={"/"}
        className="absolute left-0 ml-4"
        onClick={() => dispatch(setStory(undefined))}
      >
        <Button variant="outline" className="text-base cursor-pointer ">
          <ChevronLeft />
          Back
        </Button>
      </Link>

      <p className="mx-auto font-bold text-2xl">{story?.title}</p>
    </div>
  );
};
export default Navbar;
