import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Header from "./Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
             <Sidebar />
          </div>
          <div className="col-md-9">
            <Body />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
