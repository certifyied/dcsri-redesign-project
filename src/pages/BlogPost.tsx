import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function BlogPost() {
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        window.scrollTo(0, 0);

        // 1. Remove old script if exists to prevent duplicates on route changes
        const oldScript = document.getElementById('certifyied-blog-script');
        if (oldScript) oldScript.remove();
        
        // 2. Inject the CDN script
        const script = document.createElement('script');
        script.id = 'certifyied-blog-script';
        
        // Customize the ?color= parameter to match the brand's primary HEX code
        script.src = 'https://bloggfeature.certifyied.workers.dev/adminApiBlog/api/embed?color=1d4ed8';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const existing = document.getElementById('certifyied-blog-script');
            if (existing) existing.remove();
        };
    }, [id]);

    return (
        <main className="overflow-hidden bg-gray-50 min-h-screen pt-24 pb-12 px-6">
            <div className="max-w-4xl mx-auto">
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

                {/* Container where the single blog post will load */}
                <div 
                    id="certifyied-blog-post" 
                    data-project-id="670e2135-e070-4b9c-b284-5778e361077e"
                ></div>
            </div>
        </main>
    );
}
