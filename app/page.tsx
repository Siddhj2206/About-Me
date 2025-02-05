import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <Image
        src="https://explorer1.jpl.nasa.gov/assets/images/galleries/1972_BlueMarble_115334main_image_feature_329_ys_full.jpg?height=200&width=200"
        alt="Siddhant Jain"
        width={200}
        height={200}
        className="rounded-full mb-4"
      />
      <div className="max-w-2xl text-center">
        <p className="mb-4">
          Hello! I'm Siddhant Jain, an 18-year-old B.Tech student at VIT Vellore. I'm passionate about technology and
          its potential to change the world.
        </p>
        <p className="mb-4">
          As a young and ambitious individual, I'm constantly seeking new challenges and opportunities to grow both
          personally and professionally. My journey in the world of technology has just begun, and I'm excited to see
          where it takes me.
        </p>
        <p>
          When I'm not studying or working on projects, you can find me exploring new technologies, participating in
          hackathons, or contributing to open-source projects. I believe in the power of collaboration and continuous
          learning.
        </p>
      </div>
    </div>
  )
}

