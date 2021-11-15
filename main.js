const app = Vue.createApp({
    data() {
        return {
            bulan: '',
            subject:'',
            textNote:'',
            editedTask: null,
            tasks: [
                
            ]
        }
    },
    methods: {
        submitTask(){
            if(this.bulan.length === 0) return;

            if(this.editedTask === null){
                this.tasks.push({
                    bulan: this.bulan,
                    subject: this.subject,
                    textNote: this.textNote
                });
            }
            else{
                this.tasks[this.editedTask].bulan = this.bulan;
                this.tasks[this.editedTask].subject = this.subject;
                this.tasks[this.editedTask].textNote = this.textNote;
                this.editedTask = null;
            }

            this.bulan = '';
            this.subject = '';
            this.textNote = '';
        },
        
        deleteTask(index){
            this.tasks.splice(index, 1);
        },

        editTask(index){
            this.bulan = this.tasks[index].bulan;
            this.subject = this.tasks[index].subject;
            this.textNote = this.tasks[index].textNote;
            this.editedTask = index;
        },
    }
})