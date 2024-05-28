import React, { useEffect, useState } from 'react';
import './portfolio.css'

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    const token = process.env.REACT_APP_GITHUB_TOKEN;
    const username = process.env.REACT_APP_GITHUB_USERNAME;

    useEffect(() => {
      const fetchRepos = async () => {
          try {
              const response = await fetch(`https://api.github.com/users/${username}/repos`, {
                  headers: {
                      'Authorization': `token ${token}`
                  }
              });
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              const projects = await Promise.all(data.map(async (repo) => {
                let readmeImage = null;
                try {
                    const readmeResponse = await fetch(`https://api.github.com/repos/${username}/${repo.name}/readme`, {
                        headers: {
                            'Authorization': `token ${token}`,
                            'Accept': 'application/vnd.github.v3.raw'
                        }
                    });
                    if (readmeResponse.ok) {
                        const readmeText = await readmeResponse.text();
                        const imageMatch = readmeText.match(/!\[.*?\]\((https:\/\/user-images\.githubusercontent\.com\/.*?)\)/);
                        if (imageMatch) {
                            readmeImage = imageMatch[1];
                        }
                    }
                } catch (readmeError) {
                    console.error('Error fetching README:', readmeError);
                }
                return {
                    name: repo.name,
                    html_url: repo.html_url,
                    description: repo.description,
                    image: readmeImage,
                    topics: repo.topics || [],
                    homepage: repo.homepage || null
                };
            }));
            setProjects(projects);
        } catch (error) {
            console.error('Error fetching projects:', error);
        }
    };

    fetchRepos();
}, [username, token]);

    return (
      <section id="portfolio">
            <h2>Proyectos</h2>
            <div className="container portafolio__container">
                {
                    projects.map((project, index) => (
                        <article key={index} className="portafolio__item">
                            {project.image && (
                                <div className="portafolio__item-image">
                                    <img src={project.image} alt={project.name} className="readme-image" />
                                </div>
                            )}
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="portfolio__item-topics">
                                {project.topics.map((topic, i) => (
                                    <span key={i} className="topic">{topic}</span>
                                ))}
                            </div>
                            <div className="portafolio__item-cta">
                                <a href={project.html_url} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Github</a>
                                {project.homepage && (
                                    <a href={project.homepage} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Homepage</a>
                                )}
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    );
};

export default Portfolio;
