import React from 'react'
import Comments from './comments.json'
import heartIcon from '../assets/like-svgrepo-com.svg'


function UserComments() {

    return (
        <div className='py-3'>
            {
                Comments.map((Comments)=>(
                    <div class="card m-2">
                        <div class="card-body">
                            <h5 class="card-title">{Comments.user.fullName}</h5>
                            <p class="card-text">{Comments.body}</p>
                            <hr/>
                            <div className='d-flex '>
                                <img src={heartIcon} className='img-fluid heartIcon'/> <p className='m-1'>{Comments.likes}</p>
                            </div>
                            <input className='form-control my-3' placeholder='Reply..' />
                        </div>
                    </div>
                ))
            }
            </div>
    )
}

export default UserComments