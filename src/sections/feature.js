/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Expense from 'assets/feature/expenses.png';
import Revenue from 'assets/feature/revenue.png';
import Tip from 'assets/feature/tip.png';
import Api from 'assets/feature/api.png';
import Reciept from 'assets/feature/reciept.png';
import Rating from 'assets/feature/rating.png';

const data = [
  {
    id: 1,
    imgSrc: Expense,
    altText: 'Smart',
    title: 'Track expenses',
    text:
      'Track distance travelled, hours spent , team size etc',
  },
  {
    id: 2,
    imgSrc: Revenue,
    altText: 'Performance',
    title: 'Track revenue',
    text:
      'Track the amount collected, staff on shift and time collected.',
  },
  {
    id: 3,
    imgSrc: Tip,
    altText: 'Content',
    title: 'Request Payout',
    text:
      'Request payouts straight into your mobile money account.',
  },
  {
    id: 4,
    imgSrc: Api,
    altText: 'Customization',
    title: 'Mobile money intergration',
    text:
      'Recieve tips straight into your mobile money.',
  },
  {
    id: 5,
    imgSrc: Reciept,
    altText: 'Productivity',
    title: 'Email and SMS reciepts',
    text:
      'Send your consumers email and or SMS reciepts',
  },
  {
    id: 6,
    imgSrc: Rating,
    altText: 'Support',
    title: 'Ratings and Reviews',
    text:
      'Track customer feedback and reviews.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan="Quality features"
          title="Point of Sale "
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
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
    pt: [0, null, null, null, null, null, null, 3],
    gridGap: [
      '37px 0',
      null,
      '45px 30px',
      null,
      '50px 30px',
      null,
      null,
      '90px 70px',
    ],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
