import axios from 'axios'
import { useState } from 'react'

export const ChatView = () => {
   const [value, setValue] = useState([])
   const [comment, setComment] = useState('')
   const URL = 'https://61d804b5e6744d0017ba88be.mockapi.io/chat'

   const fetchData = async () => {
      const response = await axios.get(URL)
      setValue(response.data)
   }

   const createCommentToAPI = async () => {
      await axios.post(URL, { comment: comment })
   }

   const displayAllComments = () => {
      return (
         value.map((item: any) => <h1 key={Math.random()}>{item.comment}</h1>)
      )
   }

   return (
      <div>
         <input placeholder='create comment' onChange={event => setComment(event.target.value)} />
         <button onClick={() => createCommentToAPI()}>post to api</button>
         <h1>This is the chat view</h1>
         {displayAllComments()}
         <button onClick={() => fetchData()}>get all chat</button>
      </div>
   )
}