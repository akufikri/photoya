import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* start: hero sections */}
      <div className="h-[50vh] bg-fuchsia-50 flex items-center">
        <div className="max-w-[1080px] mx-auto flex flex-col items-center justify-center h-full w-full px-4">
          {/* Logo / Badge */}
          <div className="flex items-center -rotate-3 gap-2 bg-gradient-to-l from-fuchsia-400 to-fuchsia-300 w-fit p-2 rounded-lg mb-4">
            <Image
              src={"/assets/icons/ic-camera-with-flash.svg"}
              width={20}
              height={20}
              alt="Photoya Logo"
            />
            <span className="font-semibold text-neutral-50">#Photoya</span>
          </div>

          {/* Headline */}
          <h1 className="font-extrabold text-4xl sm:text-5xl text-center text-neutral-900 leading-tight">
            Abadikan Momen Seru Kamu, Langsung!
          </h1>

          {/* Subheadline */}
          <p className="mt-2 text-center text-neutral-700 text-lg sm:text-xl max-w-md">
            Ambil foto keren, tambahkan efek & template, lalu bagikan ke
            teman-temanmu dengan mudah.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button
              size={"lg"}
              className="font-semibold cursor-pointer text-lg h-12 bg-gradient-to-r from-primary to-fuchsia-300 hover:scale-105 transition-transform duration-200"
            >
              Coba Sekarang
            </Button>
          </div>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#fdf4ff"
          fillOpacity="1"
          d="M0,224L60,224C120,224,240,224,360,186.7C480,149,600,75,720,80C840,85,960,171,1080,192C1200,213,1320,171,1380,149.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>
      {/* start : templates */}
    </div>
  );
}
