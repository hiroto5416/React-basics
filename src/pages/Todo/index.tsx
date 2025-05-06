import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Todo = () => {

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/")}>戻る</button>
    </div>
  )
}
