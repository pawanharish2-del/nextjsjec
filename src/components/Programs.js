"use client";
import React from 'react';
import Link from 'next/link';
import '@/styles/Programs.css';

const programs = [
    { type: 'B.Tech', name: 'Civil Engineering (60 seats)', path: '/department/Civil-Engineering' },
    { type: 'B.Tech', name: 'Computer Science Engineering (180 seats)', path: '/department/Computer-Science-Engineering' },
    { type: 'B.Tech', name: 'Computer Science (Artificial Intelligence) (120 seats)', path: '/department/Computer-Science-Engineering-AI' },
    { type: 'B.Tech', name: 'Electrical Engineering (60 seats)', path: '/department/Electrical-Engineering' },
    { type: 'B.Tech', name: 'Electronics & Communication Engineering (30 seats)', path: '/department/Electronics-Communication-Engineering' },
    { type: 'B.Tech', name: 'Mechanical Engineering (60 seats)', path: '/department/Mechanical-Engineering' },
    { type: 'M.Tech', name: 'Computer Science Engineering (18 seats)', path: '/department/MTech' },
    { type: 'M.Tech', name: 'Digital communication (18 seats)', path: '/department/MTech' },
    { type: 'M.Tech', name: 'Power system (18 seats)', path: '/department/MTech' },
    { type: 'M.Tech', name: 'Production engineering (18 seats)', path: '/department/MTech' },
    { type: 'M.Tech', name: 'Environmental Engineering*(18 seats)', path: '/department/MTech' },
];

function Programs() {
    return (
        <section className="schools">
            <div className="schools-content">
                <h2 className="schools-title">Programs Offered</h2>
                <div className="schools-grid">
                    {programs.map((program, index) => (
                        <Link
                            href={program.path}
                            className="school-item"
                            key={index}
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="school-info">
                                <p className="program-type">{program.type}</p>
                                <h3 className="program-name">{program.name}</h3>
                            </div>
                            <span className="arrow">→</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Programs;