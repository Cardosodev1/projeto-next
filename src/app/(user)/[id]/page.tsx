interface UserPageProps {
    params: {
        id: string
    }
}

export default function({ params }: UserPageProps) {
    const { id } = params

    return(
        <div>
            <h1>User Page</h1>
            <p>This is the user page for {id}</p>
        </div>
    )
}