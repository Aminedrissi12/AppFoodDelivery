<template>
  <div class="payment-layout">
    <h3>New payment method</h3>
    <!-- ------------------------------------ -->
    <div class="payment-form">
      <form @submit.prevent="addCredit">
        <!-- -- -->
        <div class="payment-form-row">
          <div class="payment-col">
            <label for="CardNumber">Card number</label>
            <input
              maxlength="19"
              class="payment-col__inputNumber"
              type="text"
              @input="updateValue"
              @keypress="onlyNumber"
              :value="formatCardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
            />
          </div>
          <!--  -->
          <div class="payment-form-row2">
            <div class="payment-col">
              <label for="Expiration">Expiration</label>
              <input
                maxlength="7"
                type="text"
                placeholder="MM/YY"
                @input="updateExpiration"
                @keypress="onlyNumber"
                :value="formatCardExpiration"
              />
            </div>
            <div class="payment-col">
              <label for="CVC">CVC</label>
              <input
                type="text"
                placeholder="XXXX"
                maxlength="4"
                @keypress="onlyNumber"
              />
            </div>
          </div>
        </div>
        <!-- ------------ -->
        <div class="payment-col" style="margin-top: 3.2rem">
          <label for="Cardholder">Cardholder</label>
          <input type="text" placeholder="Enter name on card" />
        </div>
        <!-- ------------ -->
        <div class="payment-col__btn" style="margin-top: 3.2rem">
          <button>Add new payment method</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cardNumber: '',
      numberExp: '',
    }
  },
  computed: {
    formatCardNumber() {
      return this.cardNumber ? this.cardNumber.match(/.{1,4}/g).join(' ') : ''
    },
    formatCardExpiration() {
      return this.numberExp ? this.numberExp.match(/.{1,2}/g).join(' / ') : ''
    },
  },
  methods: {
    updateValue(e) {
      this.cardNumber = e.target.value.replace(/ /g, '')
    },
    updateExpiration(e) {
      this.numberExp = e.target.value
        .replace(/[^\d]|^[^\d]*$/g, '')
        .replace(/ /g, '/')
    },
    onlyNumber($event) {
      //console.log($event.keyCode); //keyCodes value
      let keyCode = $event.keyCode ? $event.keyCode : $event.which
      if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        // 46 is dot
        $event.preventDefault()
      }
    },
  },
}
</script>

<style scopde>
.payment-layout {
  margin: 4rem 0 1.6rem 0;
}
.payment-form {
}
.payment-form > form {
  margin: 1.6rem 0 0 0;
}
.payment-form-row,
.payment-form-row2 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
}

.payment-col {
  display: flex;
  flex-direction: column;
  flex: 1;
}
.payment-col > label {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.4rem;
  margin-bottom: 0.4rem;
}
.payment-col > input {
  padding: 1.2rem;
  border: 1.6px solid var(--bordder-color-2);
  outline-color: var(--bordder-color-1);
  border-radius: 1.3rem;
  font-size: 1.4rem;
  font-weight: 400;
}
.payment-col > input:focus {
  background-color: var(--bag-color-input);
}

.payment-col__btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.payment-col__btn > button {
  padding: 1.2rem 1.6rem;
  font-weight: 700;
  font-size: 1.4rem;
  line-height: 2rem;
  border-radius: 1.2rem;
  margin-left: 1.5rem;
  border: 1.6px solid var(--bordder-color-1);
  background-color: var(--btn-bg-color);
  color: var(--btn-colo-text);
}
.payment-col__inputNumber::-webkit-outer-spin-button,
.payment-col__inputNumber::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.payment-col__inputNumber[type='number'] {
  -moz-appearance: textfield;
}

/* ///////////////////////////////////////////////// */

@media (max-width: 37.5em) {
  .payment-form-row {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin-top: 1.6rem;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
}
</style>
