import HeroBanner from '@/features/Home/components/HeroBanner/HeroBanner'
import DefaultLayout from '@/features/common/modules/Layouts/DefaultLayout/DefaultLayout'

export default function Home () {
  return (
    <>
      <DefaultLayout>
        <HeroBanner />
      </DefaultLayout>
    </>
  )
}
