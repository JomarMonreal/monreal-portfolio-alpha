import FloatingTitle from "@/components/FloatingTitle"
import Image from "next/image"

const Loading = () => {
  return (
  <>
    <div className="absolute pt-10 top-0 left-0 sm:w-2/4 w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center">
            <Image src={"/images/logo_portfolio.png"} alt={"Logo"} width={300} height={300} className="animate-bounce rounded-full"/>
            <FloatingTitle text={"Loading..."} tag={"h1"} className={"text-8xl"}/>
        </div>
    </div>
    <div className="h-screen invisible">Invisible</div>
  </>
  )
}

export default Loading