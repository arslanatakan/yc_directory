import Navbar from "../components/Navbar";


//self-closing bicimde, navbar.tsx in icerisinde export ederek burdan da import ederek cagirdik.
export default function Layout({children}: Readonly<{children: React.ReactNode}>){
    return(
        <main className="font-work-sans">
            <Navbar /> 
            {children}
        </main>
    );
}