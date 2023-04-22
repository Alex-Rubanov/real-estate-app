import Navigation from '../../Navigation'
import Footer from '@/features/common/Footer/Footer'

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export default DefaultLayout
