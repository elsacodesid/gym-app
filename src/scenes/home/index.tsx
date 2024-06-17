import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageText.png';
import SponsorRedBull from '@/assets/HomePageText.png';
import SponsorForbes from '@/assets/HomePageText.png';
import SponsorFortune from '@/assets/HomePageText.png';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px")
    return <section>

    </section>;
};

export default Home;
