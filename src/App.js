import { Analytics } from '@vercel/analytics/react';
import AnimeCard from './AnimeCard';
import Navigation from './Navigation';
import Banner from './Banner';
import Trending from './Trending';
import Recent from './Recent';
import Genres from './Genres';
import Footer from './Footer';
function App() {

  return (
    <div className='px-6'>      
      <Navigation />
      <div className='flex md:gap-4 pt-20 flex-col lg:flex-row'>
        <Banner />
        <Trending />
        
      </div>

      <div className='grid grid-cols-12 md:gap-4 mt-8'>
        <Genres/> 
        <Recent/>
        
        </div>
     <div>
     <Footer/>
     </div>
    </div>

    
  );
}

export default App;
