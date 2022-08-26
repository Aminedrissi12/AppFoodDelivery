<template>
  <div class="Clss__addres">
    <h2 class="Clss__addres-h2">Address</h2>
    <!-- ----------address------------------- -->
    <div class="content__addres">
      <h3>Existing shipping addresses</h3>
      <!-- --------card adress--------- -->
      <div class="content__addres--card">
        <CardMaps />
        <CardMaps />
      </div>
      <!--_____________ shipping address____________ -->
      <div class="content___shipping">
        <h3>New Shipping Address</h3>
        <form @submit.prevent="AddNewAddress" class="form__address">
          <!-- /////row-3//// -->
          <div class="address__row-3">
            <div>
              <label for="Country">Country</label>
              <input type="text" name="" placeholder="Enter Country" />
            </div>
            <div>
              <label for="State">State</label>
              <input type="text" name="" placeholder="Enter State" />
            </div>
            <div>
              <label for="City">City</label>
              <input type="text" name="" placeholder="Enter City" />
            </div>
          </div>
          <!-- //////row-2////// -->
          <div class="address__row-2">
            <div>
              <label for="Address line 1">Address line 1</label>
              <input type="text" name="" placeholder="Enter Address" />
            </div>
            <div>
              <label for="Address line 2">Address line 2</label>
              <input
                type="text"
                name=""
                placeholder="Enter address (optional)"
              />
            </div>
          </div>
          <!-- ////////////// -->
          <div class="Address__btn">
            <button>Add New Address</button>
          </div>
        </form>
      </div>

      <MapGeolocation />
      <!-- -------------------------------------------------------------- -->
    </div>
  </div>
</template>

<script>
import CardMaps from '../../card/cardMaps.vue'
import MapGeolocation from './../../googleMaps/MapGeolocation.vue'
export default {
  components: {
    CardMaps,
    MapGeolocation,
  },
}
</script>

<style scoped>
/* .Clss__addres {
} */
.Clss__addres-h2 {
  margin-bottom: 1.6rem;
}
.content__addres {
  border: 2px solid var(--bordder-color-2);
  border-radius: 1.6rem;
  padding: 2rem 1.5rem;
}
.content__addres h3 {
  margin-bottom: 1.6rem;
}
/* ------------------------------ */
.content__addres--card {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 7px;
}
/* --------New Shipping Address------ */
.content___shipping {
  margin-top: 4.8rem;
}
.form__address {
  margin-top: 1.4rem;
}
.address__row-3,
.address__row-2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1.6rem;
}
.address__row-2 {
  margin-top: 3.2rem;
}
.address__row-3 > div,
.address__row-2 > div {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.address__row-3 > div > label,
.address__row-2 > div > label {
  margin-bottom: 0.4rem;
  font-size: 1.6rem;
  color: var(--text-color-input);
  font-weight: 500;
}
.address__row-3 > div > input,
.address__row-2 > div > input {
  border: 1.6px solid var(--bordder-color-2);
  padding: 1.2rem;
  border-radius: 1.3rem;
  outline: none;
}
.address__row-3 > div > input:hover,
.address__row-2 > div > input:hover,
.address__row-3 > div > input:focus,
.address__row-2 > div > input:focus {
  border: 1.6px solid var(--bordder-color-1);
  background-color: var(--bag-color-input);
}

/* ------------------- */
.Address__btn {
  margin-top: 3.2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.Address__btn > button {
  background-color: var(--btn-bg-color);
  color: var(--btn-colo-text);
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 1.2rem;
  cursor: pointer;
}
</style>

//
///////////////////////////////////media/////////////////////////////////////////////

<style scoped>
@media (max-width: 37.5em) {
  .content__addres--card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 7px;
  }
  .address__row-3,
  .address__row-2 {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1.6rem;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
  .content__addres--card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 7px;
  }
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
