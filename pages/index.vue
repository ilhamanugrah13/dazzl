<template>
  <section>
    <div class="columns is-centered slider-layout">
      <b-carousel
        :autoplay="false"
        class="column is-8"
      >
        <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
          <img
            :src="require(`@/assets/img/banner/${i+1}.png`)"
            :alt="`banner${i}`"
            class="slider-image"
          >
          <!-- <section :class="`hero is-medium is-${carousel.color}`">
            <div class="hero-body has-text-centered">
              <h1 class="title">
                {{ carousel.text }}
              </h1>
            </div>
          </section> -->
        </b-carousel-item>
        <div slot="indicators" class="slider-indicator" />
      </b-carousel>
    </div>
    <div class="section-brand">
      <h2 class="heading-section">
        shop by brand
      </h2>
      <div class="slider-brand">
        <b-carousel-list
          :data="sliderBrand.items"
          has-drag="drag"
          repeat="true"
          items-to-list="4"
        >
          <img
            slot="item"
            slot-scope="props"
            :src="require(`@/assets/img/brand/${props.list.image}.png`)"
            :alt="props.list.name"
            class="image-brand"
          >
        </b-carousel-list>
      </div>
    </div>
    <div class="section-shop">
      <h2 class="heading-section">
        latest arrival
      </h2>
      <div class="slider-latest">
        <b-carousel-list
          :data="sliderLatest.items"
          has-drag="drag"
          repeat="true"
          items-to-show="4"
        >
          <ui-card
            slot="item"
            slot-scope="props"
            :title="props.list.name"
            :image="props.list.image"
            :price="props.list.price"
          />
        </b-carousel-list>
      </div>
    </div>
  </section>
  <!-- <section>
    <div class="columns is-mobile" />
  </section> -->
</template>

<script>
import Card from '~/components/Card'

export default {
  name: 'HomePage',
  components: {
    UiCard: Card
  },
  data () {
    return {
      carousels: [
        { text: 'Slide 1', color: 'primary' },
        { text: 'Slide 2', color: 'info' },
        { text: 'Slide 3', color: 'success' }
      ],
      sliderBrand: {
        items: [
          {
            name: 'Bershka',
            image: 'bershka'
          },
          {
            name: 'Pull & Bear',
            image: 'pnb'
          },
          {
            name: 'Seibu',
            image: 'seibu'
          },
          {
            name: 'Sogo',
            image: 'sogo'
          },
          {
            name: 'Zara',
            image: 'zara'
          }
        ]
      },
      sliderLatest: {
        items: [
          {
            name: 'Women Luxury Dress',
            image: 'latest1.jpg',
            price: 'IDR580.000'
          },
          {
            name: 'Man Khaki shirt',
            image: 'latest2.jpg',
            price: 'IDR720.000'
          },
          {
            name: 'Black dazzl dress',
            image: 'latest3.jpg',
            price: 'IDR999.000'
          },
          {
            name: 'Slim-fit gray',
            image: 'latest4.jpg',
            price: 'IDR220.000'
          },
          {
            name: 'White Cycle Sweatshirt Kid',
            image: 'latest5.jpg',
            price: 'IDR250.000'
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.carousel-list {
  box-shadow: none;
}

.slider-layout {
  .indicator-item {
    &.is-active {
      .slider-indicator {
        background: white;
      }
    }

    .slider-indicator {
      border-radius: 10px;
      height: 10px;
      width: 10px;
      background: black;
      border: 0;
      margin-bottom: 20px;
    }
  }

  .slider-image {
    width: 100%;
  }

}

.slider-brand {
  .carousel-list {
    text-align: center;
  }
}
</style>
