import { useParams } from 'react-router-dom';
import { projectsData } from '../../Data/Projects';

const Post = () => {
  let { id } = useParams();
  console.log(id);

  let projectCard;

  projectsData.map(list =>
    list.taskCards.filter(card =>
      card.id === Number(id) ? (projectCard = card) : card
    )
  );

  console.log(projectCard);

  return (
    <div>
      <div className='relative w-full h-screen bg-transparent'></div>
      <div className='absolute w-64 m-auto mt-2 -translate-y-1/2 bg-white rounded-lg shadow-lg top-1/2 left-1/2 -translate-x-2/4'>
        <img
          className='object-cover w-full h-32 rounded-t-lg cover'
          src={projectCard.img}
          alt={projectCard.title}
        />
        <div className='p-2'>
          <p className='mb-4 text-base font-semibold text-gray-900'>
            {projectCard.title}
          </p>
          <p className='text-sm text-gray-500'>{projectCard.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
