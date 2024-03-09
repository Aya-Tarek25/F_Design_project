import React,{useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProject } from '../../../Redux/Slices/projectSlice';
import './AddProject.scss'
function AddProject() {
  const loc = useLocation();
  console.log(loc.state);
  const dispatch = useDispatch();
  const [projectData, setProjectData] = useState({
    projectName: '',
    description: '',
    category: '',
    
  });
  const [inputs, setInputs] = useState(['']);

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  const handleRemoveInput = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };
  const handleChange = (e) => {
    setProjectData({ ...projectData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProject(projectData));
   
  };

  return (
    <div className='container'>
      <div className='titlepage'>  
        <h2>Add Project</h2>
        <button className=' explain'>How to add a project</button>
        </div>
      
        <div className='addProjectBox'>
        <form method='post' onSubmit={handleSubmit}>
           <div>
          <label htmlFor="projectName">Project Name</label>
          <em className='clr-red'></em>
          <input
            type="text"
            id="projectName"
            name="projectName"
            className='form-control' 
            required
            placeholder='add project name' 
            maxLength='60'
            value={projectData.projectName}
            onChange={handleChange}
          />
        </div>
            <div >
            <label htmlFor='description'>Project Description</label>
            <em className='clr-red'></em>
            <textarea
            id="description"
            name="description"
            className='form-control'
            required placeholder='Enter details and description of the project and specify the tasks to be completed'
            value={projectData.description}
            onChange={handleChange}
          ></textarea>
           </div>
          <div>
          <label htmlFor="category">Category</label>
          <em className='clr-red'></em>
          <input
            type="text"
            id="category"
            className='form-control'  
            name="category"
            value={projectData.category}
            onChange={handleChange}
          />
        </div>
            <div >
              <label htmlFor='upload'>Explanatory files</label>
              <div className='upload form-control'>
           
              <button type='button'  className='btn btn-outline-secondary'  value='addfiles' id='upload' ><i className="fa-solid fa-upload"></i> add image or vedio</button>
               <p>Upload Files</p>
            </div>
            </div>
            <div>
            <label>Expected Budget</label>
            <em className='clr-red'></em>
            <input
            type="text"
            id="expectedbudget"
            className='form-control' 
            required
             placeholder='add expected budget' 
            name="expectedbudget"
            value={projectData.budget}
            onChange={handleChange}
          />
            </div>
           
            <div>
            <label>Delivery Duration</label>
            <em className='clr-red'></em>
            <input
            type="text"
            id="deliveryduration"
            className='form-control'  
            required 
            placeholder='add duration'
            name="deliveryduration"
            value={projectData.deliveryduration}
            onChange={handleChange}
          />
            </div>
          
            <div className="addfield">
             <label className='me-4'>Add New Field</label>
             {inputs.map((input, index) => (
            <div key={index}>
             <input
            type="text"
            className='newinput '
            value={input}
            onChange={(e) => handleInputChange(index, e.target.value)}
             />
              <button type="button"  onClick={() => handleRemoveInput(index)} className="btn-close close" aria-label="Close"></button>
              {/* <button className='addbtn' onClick={() => handleRemoveInput(index)}><i className="fa-solid fa-xmark"></i></button> */}
           </div>
            ))}
      <button className='addbtn newfield' onClick={handleAddInput}>Add Question</button>
    </div>
            <div>
            <button type='submit' className='addbtn btn  me-2 ' value='save'>Post Now</button>
            <button type='submit' className='addbtn btn' value='draft'>Save Draft</button>
            </div>
            </form>
            
            <div className='explaination'>
              <div  className='advices'>
                <h4>Start completing your project</h4>
                <p>You can complete your project in the way you want through a freelancer. Enter the project details, budget, and expected duration for it to be reviewed and published for free. After that, it will appear to freelancers on the projects page and they will submit their offers on it so you can choose the offer that suits you best and the freelancer will begin implementing the project.</p>
              </div>
              <div  className='advices'>
                <h4>An Design website that guarantees your rights</h4>
                <p>The Independent website acts as an intermediary between you and the freelancer you hire to implement your project. Only after the freelancer finishes implementing the entire project will the amount be transferred to his account.
                </p>
              </div>
              <div  className='advices'>
                <h4>Tips for a successful business</h4>
              <ul>
              <li>Explain all the details and tasks that need to be accomplished</li>
              <li>Fill out all the fields and provide examples of what you want to do</li>
              <li>Break a project and large tasks into several small phases</li>
              </ul>
                </div>
              </div>
       
        </div>
       
        </div>
        

  )
}

export default AddProject