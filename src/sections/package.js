/** @jsx jsx */
import { jsx, Container, Flex } from 'theme-ui';
import PriceCard from 'components/price-card';
import SectionHeader from 'components/section-header';
import { IoIosCheckmarkCircle, IoIosCloseCircle } from 'react-icons/io';
import PatternBG from 'assets/patternBG.png';

const packages = [
  {
    header: 'Popular',
    name: 'Personal wallet',
    description: 'For individuals',
    priceWithUnit: 'M29.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '14 day trial',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Zero transaction fees',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Unique QR code and customer card',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Individual user account',
        isAvailable: true,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Distributed wallet / petty cash management',
        isAvailable: false,
      },
      {
        icon: <IoIosCloseCircle />,
        text: 'Download monthly reports in PDF',
        isAvailable: false,
      },
    ],
  },
  {
    header: 'Recommended',
    name: 'Business wallet',
    description: 'For businesses',
    priceWithUnit: 'M74.99/',
    buttonText: 'Signup Now',
    points: [
      {
        icon: <IoIosCheckmarkCircle />,
        text: '14 day trial',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Zero transaction fees',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text:
          'Unique QR code and customer card.',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: ' 2 admin user accounts',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Unlimited sub user accounts',
        isAvailable: true,
      },
      {
        icon: <IoIosCheckmarkCircle />,
        text: 'Download monthly reports in PDF',
        isAvailable: true,
      },
    ],
  },
];
export default function Package2() {
  return (
    <section id="pricing" sx={styles.pricing}>
      <Container>
        <SectionHeader
          title="E-wallet"
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
