"use client"

import { useDispatch, useSelector, useStore } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from './store';

// สร้าง Hook ที่มี Type สำหรับ useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
// สร้าง Hook ที่มี Type สำหรับ useSelector
export const useAppSelector = <T extends (state: RootState) => any>(selector: T): ReturnType<T> =>
    useSelector(selector);
// สร้าง Hook ที่มี Type สำหรับ useStore
export const useAppStore = () => useStore<AppStore>();