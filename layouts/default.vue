<template>
  <div>
    <nav
      class="navbar header is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          dazzl
        </a>

        <div
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarHome"
          @click="showNav = !showNav"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
      <div
        id="navbarHome"
        class="navbar-menu"
        :class="{ 'is-active' : showNav }"
      >
        <div class="navbar-end">
          <b-navbar-dropdown label="Woman">
            <b-navbar-item href="#">
              Gown
            </b-navbar-item>
            <b-navbar-item href="#">
              Dress
            </b-navbar-item>
          </b-navbar-dropdown>
          <b-navbar-item href="#">
            Men
          </b-navbar-item>
          <b-navbar-item href="#">
            Kids
          </b-navbar-item>
          <b-navbar-item
            class="cart"
            tag="nuxt-link"
            to="/checkout"
          >
            <div class="cart-icon">
              <div
                v-if="cartList.length > 0"
                class="cart-qty"
              >
                {{ cartList.length }}
              </div>
            </div>
          </b-navbar-item>
          <b-navbar-item href="#">
            Login
          </b-navbar-item>
        </div>
      </div>
    </nav>
    <div class="main">
      <nuxt />
    </div>
    <div class="footer">
      <div class="columns">
        <div class="column is-6">
          <ul class="footer-nav">
            <li><a href="">about us</a></li>
            <li><a href="">find your store</a></li>
          </ul>
        </div>
        <div class="column is-6">
          <div class="newsletter is-pulled-right">
            <b-field>
              <b-input
                custom-class="newsletter-input"
                placeholder="Enter your email address"
                type="email"
              />
              <p class="control">
                <button class="button is-primary">
                  Subscribe
                </button>
              </p>
            </b-field>
          </div>
        </div>
      </div>
      <p class="has-text-centered">
        &copy; dazzl 2020
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showNav: false,
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
        {
          title: 'Inspire',
          icon: 'lightbulb',
          to: { name: 'inspire' }
        }
      ]
    }
  },
  computed: {
    cartList () {
      return this.$store.state.cart
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-brand {
  .navbar-item {
    font-family: "Monserrat", sans-serif;
    font-size: 32px;

    &:hover {
      color: pink;
    }
  }
}

.navbar-end {
  .navbar-item:hover {
    background-color: black;
    color: white;
  }
}

.cart {
  padding: 8px 30px;
  background-position: center;

  &:hover {
    .cart-icon {
      background-image: url('~@/assets/img/icons/supermarket-white.png');
    }
  }

  .cart-icon {
    width: 20px;
    height: 20px;
    background-size: 100%;
    background-image: url('~@/assets/img/icons/supermarket.png');
    background-repeat: no-repeat;
    position: relative;

    .cart-qty {
      position: absolute;
      top: -5px;
      right: -10px;
      width: 15px;
      height: 15px;
      text-align: center;
      line-height: 15px;
      background: red;
      border-radius: 50%;
      color: white;
      font-size: 10px;
    }
  }
}

@media screen and (max-width: 1023px) {
  .cart {
    padding: 0.5rem 0.75rem;
  }
}

.main {
  padding-top: 65px;
}

.footer {
  background: black;
  color: white;
}

.footer-nav {
  li {
    margin-bottom: 10px;

    a {
      color: white;

      &:hover {
        color: pink;
      }
    }
  }
}

.newsletter {
  .newsletter-input {
    border-radius: 0;
  }

  .button {
    border-radius: 0;
    background: #ccc;
    color: black;
    font-family: "Monserrat", sans-serif;
  }
}
</style>
