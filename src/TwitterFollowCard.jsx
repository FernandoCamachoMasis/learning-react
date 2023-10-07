import { useState } from "react"

export function TwitterFollowCard ( {children, userName, initialIsFollowing} ) {

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    console.log('[TwitterFollowCard] render with userName: ', userName)
    

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing 
    ? 'tw-folllowCard-button is-following'
    : 'tw-folllowCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-folllowCard'>
            <header className='tw-folllowCard-header'>
                <img 
                className='tw-folllowCard-avatar' 
                alt="El primer avatar" 
                src={`https://unavatar.io/${userName}`}></img>
                <div className='tw-folllowCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-folllowCard-infoUserName'>@{userName}</span>
                </div>
            </header>
            
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                </button>
            </aside>
        </article>
    )
}