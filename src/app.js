import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "clean windows", done: false, priority: "low"},
        {name:"cut grass", done: true, priority: "high"},
        {name: "Buy bread", done: false, priority: "low"}

        ],
      newItem: {name: "", priority: "low"},
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newItem,
          done: false,
          priority:
         });
         this.newItem = {name: "", priority: "low"};
       },
         completeItem: function(index){
          this.items[index].done = true;
        }
    }
  });
});
