import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, User, BookOpen } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { blogPosts } from "./BlogPage";

export default function BlogPost() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    
    const post = blogPosts.find((p) => p.id === parseInt(id || ""));

    useEffect(() => {
        // Redirect trailing slash routes (e.g. /blogs/91/ -> /blogs/91) to avoid routing loop
        if (window.location.pathname.endsWith("/")) {
            navigate(window.location.pathname.slice(0, -1), { replace: true });
            return;
        }

        if (!post) return;

        // Save original metadata
        const originalTitle = document.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        const originalDescription = metaDescription ? metaDescription.getAttribute('content') : '';

        // Update Document Title
        document.title = `${post.title} | DCSRI Blog`;

        // Update Description
        if (metaDescription) {
            metaDescription.setAttribute('content', post.excerpt || post.title);
        }

        // Update Open Graph tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', post.title);

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription) ogDescription.setAttribute('content', post.excerpt || post.title);

        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage && post.image) ogImage.setAttribute('content', window.location.origin + post.image);

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        if (twitterTitle) twitterTitle.setAttribute('content', post.title);

        const twitterDescription = document.querySelector('meta[name="twitter:description"]');
        if (twitterDescription) twitterDescription.setAttribute('content', post.excerpt || post.title);

        const twitterImage = document.querySelector('meta[name="twitter:image"]');
        if (twitterImage && post.image) twitterImage.setAttribute('content', window.location.origin + post.image);

        // Scroll to top
        window.scrollTo(0, 0);

        // Restore original metadata on unmount
        return () => {
            document.title = originalTitle;
            if (metaDescription && originalDescription) {
                metaDescription.setAttribute('content', originalDescription);
            }
        };
    }, [post, navigate]);

    if (!post) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-24">
                <div className="text-center max-w-md">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h2>
                    <p className="text-gray-600 mb-8">
                        The blog post you are looking for does not exist or has been moved.
                    </p>
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition duration-300"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blogs
                    </Link>
                </div>
            </main>
        );
    }

    // Split the content into paragraphs for better typography
    const paragraphs = post.content
        .split("\n\n")
        .map((p) => p.trim())
        .filter((p) => p.length > 0);

    return (
        <main className="overflow-hidden bg-gray-50">
            <PageHero
                title={post.title}
                subtitle={`Published on ${post.date} | DCSRI Editorial`}
                backgroundImage={post.image}
                titleClassName="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground max-w-5xl mx-auto mb-6 leading-tight px-4"
            />

            <div className="max-w-4xl mx-auto py-12 px-6">
                {/* Back Button */}
                <div className="mb-8">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
                    >
                        <ArrowLeft className="w-4.5 h-4.5" />
                        Back to Blogs
                    </Link>
                </div>

                {/* Article Container */}
                <article className="bg-white rounded-3xl shadow-xl overflow-hidden p-6 md:p-12 border border-gray-100">
                    {/* Metadata Header */}
                    <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-blue-600" />
                            <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-blue-600" />
                            <span>DCSRI Editorial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-blue-600" />
                            <span>{Math.max(2, Math.ceil(post.content.split(/\s+/).length / 200))} min read</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl md:text-4xl font-extrabold text-gray-950 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Featured Image */}
                    <div className="mb-10 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-auto max-h-[500px] object-cover"
                        />
                    </div>

                    {/* Content Body */}
                    <div className="text-gray-800 leading-relaxed text-lg">
                        {paragraphs.map((para, index) => {
                            // Check for list/bullet items inside paragraph
                            const lines = para.split("\n").map(line => line.trim());
                            const hasBullets = lines.some(line => line.startsWith("- ") || line.startsWith("* ") || line.startsWith("• "));
                            
                            if (hasBullets) {
                                return (
                                    <ul key={index} className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                                        {lines.map((line, lIdx) => {
                                            const cleanLine = line.replace(/^[-*•]\s+/, "");
                                            return <li key={lIdx}>{cleanLine}</li>;
                                        })}
                                    </ul>
                                );
                            }

                            // Check for numbered subheadings (e.g., "1. Sensors and Field Devices")
                            const numberMatch = para.match(/^(\d+)\.\s+(.*)$/);
                            if (numberMatch) {
                                const [_, num, text] = numberMatch;
                                return (
                                    <h3 key={index} className="text-xl md:text-2xl font-bold text-gray-950 mt-8 mb-4 flex items-start gap-2">
                                        <span className="text-blue-600 font-extrabold">{num}.</span>
                                        <span>{text}</span>
                                    </h3>
                                );
                            }

                            // Check for headings/subheadings (short text, no ending period, title case-like)
                            const isShort = para.length < 85;
                            const noEndingPunctuation = !para.endsWith(".") && !para.endsWith("?") && !para.endsWith("!");
                            
                            if (isShort && noEndingPunctuation) {
                                return (
                                    <h2 key={index} className="text-xl md:text-2xl font-bold text-gray-950 mt-10 mb-4 border-l-4 border-blue-600 pl-4 py-1">
                                        {para}
                                    </h2>
                                );
                            }

                            // Standard Paragraph
                            return (
                                <p key={index} className="mb-6 leading-relaxed">
                                    {para}
                                </p>
                            );
                        })}
                    </div>
                </article>
            </div>
        </main>
    );
}
