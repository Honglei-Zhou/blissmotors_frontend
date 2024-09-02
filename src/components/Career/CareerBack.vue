<template>
<div class="row">
    <div class="leftcolumn">
    </div>
    <div class="maincolumn">

      <div class="collapse-container">
        <div class="collapse-header">
          <div>
            <p>Open Positions</p>
          </div>
        </div>
        <div
          class="collapse-wrapper"
          v-if="collapseData.items.length"
        >
          <collapse
            v-model="collapseData"
            simple
          >
            <panel
              v-for="(item, index) in collapseData.items"
              :key="index"
              :name="item.panelName"
            >
              {{item.panelHeader}}
              <p slot="content">
                <span v-if="item.panelContent.intro">
                  {{item.panelContent.intro}}
                  <br />
                </span>
                <span v-if="item.panelContent.role">The Role<br />
                  {{item.panelContent.intro}}
                  <br />
                </span>

                <span>Required experiences:</span>
                <ul v-if="item.panelContent.experiences.length">
                  <li
                    v-for="(jd, jdindex) in item.panelContent.experiences"
                    :key="jdindex"
                  >
                    {{jd}}
                  </li>
                </ul>

                <span>Technical Skills:</span>
                <ul v-if="item.panelContent.skills.length">
                  <li
                    v-for="(jd, jdindex) in item.panelContent.skills"
                    :key="jdindex"
                  >
                    {{jd}}
                  </li>
                </ul>

                <span>Responsibilities:</span>
                <ul v-if="item.panelContent.responsibilities.length">
                  <li
                    v-for="(jd, jdindex) in item.panelContent.responsibilities"
                    :key="jdindex"
                  >
                    {{jd}}
                  </li>
                </ul>

                <span>Requirements:</span>
                <ul v-if="item.panelContent.requirements.length">
                  <li
                    v-for="(jd, jdindex) in item.panelContent.requirements"
                    :key="jdindex"
                  >
                    {{jd}}
                  </li>
                </ul>

              </p>
            </panel>
          </collapse>
        </div>
      </div>

    </div>
    <div class="rightcolumn">
    </div>

    <div class='leftcolumn'>
    </div>

    <div class="maincolumn">
      <Application></Application>
    </div>

    <div class="rightcolumn">
    </div>
</div>
</template>

<script>
import Application from '@/components/Form/Application'

export default {
  name: 'Career',
  data () {
    return {
      sliderInfo: [
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        },
        {
          img: 'static/img/index/car/test3.jpg',
          url: 'https://www.blissmotors.com'
        }
      ],
      collapseData: {
        items: [
          {
            panelName: '1',
            panelHeader: 'Full Stack Developer (Chicago)',
            panelContent: {
              intro: 'Bliss Motors',
              role: '',
              responsibilities: [
                'a', 'b', 'c'
              ],
              experiences: [
                'ee', 'bb'
              ],
              skills: [
                'cc', 'dd'
              ],
              requirements: [
                'adb', 'deg'
              ]
            }
          },
          {
            panelName: '2',
            panelHeader: 'Executive Sales Associate (Chicago)',
            panelContent: {
              responsibilities: [
                'a', 'b', 'c'
              ],
              experiences: [
                'ee', 'bb'
              ],
              skills: [
                'cc', 'dd'
              ],
              requirements: [
                'adb', 'deg'
              ]
            }
          },
          {
            panelName: '3',
            panelHeader: 'Marketing Intern (Chicago)',
            panelContent: {
              responsibilities: [
                'a', 'b', 'c'
              ],
              experiences: [
                'ee', 'bb'
              ],
              skills: [
                'cc', 'dd'
              ],
              requirements: [
                'adb', 'deg'
              ]
            }
          }

        ]
      }
    }
  },
  components: {
    Application
  }
}
</script>

<style scoped>
.leftcolumn {
  float: left;
  width: 10%;
  background-color: #2d8cf0;
}

.rightcolumn {
  float: left;
  width: 10%;
  background-color: #2d8cf0;
}

.maincolumn {
  float: left;
  width: 80%;
  min-width: 1140px;
  height: 60px;
  text-align: center;
  background-color: #2d8cf0;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

@media screen and (max-width: 1425px) {
  .leftcolumn,
  .rightcolumn {
    width: 0%;
  }

  .maincolumn {
    width: 100%;
  }
}
.collapse-container {
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  text-align: center;
}
.collapse-header {
  margin-left: 80px;
  margin-top: 50px;
  width: 980px;
  font-size: 30px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
.collapse-wrapper {
  margin-left: 80px;
  padding: 50px;
  position: center;
  width: 980px;
  font-size: 20px;
  text-align: left;
  line-height: 36px;
}

.collapse-wrapper span {
  font-size: 14px;
  font-weight: bold;
}

.collapse-wrapper ul {
  display: block;
  list-style-type: disc;
  padding-left: 40px;
}

.collapse-wrapper ul li {
  font-size: 14px;
  font-weight: normal;
}

.collapse-apply {
  margin-left: 80px;
  padding: 50px;
  width: 980px;
}
</style>
