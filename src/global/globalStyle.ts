import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
	${normalize}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:root {
		--padding-s: 8px;
		--padding-m: 16px;
		--padding-l: 24px;

		--margin-s: 8px;
		--margin-m: 16px;
		--margin-l: 24px;
	}
	body {
		overflow-y: auto;
		width: 100%;
	}
	h1, h2, h3, h4, h5 {
		margin: 0;
		padding: 0;
	}

	p {
		margin: 0;
		padding: 0;
	}
`;
