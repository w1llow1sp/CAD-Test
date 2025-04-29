'use client'
import Link from "next/link";

export default function SubmitPage  ()  {
    return (
        <>
            <h1>
                its Submit page
            </h1>
            <Link href="/">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Go home</button>
            </Link>
        </>
    )
}
