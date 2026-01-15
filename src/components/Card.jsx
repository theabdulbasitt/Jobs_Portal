const Card = ({ children, bg = 'bg-gray-100' }) => {
    return (
        <dev className={`${bg} p-6 rounded-lg shadow-md relative`}>
            {children}
        </dev>
    )
}

export default Card