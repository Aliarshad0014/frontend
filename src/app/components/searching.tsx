import React from 'react';

const SearchForm: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center p-8 rounded-lg w-screen max-h-1/2 bg-cover bg-center" style={{ backgroundImage: "url('https://img.freepik.com/free-vector/orange-question-mark-background-with-text-space_1017-27394.jpg?t=st=1719640939~exp=1719644539~hmac=db1d9ee2fe0693bb6ffe6b171990a8373347d884f24a17f005e4d54bc358040d&w=740')" }}>
      <div className="absolute inset-0 bg-opacity-80 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-black text-center">Enter what you are searching for</h1>
        <form className="space-y-4">
          <div className="flex flex-wrap justify-center">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-1/2 px-2 mb-4">
                <select className="w-full p-2 border border-x-0 border-t-0 border-black bg-transparent text-white">
                  <option value="" className='text-bold text-white'>Select an option</option>
                  <option value="option1" className='text-bold text-white'>Option 1</option>
                  <option value="option2" className='text-bold text-white'>Option 2</option>
                  <option value="option3" className='text-bold text-white'>Option 3</option>
                </select>
              </div>
            ))}
            <div className="w-full px-2 mb-4">
              <input type="text" className="w-full p-2 border border-gray-500 border-x-0 border-t-0  text-black placeholder-gray-500" placeholder="Enter your name" />
            </div>
            <div className="w-full px-2 mb-4">
              <input type="email" className="w-full p-2 border border-gray-500 border-x-0 border-t-0 text-black placeholder-gray-500" placeholder="Enter your email" />
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="bg-black text-white p-2 rounded-md mt-4 duration-500 transition-all hover:bg-yellow-500 w-1/2">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;
