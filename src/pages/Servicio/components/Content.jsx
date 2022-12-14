import { Box } from '@chakra-ui/react';
import { useServiceContext } from '../context/context';
import Cursos from './Cursos/Cursos';
import Seguros from './Seguro/Seguros';

const Content = () => {
	const { focus } = useServiceContext();
	return (
		<Box w='full' bg='#fafafa' py='28' px='4' minH={'50vh'}>
			{focus.value === 'Cursos' ? <Cursos /> : <Seguros />}
		</Box>
	);
};

export default Content;
