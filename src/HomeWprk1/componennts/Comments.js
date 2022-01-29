import React, {useEffect, useState} from 'react';
import Commponent from "./Commponent";

const Comments = () => {
    let [comments , setComments] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    },[])
    return (
        <div className="news2">
            <ul>
                {
                    comments.map(value => <li key={value.id}><Commponent item={value}/> </li>)
                }
            </ul>
        </div>
    );
};

export default Comments;