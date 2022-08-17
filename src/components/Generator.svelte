<script>
   import {onMount} from 'svelte'
   



let advice;
let id;

// onMount(async () => {
//   const res = await fetch("https://api.adviceslip.com/advice");
//   const data = await res.json();
//   advice = data.slip.advice;
//     id = data.slip.id;
// })

const getAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  
    advice = data.slip.advice;
    id = data.slip.id;
    console.log(data);
  
}

onMount(() => {
  getAdvice();
});




</script>

<main>
  
 
 
  <h2>Advice #{id}</h2>

  <p class="quote">{advice}</p> 



  <button on:click={getAdvice} >New</button>


</main>

<style>
  button{
    color: green;
    border: 1px solid green;
    border-radius: 5px;;
    height: 40px;
    width: 60px;
  }
  button:hover{
    border: 2px solid red;
    color: red;
  }

</style>