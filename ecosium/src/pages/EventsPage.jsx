
import NightLife from '../components/NightLife'
import TopArtist from '../components/TopArtist'
import heroData from '../assets/assets'
import { MenuBar } from '../components/MenuBar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Events from '../components/Events/Events'

const EventsPage = () => {
    return (
        <>
            <div className='w-full h-auto items-center justify-center flex flex-col'>
                <Hero heroData={heroData} />
                <Categories type={'event'} hedding={'Our Category'} />
                <NightLife />
                <Events type={'events'} hedding={'Top Events'} />
                <TopArtist />
                <MenuBar />
            </div>
        </>
    )
}

export default EventsPage