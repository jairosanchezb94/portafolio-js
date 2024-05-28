import React, { useEffect, useState } from 'react';
import { db } from '../../data/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './portfolio.css';

const Portfolio = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'reps'));
                const projectsData = querySnapshot.docs.map(doc => doc.data());
                setProjects(projectsData);
            } catch (error) {
                console.error("Error fetching projects:", error);
            }
        };

        fetchProjects();
    }, []);

    return (
        <section id="portfolio">
            <h2>Proyectos</h2>
            <div className="container portafolio__container">
                {projects.length === 0 ? (
                    <p>No projects found.</p>
                ) : (
                    projects.map((project, index) => (
                        <article key={index} className="portafolio__item">
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="portfolio__item-topics">
                                {project.topics.map((topic, i) => (
                                    <span key={i} className="topic">
                                        {topic}
                                    </span>
                                ))}
                            </div>
                            <div className="portafolio__item-cta">
                                <a
                                    href={project.html_url}
                                    className="btn"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                                {project.homepage && (
                                    <a
                                        href={project.homepage}
                                        className="btn btn-primary"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Homepage
                                    </a>
                                )}
                            </div>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
};

export default Portfolio;
