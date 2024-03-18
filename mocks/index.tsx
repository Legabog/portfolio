import { FC } from 'react';

import { NextIntlMock } from './next-intl';
import { ThemeMock } from './theme';
import { Props } from './types';

export const CombineMocks: FC<Props> = ({ children }) => (
	<NextIntlMock>
		<ThemeMock>{children}</ThemeMock>
	</NextIntlMock>
);
