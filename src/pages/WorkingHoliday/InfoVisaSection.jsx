import { chakra, Divider, Heading, HStack, Stack } from '@chakra-ui/react';
import InfoSection from './components/InfoSection';
import '../../components/custom/CustomBox.css';
import HeadingSection from './components/HeadingSection';

const InfoVisaSection = () => {
	return (
		<Stack minH='100vh' bg='#f8f8f8'>
			<chakra.div
				className='box'
				as={Stack}
				aling='center'
				justify='center'
				textAlign='center'
				color='primary.darkGranate'
				w='full'
				bg='primary.lightAqua'
				h={{ base: '50vh', md: '35vh' }}
			>
				<Heading fontSize='4xl'>¿Qué es una VISA Working Holiday?</Heading>
			</chakra.div>
			<HStack
				flexWrap='wrap'
				as='section'
				w='full'
				justify='center'
				px={{ base: 4, md: 10 }}
			>
				<HeadingSection />
				<Divider />
				<InfoSection />
			</HStack>
		</Stack>
	);
};

export default InfoVisaSection;
