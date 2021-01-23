/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Wallet from 'assets/key-feature/wallet.png';
import Pos from 'assets/key-feature/pos.png';
import Office from 'assets/key-feature/office.png';

const data = [
  {
    id: 1,
    imgSrc: Pos,
    altText: 'Monitoring',
    title: 'Point of sale',
    text:
      'Scan consumer QR code to collect payments.',
  },
  {
    id: 2,
    imgSrc: Wallet,
    altText: 'Vector',
    title: 'E-wallet',
    text:
      'Scan merchant QR code  to make pay merchants.',
  },
 
  {
    id: 3,
    imgSrc: Office,
    altText: 'Quality',
    title: 'Back office',
    text:
      'Track transactions and manage reports.',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Meet exciting features of product"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.title}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    px: [0, null, null, '40px', null, '80px'],
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: ['35px 0', null, '40px 0'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    '& > div': {
      px: [0, '15px', null, '25px', null, '30px', '40px', '60px'],
    },
  },
};
