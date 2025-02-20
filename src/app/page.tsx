import Nav from "@/components/Nav";

//icons
import { FaSearch } from "react-icons/fa";

interface posts{
  id: number;
  title: string;
  body: string;
}

async function fetchData() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=c37dafbc9c724e7482dfd90378a4d202`);
  const data = await res.json();
  return data.articles;
}

export default async  function Home(){
  const data = await fetchData();

  return (
    <div className="maincontainre">
      <Nav/>
      
      <div className="contentSectrion w-full h-auto bg-black flex flex-col justify-start items-center gap-10">
        <h1 className="text-white text-6xl">Blog App</h1>
        
        <div className="Searchbar w-[80%] lg:w-[60%] h-[50px] bg-white rounded-xl p-5 flex justify-start items-center">
          <input className="w-[95%] h-[45px]" placeholder="Search for blogs"/>
          <button className="h-[45px] w-[45px]"
          >
            <FaSearch className="h-[30px] w-[40px]"/></button>
        </div>

        {
          data.map((curElem) => {
            return(
              <div key={curElem.id} className="content p-5 w-[95%] lg:w-[80%] h-auto bg-slate-400 rounded-xl flex flex-col gap-5 cursor-pointer">
              <h1 className="text-black text-xl lg:text-3xl">{curElem.title}</h1>
              <p className="text-base lg:text-xl">Summary:<br/><span className="text-md">{curElem.description}</span></p>
              <h2>Published Date: {curElem.publishedAt}</h2>
              <button className="text-base bg-white w-[120px] h-[30px] rounded-lg">View Content</button>
            </div>
            )
          })
        }
      </div>

      {/* <Footer/> */}
      </div>
  );
}




