"use client"

export const CODE_SNIPPET = `// Frontend Developer Portfolio
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private readonly profile = {
    name: 'Srijal Shrestha',
    role: 'Frontend Developer (Angular Specialist)',
    location: 'Nayababazar, Kathmandu',
    experience: '2+ Years',
  };

  private readonly skills = {
    frontend: ['Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    frameworks: ['Angular JS/Angular', 'Reactive Forms', 'Template-driven Forms'],
    tools: ['WordPress', 'PayPal Integration', 'Stripe Payment Gateway'],
    concepts: ['Responsive Design', 'Component Architecture', 'API Integration']
  };

  private readonly projects = [
    { name: 'Social Security Fund (SSF)', type: 'Government Web App' },
    { name: 'Soaltee Budgeting', type: 'Financial Dashboard' },
    { name: 'Hiper Brains', type: 'Recruitment Platform' }
  ];

  getProfile() {
    return this.profile;
  }

  getSkills() {
    return this.skills;
  }

  getProjects() {
    return this.projects;
  }

  getContact() {
    return {
      email: 'srijalshrestha393@gmail.com',
      phone: '+977-9869050050',
      linkedin: 'linkedin.com/in/srijal-shrestha-68b8501a0'
    };
  }
}`

export const DASHBOARD_CODE = `export default function Dashboard() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchProjects().then(data => {
      setProjects(data)
      setLoading(false)
    })
  }, [])
  
  return (
    <div className="dashboard">
      <Header />
      <ProjectGrid projects={projects} />
      <Analytics />
    </div>
  )
}`
