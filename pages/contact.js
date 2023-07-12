import ContactForm from '@/features/common/modules/ContactForm/ContactForm';
import DefaultLayout from '@/features/common/modules/Layouts/DefaultLayout/DefaultLayout';
import TextContentBox from '@/features/common/modules/TextContentBox/TextContentBox';
import { Box, Grid, GridItem, Text } from '@chakra-ui/react';

const ContactPage = () => {
  return (
    <DefaultLayout>
      <Box backgroundColor="#f7f8f9" paddingY="3rem">
        <Grid templateColumns="repeat(6, 1fr)" gap="5" maxWidth="1280px" margin="0 auto">
          <GridItem colSpan={{ base: 6, sm: 4 }}>
            <TextContentBox title="Contact Us">
              <ContactForm />
            </TextContentBox>
          </GridItem>
          <GridItem colSpan={{ base: 6, sm: 2 }}>
            <TextContentBox title="For  Inquiries Contact:">
              <Text fontWeight="light" color="gray.600" fontSize="1rem" marginBottom="1rem">
                Linnet Cubin <br />
                Public Relations Manager
                <br />
                774 NE 84th St Mianmi, FL 33879
              </Text>
              <Text fontWeight="light" color="gray.600" fontSize="1rem">
                Rodd Epsley
                <br />
                Public Relations Manager
                <br />
                774 NE 84th St Miami, FL 33879
              </Text>
            </TextContentBox>
          </GridItem>
        </Grid>
      </Box>
    </DefaultLayout>
  );
};

export default ContactPage;
