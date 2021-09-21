import { AcUnit } from '@material-ui/icons'
import Navbar from '../components/navbar/Navbar'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      
      <img width='100%' src="/images/pexels-jeremy-bishop-2422915.jpg" alt="" />
    </div>
  )
}

export default Home
