import {useState} from 'react';
import './App.css'

export default function App() {

    const [flag, setFlag] = useState<string> ("section1");
    return (
        <>
            <header>
                <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'row', gap: '20px'}}>
                    <li onClick={()=>{setFlag("section1")}}>secion1</li>
                    <li onClick={()=>{setFlag("section2")}}>secion2</li>
                </ul>
            </header>

            {
                flag === "section1" ?
                    <p>section1</p> :
                    <main>
                        <p>section not 1</p>
                        <p>section not 1</p>
                        <p>section not 1</p>
                        <p>section not 1</p>
                        <p>section not 1</p>
                    </main>
            }
        </>
    )
}
