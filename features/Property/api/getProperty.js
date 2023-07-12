import { http } from '@/lib/axios';

export const getProperty = async (id) => {
  const { data } = await http.get('/properties/detail', {
    params: {
      externalID: id,
    },
  });

  return data;
};
