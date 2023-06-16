import { Header } from "./components/Header"
import { Blog } from "./components/Blog"
import { Pagination } from "./components/Pagination"
import { useContext, useEffect } from "react"
import { AppContext } from "./components/context/Appcontext"
//import { Appcontext } from "./components/context/Appcontext"

export default function App() {


const {fetchBlogData}=useContext(AppContext);

useEffect( () => {
  fetchBlogData();
},[])

  return (
<div  className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
  <Header/>
  <Blog/>
  <Pagination/>
</div>

  )
}
