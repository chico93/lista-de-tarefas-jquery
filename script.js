$(document).ready(function() {
    $('#tarefa-form').on('submit', function(event) {
        event.preventDefault();
        
        let task = $('#tarefa-input').val();
        if (task) {
            $('#tarefa-list').append('<ul>' + task + '</ul>');
            $('#tarefa-input').val('');
        }
    });

    $('#tarefa-list').on('click', 'ul', function() {
        $(this).toggleClass('completed');
    });
});