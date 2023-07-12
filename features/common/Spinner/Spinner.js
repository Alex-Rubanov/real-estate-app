import { Spinner as Loader, Box } from '@chakra-ui/react';

const Spinner = () => {
  return (
    <Box height="500px" display="flex" justifyContent="center" alignItems="center">
      <Loader size="xl" />
    </Box>
  );
};

export default Spinner;
