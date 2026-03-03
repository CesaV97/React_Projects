import './App.css'
import{userState, useState} from 'react'

function TwitterCard({children, username, name}){
    
    const [isFollowing, setIsFollowing] = useState(false)
    
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClasename = isFollowing 
    ?'tw-article-aside-button is-following'
    :'tw-article-aside-button'

    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }

    return(
        <article className="tw-article">
            <header className="tw-article-header">
                <img 
                className="tw-article-header-img"
                alt="El avate demidudev" 
                src={`https://unavatar.io/${username}`}>                    
                </img>
                <div className="tw-article-header-div">
                    <strong>{children}</strong>                                    
                    <span className='tw-article-header-div-span'>@{username}</span>
                </div>
            </header>
            <aside className="tw-article-aside">
                <button className={buttonClasename} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>

    )
}
export default TwitterCard;