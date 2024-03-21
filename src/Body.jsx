import {Route,Routes} from 'react-router-dom'
import Books from "./Books";
import Authors from "./Authors";
const Body = () => {
  return (
    <main className="p-3">
      <Routes>
          <Route path='/books' element={<Books />} />
          <Route path='/authors' element={<Authors />} />
        </Routes>
      
    </main>
  );
};
export default Body;