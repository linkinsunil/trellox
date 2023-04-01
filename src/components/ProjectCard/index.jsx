import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <div className='flex flex-col items-center py-2 bg-white borde w-72'>
      <h2>{props.project.listName}</h2>
      {props.project.taskCards.map(task => (
        <div key={task.id} className='w-64 mt-2 rounded-lg shadow-lg'>
          <img
            className='object-cover w-full h-32 rounded-t-lg cover'
            src={task.img}
            alt={task.title}
          />
          <div className='p-2'>
            <p className='mb-4 text-base font-semibold text-gray-900'>
              {task.title}
            </p>
            <p className='text-sm text-gray-500'>{task.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
