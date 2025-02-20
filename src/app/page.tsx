import Nav from "@/components/Nav";

export default function Home(){
  return (
    <div className="maincontainre">
      <Nav/>
      
      <div className="contentSectrion w-full h-[500px] bg-black flex flex-col justify-start items-center">
        <h1 className="text-white mb-10 text-5xl">Blog App</h1>
        <div className="content p-5 w-[95%] lg:w-[80%] h-[200px] bg-slate-400 rounded-xl">
          <h1>Title</h1>
          <p>Summary: Summary</p>  //Dedicated ma chai also add content
          <h2>Date of post</h2>
        </div>
      </div>

      {/* <Footer/> */}
      </div>
  );
}
