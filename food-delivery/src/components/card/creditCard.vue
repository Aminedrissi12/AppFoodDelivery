<template>
  <div class="credit-card">
    <!-- ----------------------------------------- -->
    <div class="credit-card__number">
      <div>
        <span> **** **** **** </span>
        <span> 9372 </span>
      </div>
      <div class="credit-card__sitting">
        <mdicon name="dots-vertical" />
      </div>
    </div>
    <!-- ----------------------------------------- -->
    <div class="credit-cared__experd">
      <div>
        <span> 12/25 </span>
      </div>
    </div>
    <!-- ----------------------------------------- -->
    <div>
      <div class="credit-cared__name">
        <div>
          <span> Jane Robertson </span>
        </div>
        <div>
          <img
            src="https://seeklogo.com/images/V/visa-logo-CF29426B98-seeklogo.com.png"
          />
        </div>
      </div>
    </div>
    <!-- ----------------------------------------- -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      regx: [
        {
          name: 'Visa',
          logo: 'https://seeklogo.com/images/V/visa-logo-CF29426B98-seeklogo.com.png',
          re: '^4',
        },
        {
          name: 'Hipercard',
          logo: 'https://cdn.worldvectorlogo.com/logos/hipercard.svg',
          re: /^(606282\d{10}(\d{3})?)|(3841\d{15})$/,
        },
        {
          name: 'MasterCard',
          logo: 'https://logodownload.org/wp-content/uploads/2014/07/mastercard-logo-novo-3.png',
          re: /^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,
        },
        {
          name: 'Discover',
          logo: 'https://i.pinimg.com/originals/b3/d7/85/b3d7853a11dcc8c424866915ddd4d3e3.png',
          re: /^(6011|65|64[4-9]|622)/,
        },
        {
          name: 'Elo',
          logo: 'https://seeklogo.com/images/E/elo-logo-0B17407ECC-seeklogo.com.png',
          re: /^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,
        },
        {
          name: 'American Express',
          logo: 'https://ccard-generator.com/assets/images/cardmedium/american-express.png',
          re: /^3[47]\d{13,14}$/,
        },
      ],
    }
  },
  methods: {},
}
</script>

<style scoped>
.credit-card {
  display: flex;
  width: 25rem;
  flex-direction: column;
  padding: 1.2rem;
  border: 1.6px solid var(--bordder-color-2);
  border-radius: 1.2rem;
}
.credit-card__number,
.credit-cared__name {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
}
.credit-card__number > div > span {
  font-size: 1.6rem;
  font-weight: 800;
}
.credit-cared__name > div > img {
  width: 3.6rem;
  height: 1.6rem;
}
.credit-cared__experd {
  margin: 0.8rem 0;
}
.credit-cared__experd > div > span,
.credit-cared__name > div > span {
  font-size: 1.6rem;
  color: var(--text-color1);
}
</style>
