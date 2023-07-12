import FeaturedProperties from '@/features/Home/components/FeaturedProperties/FeaturedProperties';
import HeroBanner from '@/features/Home/components/HeroBanner/HeroBanner';
import MeetTheTeam from '@/features/Home/components/MeetTheTeam/MeetTheTeam';
import Partners from '@/features/Home/components/Partners/Partners';
import Testimonials from '@/features/Home/components/Testimonials/Testimonials';
import { getProperties } from '@/features/common/api/getProperties';
import DefaultLayout from '@/features/common/modules/Layouts/DefaultLayout/DefaultLayout';

export default function Home({ featuredProperties }) {
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties properties={featuredProperties} />
        <MeetTheTeam />
        <Partners />
        <Testimonials />
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps() {
  const properties = await getProperties(10);
  return {
    props: { featuredProperties: properties },
  };
}

//LEAVING THIS CODE JUST IN CASE IF PROBLEMS WITH API OCCURE IN THE FUTUTE

// export async function getStaticProps () {
//   const { hits } = require('@/features/data/properties')
//   return {
//     props: { featuredProperties: hits.slice(0, 5) }
//   }
// }
