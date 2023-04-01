import React from 'react';

const Modal = ({ isOpen, toggleModal, projectList }) => {
  return (
    <>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-70'>
          <div className='relative w-4/5 bg-white rounded-lg h-4/5'>
            {projectList.projectImg && (
              <div className='relative h-40 overflow-hidden rounded-t-lg'>
                <img
                  src={projectList.projectImg}
                  alt=''
                  className='object-cover w-full h-full'
                />
              </div>
            )}

            <button
              onClick={toggleModal}
              className='absolute w-8 h-8 font-extrabold text-gray-900 rounded-full top-3 right-3 bg-gray-50 hover:bg-gray-200 focus:outline-none'
            >
              X
            </button>

            <div className='p-6'>
              <h2 className='mb-2 text-2xl font-bold'>
                {projectList.listName}
              </h2>
              <p className='text-gray-600'>{projectList.projectDesc}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
