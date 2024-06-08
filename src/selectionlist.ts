// @ts-nocheck
// creer une liste en utilisant zustand
import { create } from "zustand";

// creer un store
export const useSelectionListStore = create((set) => ({
  // liste des elements
  list: [],
  // ajouter un element
  add: (item) => set((state) => ({ list: [...state.list, item] })),
  // supprimer un element
  remove: (item) =>
    set((state) => ({ list: state.list.filter((i) => i !== item) })),
  // vider la liste
  clear: () => set({ list: [] }),
}));

// ajouter un evenement pour indiquer un éléments ajouté dans la liste
const addItemEvent = (detail: string) => {
  const event = new CustomEvent("addItem", { detail });
  window.dispatchEvent(event);
};

export const addItem = (item) => {
  const { add, list } = useSelectionListStore.getState();
  if (!list.includes(item)) {
    add(item);
    addItemEvent("add:" + item.name);
  }
};

export const removeItem = (item) => {
  useSelectionListStore.getState().remove(item);
  addItemEvent("remove: " + item.name);
};

export const clearList = () => {
  useSelectionListStore.getState().clear();
  addItemEvent("clear");
};

export const getList = () => {
  return useSelectionListStore.getState().list;
};
export const getListLength = () => {
  return useSelectionListStore.getState().list.length;
};
