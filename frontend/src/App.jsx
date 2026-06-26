import { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);

    const getdata = async () => {
        const data = await fetch(
            'https://apkbackend-iota.vercel.app/api/users',
        );
        console.log(data);
    };

    useEffect(getdata, []);
    return (
        <>
            <form action="/api/adduser" method="post">
                <input
                    type="text"
                    placeholder="username"
                    name="username"
                    required
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                />
                <br />
                <br />
                <input type="mail" placeholder="mail" name="mail" required />
                <br />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default App;
