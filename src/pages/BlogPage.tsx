import blogImage1 from "@/assets/blog/IMG_0913_(1).jpg";
import blogImage2 from "@/assets/blog/slide2.jpg";
import React, { useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "The Future of Industrial Automation in Kerala: Opportunities for Engineers",
        excerpt: "Explore the growing opportunities for engineers in Kerala's industrial automation sector.",
        content: `
The growth of Industrial automation in Kerala is changing the way industries operate and creating exciting career opportunities for engineers. With rapid technological advancements and increasing industrial demand, automation has become a key part of modern manufacturing, production, and process industries. As companies aim to improve efficiency, reduce human error, and increase productivity, automation technologies are becoming essential across Kerala. For aspiring engineers, gaining the right skills through the Best Automation Training in Kochi Kerala can open doors to a promising and rewarding career.

Industrial automation involves the use of advanced technologies such as Programmable Logic Controllers (PLC), Supervisory Control and Data Acquisition (SCADA), robotics, sensors, and Variable Frequency Drives (VFD). These technologies help industries automate their processes, monitor systems in real time, and maintain high levels of productivity and safety. Because of this transformation, many students and professionals are now enrolling in PLC training in Kerala and SCADA training in Kerala to gain the knowledge needed to work in automation-driven industries.

Kerala is gradually becoming a hub for automation-based industries. Manufacturing units, food processing companies, power plants, and oil and gas industries are increasingly adopting automation systems to remain competitive. This shift has created a growing demand for professionals who understand industrial automation technologies. Many organizations are looking for engineers trained in PLC programming, SCADA systems, robotics automation, and industrial networking.

Another important factor driving the growth of Industrial automation in Kerala is the rise of specialized companies providing automation solutions. Today, there are several firms recognized as the Best industrial automation company in Kerala, offering services such as factory automation, robotics integration, and control system design. These companies play a crucial role in helping industries upgrade their infrastructure and adopt smart manufacturing technologies.

Automation service providers also function as Factory automation system integrators in Kerala, designing and implementing automated production lines and intelligent control systems. These system integrators work closely with industries to analyze production needs and install automation equipment that improves efficiency and reduces downtime. This creates multiple career opportunities for engineers specializing in automation technologies.

Another important sector within industrial automation is the supply of components such as Variable Frequency Drives and control panels. Many companies operate as a VFD supplier in Kochi, providing essential automation components used in motors, pumps, and industrial machines. In addition, there are several businesses functioning as Control panel manufacturer in Kerala and Panel Manufacturer in Kochi, designing electrical panels that control automated machinery and industrial systems. Engineers with knowledge of panel design, PLC programming, and automation control systems are highly valued in these industries.

The demand for automation engineers is expected to increase significantly in the coming years as industries move toward Industry 4.0 and smart manufacturing. Technologies such as robotics, artificial intelligence, and IoT-based monitoring systems are becoming more common in modern factories. Because of this trend, the role of a Robotics automation company in Kerala is also expanding, creating more opportunities for engineers who specialize in robotics and advanced automation systems.

To take advantage of these opportunities, engineers need proper training and hands-on experience with automation tools and technologies. This is where professional training institutes play an important role. Enrolling in the Best Automation Training in Kochi Kerala helps students gain practical skills in PLC programming, SCADA systems, robotics automation, and industrial control systems. These training programs often include real-time projects and industrial exposure, helping students become job-ready.

Programs like PLC training in Kerala and SCADA training in Kerala are especially important because PLC and SCADA systems form the backbone of most industrial automation processes. Engineers who understand these technologies can work in a wide range of industries including manufacturing, energy, infrastructure, and process automation.

In conclusion, the future of Industrial automation in Kerala is extremely promising. As industries continue to modernize and adopt advanced technologies, the demand for skilled automation professionals will continue to grow. With proper technical training, practical experience, and knowledge of automation systems, engineers can build successful careers in this rapidly expanding field. For those who are passionate about technology and innovation, automation offers one of the most exciting career paths in the modern industrial world.
    `,
        image: blogImage1,
        date: "March 20, 2026"
    },
    {
        id: 2,
        title: "Why Industrial Automation Skills Are Essential for Modern Engineers",
        excerpt: "Explore the latest UI/UX trends that are shaping digital experiences.",
        content:
            `In today’s fast-changing industrial world, engineers are expected to possess more than theoretical knowledge. Modern industries require professionals who understand automation technologies that improve efficiency, productivity, and safety. The rise of Industrial automation in Kerala has made automation skills one of the most valuable competencies for engineering graduates. For students and professionals who want to build a successful career, enrolling in the Best Automation Training in Kochi Kerala can provide the technical knowledge and hands-on experience required in modern industries.

Industrial automation refers to the use of control systems such as Programmable Logic Controllers(PLC), Supervisory Control and Data Acquisition(SCADA), robotics, sensors, and computer- based monitoring systems to operate industrial processes automatically.These technologies help industries reduce human error, improve production speed, and maintain consistent product quality.Because of these advantages, industries across sectors such as manufacturing, energy, oil and gas, and infrastructure are rapidly adopting automation solutions.

One of the most important skills modern engineers must learn is PLC programming.PLC systems are widely used to control machines and industrial processes in factories.Through PLC training in Kerala, engineers can learn how to design, program, and troubleshoot automated control systems used in real industrial environments.These skills are highly demanded because PLC technology forms the backbone of most automated production lines.

Another essential technology in automation is SCADA.SCADA systems are used to monitor industrial equipment and processes from a centralized control room.With SCADA training in Kerala, engineers learn how to collect real - time data from machines, analyze system performance, and control industrial operations efficiently.SCADA technology is widely used in industries such as power generation, water treatment, and manufacturing plants.

        Kerala’s industrial sector is also experiencing rapid growth in automation services.Many companies operate as the Best industrial automation company in Kerala, providing automation solutions for factories, energy plants, and industrial facilities.These companies design and install advanced automation systems that increase productivity and reduce operational costs.Because of this growth, the demand for trained automation engineers continues to rise.

Another growing area in automation is robotics.A Robotics automation company in Kerala helps industries implement robotic systems for tasks such as assembly, packaging, material handling, and quality inspection.Robotics improves production speed and precision while reducing manual labor.Engineers who understand robotics integration and automation control systems have excellent career opportunities in this sector.

Automation also involves integrating multiple systems to create fully automated production lines.Companies working as Factory automation system integrator in Kerala design and implement solutions that connect machines, sensors, and control systems.Engineers working in these companies need strong knowledge of PLC programming, industrial communication networks, and system integration.

In addition to system integration, automation industries also require hardware and electrical infrastructure.Many businesses operate as a VFD supplier in Kochi, providing Variable Frequency Drives used to control motor speed and improve energy efficiency in industrial equipment.These devices play a critical role in modern automation systems.

    Similarly, electrical panel design is another important part of automation projects.A Control panel manufacturer in Kerala and Panel Manufacturer in Kochi design electrical control panels that manage industrial machinery and automation systems.Engineers with skills in control panel design, wiring, and automation programming are highly valued in these industries.

For engineering graduates, learning automation technologies provides a strong competitive advantage in the job market.Automation training programs focus on practical skills such as PLC programming, SCADA configuration, robotics control, and industrial communication systems.These programs help engineers gain real - world experience working with automation equipment used in modern factories.

Enrolling in the Best Automation Training in Kochi Kerala allows students to gain hands - on experience with automation systems, preparing them for careers in manufacturing, energy, infrastructure, and smart factories.Training programs like PLC training in Kerala and SCADA training in Kerala help engineers develop the practical skills required to design, maintain, and troubleshoot industrial automation systems.

In conclusion, automation skills have become essential for modern engineers because industries are rapidly moving toward smart manufacturing and digital control systems.The growth of Industrial automation in Kerala is creating new opportunities for engineers who understand advanced automation technologies.By gaining proper training and technical expertise, engineers can build successful careers in automation, robotics, and industrial control systems while contributing to the future of modern industry`,
        image: blogImage2,
        date: "March 18, 2026",
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

            <div className="min-h-screen py-12 px-6">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                        Blog
                    </h1>

                    {/* Blog Cards Grid */}
                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                        {blogPosts.map((post) => (
                            <div
                                key={post.id}
                                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
                            >
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-64 md:h-72 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                    <h2 className="text-2xl font-semibold mb-3">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-5">{post.excerpt}</p>
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

                {/* ✅ Updated Modal */}
                {selectedPost && (
                    <div
                        className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 md:p-8 rounded-2xl overflow-hidden"
                        onClick={() => setSelectedPost(null)}
                    >
                        {/* Modal Container */}
                        <div
                            className="bg-white rounded-3xl w-full md:max-w-4xl max-h-[90vh] overflow-y-auto p-8 relative shadow-xl animate-fadeIn"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="absolute top-5 right-5 text-gray-500 hover:text-black text-2xl font-bold"
                            >
                                ✕
                            </button>

                            {/* Image */}
                            <img
                                src={selectedPost.image}
                                alt={selectedPost.title}
                                className="w-full h-64 md:h-80 object-cover rounded-xl mb-6"
                            />

                            {/* Content */}
                            <p className="text-sm text-gray-500 mb-3">
                                {selectedPost.date}
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mb-5">
                                {selectedPost.title}
                            </h2>

                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {selectedPost.content}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
