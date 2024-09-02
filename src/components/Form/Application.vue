<template>
  <div class="application-container">
    <div class="title">
        <p>Apply Now</p>
    </div>
    <div class="form">
      <i-form ref="applicantForm" :model="applicantForm" :rules="ruleValidate" :label-width="120">
        <form-item label="Job Title" prop="jobid">
            <i-select v-model="applicantForm.jobid" placeholder="Select Job Title">
                <i-option v-for="(item,index) in jobs" :key="index" :value="item.jobid">{{item.jobtitle}}</i-option>
            </i-select>
        </form-item>

        <form-item label="Name" prop="firstName">
            <i-input v-model="applicantForm.firstName" placeholder="Enter first name" style="width: 49%"></i-input>
            <i-input v-model="applicantForm.lastName" placeholder="Enter last name" style="width: 49%"></i-input>
        </form-item>
        <form-item label="E-mail" prop="mail">
            <i-input v-model="applicantForm.mail" placeholder="Enter your e-mail"></i-input>
        </form-item>
        <form-item label="Phone" prop="phone">
            <i-input v-model="applicantForm.phone" placeholder="Enter your phone number"></i-input>
        </form-item>

        <form-item label="Working Time" prop="worktime">
            <radio-group v-model="applicantForm.worktime">
                <radio label="Full Time">Full Time</radio>
                <radio label="Part Time">Part Time</radio>
            </radio-group>
        </form-item>

        <!-- Upload Resume to AWS Function need to be added later -->
        <form-item label="Resume" prop="resume">
            <!-- <upload multiple action="//jsonplaceholder.typicode.com/posts/" :max-size="fileSize">
                <i-button icon="ios-cloud-upload-outline">Upload My Resume</i-button>
            </upload> -->
            <Dropzone
            id="dropzone"
            :awss3="awss3"
            :options="dropzoneOptions"
            @vdropzone-s3-upload-error="s3UploadError"
            @vdropzone-s3-upload-success="s3UploadSuccess"
            @vdropzone-removed-file="dropzoneRemoveFile"
            @vdropzone-success="dropzoneSuccess"
            />
        </form-item>

        <form-item label="Why Bliss Motors">
            <i-input v-model="applicantForm.whyBM" type="textarea" :rows="rows" placeholder="Why would you like to work with Bliss Motors?"></i-input>
        </form-item>

        <form-item label="Skills & Experience">
            <i-input v-model="applicantForm.experience" type="textarea" :rows="rows" placeholder="Briefly outline your relevant skills and experience"></i-input>
        </form-item>

        <form-item>
            <i-button type="primary" @click="handleSubmit('applicantForm')" :disabled="submitted">Submit</i-button>
            <i-button @click="handleReset('applicantForm')" style="margin-left: 8px">Reset</i-button>
        </form-item>

    </i-form>
    </div>
    <spin fix v-if="spinShow">
      <Icon type="ios-loading" size=30 class="spin-icon-load"></Icon>
    </spin>
  </div>
</template>
<script>
// import Dropzone from '@/components/Form/Dropzone'
import Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import {careerService} from '@/api/careerService'

export default {
  name: 'Application',
  components: {
    Dropzone
  },
  data () {
    return {
      spinShow: false,
      images: {},
      dropzoneOptions: {
        thumbnailHeight: 80,
        maxFilesize: 5,
        maxFiles: 1,
        addRemoveLinks: true,
        acceptedFiles: '.pdf, .doc, .docx'
      },
      awss3: {
        signingURL: (f) => {
          // The server REST endpoint we setup earlier
          const key = `https://3dxcuahqad.execute-api.us-east-1.amazonaws.com/v1/upload`
          this.images[f.name] = f
          return key
        },
        headers: {},
        params: {},
        // We'll take care of pusting the image details to our server on our own
        sendFileToServer: false
      },
      rows: 3,
      fileSize: 4096,
      submitted: false,
      jobs: [
        {
          jobid: '1',
          jobtitle: 'Full Stack Developer (Chicago)'
        },
        {
          jobid: '2',
          jobtitle: 'Executive Sales Associate (Chicago)'
        },
        {
          jobid: '3',
          jobtitle: 'Marketing Intern (Chicago)'
        }

      ],
      applicantForm: {
        jobid: '',
        jobtitle: 'BM Job',
        firstName: '',
        lastName: '',
        mail: '',
        phone: '',
        worktime: '',
        resume: '',
        whyBM: '',
        experience: ''
      },
      ruleValidate: {
        jobid: [
          { required: true, message: 'The name cannot be empty', trigger: 'change' }
        ],
        firstName: [
          { required: true, message: 'The first name and last name cannot be empty', trigger: 'blur' }
        ],
        lastName: [
          { required: true, message: 'The first name and last name cannot be empty', trigger: 'blur' }
        ],
        mail: [
          { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
          { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'Phone number cannot be empty', trigger: 'blur' }
        ],
        worktime: [
          { required: true, message: 'Choose at least one working time', trigger: 'change' }
        ],
        resume: [
          { required: true, message: 'Please upload resume', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    dropzoneSuccess (file, res) {
      const { type: contentType, size, height, width, s3Signature: { key: path } } = file
      // Here you would POST/GraphQL to your own server the details
      const input = {
        id: this.unitId,
        image: {
          path,
          size,
          height,
          width,
          contentType
        }
      }

      console.log(input)

      this.applicantForm.resume = path
      console.log(this.applicantForm.resume)
    },
    s3UploadError (errorMessage) {
      // Show an error message on failure
      console.log(errorMessage)
    },
    s3UploadSuccess (s3ObjectLocation) {
      // Show a message after uploaded to S3?
      console.log(s3ObjectLocation)
    },
    dropzoneRemoveFile (file, error, xhr) {
      if (this.submitted) {
        return
      }
      console.log(file)
      careerService.deleteFile(file).then((resp) => {
        console.log(resp)
        this.applicantForm.resume = ''
      }).catch(err => {
        console.log(err)
      })
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid && this.applicantForm.resume !== '') {
          this.submitted = true
          this.spinShow = true
          // console.log(this.applicantForm)
          careerService.sendApplication(this.applicantForm).then(() => {
            // console.log(resp)
            this.$Message.success('Success!')
            this.spinShow = false
            this.$emit('refresh')
          }).catch(err => {
            console.log(err)
            this.$Message.error('Fail!')
          })
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style scoped>
  .application-container {
    width: 60%;
    min-width: 600px;
    position: relative;
    /* height: 800px; */
    background-color: #ffffff;
    margin-left: auto;
    margin-right: auto;
    padding: 0px;
    text-align:center;
  }
  .title {
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    text-align: center;
  }
  .form {
    width: 100%;
    /* height: 440px; */
    margin-top: 40px;
    font-size: 20px;
    text-align: center;
    align-content: center;
  }
  .spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }

</style>
