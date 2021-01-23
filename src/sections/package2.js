/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    header: 'Popular',
    name: 'Basic Plan',
    description: 'For Small teams or office',
    priceWithUnit: 'M449.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '14 day trial period',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Track transaction history',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Recieve summarized reports.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Download reports in PDF and spreadsheet format',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '2 user account roles',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Pricing assistant',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Mulitple POS chan',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Premium Plan',
    description: 'For startup enterprise',
    priceWithUnit: 'M999.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '14 day trial period',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Track transaction history',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Download reports in PDF and spreadsheet format',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: '2 user account roles',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'AI driven pricing assistant',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Manage multiple POS channels',
        isAvailable: true,
      },
    ],
  },
];
export default function Package() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="POS + Back office"
          slogan="Whats the function"
          isWhite={true}
        />
        <Flex
          sx={{
            justifyContent: 'center',
            flexWrap: ['wrap', null, null, 'nowrap'],
          }}
        >
          {packages.map((packageData) => (
            <PriceCard data={packageData} key={packageData.name} />
          ))}
        </Flex>
      </Container>
    </section>
  );
}

const styles = {
  pricing: {
    backgroundColor: 'primary',
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    py: [8, null, 9, null, null, 10],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: 0,
      right: 0,
      background:
        'linear-gradient(-45deg, rgba(42,72,125, 0.3) 25%, transparent 25%, transparent 50%, rgba(42,72,125, 0.3) 50%, rgba(42,72,125, 0.3) 75%, transparent 75%, transparent)',
      width: '100%',
      backgroundSize: '350px 350px',
      height: '100%',
      opacity: 0.3,
      zIndex: 0,
    },
  },
};
