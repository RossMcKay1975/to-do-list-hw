import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "clean windows", done: false},
        {name:"cut grass", done: true},
        {name: "Buy bread", done: false}
        ],
      newItem:"",
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newItem,
          done: false
         });
         this.newItem = "";
       },
         completeItem: function(index){
          this.items[index].done = true;
        }
    }
  });
});
