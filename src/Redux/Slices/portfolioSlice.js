import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/instance";




const loadPortfolioFromLocalStorage = () => {
    const portfolioData = localStorage.getItem("portfolios");
    return portfolioData ? JSON.parse(portfolioData) : [];
  };
  
  const savePortfolioToLocalStorage = (portfolios) => {
    localStorage.setItem("portfolios", JSON.stringify(portfolios)); 
  };


  export const getPortfolio = createAsyncThunk("portfolio/getAllPortfolio",
    async () => {
      let data = await axiosInstance.get("https://dummyjson.com/products");
      return data.data.products;
    }
  );

//  export const addPortfolio = createAsyncThunk("portfolio/addPortfolio",
//     async (portfolioData) => {
//   let response = await axiosInstance.post(
//     'https://iti-final-be.onrender.com/messages/send/65cddc2bb3a2a89a62c70cc0',
//     portfolioData,
//   );
          //  console.log(' successfully:', response.data);
//   }
//   ) 

// export const editPortfolio = createAsyncThunk(
//   "portfolio/editPortfolio",
//   async (portfolioData) => {
//     const response = await axiosInstance.put(
//       'https://iti-final-be.onrender.com/messages/send/65cddc2bb3a2a89a62c70cc0',
//       portfolioData
//     );
//     return response.data; 
//   }
// ); 


// export const deletePortfolio = createAsyncThunk(
//   "portfolio/deletePortfolio",
//   async (portfolioId) => {
//     await axiosInstance.delete(
//       `https://iti-final-be.onrender.com/messages/send/65cddc2bb3a2a89a62c70cc0/${_Id}`
//     );
//     return portfolioId; 
//   }
// );

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState: {
       portfolios:  loadPortfolioFromLocalStorage(),
        loading: true,
        err: false
    },
    reducers: {
        // addPortfolio: (state, action) => {
        //         state.portfolios.push({ ...action.payload}); 
        //         savePortfolioToLocalStorage(state.portfolios)
        // },
        // removeportfolio: (state, action) => {
        //     state.portfolios.splice(index, 1);
        //          savePortfolioToLocalStorage(state.portfolios);
            
        // }

    },
    extraReducers: (builder) => {
        builder
          .addCase(getPortfolio.pending, (state) => {
            state.loading = true;
          })
          .addCase(getPortfolio.fulfilled, (state, action) => {
            state.loading = false;
            state.portfolios = action.payload;
          })
          .addCase(getPortfolio.rejected, (state, action) => {
            state.loading = false;
            state.err = true;
          })
          // .addCase(editPortfolio.pending, (state) => {
          //   state.loading = true;
          // })
          // .addCase(editPortfolio.fulfilled, (state, action) => {
          //   state.loading = false;
          //   const updatedPortfolio = action.payload;
          //   state.portfolios = state.portfolios.map((portfolio) =>
          //     portfolio.id === updatedPortfolio.id ? updatedPortfolio : portfolio
          //   );
          //   savePortfolioToLocalStorage(state.portfolios);
          // })
          // .addCase(editPortfolio.rejected, (state, action) => {
          //   state.loading = false;
          //   state.err = true;
          // })
          // .addCase(addPortfolio.fulfilled, (state, action) => {
          //   state.portfolios.push(action.payload); 
          //   savePortfolioToLocalStorage(state.portfolios);
          // })
          // .addCase(deletePortfolio.fulfilled, (state, action) => {
          //   const deletedPortfolioId = action.payload;
          //   state.portfolios = state.portfolios.filter(portfolio => portfolio.id !== deletedPortfolioId);
          //   savePortfolioToLocalStorage(state.portfolios);
          // });
    },
})

 export const { addPortfolio} = portfolioSlice.actions;

export default portfolioSlice.reducer;
