<script>
	import Product from "./components/Product.svelte";
               
	function addToCart(event) {                       
		console.log(event);          
	}                            
                     
	function deleteFromCart(event) {          
		console.log(event);                              
	}                                
</script>                                          
                                                   
<Product                                           
  productTitle="A Book"                            
  on:add-to-cart={addToCart}                       
	on:delete-from-cart={deleteFromCart}               
/>                                                     
                                                    
                                                   