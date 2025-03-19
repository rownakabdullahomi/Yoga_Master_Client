import bgImg from "../../../assets/home/banner-1.jpg"

const Hero = () => {
  return (
    <div className='min-h-screen bg-cover' style={{backgroundImage: `url(${bgImg})`}}>
        <div className="min-h-screen flex justify-start items-center pl-11 text-white bg-black bg-opacity-60">
            <div>
                <div className="space-y-4">
                    <p className="md:text-4xl text-2xl">We Provide</p>
                    <h1 className="md:text-7xl text-4xl font-bold">Best Yoga Course Online</h1>
                    <div className="md:w-1/2">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, culpa ab numquam rem dolore velit quasi quidem aliquam doloribus reprehenderit magnam nesciunt aut dolor odit minima maxime. Dicta, unde harum!</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-5">
                        <button className="px-7 py-3 rounded-lg bg-secondary font-bold uppercase">Join Today</button>
                        <button className="px-7 py-3 rounded-lg border hover:bg-secondary font-bold uppercase">View Course</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero