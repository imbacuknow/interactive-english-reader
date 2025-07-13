import { configureStore } from '@reduxjs/toolkit';
import { mainSlice } from './feature/main/mainSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            // ใช้ .reducer เพื่อดึงเฉพาะ reducer function ออกมาจาก slice object
            main: mainSlice.reducer,
        },
    });
};

// ส่วน Type ไม่ต้องแก้ไข ถูกต้องสมบูรณ์แล้ว
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];