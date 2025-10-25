import Header from "./components/Header"
import MainContent from "./components/MainContent"
import data from "./data"



export default function App()
{
    const entries = data.map((entry) => {
        return(
            <MainContent 
                key={entry.id}
                {...entry}
            />
        )
    })

    return(
        <>
            <Header />
            <main className="container">
                {entries}
            </main>
            
        </>
    )
}