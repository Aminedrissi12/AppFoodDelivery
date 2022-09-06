<template>
  <div class="main">
    <!-- -------------------------------- -->
    <div class="content__main-link">
      <!-- ------- -->
      <div class="content__header-h2">
        <h2>Settings</h2>
      </div>
      <!-- ------- -->
      <div class="content__link">
        <ul v-for="link in links" :key="link.name">
          <router-link :to="link.linkTo" class="content__link-router">
            <div class="content__link-icon">
              <mdicon :name="link.icon" class="content__icon" />
            </div>
            <div class="content__link-header">
              <h4>{{ link.name }}</h4>
              <span>{{ link.descr }}</span>
            </div>
          </router-link>
        </ul>
      </div>
      <!-- ------- -->
    </div>
    <!-- -------------------------------- -->
    <div class="content__main-route">
      <router-view></router-view>
    </div>
    <!-- -------------------------------- -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      links: [
        {
          icon: 'account-outline',
          name: 'Account',
          descr: 'Personal information',
          linkTo: {
            path: '/Profile/account',
            name: 'Account',
            params: { id: this.User },
          },
        },
        {
          icon: 'map-marker-outline',
          name: 'Address',
          descr: 'Shippings addresses',
          linkTo: {
            name: 'Address',
            params: { id: this.User },
          },
        },
        {
          icon: 'credit-card-outline',
          name: 'Payment method',
          descr: 'Connected credit cards',
          linkTo: {
            name: 'Payment',
            params: { id: this.User },
          },
        },
        {
          icon: 'shield-outline',
          name: 'Security',
          descr: 'Password, 2FA',
          linkTo: {
            name: 'Security',
            params: { id: this.User },
          },
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['User']),
  },
}
</script>

<style scoped>
.main {
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 3rem;
}
.content__main-link {
  flex: 0.35;
}
.content__header-h2 {
  margin-bottom: 1.6rem;
}
.content__link {
  display: flex;
  flex-direction: column;
}
.content__link > ul:not(:last-child) {
  margin-bottom: 1.2rem;
}
.content__link-router {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem;
  border: 2px solid var(--bordder-color-2);
  border-radius: 1.6rem;
}
.router-link-active {
  border: 2px solid var(--bordder-color-1);
  background-color: var(--bag-color-input);
}
.content__link-header > h4 {
  color: var(--text-color);
}
.content__link-header > span {
  font-size: 1.3rem;
  color: var(--text-color);
}
.content__main-route {
  flex: 1;
  margin-bottom: 2rem;
}
</style>

//
<style>
.content__link-icon > .mdi > svg {
  width: 3rem;
  height: 3rem;
  border: 0.14rem;
  color: var(--icon-color2);
  background-color: var(--bag-color-blue-log2);
  padding: 0.5rem;
  border-radius: 1rem;
}
.router-link-active .content__link-icon > .mdi > svg {
  color: var(--icon-color1);
  background-color: var(--bag-color-blue-log);
}
</style>

// /////////////// ///////////////////// media query //////////////////

<style scoped>
@media (max-width: 37.5em) {
  .main {
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
  }
  .content__link {
    display: flex;
    flex-direction: column;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
  .main {
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
  }
  .content__link {
    display: flex;
    flex-direction: column;
  }
}
/* Medium devices (landscape tablets, 768px and up (46.87) */
@media screen and (min-width: 46.87em) and (max-width: 62em) {
  .main {
    margin-top: 2.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 3rem;
  }
  .content__link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  .content__link > ul {
    width: 49%;
  }
  .content__link > ul:not(:last-child) {
    margin-bottom: 0;
  }
}
/* Large devices (laptops/desktops, 992px and up) */
@media screen and (min-width: 62em) and (max-width: 75em) {
}
/* Extra large devices (large laptops and desktops, 1200px and up) */
@media screen and (min-width: 75em) {
}
</style>
