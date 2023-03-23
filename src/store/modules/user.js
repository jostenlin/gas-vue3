const state = () => ({
  // user:null
  user : {
          email:'abc@123.com', 
          verified:true, 
          role:'student', 
          stu_no:123, 
          displayName:'Kevin'
        }
});

const getters = {
  user: (state) => {
    return state.user;
  },
  // 經過google認證
  isSignin: (state) => {
    if (state.user) return true;
    return false;
  },
  // 已和學號綁定
  isVerify: (state) => {
    if (state.user.stu_no) return true;
    return false;
  },
  // 授權角色
  role: (state) => {    
    if (state.user) return state.user.role;
    return null;
  },
  // displayName
  displayName:(state)=>{
    if (state.user) return state.user.displayName;
    return null;
  },
  // email
  email:(state)=>{
    if (state.user) return state.user.email;
    return null;
  }
};

const actions = {

};

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
