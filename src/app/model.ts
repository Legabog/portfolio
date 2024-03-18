import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';

import { State } from '@app/types';

export const useThemeStore = create<State>()(
	persist(
		devtools(
			immer((set, get) => ({
				themeType: 'dark',
				setTheme: () => set({ themeType: get().themeType === 'dark' ? 'light' : 'dark' }),
			})),
		),
		{ name: 'theme', storage: createJSONStorage(() => sessionStorage) },
	),
);
