import React from 'react';

function Filter({filterData, category, setCategory }) {
    function filterHandler(title){
        setCategory(title);
    }

    return (
        <div className='flex flex-wrap max-w-max justify-center space-x-4 gap-y-4 mx-auto py-4 w-11/12 '>
            {filterData.map((data) => {
                return (
                    <button className={`text-lg px-2 py-1 rounded-md bg-gray-800 text-white font-medium hover:bg-opacity-40 border-2 transition-all duration-300 hover:underline`}
                    onClick={() => filterHandler(data.title)}>
                        {data.title}
                    </button>
                );

            })}

        </div>
    )
}

export default Filter;
