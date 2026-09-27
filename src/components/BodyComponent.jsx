// import {resDetails} from "../utils/resturantDetails";
import ResturantCard from "./ResturantCard"
import { memo, useState, useCallback, useEffect } from 'react';
import ShimmerEffect from "./Shimmer";
export const BodyComponent = () => {
    // let listOfResturant = resDetails;
    // super power of reaact
    // useState hook is a state management of react. this is a normal javascript function.
    // React.useState()
    // useState()

    const [listOfResturant, setListOfResturant] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchText, setSearchText]=useState("")

    // const update = useCallback(()=>{
    //     console.log("Hi, how are you?",listOfResturant)
    // },[listOfResturant]);

    // console.log("Hello from parent component")

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        console.log('effect', listOfResturant)
    }, [listOfResturant])



    const fetchData = async () => {
        // const data = await fetch('https://www.swiggy.com/dapi/homepagev2/getCards?lat=22.6154486&lng=88.40414299999999&pageLimit=15')
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6154486&lng=88.40414299999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        setListOfResturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setSearchResult(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const fetchSearchQuery =()=>{
        console.log('searchText',searchText)
        if (searchText==='') setSearchResult(listOfResturant)
        const data = listOfResturant.filter(item=> item.info.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log(data)
        setSearchResult(data);
    }

    return (
        <div className="body">
            <div>Search</div>
            <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
            <button onClick={()=>fetchSearchQuery()}>Search</button>
            <button className="top-rated-btn"
                onClick={() => {
                    const resData = listOfResturant.filter((res) => res.rating > 4);
                    console.log("listOfResturant", listOfResturant)
                    setListOfResturant(resData)
                }}
            >Top Rated Restaurants</button>
            {
                searchResult.length === 0 ? <ShimmerEffect /> : <div className="res-container">
                    {
                        searchResult.map((res, index) => {
                            return <ResturantCard key={res.info.id}
                                resData={res} />
                        })
                    }
                </div>
            }
            {/* <ChildComp update={update}/> */}
        </div>
    )
}

const ChildComp = memo(({ listOfResturant }) => {
    console.log("Hello from child component")
    return (<div>Hello</div>)
})

export default BodyComponent;