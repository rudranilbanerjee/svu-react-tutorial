const ShimmerEffect = ()=>{
    return(
        <div className="shimmer-effect-res-container">
            {
                [1,2,3,4,5,6,7,8].map(item=>(
                    <div className="shimmer-effect-res-card" key={item}></div>
                ))
            }
        </div>
    )
}

export default ShimmerEffect;