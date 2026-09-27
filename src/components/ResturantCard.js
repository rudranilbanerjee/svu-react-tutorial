import {memo} from "react";
import { resturantImgUrl } from "../utils/resturantDetails";
const ResturantCard = ({resData}) => {
    const {info} = resData;
    const {cloudinaryImageId,name,avgRating, cuisines,costForTwo,locality,sla} = info;
    const {lastMileTravelString, slaString} = sla;
    console.log(info)
    // console.log("Hello from ResturantCard component")
    return (
        <div className="res-card">
            <div className="res-img">
                <img style={{width: "200px",}} src={resturantImgUrl+cloudinaryImageId} />
            </div>
            <div className="res-details">
                <h3>{name}</h3>
                <h4>{avgRating}</h4>
                <h5>{slaString}</h5>
            </div>
            <h4 style={{overflowWrap: "break-word"}}>{cuisines.join(',')}</h4>
            <h4>{costForTwo}</h4>
            <h4>{locality}</h4>
            <h4>{lastMileTravelString}</h4>
        </div>
    )
}

export default memo(ResturantCard);