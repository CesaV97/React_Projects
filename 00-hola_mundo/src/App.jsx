import TwitterCard from './TwitterCard.jsx'
function App(){
 
  return(
        <section className='app'>
            <TwitterCard isFollowing username="google" >
                Google Inc
            </TwitterCard>                 
            <TwitterCard isFollowing={false} username="midudev" >
                Miguel Angel Duran
            </TwitterCard>         
        </section>
    )
}

export default App;