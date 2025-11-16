import { features } from '../constants'

const FeatureSection = () => {
  return (
    <section className="m-4 md:m-12">
      <h2 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-4 md:mb-8">Os Nossos Serviços</h2>
      <div className="grid gri-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {features.map((item, index) => (
        <div className='flex flex-col bg-[#323a2f]/90 rounded-lg text-[#f1efe7] shadow-xl/20'>
          <img className="aspect-video object-cover rounded-t-lg" src={item.image} alt="" />
          <div className='p-4'>
            <h3 className='text-lg sm:text-xl lg:text-2xl mb-2'>{item.title}</h3>
            <p className='text-xs sm:text-sm md:text-base'>{item.description}</p>
          </div>
        </div>
      ))}
      </div>
    </section>
  );
};

export default FeatureSection;