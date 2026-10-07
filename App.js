import ReactDOM from "react-dom/client";
import "./style.css";
import HeaderComponent from "./src/components/HeaderComponent.js";
import BodyComponent from "./src/components/BodyComponent.jsx";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import AboutComponent from "./src/components/AboutComponent.jsx";
import ContactUs from "./src/components/ContactUs.jsx";
import ErrorComponent from "./src/components/ErrorComponent.jsx";
import AboutErrorComponent from "./src/components/AboutErrorComponent.jsx";
import ResturantDetails from "./src/components/ResturantDetails.jsx";
// const App = () => {
//     return (
//         <BrowserRouter>
//             <div className="main">
//                 <HeaderComponent />
//                 <Routes>
//                     <Route path="/" element={<BodyComponent />} />
//                     <Route path="/about" element={<AboutComponent />} />
//                     <Route path="/contact" element={<ContactUs />} />
//                 </Routes>
//             </div>
//         </BrowserRouter>
//     )
// }

const AppLayout = () => {
    return (
        <div className="main">
            <HeaderComponent />
            {
                /**
                 * if path / then BodyComponent
                 * else if path /about then AboutComponent
                 * else path /contact then ContactComponent
                 * 
                 */
            }
            <Outlet />
        </div>
    )
}
// console.log("====>",<App />)

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorComponent />,
        children: [
            {
                index:true,
                element: <BodyComponent />,
            },
            {
                path: '/about',
                element: <AboutComponent />,
                errorElement: <AboutErrorComponent />
            },
            {
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path:"/resturant/:id",
                element:<ResturantDetails/>,
            }
        ]
    },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);

