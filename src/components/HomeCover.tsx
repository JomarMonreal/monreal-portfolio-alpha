import FloatingTitle from "./FloatingTitle";

export function HomeCover() {
  return <section>
    <header>
      <div className="flex flex-wrap">
        <FloatingTitle text="Jomar " tag="h1" className="text-8xl"/>
        <FloatingTitle text="Monreal" tag="h1" className="text-8xl"/>
      </div>
      <div className="flex my-3">
        <div className="tag hover:bg-transparent hover:text-lime-800">Adaptive</div> 
        <div className="tag hover:bg-lime-600">Responsive</div> 
        <div className="tag w-24 hover:w-40">Flexible</div> 
      </div>
    </header>

    <p className="py-3">
      <strong>Hey there!</strong> I&#39;m Jomar P. Monreal, a Filipino enthusiastic 21st century literate with high adaptability and appreciation. As a versatile developer, I bring extensive experience in a wide range of programming languages and technologies.
    </p>


  </section>;
}


