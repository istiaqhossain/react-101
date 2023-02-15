function Item(props) {
    return (
        <div>
            <a className="inline-block bg-neutral-100 hover:bg-neutral-200 px-4 py-0.5 mb-3 rounded-md" href={props.data.url} target="_blank">{props.data.title}</a>
        </div>
    )
}

export default Item