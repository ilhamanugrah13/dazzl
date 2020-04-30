<template>
  <div>
    <nav
      class="navbar header"
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

        <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <b-navbar-item href="#">
            Women
          </b-navbar-item>
          <b-navbar-item href="#">
            Men
          </b-navbar-item>
          <b-navbar-item href="#">
            Kids
          </b-navbar-item>
          <b-navbar-item class="cart" href="#" />
          <b-navbar-item href="#">
            Login
          </b-navbar-item>
        </div>
      </div>
    </nav>
    <nuxt />
    <div class="footer">
      <div class="columns">
        <div class="column is-6">
          <ul class="footer-nav">
            <li><a href="">about us</a></li>
            <li><a href="">find your store</a></li>
          </ul>
        </div>
        <div class="column is-6">
          <div class="newsletter">
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
    <!-- <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">
          General
        </p>
        <ul class="menu-list">
          <li
            v-for="(item, key) of items"
            :key="key"
          >
            <nuxt-link
              :to="item.to"
              exact-active-class="is-active"
            >
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
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
  background-image: url('~@/assets/img/icons/supermarket.png');
  background-repeat: no-repeat;
  padding: 8px 30px;
  width: 20px;
  background-size:20px;
  background-position: center;

  &:hover {
    background-image: url('~@/assets/img/icons/supermarket-white.png');
  }
}

.footer {
  background: black;
  color: white;
}

.footer-nav {
  li {
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
