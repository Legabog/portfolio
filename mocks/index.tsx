import { FC } from 'react';

import { NextIntlMock } from './next-intl';
import { RouterMock } from './router';
import { ThemeMock } from './theme';
import { Props } from './types';

export const CombineMocks: FC<Props> = ({ children }) => (
	<RouterMock>
		<NextIntlMock>
			<ThemeMock>{children}</ThemeMock>
		</NextIntlMock>
	</RouterMock>
);
