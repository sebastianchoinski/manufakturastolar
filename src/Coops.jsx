import gtv from './gtv.png';
import blum from './blum.png';
import egger from './egger.jpeg';
import hafele from './hafele.jpeg'
import hettich from './hettich.png'
import kobax from './kobax.jpeg'
import peka from './peka.svg'
import pfleiderer from './pfleiderer.jpeg'
import stylfront from './stylfront.png'
import swiss from './swiss.png'
import './Coops.scss'

const Coops = () => {
    return ( 
        <div className='maincoopsdiv'>
            <hr></hr>
            <h1 className='coopsheader'>Nasi dostawcy</h1>
            <div className='coopsdiv'>
                
                <img className='firmlogo' src={gtv}></img>
                <img className='firmlogo' src={blum}></img>
                <img className='firmlogo' src={egger}></img>
                <img className='firmlogo' src={hafele}></img>
                <img className='firmlogo' src={hettich}></img>
                <img className='firmlogo' src={kobax}></img>
                <img className='firmlogo' src={peka}></img>
                <img className='firmlogo' src={pfleiderer}></img>
                <img className='firmlogo' src={stylfront}></img>
                <img className='firmlogo' src={swiss}></img>

            </div>
        </div>
     );
}
 
export default Coops;