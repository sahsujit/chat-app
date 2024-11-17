import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";


const initialState = {
    sideBar:{
        open:false,
        type:"CONTACT"
    },
    snackbar: {
      open: null,
      severity: null,
      message: null,
    },
    users: [], // all users of app who are not friends and not requested yet
  all_users: [],
  friends: [], // all friends
  friendRequests: [],
}


const slice = createSlice({
    name:"app",
    initialState,
    reducers:{
        toggleSideBar(state){
            state.sideBar.open = !state.sideBar.open;
        },
        updateSideBarType(state, action){
            state.sideBar.type = action.payload.type;
        },
        openSnackBar(state, action) {
          console.log(action.payload);
          state.snackbar.open = true;
          state.snackbar.severity = action.payload.severity;
          state.snackbar.message = action.payload.message;
        },
        closeSnackBar(state) {
          console.log("This is getting executed");
          state.snackbar.open = false;
          state.snackbar.message = null;
          state.snackbar.severity = null;
        },
        updateUsers(state, action) {
          state.users = action.payload.users;
        },
        updateAllUsers(state, action) {
          state.all_users = action.payload.users;
        },
        updateFriends(state, action) {
          state.friends = action.payload.friends;
        },
        updateFriendRequests(state, action) {
          state.friendRequests = action.payload.requests;
        },

    }
})


export default slice.reducer;


export function ToggleSidebar() {
    return async (dispatch, getState) => {
      dispatch(slice.actions.toggleSideBar());
    };
  }
  export function UpdateSidebarType(type) {
    return async (dispatch, getState) => {
      dispatch(slice.actions.updateSideBarType({ type }));
    };
  }



export const closeSnackBar = () => async (dispatch, getState) => {
  dispatch(slice.actions.closeSnackBar());
};

export const showSnackbar =
  ({ severity, message }) =>
  async (dispatch, getState) => {
    dispatch(
      slice.actions.openSnackBar({
        message,
        severity,
      })
    );

    setTimeout(() => {
      dispatch(slice.actions.closeSnackBar());
    }, 4000);
  };




  export function FetchUsers() {
    return async (dispatch, getState) => {
      await axios
        .get(
          "/user/get-users",
  
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getState().auth.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          dispatch(slice.actions.updateUsers({ users: response.data.data }));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }
  // export function FetchAllUsers() {
  //   return async (dispatch, getState) => {
  //     await axios
  //       .get(
  //         "/user/get-all-verified-users",
  
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${getState().auth.token}`,
  //           },
  //         }
  //       )
  //       .then((response) => {
  //         console.log(response);
  //         dispatch(slice.actions.updateAllUsers({ users: response.data.data }));
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  // }
  export function FetchFriends() {
    return async (dispatch, getState) => {
      await axios
        .get(
          "/user/get-friends",
  
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getState().auth.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          dispatch(slice.actions.updateFriends({ friends: response.data.data }));
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }
  export function FetchFriendRequests() {
    return async (dispatch, getState) => {
      await axios
        .get(
          "/user/get-requests",
  
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${getState().auth.token}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          dispatch(
            slice.actions.updateFriendRequests({ requests: response.data.data })
          );
        })
        .catch((err) => {
          console.log(err);
        });
    };
  }
  