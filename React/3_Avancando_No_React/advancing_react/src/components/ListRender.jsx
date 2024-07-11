import { useState } from 'react'

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Josias"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: 27 },
        { id: 2, name: "Pedro", age: 21 },
        { id: 3, name: "José", age: 39 },
    ])

    const deleteRandom = () => {

        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id)
        )

    }

    return (
        <div>
            {/* 4- render sem key */}
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>

            {/* 5 - render com key */}

            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.age} anos
                    </li>
                ))}
            </ul>
            { /* 6 - previus state */}

            <button onClick={deleteRandom}>Delete random user</button>

        </div>
    )
}

export default ListRender