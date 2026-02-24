import './App.css'

function TwitterCard({username, name}){
    const imageSrc = `https://unavatar.io/${username}`

    return(
        <article className="tw-article">
            <header className="tw-article-header">
                <img 
                className="tw-article-header-img"
                alt="El avate demidudev" 
                src={imageSrc}>                    
                </img>
                <div className="tw-article-header-div">
                    <strong>{name}</strong>                                    
                    <span className='tw-article-header-div-span'>@{username}</span>
                </div>
            </header>
            <aside className="tw-article-aside">
                <button className="tw-article-aside-button">
                    Follow
                </button>
            </aside>
        </article>

    )
}
export default TwitterCard;