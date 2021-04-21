import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import axios from "axios";
import router from "../router/index";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    auth: "",
    user: "",
    wanted_pref_id: "",
    wanted_type: "",
    area:"ー",
  },
  mutations: {
    auth(state, payload) {
      state.auth = payload;
    },
    user(state, payload) {
      state.user = payload;
    },
    logout(state, payload) {
      state.auth = payload;
    },
    changeUserData(state, payload) {
      state.user.profile = payload;
    },
    changeWantedPre(state, payload) {
      state.wanted_pref_id = payload;
    },
    changeWantedType(state, payload) {
      state.wanted_type = payload;
    },
    changeArea(state, payload) {
      state.area = payload;
    }
  },
  actions: {
    async login({ commit }, { email, password }) {
      const responseLogin = await axios.post(
        "https://desolate-chamber-25914.herokuapp.com/api/login",
        {
          email: email,
          password: password,
        }
      );
      const responseUser = await axios.get(
        "https://desolate-chamber-25914.herokuapp.com/api/user",
        {
          params: {
            email: email,
          },
        }
      );
      commit("auth", responseLogin.data.auth);
      commit("user", responseUser.data.data[0]);
      router.replace("/home");
    },
    /*logout({ commit }) {
      axios
        .post("https://desolate-chamber-25914.herokuapp.com/api/logout", {
          auth: this.state.auth,
        })
        .then((response) => {
          console.log(response);
          commit("logout", response.data.auth);
          router.replace("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    changeUserData({ commit }, { profile }) {
      commit("changeUserData", profile);
    },*/
    changeWantedPre({commit},{wanted_pref_id}) {
      commit("changeWantedPre",wanted_pref_id);
    },
    changeWantedType({commit},{wanted_type}) {
      commit("changeWantedType",wanted_type);
    },
    changeArea({commit},{area}) {
      commit("changeArea",area);
    }
  },
});