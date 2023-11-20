const { createApp } = Vue

createApp({
  data() {
    return {
      mail: []
    }
  },
  methods: {
    generaMail(){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp =>{
            console.log(resp.data)
            if(resp.data.success){
                for (let i = 0; i <= 10; i++) {
                    console.log("SONO NEL FOR");
                    this.mail[i] = resp.data.response
                    
                    console.log(this.mail);

            }
                
            }
            return 

        });
    }

  }
  
}).mount('#app')