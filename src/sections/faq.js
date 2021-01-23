/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import SectionHeader from 'components/section-header';
import Accordion from 'components/accordion/accordion';
const faqs = [
  {
    title: 'How is itmas wallet different from mobile money',
    contents: (
      <div>
        Momo wallet stores itmas tokens, tokens that can be used in exchange for services or products free of charge and are reedamable to cash. This tokens can be bought using mobile money or visa and master cards.
      </div>
    ),
  },
  {
    title: 'Does the itmas POS accept visa and master card payments',
    contents: (
      <div>
       No the Momo POS only accepts itmas tokens, tokens that reedamable to cash by the owner of the business straight into thier mobile money or bank account.
      </div>
    ),
  },
  {
    title: `Does the product have an inventory managment feauture`,
    contents: (
      <div>
       There early version currently does not have an inventory management feauture but it does have a time and task tracking feautre for services.
      </div>
    ),
  },
  {
    title: `What does industry customization mean?`,
    contents: (
      <div>
        It means the POS and Back Office have industry specific UI designs.
      </div>
    ),
  },
  {
    title: `Do I need a smart phone to use Itmas wallet`,
    contents: (
      <div>
         Not neccessarily, for consumers without a smart phone, we provide them with a  QR enabled consumer card by which the Itmas point of sale will scan to collect to payment.
      </div>
    ),
  },
];
export default function Faq() {
  return (
    <section sx={{ variant: 'section.faq' }}>
      <Container>
        <SectionHeader
          title="Frequently asked question"
          slogan="Get your question answer"
        />
        <Box
          sx={{
            display: 'flex',
            width: ['100%', null, null, '650px', '745px'],
            flexDirection: 'column',
            mx: 'auto',
            my: -4,
          }}
        >
          <Accordion items={faqs} />
        </Box>
      </Container>
    </section>
  );
}
