// получаем доступ к элементам 

const inputField = document.querySelector('.inputField');
const inputField2 = document.querySelector('.inputField2');
const btnAdd = document.querySelector('.btnAdd');
const taskContainer = document.querySelector('.task');
const allTasksButton = document.querySelector(".allTasks");
const activeTasksButton = document.querySelector(".activeTasks");
const completedTasksButton = document.querySelector(".completedTasks");

// добавляем новую задачу

btnAdd.addEventListener('click', () => {

    // создаем новые элементы к новой задаче

    const newTask = document.createElement('div');
    const details = document.createElement('details');
    const summary = document.createElement('summary');
    const discr = document.createElement('p');
    const deleteTask = document.createElement('div');
    const check = document.createElement('span');

    // наполняем новые элементы к новой задаче

    check.innerHTML = '&#10720';
    deleteTask.innerHTML = '<img src="trash.png" alt="trash" width="30px" cursor="pointer">'
    summary.innerText = inputField.value;
        if (inputField.value.length === 0) {
            return false};
    discr.innerText = inputField2.value;
        if (inputField2.value.length === 0) {
            return false};
    // стилизуем новые элементы к новой задаче     

    newTask.classList.add('taskAdded');
    details.classList.add('itemAdded');
    discr.classList.add('itemAdded');
    check.classList.add('checkAdded');
    deleteTask.classList.add('trashBin');

    // добавляем их на страницу новые элементы к новой задаче

    taskContainer.appendChild(newTask);
    newTask.appendChild(check);
    newTask.appendChild(details);
    details.appendChild(summary);
    details.appendChild(discr);
    newTask.appendChild(deleteTask);
    
    // очищаем поле ввода

    inputField.value = "";
    inputField2.value = "";

    // отмечаем задачу выполненой

    check.addEventListener('click', () => {
        check.innerText = '✓';
        newTask.classList.toggle('taskCompleted');
        check.classList.toggle('checkCompleted');
        details.classList.toggle('itemCompleted');
        discr.classList.toggle('itemCompleted');
        newTask.classList.toggle('taskAdded');
        details.classList.toggle('itemAdded');
        discr.classList.toggle('itemAdded');
        check.classList.toggle('checkAdded');
    })

    // удаляем задачу

    deleteTask.addEventListener('click', () => {
        newTask.removeChild(check);
        newTask.removeChild(details);
        details.removeChild(summary);
        details.removeChild(discr);
        newTask.removeChild(deleteTask);
    })

})

    // сортируем задачи

    // все

    allTasksButton.addEventListener("click", ()=> {
        allTasksButton.classList.add('active');
        activeTasksButton.classList.remove('active');
        completedTasksButton.classList.remove('active');

        document.querySelectorAll(".taskAdded").forEach((item) => {
            item.style.display = "flex";
        });
        document.querySelectorAll(".taskCompleted").forEach((item) => {
            item.style.display = "flex";
        });
    });

    // активные

    activeTasksButton.addEventListener("click", ()=> {
        allTasksButton.classList.remove('active');
        activeTasksButton.classList.add('active');
        completedTasksButton.classList.remove('active');

        document.querySelectorAll(".taskAdded").forEach((item) => {
            item.style.display = "flex";
        });
        document.querySelectorAll(".taskCompleted").forEach((item) => {
            item.style.display = "none";
        });
    });

    // завершенные

    completedTasksButton.addEventListener("click", ()=> {
        allTasksButton.classList.remove('active');
        activeTasksButton.classList.remove('active');
        completedTasksButton.classList.add('active');
        document.querySelectorAll(".taskAdded").forEach((item) => {
            item.style.display = "none";
        })
        document.querySelectorAll(".taskCompleted").forEach((item) => {
            item.style.display = "flex";
        })
    });
    

