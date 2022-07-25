import { Header } from "../components/common/Header";
import { Footer } from "../components/common/Footer";

export const Default = ({children}) => {
    return (
        <>
            <Header/>
            <main className="theme-default">
                <div className="container">
                    {children}
                </div>
            </main>
            <Footer/>
        </>
    )
}