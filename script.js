document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Por favor, digite uma tarefa.");
            return;
        }

        // *Cria o item da lista (li)*
        const li = document.createElement('li');
        li.textContent = taskText;

        // *Cria o botão de deletar*
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Remover';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        // *Adiciona o botão de deletar ao item da lista*
        li.appendChild(deleteBtn);

        // *Adiciona o item da lista à lista de tarefas (ul)*
        taskList.appendChild(li);

        // *Limpa o campo de input*
        taskInput.value = "";
    }

    // *Adiciona a tarefa ao clicar no botão*
    addTaskBtn.addEventListener('click', addTask);

    // *Adiciona a tarefa ao pressionar a tecla "Enter"*
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});