// Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio 
// oppure ciccando su un pulsante, 
// il testo digitato viene aggiunto alla lista

var app = new Vue(
    {
        el: '#root',
        data: {
            newTodo: '',
            filterTodo: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    found: true
                },
                {
                    text: 'Fare la spesa',
                    found: true
                },
                {
                    text: 'Fare il bucato',
                    found: true
                }
            ]            
        },
        methods: {
            // Add a new Todo to the list
            addTodo() {
                if (this.newTodo.length > 0) {
                    this.todos.push({
                        text: this.newTodo,
                        found: true 
                    });
                    this.newTodo = '';
                }                
            },
            removeTodo(index) {
                this.todos.splice(index, 1);
            },
            searchTodo() {
                this.todos.forEach((element) => {
                    if(element.text.toLowerCase().includes(this.filterTodo.toLowerCase())) {
                        element.found = true;
                    } else {
                        element.found = false;
                    }                    
                })
            }
            
        }
    }
);