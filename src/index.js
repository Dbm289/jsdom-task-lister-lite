document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form');
  const list = document.getElementById('tasks');

  form.addEventListener('submit', addTask);

  function addTask(e){
    e.preventDefault();

    const newTaskDescription = document.getElementById('new-task-description').value;
      console.log(newTaskDescription);

      const li = document.createElement('li');

      li.appendChild(document.createTextNode(newTaskDescription));

      list.appendChild(li);
  }
});
