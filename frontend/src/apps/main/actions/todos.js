export function loadTodos() {
  return {
    type: "LOAD_TODOS",
    promise: httpClient => httpClient.get("/api/todos.json")
  };
}

export function addTodo(name) {
  return {
    type: "ADD_TODO",
    promise: httpClient => httpClient.post("/api/todos.json", {
      name
    })
  };
}

export function editTodo(id, name) {
  return {
    type: "EDIT_TODO",
    promise: httpClient => httpClient.put(`/api/todos/${id}.json`, {
      name
    })
  };
}

export function removeTodo(id) {
  return {
    type: "REMOVE_TODO",
    promise: async (httpClient) => {
      await httpClient.delete(`/api/todos/${id}.json`);
      return {id};
    }
  };
}

