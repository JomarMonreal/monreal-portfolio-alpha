import FloatingTitle from "@/components/FloatingTitle";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="sm:m-28 m-10 w-2/4 h-screen">
            <div className="flex flex-wrap">
                <FloatingTitle text={"Oops! "} tag={"h1"} className={"text-8xl"}/>
                <FloatingTitle text={"This "} tag={"h1"} className={"text-8xl"}/>
                <FloatingTitle text={"page "} tag={"h1"} className={"text-8xl"}/>
                <FloatingTitle text={"doesn't "} tag={"h1"} className={"text-8xl"}/>
                <FloatingTitle text={"exist."} tag={"h1"} className={"text-8xl"}/>
            </div>
            <FloatingTitle text={"Error 404: Page not Found"} tag={"h1"} className={"text-4xl"}/>
            <Link href={"/"}>
                <button>Go Back to Home</button>
            </Link>
        </div>
    );
  }
  