import DarkMode from "../Dashboard/Navbar/DarkMode";


const Layout = ({children}) =>{
    return(
        // <div className="w-screen h-screen bg-gray-300 flex dark:bg-slate-800">
        <div className="w-screen h-screen bg-gray-300 flex dark:bg-custombgBlack">
            {children}
            <div className="absolute end-12 top-6">
                <DarkMode/>
            </div>  
        </div>
    )
}

export default Layout;