import { ErrorProps } from 'next/error';

export interface Props {
	error: ErrorProps;
	params: { locale: string };
}
