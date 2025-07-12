import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
const Home = () => {
    const [Posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const secRef = useRef(null);
    const mainref = useRef(null);
    const blogcardref = useRef([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await res.json();
                setPosts(data.slice(0, 10));
            } catch (error) {
                console.error('Error fetching posts:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!loading && secRef.current && mainref.current && blogcardref.current) {
            const ctx = gsap.context(() => {
                gsap.fromTo(
                    secRef.current,
                    { opacity: 0, y: 50 },
                    { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
                );
                gsap.fromTo(mainref.current,
                    { opacity: 0, y: 50 }, {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.Out",
                    scrollTrigger: {
                        trigger: mainref.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                    }
                },
                );
                blogcardref.current.forEach((card, i) => {
                    if (!card) return;
                    gsap.fromTo(card,
                        { scale: 0.6, rotate: -5, }, {
                        scale: 1,
                        duration: 1,
                        rotate: 1,
                        transformOrigin: 'center center',
                        scrollTrigger: {
                            trigger: card,
                            top: 'top 70%',
                            end: 'top 10%',
                            scrub: true,
                            toggleActions: 'play none none reverse',

                        }
                    }
                    )
                })
            });


            return () => ctx.revert();
        }
    }, [loading]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>
            </div>
        );
    }

    return (
        <div className="w-full " ref={secRef}>
            <section className="relative w-full h-screen overflow-hidden -mt-6">
                <video
                    src={`${import.meta.env.BASE_URL}bg-video.mp4`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
                <div className="relative z-30 flex flex-col justify-center items-center h-full text-white text-center bg-black/40">
                    <div className="text-4xl font-bold drop-shadow">Welcome to Blogpost</div>
                    <p className="mt-4 text-xl drop-shadow">
                        BlogPost — Words that move. Stories that stay.
                    </p>
                </div>
            </section>

            <main className="flex flex-col items-center w-full py-16 opacity-0 bg-black" ref={mainref}>
                <div className="grid md:grid-cols-2 gap-9 w-full max-w-8xl p-8" >
                    {Posts.map((post, i) => (
                        <div
                            key={post.id}
                            className="rounded-2xl shadow-2xl overflow-hidden bg-[#111] hover:shadow-xl border border-gray-700 transition duration-300"
                            ref={(el) => blogcardref.current[i] = el}
                        >
                            <img
                                src={`https://picsum.photos/600/300?random=${post.id}`}
                                alt="Post"
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-5">
                                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                                <p className="text-sm text-gray-400 line-clamp-3 mb-4">{post.body}</p>
                                <button className="text-blue-600 hover:underline font-medium">Read more</button>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Home;
