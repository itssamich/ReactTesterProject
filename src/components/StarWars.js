import React, {useState, useEffect} from 'react'


export default function StarWars(){
    const [results, setResults] = useState();
    const [pageNum, setPageNum] = useState(1);

    useEffect(() => {
        console.log(pageNum)
        fetch(`https://swapi.dev/api/people/?page=${pageNum}`)
        .then((response) => response.json())
        .then((json) => setResults(json))
        .catch(console.error)
    }, [pageNum])

    if(!results){
        return <p>Loading Data...</p>
    }

    const nextPage = () => setPageNum(pageNum + 1)
    const prevPage = () => {
        if(pageNum > 1){
            setPageNum(pageNum - 1)
        }
    }


    return(
        <>
            <div className='container'>
                <ul>
                    {results.results.map((r, i) => {
                        let index = (i+1) + (10 * (pageNum-1))
                        return <li key={index}>{r.name}</li>
                    })}
                </ul>
                <button onClick={prevPage}>
                    Prev Page
                </button>
                <button onClick={nextPage}>
                    Next Page
                </button>
            </div>
        </>
    )
}