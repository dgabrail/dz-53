import React from 'react';

interface ToDoListProps  extends  React.PropsWithChildren{
    massage: string;
    onPostsChange?:React.ChangeEventHandler<HTMLInputElement>;
    remove:React.MouseEventHandler
}
const ToDoList: React.FC<ToDoListProps> = props => {
    return (
        <div className='to-do-list'>
            <span>{props.massage}</span>
            <button onClick={props.remove}>delete</button>
        </div>
    );
};

export default ToDoList;