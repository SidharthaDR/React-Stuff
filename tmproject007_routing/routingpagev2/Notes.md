# Router in React
   ## basic way/ setting up:

     - install react-router with "npm i react-router"
  
        1. import createBrowserRouter from react-router
        
        2. then, create a const of any name and use createBrowserRouter([])
        
        => const router = createBrowserRouter([{//add objects here path: , element: ,}])

        3. then, import RouteProvider from react-router
           - in ReactDOM.createRoot: replace everything unnecessary with
              <RouterProvider router = {router} />  


- Navigate clicking on a button:
  const something = useNavigate()
    onClick= () => something("/A path")

- Dynamic Paths:

  1. in path= "something/:id" -> here :id is dynamic.

  2. useParams() gives vlaues of :id entered for that particular <page/>
    
    - eg. path: "something/:id" element: <page/>
      - then <page/> can catch ":id" entered like this.
      -  then using const a = useParams(); console.log();
      
      - xyz.com/something/1
      - - console: id: 1
       
      - xyz.com/something/2
      - - console: id: 2
       
      - xyz.com/something/DFADSF
      - - console: id: DFADSF
  
      - xyz.com/something/Daef3
      - - console: id: Daef3
    

- Achive parent and child root using Outlet(used for place holder of child root):
  - in main.jsx, select any object and inside it add your children object
  
      
      
## Recap:
    1. first we installed react-router.
    2. we created some pages.
    3. then in main.jsx we first imported "createRouterBrowser" for making our 
       router.
         const myRouter = createRouterBrowser([
           {
             path: "/",
             element: <someElement/>,
           },

           {
             path: "/other",
             element: <someOtherElement/>,
           },
           .
           .
           .
         ])

         then we put this into <RouterProvider router = {myRouter}/>

    4. We then used dynamic paths to make profile page from profiles page.
      {
            path: "/profiles/:profileId",
            element: <profilePage>
      }
        to catch :id we used "useParams()" from react-router in "profilePage" template. 
          const params = useParams();
          {params.profileId()}

          -> we implemented links in "profileSPage" using map to map and used "Link".


    5. We then added profile page into profiles page as children.
      {
        path: "/profiles",
        element: <profileSPage/>,

        children: [
          {
            path: "/profiles/:profileId",
            element: <profilePage>
          }
        ]
      }
    
    6. We then used NavLink to see if state is active "isActive"
      
      