import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../components/Modal';
import { projectsData } from '../../Data/Projects';

const Project = () => {
  const [isOpen, setIsOpen] = useState(false);
  let { id } = useParams();

  let projectList;
  projectsData.map(list =>
    list.id === Number(id) ? (projectList = list) : list
  );

  const toggleModal = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='relative w-full h-screen bg-white rounded-lg shadow-lg'>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          toggleModal={toggleModal}
          projectList={projectList}
        />
      )}
      <img
        className='object-cover w-full h-64 cover'
        src={projectList.projectImg}
        alt={projectList.listName}
      />
      <div className='p-2'>
        <p className='mb-2 text-base font-semibold text-gray-900'>
          {projectList.listName}
        </p>
        <p className='text-sm text-gray-500'>{projectList.projectDesc}</p>
      </div>
      <div className='m-2 rounded-lg bg-slate-200 w-fit'>
        <h2 className='px-4 pt-4'>Tasks</h2>
        <div className='flex items-center gap-4 p-4'>
          {projectList.taskCards.map(task => (
            <div
              key={task.id}
              className='w-64 mt-2 rounded-lg shadow-lg cursor-pointer'
              onClick={toggleModal}
            >
              <img
                className='object-cover w-full h-32 rounded-t-lg cover'
                src={task.img}
                alt={task.title}
              />
              <div className='p-2 bg-white rounded-b-lg'>
                <p className='mb-4 text-base font-semibold text-gray-900'>
                  {task.title}
                </p>
                <p className='text-sm text-gray-500'>{task.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
