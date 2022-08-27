<template>
  <div class="Clss__payment">
    <h2 class="Clss__payment-h2">Payment method</h2>
    <!-- -------------------------------------- -->
    <div class="content__payment">
      <h3>Connected payment methods</h3>
      <div class="creditCard">
        <creditCard />
        <creditCard />
      </div>
      <div>
        <paymentForm />
      </div>
    </div>
    <!-- -------------------------------------- -->
  </div>
</template>

<script>
import PaymentForm from '../../layout/paymentForm/paymentForm.vue'
import creditCard from './../../card/creditCard.vue'
export default {
  components: {
    creditCard,
    PaymentForm,
  },
}
</script>

<style scoped>
/* .Clss__payment {
} */
.Clss__payment-h2 {
  margin-bottom: 1.6rem;
}
.content__payment {
  border: 2px solid var(--bordder-color-2);
  border-radius: 1.6rem;
  padding: 2rem 1.5rem;
}
.creditCard {
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  margin-top: 1.6rem;
}
</style>
//
///////////////////////////////////media/////////////////////////////////////////////

<style scoped>
@media (max-width: 37.5em) {
  .creditCard {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 1.6rem;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media screen and (min-width: 46.87em) and (max-width: 62em) {
  /* @media (min-width: 46.87em) { */
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
}
</style>
