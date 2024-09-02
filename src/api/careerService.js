
import axios from 'axios'

export const careerService = {
  getSignedURL,
  deleteFile,
  sendApplication
}

// const s3baseUrl = 'https://jyi87djlt4.execute-api.us-east-1.amazonaws.com/v1/'
const s3baseUrl = 'https://3dxcuahqad.execute-api.us-east-1.amazonaws.com/v1'
const baseUrl = 'https://bmhax.com/api/v1/'
// const baseUrl = 'http://127.0.0.1:8000/api/v1/'

function getSignedURL (file) {
  let endpoint = 'https://3dxcuahqad.execute-api.us-east-1.amazonaws.com/v1/upload/'
  //   let payload = {
  //     filePath: file.name,
  //     contentType: file.type
  //   }
  return new Promise((resolve, reject) => {
    // axios.post(endpoint, payload)
    axios({
      url: endpoint + file.name,
      method: 'GET'
    })
      .then((res) => {
        console.log(res)
        resolve(res.data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

function deleteFile (file) {
  return new Promise((resolve, reject) => {
    // axios.post(endpoint, payload)
    var bodyFormData = new FormData()
    bodyFormData.append('filePath', file.name)
    bodyFormData.append('contentType', file.type)
    axios({
      url: '/delete',
      method: 'POST',
      data: bodyFormData,
      baseURL: s3baseUrl
    })
      .then((res) => {
        console.log(res)
        resolve(res.data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}

function sendApplication (application) {
  return new Promise((resolve, reject) => {
    // axios.post(endpoint, payload)
    var bodyFormData = new FormData()
    bodyFormData.append('email', application.mail)
    bodyFormData.append('phone', application.phone)
    bodyFormData.append('first_name', application.firstName)
    bodyFormData.append('last_name', application.lastName)
    bodyFormData.append('job_id', application.jobid)
    bodyFormData.append('job_title', application.jobtitle)
    bodyFormData.append('why_bm', application.whyBM)
    bodyFormData.append('skills_experience', application.experience)
    bodyFormData.append('working_time', application.worktime)
    bodyFormData.append('resume', application.resume)
    // var data = {
    //   'email': application.mail,
    //   'phone': application.phone,
    //   'first_name': application.firstName,
    //   'last_name': application.lastName,
    //   'job_id': application.jobid,
    //   'job_title': application.jobtitle,
    //   'why_bm': application.whyBM,
    //   'skills_experience': application.experience,
    //   'working_time': application.worktime,
    //   'resume': application.resume

    // }
    // console.log(data)
    axios({
      url: '/careers/applicants',
      method: 'post',
      data: bodyFormData,
      baseURL: baseUrl
    })
      .then((res) => {
        // console.log(res)
        resolve(res.data)
      })
      .catch((err) => {
        console.error(err)
        reject(err)
      })
  })
}
