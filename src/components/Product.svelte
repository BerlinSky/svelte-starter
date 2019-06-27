<script>
  import { createEventDispatcher } from 'svelte';   
                                                 
  export let productTitle;                       
                                                 
  const dispatch = createEventDispatcher();
                                             
  function addToCart() {                   
    dispatch('add-to-cart');               
  }                                                  
                                                     
  function deleteFromCart() {              
    dispatch('delete-from-cart');          
  }                                        
</script>                                  
                                   
<article>                         
  <h1>{productTitle}</h1>        
    <button on:click="{addToCart}">Add to Cart</button>
    <button on:click="{deleteFromCart}">Delete from  Cart</button>
</article>                     