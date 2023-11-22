import React,{useState} from "react";
import Filter from "./Component/Filter";
import MovieList from "./Component/MovieList";
import BasicModal from "./Component/addMovie";
import Movie from "./Movie";


function App() { 

  const [movies , setMovies] = useState(Movie)
  const [search , setSearch] = useState("")
  const [ran , setRan] = useState (1)
  console.log("this srach ", ran)

 
  const add =(NewMov)=>{
    // console.log("test : " ,NewMov)
    setMovies([...movies , NewMov])
  }
  
  
  return (
  
    <div className="App">

      <Filter setSearch={setSearch} setRan={setRan}/>
      <BasicModal obj={add}/>
      <MovieList Movie={movies}  search={search} ran={ran} />
       


    </div>
  );
}

export default App;


