import ProjectCard from '../../components/ProjectCard';
import { useSelector, useDispatch } from 'react-redux';
import { projectsData } from '../../Data/Projects';
import { Link } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useState } from 'react';
import Login from '../Login';

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [projects, setPreojects] = useState(projectsData);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(projects);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setPreojects(items);
  }

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1 className='mb-4 text-lg font-bold text-center'>Dashboard</h1>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId='projects'>
              {provided => (
                <div
                  className='flex gap-4'
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {projectsData.map(project => (
                    <Draggable
                      key={project.id}
                      draggableId={project.id.toString()}
                      index={project.id}
                    >
                      {provided => (
                        <Link
                          key={project.id}
                          to={`/project/${project.id}`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <ProjectCard key={project.id} project={project} />
                        </Link>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Dashboard;
