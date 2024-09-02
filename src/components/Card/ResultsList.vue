<template>
  <div class="results-list">
    <div class="title">
      {{title}}
    </div>
    <ul>
      <li
        v-for="(item, index) in resultItems"
        :key="index"
        class="result-item"
      >
        <div class="item-image">
          <img
            width="299"
            height="200"
            :src="item.image"
          >
        </div>
        <div class="content">
          <div class="content-up">
            <div class="name">
              {{item.year}} {{item.make}} {{item.model}} {{item.trim}}
            </div>
            <div class="price">
              <span class="payment">$ {{item.payment}} / Mo</span>
              <span class="msrp">$ {{item.msrp}} MSRP</span>
            </div>
          </div>
          <div class="content-middle">
            <ul>
              <li
                v-for="(description, index) in item.info"
                :key="index"
                class="info"
              >
                {{description}}
              </li>
            </ul>
          </div>
          <div class="content-bottom">
            <div class="contact">
              <div class="phone">
                Telephone: {{item.contact.Phone}}
              </div>
              <div class="email">
                Email: {{item.contact.Email}}
              </div>
              <div class="address">
                Address: {{item.contact.Address}} {{item.contact.City}}, {{item.contact.State}} - {{item.contact.ZipCode}}
              </div>
            </div>
            <div class="contact-button">
              <Button
                class="icon"
                @click="contact"
              >Contact</Button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: 'ResultsList',
  props: {
    title: {
      type: String,
      default: 'Title'
    },
    resultItems: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    contact () {
      console.log('Contact')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.results-wrapper {
  width: 100%;

  .title {
    padding-left: 14px;
    height: 52px;
    line-height: 52px;
    border-left: 2px solid #d9dde1;
    font-size: 24px;
    color: rgb(147, 153, 159);
    background: #f3f5f7;
    text-align: left;
  }

  .result-item {
    display: flex;
    margin: 36px 18px;
    padding-bottom: 36px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.2);
    text-align: left;

    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }

    .item-image {
      flex: 0 0 33%;
      margin-right: 10px;
    }

    .content {
      flex: 1;

      .content-up {
        position: relative;
        left: 0;
        top: 0;

        .name {
          display: inline-block;
          margin: 4px 0 16px 0;
          height: 28px;
          line-height: 28px;
          font-size: 24px;
          color: rgba(7, 17, 27, 0.8);
        }

        .price {
          display: inline-block;
          position: absolute;
          right: 0;
          height: 28px;
          line-height: 28px;
          color: rgba(7, 17, 27, 0.5);

          .payment {
            display: block;
            font-size: 24px;
          }

          .msrp {
            display: block;
            font-size: 14px;
          }
        }
      }

      .content-middle {
        margin-top: 10px;

        .info {
          display: inline-block;
          overflow: hidden;
          height: 18px;
          line-height: 18px;
          font-size: 16px;
          margin-right: 5px;
          margin-top: 4px;
          padding-right: 5px;
          border-right: 1px solid rgba(7, 17, 27, 0.5);

          &:last-child {
            border-right: none;
          }
        }
      }

      .content-bottom {
        position: relative;
        left: 0;
        margin-top: 5px;
        border-top: 1px solid rgba(7, 17, 27, 0.1);

        .contact {
          display: inline-block;
          width: 66%;
          padding-top: 5px;
          margin-bottom: 0;

          .phone {
            margin: 4px 0 4px 0;
            height: 20px;
            line-height: 14px;
            font-size: 14px;
            color: rgba(7, 17, 27, 0.8);
          }

          .email {
            margin: 4px 0 4px 0;
            height: 20px;
            line-height: 14px;
            font-size: 14px;
            color: rgba(7, 17, 27, 0.8);
          }

          .address {
            margin: 4px 0 4px 0;
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            color: rgba(7, 17, 27, 0.8);
          }
        }

        .contact-button {
          display: inline-block;
          width: 33%;
          margin-right: 0;
          margin-bottom: 0;

          .icon {
            width: 70%;
            height: 100%;
            margin-left: 30%;
            border-radius: 25px;
            background: #5cadff;
            font-size: 24px;
            color: rgba(7, 17, 27, 0.8);
            border: none;
            text-align: center;

            &:hover {
              background: #2d8cf0;
            }
          }
        }
      }
    }
  }
}
</style>
