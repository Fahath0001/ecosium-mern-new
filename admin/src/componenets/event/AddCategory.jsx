import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { backendUrl } from '../App';

const AddCategory = ({ token }) => {
  const [categoryTitle, setCategoryTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState([
    { file: null, preview: null, type: null }, // Thumbnail
    { file: null, preview: null, type: null }, // First media
  ]);
  const [categories, setCategories] = useState([]);
  const maxMedia = 10;
  const refHight = useRef();
  const [heightBox, setHeightBox] = useState(0);







  useEffect(() => {
    // Define an async function
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${backendUrl}/api/eventcategories/list-category`);
        setCategories(response.data.eventcategories);  // Save the data in state
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories(); // Call the async function
    setHeightBox(refHight.current.offsetHeight);
  }, []);

  const onSubmitEventCategoryHandler = async (e) => {
    e.preventDefault();

    try {
      //setLoading(loading);
      const formData = new FormData();
      formData.append('categoryName', categoryTitle);
      formData.append('isActive', true);
      files.forEach(item => {
        if (item.file) {
          formData.append('mediaFiles', item.file); // ✅ Must match backend
        }
      });

      const response = await axios.post(`${backendUrl}/api/eventcategories/add`, formData, { headers: { token } });


    } catch (error) {
      console.error(error);


    }

  }

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type.startsWith('video') ? 'video' : 'image';
    const newFiles = [...files];

    newFiles[index] = {
      file,
      preview: URL.createObjectURL(file),
      type: fileType,
    };

    // Auto add next box if needed
    if (index === files.length - 1 && files.length < maxMedia) {
      newFiles.push({ file: null, preview: null, type: null });
    }

    setFiles(newFiles);
  };

  const handleCancel = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };


  return (
    <>
      <div className="w-full items-start justify-between flex">
        <div
          className="w-[60%]  h-full items-start justify-start flex flex-col p-[50px] gap-[30px]"
          ref={refHight}
        >
          <h1 className='text-2xl font-semibold'>
            Add New Category
          </h1>
          <form
            onSubmit={onSubmitEventCategoryHandler}
            className=' items-start justify-start flex flex-col gap-[20px]'
          >

            {
              /* Event Category Name */
              /* Event Category Name */
              /* Event Category Name */
            }
            <div className='w-auto h-auto items-start justify-center flex flex-col gap-[5px]'>
              <p className='text-lg font-normal'>
                Event Name
              </p>
              <input
                onChange={(e) => (setCategoryTitle(e.target.value))}
                value={categoryTitle}
                type="text"
                className='w-[400px] h-[35px] border-[1px] border-black pl-4'
                placeholder='Enter your Event Name'
              />
            </div>
            {
              /* Media Section */
              /* Media Section */
              /* Media Section */
            }

            {/* Test */}

            <div className="space-y-10">
              {/* Thumbnail */}
              <div>
                <h2 className="text-lg font-semibold mb-2">Thumbnail Image <span className="text-red-500">*</span></h2>
                <label htmlFor="thumbnail" className="cursor-pointer inline-block">
                  {files[0]?.preview ? (
                    <img
                      src={files[0].preview}
                      alt="Thumbnail"
                      className="w-[300px] aspect-[16/9] object-cover border rounded"
                    />
                  ) : (
                    <img
                      src="../assets/images/upload_area.png"
                      alt="Upload Thumbnail"
                      className="w-[300px] aspect-[16/9] object-cover border rounded"
                    />
                  )}
                  <input
                    type="file"
                    id="thumbnail"
                    hidden
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, 0)}
                  />
                </label>
              </div>

              {/* Media */}
              <div>
                <h2 className="text-lg font-semibold mb-2">Media Files <span className="text-red-500">*</span></h2>
                <div className="flex flex-wrap gap-6">
                  {files.slice(1).map((item, i) => {
                    const index = i + 1;
                    return (
                      <div key={index} className="relative inline-block">
                        <label htmlFor={`media-${index}`} className="cursor-pointer block">
                          {item.preview ? (
                            item.type === 'image' ? (
                              <img
                                src={item.preview}
                                alt={`Media ${index}`}
                                className="w-[300px] aspect-[16/9] object-cover border rounded"
                              />
                            ) : (
                              <video
                                src={item.preview}
                                controls
                                className="w-[300px] aspect-[16/9] object-cover border rounded"
                              />
                            )
                          ) : (
                            <img
                              src="../assets/images/upload_area.png"
                              alt="Upload Media"
                              className="w-[300px] aspect-[16/9] object-cover border rounded"
                            />
                          )}
                        </label>
                        <input
                          type="file"
                          id={`media-${index}`}
                          hidden
                          accept="image/*,video/*"
                          onChange={(e) => handleFileChange(e, index)}
                        />

                        {/* Cancel Button (for media > index 1 only) */}
                        {index > 1 && (
                          <button
                            type="button"
                            onClick={() => handleCancel(index)}
                            className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-700"
                            title="Remove"
                          >
                            &times;
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Test */}

            <div className='mt-[20px] mb-[100px]'>

              <button
                type="submit"
                className="mt-6 px-6 py-2 bg-primary text-white rounded hover:bg-primary transition"
              >
                Submit
              </button>


            </div>
          </form>
        </div>
        <div
          className="w-[40%] h-[600px] items-start justify-start flex flex-col p-[50px] gap-[30px] overflow-hidden"
          style={{
            height: `${heightBox}px`
          }}
        >

          <h1 className='text-2xl font-semibold'>
            List of Category
          </h1>
          <div className="w-full flex flex-col items-start justify-start p-[5px] overflow-y-scroll">
            {categories.length > 0 ? (
              categories.map((item) => (
                <div key={item._id} className="w-full mb-2">
                  <div className='w-full h-full p-[5px] items-center justify-between flex bg-gray-100 border-[2px] border-gray-200 rounded-xl'>
                    <div className='w-[100px] h-[100px] rounded-xl items-center justify-between flex overflow-hidden'>
                      <img src={item.heroMedia[0].mediaUrl} alt="Category Tumbnail" />
                    </div>
                    <div className='w-[calc(100%-280px)] items-center justify-start flex'>
                      <h2 className='w-full text-xl text-wrap'>
                        {
                          item.categoryName
                        }
                      </h2>
                    </div>

                    <div className="w-[150px] h-[100px] rounded-lg bg-gray-50 border-[1px] border-gray-400 items-center justify-center flex flex-col gap-[8px]">
                      <button className='w-[85%] py-[2px] bg-primary text-lg font-medium text-white rounded-md'>
                        Edit
                      </button>
                      <button className='w-[85%] py-[2px] bg-primary text-lg font-medium text-white rounded-md'>
                        Delete
                      </button>
                    </div>
                  </div>

                </div>
              ))
            ) : (
              <p>
                Event Category is Emty, add Your Event Category
              </p>
            )}
          </div>

        </div>
      </div >
    </>
  )
}

export default AddCategory