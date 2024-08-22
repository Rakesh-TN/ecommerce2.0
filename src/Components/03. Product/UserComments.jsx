import React, { useEffect, useState } from 'react'

function UserComments() {
    const [Comment, setComment] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/comments')
            .then(response => response.json)
            .then(data => setComment(data))
            .catch(err => console.log(err))
    })
    return (
        <div className='py-3'>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
        </div>
    )
}

export default UserComments