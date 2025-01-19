"use client";

import { useState } from "react";

export default function Home() {
    const [data, setData] = useState(null);
    // useEffect(() => {
    //     const data = fetch("http://localhost:3001/api");
    //     const json = data.then((res) => res.json());

    //     console.log(json);
    // }, []);

    const handleFetch = async () => {
        const baseUrl =
            process.env.NODE_ENV === "production"
                ? "https://next-hono-turborepo-2-0-api.vercel.app"
                : "";
        const data = await fetch(baseUrl + "/api");
        const json = await data.json();

        console.log(json);
        setData(json.message);
    };

    return (
        <>
            {data && (
                <>
                    <div>{data}</div>
                </>
            )}
            <button onClick={handleFetch}>button</button>
        </>
    );
}
