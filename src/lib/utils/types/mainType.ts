export type StoryListFormType = {
    isAll: boolean;
    isEasy: boolean;
    isMedium: boolean;
    isHard: boolean;
}

export type StoryType = {
    title: string;
    teaser: string;
    story?: string;
    difficulty?: "easy" | "medium" | "hard";
}

export type DifficultyLevelProps = {
    onSearch: (data: any) => void;
};
