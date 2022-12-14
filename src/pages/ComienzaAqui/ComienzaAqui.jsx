import { Carrousel, Header } from '../../components';
import { Divider } from '@chakra-ui/react';
import { InstructionArticle, CtaCard, MediaContainer } from './components/';

const ComienzaAqui = () => {
	const bg = {
		base: 'https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/_Tramas/cta-mobile-comienza-aqui.svg',
		md: 'https://www.yomeanimo.com/wp-content/themes/creativedog-timber-theme-v2/assets/images/_Tramas/general-trama-thunder-plane-dots.svg',
	};
	return (
		<section>
			<Header
				background={{
					md: '	https://www.yomeanimo.com/wp-content/uploads/2022/01/Prueba2-1.jpg',
					base: '	https://www.yomeanimo.com/wp-content/uploads/2021/11/1561x590-portada-comienza-aqui-yma-1.jpeg',
				}}
				encabezado='¿Cómo te ves trabajando y viajando por el mundo?'
				parrafo='Yo ya lo hice, y ahora te cuento como hacerlo vos mismo. Vas a conocer paso a paso cómo armar la experiencia de tu vida!'
				textButton='comenzá tu viaje'
				textColor='#fff'
				route='/destinos/'
			/>
			<Divider my={5} />
			<InstructionArticle />
			<CtaCard
				background={bg}
				heading='Ahora te toca a vos!'
				subHeading='¿Qué estás esperando?'
				textButton='comenza tu viaje'
				sizeButton='lg'
			/>{' '}
			<Divider my={5} />
			<MediaContainer />
			<Divider my={5} />
			<Carrousel />
		</section>
	);
};

export default ComienzaAqui;
