/** @jsx jsx */
import { jsx, Container, Box, Grid, Text, Heading } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import CoreFeatureThumb from 'assets/mockuper3.png';
import Custom from 'assets/core-feature/custom.png';
import Service from 'assets/core-feature/service.png';
import Otp from 'assets/feature/password.png';
import Tip from 'assets/feature/tip.png';
import Expense from 'assets/feature/expenses.png';
import QRScanner from 'assets/feature/qr-code-scan.png';

const data = {
  subTitle: 'Core features',
  title: 'Point of sale',
  features: [
   
    {
      id: 1,
      imgSrc: Expense,
      altText: 'Secure Contents',
      title: 'Payments',
      text:
        'Keep a history of transactions',
    },{
      id: 2,
      imgSrc: QRScanner,
      altText: 'Secure Contents',
      title: 'QR code scanner',
      text:
        'Scan consumer QR code to collect payments',
    },
    {
      id: 3,
      imgSrc: Otp,
      altText: 'One time pin',
      title: 'One time pin',
      text:
        'One time authorization pin code for  POS users',
    }
    ,{
      id: 4,
      imgSrc: Tip,
      altText: 'Secure Contents',
      title: 'Payout',
      text:
        'Request mobile money payout ',
    },
  ],
};

export default function PointOfSale() {
  return (
    <section sx={styles.coreFeature}>
      <Container sx={styles.containerBox}>
        <Box sx={styles.thumbnail}>
          <Image src={CoreFeatureThumb}  alt="Thumbnail" />
        </Box>
        <Box sx={styles.contentBox}>
          <Box sx={styles.headingTop}>
            <TextFeature subTitle={data.subTitle} title={data.title} />
          </Box>

          <Grid gap="15px 0" columns={1} sx={styles.grid}>
            {data.features.map((item) => (
              <Box sx={styles.card} key={item.id}>
                <Image src={item.imgSrc} alt={item.altText} sx={styles.img} />

                <Box sx={styles.wrapper}>
                  <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                  <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
                </Box>
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  coreFeature: {
    py: [0, null, null, 2, null, 7],
    position: 'relative',
    '&::before': {
      position: 'absolute',
      content: '""',
      top: ['auto', null, null, '50%'],
      bottom: ['100px', 0, null, 'auto'],
      left: 0,
      background: 'linear-gradient(-157deg, #F6FAFD, #F9FCFC, #FCFDFC)',
      height: [350, 550, '60%'],
      width: '50%',
      zIndex: -1,
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      transform: ['translateY(0)', null, null, 'translateY(-50%)'],
    },
  },
  containerBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, 'row'],
  },
  thumbnail: {
    pl: [0, 5, 0, null, 7, 95],
    pr: [0, 5, null, null, null, 75, 95],
    order: [2, null, null, 0],
  },
  contentBox: {
    width: ['100%', 450, 550, 350, 500, 570],
    pr: [0, null, 'auto', null, null, 80],
    pl: 'auto',
    flexShrink: 0,
  },
  headingTop: {
    pl: [0, null, null, null, '35px', null, '55px', 6],
    mb: [3, null, null, null, 1],
    textAlign: ['center', null, null, 'left'],
  },
  grid: {
    p: ['0 0px 35px', null, null, null, '0 20px 40px', null, '0 40px 40px', 0],
  },
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    p: [
      '0 17px 20px',
      null,
      null,
      '0 0 20px',
      '20px 15px 17px',
      null,
      null,
      '25px 30px 23px',
    ],
    backgroundColor: 'white',
    borderRadius: '10px',
    transition: 'all 0.3s',
    width: ['100%', '85%', null, '100%'],
    mx: 'auto',
    '&:hover': {
      boxShadow: [
        '0px 0px 0px rgba(0, 0, 0, 0)',
        null,
        null,
        null,
        '0px 8px 24px rgba(69, 88, 157, 0.07)',
      ],
    },
  },

  img: {
    width: ['50px', null, '55px'],
    height: 'auto',
    flexShrink: 0,
    mr: [3, 4],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    mt: '-5px',
    title: {
      fontSize: 3,
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, null, null, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, 2],
    },
  },
};
