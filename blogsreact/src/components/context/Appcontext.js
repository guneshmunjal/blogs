import { createContext, useState } from "react";
import { baseUrl } from "../../baseUrl";

export const AppContext = createContext();

 export function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [totalpages, settotalPages] = useState([null]);

  async function fetchBlogData(page = 1) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;
    try {
      const result = await fetch(url);
      const output = await result.json(); // converting the result to json format . this is a necessary step otherwise you will
      // encouneter errors
      console.log(output);
      setPage(output.page);
      setPosts(output.posts);
      settotalPages(output.totalpages);
    } catch (error) {
      console.log("error is coming please try later");
      setPage(1);
      setPosts([]);
      settotalPages([null]);
    }
    setLoading(false);
  }

  function changePage(page){
    setPage(page);
    fetchBlogData(page)

  }

  const value = {
    loading,
    setLoading,
    page,
    setPage,
    posts,
    setPosts,
    totalpages,
    settotalPages,
    fetchBlogData,
    changePage
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
