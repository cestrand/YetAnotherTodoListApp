$(document).ready(function() {
    console.log("hi");

    TodoForm.install();
});

const TodoForm = {
    add: function(text) {
        $("#todo-list ul").append(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
        ${text}
        <a href="#"><span class="badge bg-secondary rounded-pill">Delete</span></a>
        </li>
        `)
    },
    todoInput: function() {
        return $("#todo-list div input[type=text]");
    },
    install: function() {
        $("#todo-list #button-add").on("click", function(e) {
            let $todoInput = TodoForm.todoInput();
            let text = $todoInput.val();
            TodoForm.add(text);
        })

        $("#todo-list * .badge").hover(function(e) {
            $(this).addClass("bg-primary");
            $(this).removeClass("bg-secondary");
        }, function(e) {
            $(this).addClass("bg-secondary");
            $(this).removeClass("bg-primary");
        })
    }

}