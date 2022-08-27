<template>
  <div>
    <!--------------- cardDeals --------------->
    <div class="cardDeals">
      <cardDeals
        v-for="DealsData in DealsDatas"
        :key="DealsData.id"
        :id="DealsData.id"
        :image="DealsData.image"
        :nameFood="DealsData.nameFood"
        :discount="DealsData.discount"
        :Type_of_food="DealsData.Type_of_food"
      />
    </div>
    <!-------------- layoutTags ---------------->
    <div class="TagsData">
      <cardTags
        v-for="TagData in TagsData"
        :key="TagData.name"
        :name="TagData.name"
        :imag="TagData.imag"
      />
    </div>
    <!------------- Nearby restaurants --------->
    <div class="card_Restaurents">
      <h2>Nearby restaurants</h2>
      <div class="restaurant">
        <cardRestaurant />
        <cardRestaurant />
        <cardRestaurant />
        <cardRestaurant />
        <cardRestaurant />
        <cardRestaurant />
      </div>
    </div>
  </div>
</template>

<script>
import cardDeals from '@/components/card/cardDeals.vue'
import cardTags from '@/components/card/cardTags.vue'
import CardRestaurant from '@/components/card/cardRestaurant.vue'
// /////////////////////////////////////////////////
import BigBur from '@/assets/imagData/BigBurgers1.png'
import dessert from '@/assets/imagData/dessert1.png'
// /////////////////////////////////////////////////
import Pizza from '@/assets/imagData/pizza.png'
import Burger from '@/assets/imagData/burger.png'
import BBQ from '@/assets/imagData/meat.png'
import Sushi from '@/assets/imagData/sushi.png'
import Vegen from '@/assets/imagData/broccoli.png'
import Desserts from '@/assets/imagData/cake.png'
export default {
  components: {
    cardDeals,
    cardTags,
    CardRestaurant,
  },
  data() {
    return {
      DealsDatas: [
        {
          id: 1111,
          image: dessert,
          nameFood: 'All desserts',
          discount: 20,
          Type_of_food: 'dessert',
        },
        {
          id: 2222,
          image: BigBur,
          nameFood: 'Big Burgers',
          discount: 50,
          Type_of_food: 'Fooddies',
        },
      ],
      TagsData: [
        {
          imag: Pizza,
          name: 'Pizza',
        },
        {
          imag: Burger,
          name: 'Burger',
        },
        {
          imag: BBQ,
          name: 'BBQ',
        },
        {
          imag: Sushi,
          name: 'Sushi',
        },
        {
          imag: Vegen,
          name: 'Vegen',
        },
        {
          imag: Desserts,
          name: 'Desserts',
        },
      ],
    }
  },
}
</script>

<style scoped>
.cardDeals {
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.TagsData {
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 0.5rem;
}
.card_Restaurents {
  margin-top: 3.5rem;
}
.restaurant {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>

//
///////////////////////////////////media/////////////////////////////////////////////

<style scoped>
@media (max-width: 37.5em) {
  .cardDeals {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
  }
  .TagsData {
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap; */
    /* justify-content: space-between; */
    gap: 3.6rem;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
  .TagsData {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    gap: 3.25rem;
  }
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media screen and (min-width: 46.87em) and (max-width: 62em) {
  .TagsData {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /* justify-content: space-between; */
    gap: 2rem;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
}
</style>
