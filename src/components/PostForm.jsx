import React, { useState } from 'react';
import { MyInput } from './UI/input/MyInput';
import { MyButton } from './UI/button/MyButton';

export const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({ title: '', body: '' });
    };

    return (
        <form>
            {/* Управляемый компонент */}
            <MyInput
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                type='text'
                placeholder='Название поста'
            ></MyInput>
            <MyInput
                value={post.body} // двусторонее
                onChange={(e) => setPost({ ...post, body: e.target.value })} // связывание
                type='text'
                placeholder='Описание поста'
            ></MyInput>
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};
