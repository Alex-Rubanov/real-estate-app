import FeaturedProperties from '@/features/Home/components/FeaturedProperties/FeaturedProperties'
import HeroBanner from '@/features/Home/components/HeroBanner/HeroBanner'
import DefaultLayout from '@/features/common/modules/Layouts/DefaultLayout/DefaultLayout'

export default function Home ({ featuredProperties }) {
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
        <FeaturedProperties featuredProperties={featuredProperties} />
      </DefaultLayout>
    </>
  )
}

export async function getStaticProps () {
  const { hits } = require('@/features/data/properties')
  return {
    props: { featuredProperties: hits.slice(0, 5) }
  }
}
