import brends1 from '../../assets/images/Adidas.svg'
import brends2 from '../../assets/images/puma.svg'
import brends3 from '../../assets/images/Lacoste.svg'

const Brends = () => {
  return (
      <div className='max-w-5xl mx-auto'>
          <div className='flex justify-between pt-[105px]'>
              <img src={brends1} alt='adidas' />
              <img src={brends2} alt='puma' />
              <img src={brends3} alt='lacoste' />
          </div>
      </div>
  );
}

export default Brends
