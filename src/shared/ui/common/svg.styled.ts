import styled, { RuleSet, css } from 'styled-components';

export const StyledSvg = styled.svg<{ $customStyle?: string | RuleSet }>`
	fill: ${({ theme }) => theme.icon.path.fill};
	${({ $customStyle }) =>
		$customStyle &&
		css`
			${$customStyle}
		`}
`;
