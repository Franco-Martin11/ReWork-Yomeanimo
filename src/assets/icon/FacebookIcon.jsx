import { chakra } from '@chakra-ui/react';

const FacebookIcon = ({ fill, hovered }) => (
	<chakra.svg
		xmlns='http://www.w3.org/2000/svg'
		width={'36px'}
		height={'36px'}
		viewBox='0 0 24 24'
		fill={fill}
		_hover={{ fill: hovered, transition: 'fill 300ms ease' }}
	>
		<path d='M12.001 2.002c-5.522 0-9.999 4.477-9.999 9.999 0 4.99 3.656 9.126 8.437 9.879v-6.988h-2.54v-2.891h2.54V9.798c0-2.508 1.493-3.891 3.776-3.891 1.094 0 2.24.195 2.24.195v2.459h-1.264c-1.24 0-1.628.772-1.628 1.563v1.875h2.771l-.443 2.891h-2.328v6.988C18.344 21.129 22 16.992 22 12.001c0-5.522-4.477-9.999-9.999-9.999z' />
	</chakra.svg>
);

export default FacebookIcon;
