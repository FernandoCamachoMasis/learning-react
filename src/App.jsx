import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
        
    {
        userName: 'taylor', 
        name: 'Taylor Pherb',
        isFollowing: true
    },
    {
        userName: 'kratos', 
        name: 'Kratos',
        isFollowing: false
    },
    {
        userName: 'mark', 
        name: 'Mark Hill',
        isFollowing: true
    }
]

export function App () {

    return (
        <section className="App"> 
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                        {isFollowing ? 'Following' : 'Follow'}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}