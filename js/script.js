
const { createApp } = Vue;

createApp({

  data(){

    return{

      todoList: [

        {
          text:'bucato',
          done: false
        },
        {
          text:'spesa',
          done: false
        },
        {
          text:'ripasso',
          done: false
        }
      ],

      newTask: [

        {
          text : '',
          done: false
        }
      ],

      errorMsg: '',

    }
  },

  methods: {

    addTask(){

      if(this.newTask.text.length >= 5){
        this.todoList.unshift(this.newTask)
        this.newTask = ''
        this.errorMsg = ''
      }else{
        this.errorMsg = 'attenzione il testo è troppo corto'
      }
    },

    eliminaTask(indice){

      this.errorMsg = ''

      if(this.todoList[indice].done){
        this.todoList.splice(indice, 1)
      }else{
        this.errorMsg = 'attenzio devi compiere la task'
      }

    },

    doneTask(myTask){
      myTask.done = true
    }

  }
}).mount('#app');