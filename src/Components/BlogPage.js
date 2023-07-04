import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardPost from './CardPost';

export default function BlogPage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Fetch blog data from the API
        axios.get('https://smoky-arabia.com/react_api_backend.php?api=blogs')
            .then(response => {
                setBlogs(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="row mb-2">
            <h1>Blog Page</h1>
            {blogs.map((blog) => (
                <CardPost key={blog.id} blog={blog} />
            ))}
        </div>
    );
}
