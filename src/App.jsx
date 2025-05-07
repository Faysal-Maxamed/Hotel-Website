import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div style={{ backgroundColor: "#F8F9FB" }}>

      {/* header section  */}
      <div className='fixed top-0 left-0 w-full flex justify-between px-8 py-4 text-white z-50 bg-black/40 backdrop-blur-md'>
        <h1 className='font-bold text-2xl text-white'>Just<span style={{ color: '#FF8D41' }}>Stay</span></h1>
        <ul className='flex gap-4 text-sm'>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#rooms">Rooms</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contac</a></li>
        </ul>
        <button>LogOut</button>
      </div>

      {/* Hero Section  */}
      <div id='about' className='h-[650px]'>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/bg.png')" }}>

        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
        <div className=' absolute inset-0 text-white px-12 flex  flex-col justify-center w-1/2 '>
          <h1>Welcom To</h1>
          <h1 className='font-bold text-4xl text-white mt-4'>Hotel Just<span style={{ color: '#FF8D41' }}>Stay</span></h1>
          <h1 className='font-bold text-4xl text-white mt-2'>Mogadishu Somalia </h1>
          <p className='text-xs text-white mt-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, labore. Impedit autem deleniti incidunt, reprehenderit iusto,
            iure dicta a architecto corporis culpa consequatur! Vitae ut similique fugiat alias, aliquid est.
          </p>
          <div className='flex mt-8 gap-4'>
            <button style={{ backgroundColor: '#FF8D41' }} className='rounded-md text-white px-4 py-1 '>Book Now</button>
            <button className='rounded-md text-white px-4 py-1 border border-1 border-white '>Explore More</button>
          </div>
        </div>
      </div>

      {/* about Section  */}

      <div id='about' className='px-12 py-4 flex flex-col items-center'>
        <div className='flex gap-4 items-center justify-center my-8 '>
          <div className='h-px w-12 bg-gray-600 flex'></div>
          <h1 className=' text-2xl font-regular'>About Us</h1>
          <div className='h-px w-12 bg-gray-600'></div>
        </div>
        <div className='flex relative r'>
          <div className='w-1/2 flex  '>
            <div className=' border border-blue-800 w-80 h-56 rounded-2xl flex '></div>
            <img className='absolute top-0 left-0 object-cover pl-4 pt-4 ' src="images/about.png " alt="" width={300} height={200} />
          </div>
          <div className='flex flex-col w-1/2'>
            <h1 className='text-2xl font-bold '>History of Just<span style={{ color: '#FF8D41' }}>Stay</span></h1>
            <p className='text-xs mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque assumenda incidunt id cum. Fugiat repellat cumque delectus, at ipsum ad iure explicabo perferendis. If you're still reading this, congrats, you're officially a masochist.</p>
            <p className='text-xs mt-4'>Autem temporibus, neque voluptas officiis molestiae. At vero eos et accusamus et iusto odio dignissimos ducimus. But hey, at least you’re not stuck in traffic, or worse, listening to a never-ending sales pitch, right?</p>
            <button className='mt-4 text-sm border border-1 border-orange-600 w-24 rounded-md shadow-xl'>Read More</button>
          </div>
        </div>
        <div className='flex mt-12 justify-between' >

          <div className='flex flex-col w-1/2'>
            <h1 className='text-2xl font-bold '>Why Choose us?</h1>
            <p className='text-xs mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque assumenda incidunt id cum. Fugiat repellat cumque delectus, at ipsum ad iure explicabo perferendis. If you're still reading this, congrats, you're officially a masochist.</p>
            <p className='text-xs mt-4'>Autem temporibus, neque voluptas officiis molestiae. At vero eos et accusamus et iusto odio dignissimos ducimus. But hey, at least you’re not stuck in traffic, or worse, listening to a never-ending sales pitch, right?</p>
            <button className='mt-4 text-sm border border-1 border-orange-600 w-24 rounded-md shadow-xl'>Read More</button>
          </div>
          <div className='w-1/2 flex justify-end'>
            <div className=' flex relative  '>
              <div className=' border border-blue-800 w-80 h-56 rounded-2xl flex '></div>
              <img className='absolute top-0 left-0 object-cover pl-4 pt-4 ' src="images/about.png " alt="" width={300} height={200} />
            </div>
          </div>
        </div>
      </div>

      {/* div center  */}

      <div style={{ backgroundColor: "#FF8D41" }} className='w-full text-white px-12 py-4 flex justify-between'>
        <div className='flex flex-col text-center'>
          <h1 className='font-bold text-2xl '>8</h1>
          <h1 className='text-sm'>Years Of Expericence</h1>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='font-bold text-2xl '>459</h1>
          <h1 className='text-sm'>Sq. Meter Area</h1>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='font-bold text-2xl '>50</h1>
          <h1 className='text-sm'>Nice Rooms</h1>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='font-bold text-2xl '>3786</h1>
          <h1 className='text-sm'>Happy Visitors</h1>
        </div>
      </div>

      {/* Rooms section  */}

      <div className='flex flex-col justify-center items-center py-8 gap-4'>
        <div className='flex gap-4 items-center justify-center my-8 '>
          <div className='h-px w-12 bg-gray-600 flex'></div>
          <h1 className=' text-2xl font-regular'>About Us</h1>
          <div className='h-px w-12 bg-gray-600'></div>
        </div>
        <h1 className='text-2xl font-bold '>Explore Our <span style={{ color: '#FF8D41' }}>Rooms</span></h1>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='pb-4 w-56 bg-white flex flex-col  items-center'>
            <img src="images/Image (1).png" alt="" />
            <h1 className='text-sm text-gray-500'>Junior Suite</h1>
            <h1 className='text-gray-300 text-xs'>$150.00 / per night</h1>
          </div>
          <div className=' w-56 bg-white flex flex-col  items-center'>
            <img src="images/Image (2).png" alt="" />
            <h1 className='text-sm text-gray-500'>Junior Suite</h1>
            <h1 className='text-gray-300 text-xs'>$150.00 / per night</h1>
          </div>
          <div className=' w-56 bg-white flex flex-col  items-center'>
            <img src="images/Image (3).png" alt="" />
            <h1 className='text-sm text-gray-500'>Junior Suite</h1>
            <h1 className='text-gray-300 text-xs'>$150.00 / per night</h1>
          </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className=' w-56 bg-white flex flex-col  items-center'>
            <img src="images/Image (3).png" alt="" />
            <h1 className='text-sm text-gray-500'>Junior Suite</h1>
            <h1 className='text-gray-300 text-xs'>$150.00 / per night</h1>
          </div>

          <div className='pb-4 w-56 bg-white flex flex-col  items-center'>
            <img src="images/Image (1).png" alt="" />
            <h1 className='text-sm text-gray-500'>Junior Suite</h1>
            <h1 className='text-gray-300 text-xs'>$150.00 / per night</h1>
          </div>
          <div className=' w-56 bg-white flex flex-col  items-center'>
            <img src="images/Image (2).png" alt="" />
            <h1 className='text-sm text-gray-500'>Junior Suite</h1>
            <h1 className='text-gray-300 text-xs'>$150.00 / per night</h1>
          </div>

        </div>
      </div>

      {/* service section  */}
      <div className="text-center mt-12">
        {/* Title */}
        <p className="text-gray-500 mb-2 flex items-center justify-center">
          <span className="w-8 h-px bg-gray-400 mr-2"></span>
          Our Services
          <span className="w-8 h-px bg-gray-400 ml-2"></span>
        </p>
        <h2 className="text-3xl font-bold">
          Explore <span className="text-orange-500">Our Services</span>
        </h2>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-6 md:px-20">
          {/* Card 1 */}
          <div className="border rounded-lg p-6 text-center hover:shadow-md">
            <div className="text-orange-500 text-4xl mb-4">🏨</div>
            <h3 className="font-semibold mb-2">Rooms & Appartment</h3>
            <p className="text-sm text-gray-500">Figma ipsum component variant mask layer.</p>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className="bg-orange-500 text-white rounded-lg p-6 text-center shadow-lg">
            <div className="text-white text-4xl mb-4">🎮</div>
            <h3 className="font-semibold mb-2">Sports & Gaming</h3>
            <p className="text-sm text-white">Figma ipsum component variant mask layer.</p>
          </div>

          {/* Card 3 */}
          <div className="border rounded-lg p-6 text-center hover:shadow-md">
            <div className="text-orange-500 text-4xl mb-4">🍽️</div>
            <h3 className="font-semibold mb-2">Food & Restaurant</h3>
            <p className="text-sm text-gray-500">Figma ipsum component variant mask layer.</p>
          </div>

          {/* Card 4 */}
          <div className="border rounded-lg p-6 text-center hover:shadow-md">
            <div className="text-orange-500 text-4xl mb-4">💆</div>
            <h3 className="font-semibold mb-2">Spa & Fitness</h3>
            <p className="text-sm text-gray-500">Figma ipsum component variant mask layer.</p>
          </div>

          {/* Card 5 */}
          <div className="border rounded-lg p-6 text-center hover:shadow-md">
            <div className="text-orange-500 text-4xl mb-4">🎉</div>
            <h3 className="font-semibold mb-2">Event & Party</h3>
            <p className="text-sm text-gray-500">Figma ipsum component variant mask layer.</p>
          </div>

          {/* Card 6 */}
          <div className="border rounded-lg p-6 text-center hover:shadow-md">
            <div className="text-orange-500 text-4xl mb-4">🏋️‍♀️</div>
            <h3 className="font-semibold mb-2">GYM & Yoga</h3>
            <p className="text-sm text-gray-500">Figma ipsum component variant mask layer.</p>
          </div>
        </div>
      </div>

      {/* Testmonial section  */}

      <div className='flex flex-col items-center '>
        <p className="text-gray-500 mb-2 flex items-center justify-center pt-12">
          <span className="w-8 h-px bg-gray-400 mr-2"></span>
          Testmonial
          <span className="w-8 h-px bg-gray-400 ml-2"></span>
        </p>
        <h2 className="text-3xl font-bold">
          What People  <span className="text-orange-500">Say?</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img className="w-20 h-20 mx-auto rounded-full border-4 border-orange-400 mb-4" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client 1" />
            <h3 className="text-lg font-semibold">Amina Yusuf</h3>
            <p className="text-sm text-gray-500 mb-2">CEO, TechCare</p>
            <p className="text-gray-600 italic">"Great service! Everything was perfect and delivered on time. Highly recommended!"</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img className="w-20 h-20 mx-auto rounded-full border-4 border-orange-400 mb-4" src="https://randomuser.me/api/portraits/men/45.jpg" alt="Client 2" />
            <h3 className="text-lg font-semibold">Mohamed Ali</h3>
            <p className="text-sm text-gray-500 mb-2">Founder, Creatives</p>
            <p className="text-gray-600 italic">"Professional team with excellent communication. I loved working with them."</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <img className="w-20 h-20 mx-auto rounded-full border-4 border-orange-400 mb-4" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client 3" />
            <h3 className="text-lg font-semibold">Fatima Abdullahi</h3>
            <p className="text-sm text-gray-500 mb-2">Product Manager</p>
            <p className="text-gray-600 italic">"They made our vision come true! Amazing designs and fast delivery."</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;