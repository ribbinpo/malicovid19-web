import type { NextPage } from 'next'

const test:NextPage = ({data}:any) =>{
    console.log(data[0].id)
    return (
        <div>
            <h1>Test</h1>
            <p>{data[0].id}</p>
        </div>
    )
}

test.getInitialProps = async (ctx:any) =>{
    const res = await fetch("https://api.coingecko.com/api/v3/exchanges?per_page=3")
    const json = await res.json()
    console.log(json)
    return {data:json}
}
export default test