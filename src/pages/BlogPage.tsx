import React, { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "How to Build a Modern Web App",
        excerpt: "Learn how to build scalable and modern web applications using MERN stack.",
        content:
            "In this guide, we will walk through building a modern web application using MongoDB, Express, React, and Node.js. You'll learn about project structure, API integration, authentication, and deployment strategies.",
        image: "https://source.unsplash.com/600x400/?coding",
        date: "March 20, 2026",
    },
    {
        id: 2,
        title: "Top UI/UX Trends in 2026",
        excerpt: "Explore the latest UI/UX trends that are shaping digital experiences.",
        content:
            "UI/UX trends in 2026 focus on minimalism, accessibility, and immersive experiences. From glassmorphism to AI-driven personalization, designers are pushing boundaries to create engaging interfaces.",
        image: "https://source.unsplash.com/600x400/?design",
        date: "March 18, 2026",
    },
    {
        id: 3,
        title: "React Performance Tips",
        excerpt: "Boost your React app performance with these practical tips.",
        content:
            "Improve performance by using memoization, lazy loading, code splitting, and avoiding unnecessary re-renders. Tools like React DevTools can help identify bottlenecks.",
        image: "https://source.unsplash.com/600x400/?reactjs",
        date: "March 15, 2026",
    },
];

import PageHero from "@/components/ui/PageHero";
import heroImage from "@/assets/2021_1121_002.jpg";

export default function BlogPage() {
    const [selectedPost, setSelectedPost] = useState(null);

    return (
        <main className="overflow-hidden">
            <PageHero
                title="Our Blog"
                subtitle="Insights, tutorials, and updates from our latest work"
                backgroundImage={heroImage}
            />

            <div className="min-h-screen py-10 px-4">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-5">
                                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                    <h2 className="text-xl font-semibold mb-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <button
                                        onClick={() => setSelectedPost(post)}
                                        className="text-blue-600 font-medium hover:underline"
                                    >
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {selectedPost && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
                        <div className="bg-white rounded-2xl max-w-2xl w-full p-6 relative animate-fadeIn">
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                            >
                                ✕
                            </button>

                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-56 object-cover rounded-lg mb-4"
                            />

                            <p className="text-sm text-gray-500 mb-2">
                                {selectedPost.date}
                            </p>

                            <h2 className="text-2xl font-bold mb-4">
                                {selectedPost.title}
                            </h2>

                            <p className="text-gray-700 leading-relaxed">
                                {selectedPost.content}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
