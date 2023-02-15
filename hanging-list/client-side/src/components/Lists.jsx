import { useEffect, useState } from "react"
import axios from "axios"
import Item from "./Item"
import AddItem from "./AddItem"

function Lists() {
    const [lists, setLists] = useState([])

    async function fetchLists() {
        try {
            const response = await axios.get("http://localhost:3000/lists")
            setLists(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchLists()
    }, [])

    return (
        <>
            <h1 className="text-center text-3xl font-medium">Hanging Lists</h1>
            <div className="mt-5">
                <AddItem />
            </div>
            <div className="mt-5">
                {lists.map((list, index) =>
                    <Item key={index} data={list} />
                )}
            </div>
        </>
    )
}

export default Lists;