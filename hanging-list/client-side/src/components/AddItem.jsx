import { useState } from "react"
import axios from "axios"

function AddItem() {
    const [title, setTitle] = useState('')
    const [url, setUrl] = useState('')

    function handleTitle(event) {
        setTitle(event.target.value)
    }

    function handleUrl(event) {
        setUrl(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        insertList()
    }

    async function insertList() {
        try {
            const response = await axios.post("http://localhost:3000/lists", {
                title: title,
                url: url
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="flex justify-center gap-3">
                <div>
                    <input type="text" name="title" placeholder="Title" className="outline-none border-b border-neutral-300 px-1.5 py-1 placeholder:text-black rounded-none text-sm" autoComplete="off" 
                    value={title}
                    onChange={handleTitle}
                    />
                </div>
                <div>
                    <input type="text" name="url" placeholder="URL" className="outline-none border-b border-neutral-300 px-1.5 py-1 placeholder:text-black rounded-none text-sm" autoComplete="off"
                    value={url}
                    onChange={handleUrl}
                    />
                </div>
                <div>
                    <button type="submit" className="px-2 py-1 border border-neutral-300 rounded text-sm">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddItem