import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import KeyFeature from 'sections/key-feature';
import CoreFeature from 'sections/back-office';
import Feature from 'sections/feature';
import PartnerSection from 'sections/partner';
import WorkFlow from 'sections/workflow';
import TestimonialCard from 'sections/testimonial';
import SecurePayment from 'sections/secure-payment';
import Package from 'sections/package';
import Package2 from 'sections/package2';
import Faq from 'sections/faq';
import BackOffice from 'sections/back-office';
import PointOfSale from 'sections/point-of-sale';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="ITMAS" />
          <Banner />
          <KeyFeature />
          <PointOfSale />
      
      
          <PartnerSection />
        
          
          <BackOffice />
 
   
      
          <WorkFlow />
          <TestimonialCard />

          <Package />
          <Package2 />
          <Faq />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
