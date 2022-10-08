<template>
  <div>
      <h1 class="h3 mb-4 text-center">Browse Our Collection Of Books</h1>
      <div class="w-75 mx-auto">
          <ProductCard v-for="product in products" 
            :checkoutCart='checkoutCart' 
            @add-to-cart="$emit('add-to-cart', product.id)" 
            @increase-quantity="$emit('increase-quantity', product.id)"
            @decrease-quantity="$emit('decrease-quantity', product.id)"
            v-bind:key="product.id" 
            :product="product"/>
      </div>
  </div>
</template>

<script>
import ProductCard from '../components/widgets/ProductCard.vue'
export default {
  name: 'HomeView',
  props: {
    checkoutCart: Array,
  },
  components: {
    ProductCard
  },
  data() {
    return {
      products: [],
    }
  },
  created() {
      this.products = [
        {
          id: 1,
          title: "Sherlock Holmes",
          author: "Arthur Conan Doyle",
          price: 15.99,
          date: '1986-11-01',
          coverType: 'Paperback',
          image: "https://dynamic.indigoimages.ca/books/0553212419.jpg",
          description: 'Since his first appearance in Beeton’s Christmas Annual in 1887, Sir Arthur Conan Doyle’s Sherlock Holmes has been one of the most beloved fictional characters ever created. Now, in two paperback volumes, Bantam presents all fifty-six short stories and four novels featuring Conan Doyle’s classic hero--a truly complete collection of Sherlock Holmes’s adventures in crime!'
        },
        {
          id: 2,
          title: "Fairy Tail",
          author: "Stephen King",
          price: 27.99,
          date: '2022-07-06',
          coverType: 'Hardcover',
          image: "https://dynamic.indigoimages.ca/v1/books/books/1668002175/1.jpg",
          description: 'Charlie Reade looks like a regular high school kid, great at baseball and football, a decent student. But he carries a heavy load. His mom was killed in a hit-and-run accident when he was ten, and grief drove his dad to drink. Charlie learned how to take care of himself—and his dad. When Charlie is seventeen, he meets a dog named Radar and her aging master, Howard Bowditch, a recluse in a big house at the top of a big hill, with a locked shed in the backyard. Sometimes strange sounds emerge from it.'
        },
                {
          id: 3,
          title: "The Atlas Six",
          author: "Olivie Blake",
          price: 34.99,
          date: '2022-03-01',
          coverType: 'Hardcover',
          image: "https://dynamic.indigoimages.ca/v1/books/books/1250854512/1.jpg",
          description: 'Olivie Blake is the pseudonym of Alexene Farol Follmuth, a lover and writer of stories. She has penned several indie SFF projects, including the webtoon Clara and the Devil with illustrator Little Chmura and the BookTok-viral Atlas series. As Alexene, she is the author of the young adult rom-com My Mechanical Romance. She lives in Los Angeles with her husband, new baby, and rescue pit bull.'
        }
      ]
    },
    emits: ['add-to-cart', 'increase-quantity', 'decrease-quantity']
}
</script>
