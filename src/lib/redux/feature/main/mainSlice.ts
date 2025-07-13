import { StoryType } from '@/lib/utils/types/mainType';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// กำหนด type ของ state สำหรับฟีเจอร์นี้
interface MainState {
    story?: StoryType;
}

// กำหนดค่าเริ่มต้นของ state
const initialState: MainState = {
    story: undefined
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        // สามารถ return initialState เพื่อรีเซ็ตค่าได้โดยตรง
        clearState: () => initialState,

        // Immer จะช่วยให้เราแก้ไข state ได้เลย
        setStory: (state, action: PayloadAction<StoryType | undefined>) => {
            state.story = action.payload;
        },
    },
});

// Export actions เพื่อให้ component อื่นๆ เรียกใช้ได้
export const { clearState, setStory } = mainSlice.actions;

// Export reducer เพื่อนำไปรวมใน store
export default mainSlice.reducer;