"use client";
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../_components/nav-bar'; 
import Footer from '../../_components/footer'; 

// IntersectionObserver for triggering animations when elements enter the viewport
const useOnScreen = (ref) => {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return; // Check if ref is initialized

        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        });

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref]);

    return isIntersecting;
};

const AboutUs = () => {
    // Refs for scroll animation on sections
    const heroRef = useRef(null); // Initialize with null
    const reasonsRef = useRef(null);
    const missionRef = useRef(null);
    const workRef = useRef(null);

    const heroVisible = useOnScreen(heroRef);
    const reasonsVisible = useOnScreen(reasonsRef);
    const missionVisible = useOnScreen(missionRef);
    const workVisible = useOnScreen(workRef);

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', backgroundColor: '#FFFFFF' }}>
            
            {/* Navbar */}
            <Navbar />

            {/* Hero Section */}
            <section
                ref={heroRef}
                style={{
                    textAlign: 'center',
                    padding: '4rem 2rem',
                    backgroundColor: '#FFFFFF',
                    color: '#000000',
                    borderBottom: '2px solid #f46b02',
                    transform: heroVisible ? 'scale(1)' : 'scale(0.95)',
                    opacity: heroVisible ? 1 : 0,
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}
            >
                <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Why Choose On The Go?</h1>
                <p style={{ fontSize: '1.5rem' }}>
                    We are a creative media production company with a passion for storytelling and cutting-edge technology. Discover why we're the best choice for your next project!
                </p>
            </section>

            {/* Reasons to Choose Us Section */}
            <section
                ref={reasonsRef}
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    padding: '3rem 2rem',
                    maxWidth: '1200px',
                    margin: 'auto',
                    color: '#000000',
                    transform: reasonsVisible ? 'scale(1)' : 'scale(0.95)',
                    opacity: reasonsVisible ? 1 : 0,
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}
            >
                <div style={{ flex: '1', paddingRight: '2rem', minWidth: '300px' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', color: '#000000' }}>3 Reasons to Choose Us</h2>
                    <div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000000' }}>01 <span style={{ color: '#f46b02' }}>Creative Storytelling</span></h3>
                        <p style={{ fontSize: '1.25rem', color: '#666' }}>
                            We engage and inspire your audience with clear and simple storytelling that connects deeply and leaves an impression.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000000' }}>02 <span style={{ color: '#f46b02' }}>Maximize Your Reach</span></h3>
                        <p style={{ fontSize: '1.25rem', color: '#666' }}>
                            We take your content further with custom-designed content that is optimized for various platforms, from social media to international markets.
                        </p>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: '#000000' }}>03 <span style={{ color: '#f46b02' }}>Fully Managed Process</span></h3>
                        <p style={{ fontSize: '1.25rem', color: '#666' }}>
                            We handle everything for you, from pre-production to post-production, so you can sit back while we do the hard work.
                        </p>
                    </div>
                </div>
                <div style={{ flex: '1', minWidth: '300px' }}>
                    <img
                        src="https://via.placeholder.com/600x400"
                        alt="Why Choose Us Visual"
                        style={{
                            width: '100%',
                            borderRadius: '10px',
                            border: '1px solid #f46b02',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                </div>
            </section>

            {/* Mission Section */}
            <section
                ref={missionRef}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '5rem 2rem',
                    backgroundColor: '#f46b02',
                    color: '#FFFFFF',
                    transform: missionVisible ? 'scale(1)' : 'scale(0.95)',
                    opacity: missionVisible ? 1 : 0,
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}
            >
                <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Our Mission</h2>
                <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '1rem 0' }}>
                    At <strong>On The Go</strong>, we turn ideas into visual narratives that leave lasting impressions. With a passion for pushing creative boundaries, we bring innovative concepts to life and ensure that every project meets the highest standards of quality and engagement.
                </p>
            </section>

            {/* Work Showcase Section */}
            <section
                ref={workRef}
                style={{
                    padding: '4rem 2rem',
                    maxWidth: '1200px',
                    margin: 'auto',
                    transform: workVisible ? 'scale(1)' : 'scale(0.95)',
                    opacity: workVisible ? 1 : 0,
                    transition: 'transform 0.5s ease, opacity 0.5s ease',
                }}
            >
                <div style={{ textAlign: 'center', marginBottom: '2rem', color: '#000000' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Our Work in Action</h2>
                    <p style={{ fontSize: '1.5rem', color: '#666' }}>Here’s a glimpse of the work we’ve done for our clients</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
                    <img
                        src="https://via.placeholder.com/300x200"
                        alt="Project 1"
                        style={{
                            width: '100%',
                            borderRadius: '10px',
                            border: '1px solid #f46b02',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <img
                        src="https://via.placeholder.com/300x200"
                        alt="Project 2"
                        style={{
                            width: '100%',
                            borderRadius: '10px',
                            border: '1px solid #f46b02',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                    <img
                        src="https://via.placeholder.com/300x200"
                        alt="Project 3"
                        style={{
                            width: '100%',
                            borderRadius: '10px',
                            border: '1px solid #f46b02',
                            transition: 'transform 0.3s ease',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default AboutUs;
