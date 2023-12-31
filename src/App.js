import React, { useState } from 'react';
import './styles/App.css';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';
import { MySelect } from './components/UI/select/MySelect';

function App() {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: 'aa',
            body: 'bb',
        },
        {
            id: 2,
            title: 'dd 2',
            body: 'Description',
        },
        {
            id: 3,
            title: 'cc 3',
            body: 'a',
        },
    ]);

    const [selectedSort, setSelectedSort] = useState('');

    // функция обратного вызова
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    };

    return (
        <div className='App'>
            <PostForm create={createPost} />
            <hr style={{ margin: '15px' }} />
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue='Сортировка'
                    options={[
                        { value: 'title', name: 'По названию' },
                        { value: 'body', name: 'По описанию' },
                    ]}
                />
            </div>
            {posts.length ? (
                <PostList
                    remove={removePost}
                    posts={posts}
                    title='Посты про JS'
                />
            ) : (
                <h1 style={{ textAlign: 'center' }}>Посты не найдены!</h1>
            )}
        </div>
    );
}

export default App;
