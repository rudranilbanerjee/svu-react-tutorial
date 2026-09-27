Transitive Dependency
A package which contain some other packages and also those packages will contain some other extra packages this tree of packages is called Transitive Dependency.

Benifits of parcel
1. Localhost server for development
2. Dev build.
3. HMR - Hot Module replacement
4. file watching algorith tool-- c++
5. caching faster build.
6. Image optimization
7. Minified js bundle
8. Optimized 
9. Compressed
10. Code Splitting
11. Differential Bundaling for diff diff browser
12. Clean Diagnostic
13. Error Handaling
14. HTTPS
15. Content Hashing
16. Tree shaking


// Props
// Config driven UI Architecture
// why we need to use key props in map function in react?
// why key props value always need to be unique?
// why we are not pass index value of an array as a key props value

//For the default export why we can set any name?
// what is the diff btw name exports and default exports?
//why name exports are taken as a object at the time of import?
// a varible with default export if i name export then how it will work?


## Architecture
/**
 * HeaderComponent
 * -Logo
 * -Nav Items
 * 
 * BodyComponent
 * -Search Bar
 * -Resturant container
 *    -Resturant Card
 * 
 * FooterComponent
 * Copyright
 * Links
 * 
 */

## idea of useState internal structure
 // let state;
// function useState(currVal){
//     if(state===undefined){
//         state=currVal;
//     }
//     function setState(val){
//         state=val;
//         render()
//         // this function is the most important funct6ion which update or re render the 
//         //UI with the current data 
//     }
//     return [state, setState];
// }

<!-- function Dummy(){
    const [show, setShow]=useState(true)
    return (<div>
      {show && <p>Hello</p>}
      <button onClick={()=>{setShow(false)}}>Click</button>
      <h1>Rudra</h1>
      </div>)
} -->



App
|
|--> Fiber(div)
      |
      |--->Fiber(p) 
      |
      |--->Fiber( button)
      |
      |---> Fiber(h1)

App
|
|--> div
      |
      |---> button
      |
      |---> h1

App
|
|--> Fiber(div)
      |
      |
      |--->Fiber( button)
      |
      |---> Fiber(h1)

      <div>
      <p>
      <button>
      <h1>
      </div>

      Reconciliation

      React Fiber is collect the props,children, event etc etc of a component. 

      swiggy api:- https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6218264&lng=88.40591169999999&page_type=DESKTOP_WEB_LISTING

      swiggy resturant details api:- 
      https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.6154486&lng=88.40414299999999&restaurantId=573520&catalog_qa=undefined&submitAction=ENTER