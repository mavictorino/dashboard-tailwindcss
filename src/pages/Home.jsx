import React from 'react'
import ProjectStatistics from '../components/ProjectStatistics'
import Platforms from '../components/Platforms'
import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    name: "Website Redesign",
    type: "Web Development",
    date: "2024-03-15",
    members: ['Alice', 'Bob', 'Charlie'],
    files: 4,
    progress: 20,
  },
  {
    name: "Mobile App Development",
    type: "Mobile Application",
    date: "2024-02-10",
    members: ['David', 'Eva', 'Frank'],
    files: 9,
    progress: 80,
  },
  {
    name: "Marketing Campaign",
    type: "Marketing",
    date: "2024-04-25",
    members: ['Grace', 'Henry', 'Ivy'],
    files: 1,
    progress: 18,
  },
  {
    name: "Product Launch",
    type: "Product Management",
    date: "2024-05-02",
    members: ['James', 'Kelly', 'Maeve'],
    files: 1,
    progress: 18,
  },
];

const Home = () => {
  return (
    <div className='p-5 '>
      <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-4'>
        <ProjectStatistics />
        <Platforms />
        <ProjectStatistics />
        <Platforms />

      </div>

      <div>
        <div className='flex justify-between items-center py-4'>
          <h1 className='text-lg font-semibold'>Current Projects</h1>
          <p className='text-sm underline text-indigo-600'>See all</p>
        </div>

        <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-8'>
          {
            projects && projects.map((project) => <ProjectCard project={project} />)
          }
        </div>
      </div>


    </div>
  )
}

export default Home