<template>
  <div class="row">

   <div class="leftcolumn">
    </div>
    <div class="maincolumn">

      <div class="carousel-wrapper">
        <carousel
        >
          <carousel-item
            v-for="(item, index) in sliderInfo"
            :key="index"
          >
            <img
              :src="item.img"
              style="width: 100%; object-fit: scale-down"
            />

          </carousel-item>
        </carousel>
      </div>
    </div>
  <div class="rightcolumn">
  </div>

    <!-- <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="page-head-wrapper">
      <div class="page-head">
        <div class="page-head-intro">
          Careers
        </div>
        <div class="page-head-detail">
          <div>Opportunities create value and opportunities for all our stakeholders, which is one of the core values that we believe will drive and sustain our success. This is fundamental to innovation, entrepreneurs and sustainability that represents Bliss Motors.
          </div>
          </div>
      </div>
    </div>
    </div>
    <div class="rightcolumn">
    </div> -->

    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div class="collapse-container">
        <!-- <div class="career-head">
        Opportunities create value and opportunities for all our stakeholders, which is one of the core values that we believe will drive and sustain our success. This is fundamental to innovation, entrepreneurs and sustainability that represents Bliss Motors.
        </div> -->
        <div class="collapse-header">
          <p>Open Positions</p>
        </div>
      </div>
    </div>
    <div class="rightcolumn">
    </div>

    <div class="leftcolumn">
    </div>
    <div class="maincolumn">
      <div
        class="collapse-wrapper"
        v-if="collapseData.items.length"
      >
        <collapse
          v-model="collapseData.items"
          simple
        >
          <panel
            v-for="(item, index) in collapseData.items"
            :key="index"
            :name="item.panelName"
          >
            {{item.panelHeader}}
            <p slot="content">
              <span v-if="item.panelContent.intro">Introduction: <br/>
                <p style="font-size: 14px; font-weight: 300;">{{item.panelContent.intro}}</p>
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
    <div class="rightcolumn">
    </div>

    <div class='leftcolumn'>
    </div>

    <div class="maincolumn">
      <Application @refresh='refresh'></Application>
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
          img: 'static/img/index/car/page_head_2.png',
          url: 'https://www.blisslease.com'
        }
      ],
      setting: {
        autoplaySpeed: 5000
      },
      collapseData: {
        items: [
          {
            panelName: '1',
            panelHeader: 'Full Stack Developer (Chicago)',
            panelContent: {
              intro: "As a Full Stack Developer, you'll be responsible for the design, analysis, development, implementation, and deployment of new, end-to-end, data-driven web-based applications. You’ll also perform periodic tasks required for the ongoing functionality and optimization of the applications. You’ll play an instrumental role in improving processes, all while working cross-functionally with multiple departments. This individual should be comfortable working both individually and with team members to optimize systems and resources.",
              role: '',
              responsibilities: [
                'Apply software engineering skills, design skills, and creative thinking to build cutting-edge AI systems',
                'Identify and refine project requirements, solutions to potentially abstract AI challenges, and well-defined performance metrics',
                'Leadtheeffortsindesigninganddevelopingsoftwareasscalablearchitectures,components, API\'s and systems',
                'Translateprojectrequirementsintoexecutableroadmapsforcreatingandmeasuringtechnicalcapability',
                'Work in high intensity, joint teams of software engineers and research scientists',
                'Be agile in the development methodology, while solving difficult problems and exploring new domains'
              ],
              experiences: [
                'Experience with machine learning tools and frame works including but not limited to TensorFlow, PyTorch, Torch, Caffe, etc.',
                'Experience with standard machine learning techniques and frameworks',
                'Experience in analyzing large-scale data from a variety of sources'
              ],
              skills: [
                'Software programming skills in Python, Java, Javascript, or C/C++ a plus but not required for this position.',
                'Ability to transfer project requirements into robust software components and architectures'
              ],
              requirements: [
                'Master’s Degree in Computer Science or related technical fields',
                'Ph.D. in Machine Learning, Artificial Intelligence, Computer Science, Applied Mathematics or related technical fields preferred'
              ]
            }
          },
          {
            panelName: '2',
            panelHeader: 'Executive Sales Associate (Chicago)',
            panelContent: {
              intro: 'Looking for talented, sales-driven candidates to join our team as a Sales Associate. This person will assist management in planning and carrying out all sales activities on assigned accounts or areas, building a strong rapport with car dealers and customers.',
              responsibilities: [
                'Responsible for branching out potential car dealers, ensuring customer satisfaction and managing the quality of product and service delivery.',
                'Will also generate and qualify leads, source and develop client referrals, and prepare sales action plans and strategies.'
              ],
              experiences: [
                'Quality customer service skills and sales track record'
              ],
              skills: [
                'Proficient MS Office knowledge especially MS Excel, PowerPoint.'
              ],
              requirements: [
                'Bachelors’ degree required and 2+ years of experience in sales.',
                'Outgoing and friendly, especially while handling objections',
                'Strong interpersonal and communications, in-person and over the phone',
                'Persuasive and able to overcome customer objections during the sales process',
                'Persistent, competitive and good work ethic'
              ]
            }
          },
          {
            panelName: '3',
            panelHeader: 'Marketing Intern (Chicago)',
            panelContent: {
              responsibilities: [
                'Generate content initiatives to attract, acquire and engage a clearly defined and understood target audience',
                'Assisting with social media outlets to increase the traffic on our social media',
                'Build and manage the content calendar and online initiatives',
                'Communicate and cooperate with the potential business partner and customers',
                'Assisting marketing management with large projects, events, and community as needed',
                'Assisting with primary market research, reporting future technology trends, and insights.',
                'Promoting our activities and articles on social media as required, Support Marketing team with day-to-day tasks'
              ],
              experiences: [
                'Experience working with blog publishing platforms is a plus'
              ],
              skills: [
                'Proficient MS Office knowledge especially MS Excel, PowerPoint',
                'Excellent written and verbal communication skills in English and Chinese is required'
              ],
              requirements: [
                'Have interests in using all kinds of social media',
                'Reliable and dependable work ethic, solid investigative and creative problem-solving skills',
                'Outgoing and friendly, especially while handing objections'
              ]
            }
          }

        ]
      }
    }
  },
  methods: {
    refresh () {
      this.$router.go()
    }
  },
  components: {
    Application
  }
}
</script>

<style scoped>
@import "../../common/css/base.css";

.carousel-wrapper {
  width: 100%;
  margin-top: 10px;
  padding: 0 10px;
}
.page-head-wrapper{
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 10px;
  background-image: url('../../../static/img/index/car/page_head_1.png');
  background-color: #808695;
  background-blend-mode: screen;
  background-repeat: no-repeat;
  background-size: cover;
}
.page-head{
 width: 100%;
}
.page-head-title{
  padding-top: 70px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
  font-size: 23px;
  /* color: #17233d; */
}
.page-head-intro {
  padding-top: 40px;
  padding-left: 30px;
  padding-right: 30px;
  height: 120px;
  font-size: 30px;
  font-weight: 600;
}

.page-head-detail{
  padding-top: 50px;
  padding-left: 200px;
  padding-right: 200px;
  height: 150px;
  font-size: 16px;
  font-style: normal;
  line-height: 20pt;
  color: #17233d;
}

.collapse-container {
  width: 100%;
  margin: 0 auto;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.career-head{
  margin-top: 50px;
  width: 70%;
  font-size: 20px;
}
.collapse-header {
  margin-top: 50px;
  width: 100%;
  font-size: 20px;
  font-weight: 700;
}
.collapse-wrapper {
  padding: 50px;
  position: center;
  width: 100%;
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
  padding: 50px;
  width: 100%;
}
</style>
