import HText from '@/shared/HText';
import { BenefitType, SelectedPage } from '@/shared/types';
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Benefit from './Benefit';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6 " />,
        title: 'State of the Art Facilities',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque consequatur explicabo quisquam molestias non, debitis minus tempore, odit dolor quasi praesentium illo, dolore iure voluptatum ducimus officiis voluptatem aliquam voluptates!',
    },
    {
        icon: <UserGroupIcon className="h-6 w-6 " />,
        title: "100's of Diverse Classes",
        description:
            'Quisquam molestias non, debitis minus tempore, odit dolor quasi praesentium illo, dolore iure voluptatum ducimus officiis voluptatem aliquam voluptates!',
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6 " />,
        title: 'Expert and Pro Trainers',
        description:
            'Tempore, odit dolor quasi praesentium illo, dolore iure voluptatum ducimus officiis voluptatem aliquam voluptates!',
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:h-5/6"
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                {/* Header */}
                <div className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and
                        classes to get you to your ultimate fitness goals with
                        ease. We provide true care into each and every member.
                    </p>
                </div>
                {/* Benefits */}
                <div className="md:flex items-center justify-between gap-8 mt-5">
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;