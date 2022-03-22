import { createStore } from "vuex";

export default createStore({
  state: {
    sabores: [
      {
        nombre: "Chocolate",
        descripcion: "Delicioso chocolate amargo de la más alta calidad 	",
        unidad: "KG",
        precio: 180,
      },
      {
        nombre: "Vainilla",
        descripcion: "Pan tradicional con escencia de vainilla natural",
        unidad: "KG",
        precio: 150,
      },
      {
        nombre: "Tres Leches",
        descripcion: "Pan bañado con una mescla de 3 leches.",
        unidad: "KG",
        precio: 180,
      },
    ],
    adornos: [
      {
        nombre: "Chantilly",
        unidad: "cm2",
        precio: 10,
      },
      {
        nombre: "Merengue",
        unidad: "cm2",
        precio: 15,
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
