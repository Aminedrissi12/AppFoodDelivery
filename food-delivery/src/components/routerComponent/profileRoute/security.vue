<template>
  <div>
    <h2 class="Clss__security-h2">Security</h2>
    <!-- -------------------------------------- -->
    <div class="Clss__security">
      <h3>2 factor authentication</h3>
      <div class="Clss__security-input">
        <div class="Clss__security-input__number">
          <label for="PhoneNumber">Phone number</label>
          <vue-tel-input v-model="phone"></vue-tel-input>
        </div>
        <div>
          <button>Turn on</button>
        </div>
      </div>
      <!-- -- -->
      <div class="Clss__security-password">
        <h3>Change password</h3>
        <form action="" @submit.prevent="ChangePassword">
          <div class="Clss__security-password_form">
            <div>
              <label for="">Current password</label>
              <input type="password" placeholder="Enter current password" />
            </div>
            <div>
              <label for="">New password</label>
              <input type="password" placeholder="Enter new password" />
            </div>
            <div>
              <label for="">Confirm new password</label>
              <input type="password" placeholder="Confirm new password" />
            </div>
          </div>
          <div class="Clss__security-password_btn">
            <button>Change password</button>
          </div>
        </form>
      </div>
    </div>
    <!-- -------------------------------------- -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* .Clss__security {
} */
.Clss__security-h2 {
  margin-bottom: 1.6rem;
}
.Clss__security {
  border: 2px solid var(--bordder-color-2);
  border-radius: 1.6rem;
  padding: 2rem 1.5rem;
}
/* _____________________ */
.Clss__security-input {
  margin: 2.6rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.Clss__security-input__number {
  width: 50%;
}

.Clss__security-input > div > button,
.Clss__security-password_btn > button {
  margin-top: 2.2rem;
  background-color: var(--btn-bg-color);
  color: var(--btn-colo-text);
  padding: 1.2rem 1.6rem;
  border: none;
  border-radius: 1.2rem;
  cursor: pointer;
}
/* ________________________________ */
.Clss__security-password {
  margin-top: 4.6rem;
}
.Clss__security-password_form {
  display: flex;
  flex-direction: row;
  gap: 1.4rem;
  margin-top: 1.6rem;
}
.Clss__security-password_form > div {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.Clss__security-password_form > div > label,
.Clss__security-input__number > label {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.6rem;
  margin-bottom: 0.4rem;
}
.Clss__security-password_form > div > input {
  padding: 1.2rem;
  border: 1.6px solid var(--bordder-color-2);
  outline-color: var(--bordder-color-1);
  border-radius: 1.3rem;
  font-size: 1.4rem;
  font-weight: 400;
}
.Clss__security-password_form > div > input:focus {
  background-color: var(--bag-color-input);
}
.Clss__security-password_btn {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15rem;
}
</style>
// ////////////////////////////////////////////////////////////////////// //
Globale style
<style>
.Clss__security-input__number > .vue-tel-input {
  width: 100%;
  border: 2px solid var(--bordder-color-2);
  padding: 0.6rem;
  border-radius: 1.6rem;
  margin: 0.4rem 0 0 0;
}
.Clss__security-input__number > div > input {
  font-size: 1.6rem;
  font-weight: 600;
}
.Clss__security-input__number > .vue-tel-input:focus-within {
  box-shadow: none;
  border-color: var(--bordder-color-1);
  background-color: var(--bag-color-input);
}
.Clss__security-input__number > div > input:focus {
  background-color: var(--bag-color-input);
}
.vti__dropdown-item {
  font-size: 1.4rem;
}
.vti__dropdown > .vti__dropdown-list {
  margin-top: 1rem;
}

/* .vti__dropdown-list */

@media (max-width: 37.5em) {
  .vti__dropdown > .vti__dropdown-list {
    width: 279px;
    box-shadow: 0 1rem 1.5rem rgba(105, 123, 255, 0.3);
  }
}
</style>

//
///////////////////////////////////media/////////////////////////////////////////////

<style scoped>
@media (max-width: 37.5em) {
  .Clss__security-password_form {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin-top: 1.6rem;
  }
  .Clss__security-input__number {
    width: 63%;
  }
}
/* Small devices (portrait tablets and large phones, 600px and up (600 / 16 = 37.5)) */
@media screen and (min-width: 37.5em) and (max-width: 46.87em) {
  .Clss__security-password_form {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
    margin-top: 1.6rem;
  }
  .Clss__security-input__number {
    width: 63%;
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
