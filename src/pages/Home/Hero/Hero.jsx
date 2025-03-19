import bgImg from "../../../assets/home/banner-1.jpg"

const Hero = () => {
  return (
    <div className='min-h-screen bg-cover' style={{backgroundImage: `url(${bgImg})`}}>
        <div className="min-h-screen flex justify-start pl-11 text-white bg-black bg-opacity-60">
            <div>
                <div>
                    <h3 className="md:text-4xl text-2xl">We Provide</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero