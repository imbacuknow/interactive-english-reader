"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setStory } from "@/lib/redux/feature/main/mainSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { StoryType } from "@/lib/utils/types/mainType";
import Link from "next/link";

const TeaserStoryCard = (props: StoryType) => {
  // เรียกใช้ Hook
  const dispatch = useAppDispatch();

  return (
    <>
      <Link href={"/reading"}>
        <Card
          className="cursor-pointer hover:opacity-60"
          onClick={() => dispatch(setStory(props))}
        >
          <CardHeader>
            <CardTitle>{props.title}</CardTitle>
          </CardHeader>
          <hr />
          <CardContent>
            <CardDescription>{props.teaser}</CardDescription>
          </CardContent>
        </Card>
      </Link>
    </>
  );
};
export default TeaserStoryCard;
