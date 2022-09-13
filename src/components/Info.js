import Profilepic from "../images/profilepic.jpg"

function Info(){
    return (
        <div className="bg-gray-800 text-white">
            {/* Picture here -- About me */}
            <div className="grid md:grid-cols-3">
                <div className="my-10 ml-10 col-span-1">
                    <img src={Profilepic} alt="profile" className='rounded-full max-h-56 max-w-56 mx-auto'></img>
                </div>
                <div className="my-10 mr-4 ml-10 col-span-2">
                    <p>I'm Jacob Williams. I am a junior studying Software Engineering with a minor in CIT through BYU-Idaho. I currently live in Provo, Utah and am looking to become a penetration tester.</p>
                    <p>I want to grow stronger in the cyber community by helping others protect themselves from legitimate threats. Through becoming a pentester I hope to learn and put my skills to good use.</p>
                </div>
            </div>
            {/* Top three projects */}
            <div className="ml-10 pb-10">
                <h2>Projects</h2>
                <p>Here are a few of the projects I have created in and out of school. These projects are mainly geared towards web development as it was my work for a short period of time.</p>
                <div>
                    <p className="font-semibold leading-3 mt-8"><u>Daydream Car Rental</u></p>
                    <p className="">This was a short gig that I did to see how far I could get in creating a website from scratch and having no more than absolute basic knowledge in the web development world.</p>
                    <a href="https://daydream-consumer/pages/index.tsx">Daydream</a>
                </div>
                <div>
                    <p className="font-semibold leading-3 mt-8"><u>Weather Forecast</u></p>
                    <p>My first project where the teacher didn't hold my hand as I put together a weather website hitting precise criteria.</p>
                    <a href="https://wjacobb.github.io/lesson-11/weather/index.html">Relevant Weather</a>
                </div>
                <div>
                    <p className="font-semibold leading-3 mt-8"><e>Scoots Scooter Rentals</e></p>
                    <p className="mt-0 line">This was a one week final project for a class that I had to plan and program from start to finish with next to no guidelines and several criteria.</p>
                    <a href="https://wjacobb.github.io/scoots/home.html">Scoots Scooter Rentals</a>
                </div>
            </div>
            {/* Downloadable paper resume */}
            {/* Downloadable cover letter */}
            <div>

            </div>
            {/* Future ambitions and plans */}
        </div>
    )
}
export default Info;