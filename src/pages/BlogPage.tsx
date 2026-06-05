import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import PageHero from "@/components/ui/PageHero";
import heroImage from "@/assets/2021_1121_002.jpg";

export const blogPosts: any[] = [];

export default function BlogPage() {
    const { slug } = useParams<{ slug: string }>();
    const location = useLocation();

    // Calculate synchronously so the correct container is rendered on the FIRST frame!
    const urlParams = new URLSearchParams(location.search);
    const blogId = slug || urlParams.get('id') || urlParams.get('slug');

    useEffect(() => {
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
    }, [location.search, slug]); // Re-run when URL changes

    return (
        <main className="overflow-hidden">
            {!blogId && (
                <PageHero
                    title="Our Blog"
                    subtitle="Insights, tutorials, and updates from our latest work"
                    backgroundImage={heroImage}
                />
            )}

            <div className={`min-h-screen ${!blogId ? "py-12" : "pt-24 pb-12"} px-6 bg-gray-50`}>
                <div className="max-w-7xl mx-auto">
                    {!blogId && (
                        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-900">
                            Blog
                        </h1>
                    )}

                    {blogId ? (
                        /* Render Single Post (triggered when ?id= or slug is present) */
                        <div className="max-w-4xl mx-auto">
                            <div id="certifyied-blog-post" data-project-id="670e2135-e070-4b9c-b284-5778e361077e"></div>
                        </div>
                    ) : (
                        /* Render Blog Grid (triggered when no query params exist) */
                        <div 
                            id="certifyied-blog-container" 
                            data-project-id="670e2135-e070-4b9c-b284-5778e361077e" 
                            data-limit="9" 
                            data-redirect-url="/blogs"
                        ></div>
                    )}
                </div>
            </div>
        </main>
    );
}
