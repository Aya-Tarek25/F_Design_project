import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/instance";



 //Function to load project from localStorage
const loadprojectFromLocalStorage = () => {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  };
  
  // Function to save project to localStorage
  const saveprojectToLocalStorage = (projects) => {
    localStorage.setItem("projects", JSON.stringify(projects));
  };



export const getproject = createAsyncThunk("project/getAllproject", async () => {
    let data = await axiosInstance.get("https://dummyjson.com/products");
    return data.data.products;  
    
})
//  export const addproject = createAsyncThunk("project/addproject",
//     async (projectData) => {
//   let response = await axiosInstance.post(
//     'https://iti-final-be.onrender.com/messages/send/65cddc2bb3a2a89a62c70cc0',
//     projectData,
//   );
          //  console.log(' successfully:', response.data);
//   }
//   ) 

// export const editproject = createAsyncThunk(
//   "project/editproject",
//   async (projectData) => {
//     const response = await axiosInstance.put(
//       'https://iti-final-be.onrender.com/messages/send/65cddc2bb3a2a89a62c70cc0',
//       projectData
//     );
//     return response.data; 
//   }
// ); 


// export const deleteproject = createAsyncThunk(
//   "project/deleteproject",
//   async (projectId) => {
//     await axiosInstance.delete(
//       `https://iti-final-be.onrender.com/messages/send/65cddc2bb3a2a89a62c70cc0/${projectId}`
//     );
//     return projectId; 
//   }
// );


const projectSlice = createSlice({
    name: "project",
    initialState: {
        projects: loadprojectFromLocalStorage(),
        loading: true,
        err: false
    },
    reducers: {
         addproject: (state, action) => {
                state.projects.push({ ...action.payload}); 
                 saveprojectToLocalStorage(state.projects)
        },
        // removeproject: (state, action) => {
        //     state.projects.splice(index, 1);
        //          saveCartToLocalStorage(state.projects);
            
        // }

    },
    extraReducers: (builder) => {
        builder
            .addCase(getproject.pending, (state) => {
                console.log("pending")
            })
            .addCase(getproject.fulfilled, (state, action) => {
                console.log(action.payload);
                state.loading = false;
                state.projects = action.payload;
            })
            .addCase(getproject.rejected, (state, action) => {
                console.log("rejected")
                state.loading = false;
                state.err = true;
            })
            // .addCase(editproject.pending, (state) => {
          //   state.loading = true;
          // })
          // .addCase(editproject.fulfilled, (state, action) => {
          //   state.loading = false;
          //   const updatedproject = action.payload;
          //   state.projects = state.projects.map((project) =>
          //     project.id === updatedproject.id ? updatedproject : project
          //   );
          //   saveprojectToLocalStorage(state.projects);
          // })
          // .addCase(editproject.rejected, (state, action) => {
          //   state.loading = false;
          //   state.err = true;
          // })
          // .addCase(addproject.fulfilled, (state, action) => {
          //   state.projects.push(action.payload); 
          //   saveprojectToLocalStorage(state.projects);
          // })
          // .addCase(deleteproject.fulfilled, (state, action) => {
          //   const deletedprojectId = action.payload;
          //   state.projects = state.projects.filter(project => project.id !== deletedprojectId);
          //   saveprojectToLocalStorage(state.projects);
          // });
    },
})

 export const { addProject} = projectSlice.actions;

export default projectSlice.reducer;
