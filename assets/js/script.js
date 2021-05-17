/*Descrizione: Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.
Bonus Far comparire gli indirizzi email solamente quando sono stati tutti generati.  */
const app = new Vue ({
  el:'#app',
  data:{
    arrEmail:[],
  },
  mounted(){
    this.callApi('https://flynn.boolean.careers/exercises/api/random/mail')
  },
  methods:{
    callApi(url){
      axios.get(url)
      .then((resp)=>{
        console.log(resp)
        this.arrEmail.push(resp.data.response)
        console.log(this.arrEmail)
        if(this.arrEmail.length < 10){
          this.callApi(url)
        }
      })
      .catch((err)=>{
        console.log(err);
      })
    },
    
  }
})