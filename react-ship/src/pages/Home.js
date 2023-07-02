import { useState, useEffect } from "react";
import { findAll } from "../services/package.mjs";
import TodoListItem from '../components/todo-list-item.js'

import '../App.css'

function Home() {
    const [loading, setLoading] = useState(false)
    const [packages, setPackages] = useState([])

    const fetchData = async () => {
        setLoading(true)

        const res = await findAll()

        setPackages([...res])
        setLoading(false)
    }

    

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <section>
            <header>
                <h2>Packages</h2>
            </header>

            

            { loading &&
                <p>loading...</p>
            }

            <div className='card'>
                {packages.length > 0 && packages.map(item => (
                    <TodoListItem className='styles.t' key={item.id} item={item}/>
                ))}
            </div>
        </section>
    )
}

export default Home