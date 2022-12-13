let todoForm;

$(document).ready(function() {
    todoForm = new TodoForm("#todo-list");
});

class TodoForm {
    $form;

    constructor(selector) {
        this.$form = $(selector);
        this.install();
    }

    add(text) {
        this.$form.children("ul").append(`
        <li class="list-group-item d-flex justify-content-between align-items-center">
        ${text}
        <a href="#" class="btn-delete"><span class="badge bg-secondary rounded-pill">Delete</span></a>
        </li>
        `);
    }

    get $input() {
        return this.$form.find("input[type=text]");
    }

    install() {
        // Bind event for Add button
        this.$form.on("click", "#button-add", e => {
            let text = this.$input.val();
            this.add(text);
        });

        // Bind event for Delete badge mouseover
        this.$form.on("mouseover mouseout", ".btn-delete", e => {
            let badge = $(e.currentTarget).children(".badge");
            if(e.type === 'mouseover') {
                badge.addClass("bg-primary");
                badge.removeClass("bg-secondary");
            }
            else if (e.type === 'mouseout') {
                badge.addClass("bg-secondary");
                badge.removeClass("bg-primary");
            }
        });

        // Bind event for Delete badge click
        this.$form.on("click", "a", e => {
            $(e.currentTarget).parent().remove();
        });
    }
}