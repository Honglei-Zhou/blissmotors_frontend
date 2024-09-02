import axios from 'axios'

export const leadService = {
  sendFormService

}

const baseUrl = 'https://crm.bmhax.com/index.php'
const campaignID = 'b301d092-4bb6-d8ec-8077-5c149618efec'
const assignedUserID = 1
const moduleDir = 'Leads'
const entryPoint = 'WebToPersonCapture'

function sendFormService (inquiry) {
//   var message = `ZipCode: ${inquiry.zipCode}\nYear: ${inquiry.year} Make: ${inquiry.make} Model: ${inquiry.model} Trim: ${inquiry.trim}\nMessage: ${inquiry.message}`.replace(';', ',')
//   var message = 'test'
//   var data = {
//     entryPoint: 'WebToPersonCapture',
//     first_name: inquiry.firstName,
//     last_name: inquiry.lastName,
//     phone_mobile: inquiry.phone,
//     email1: inquiry.email,
//     description: message,
//     campaign_id: campaignID,
//     assigned_user_id: assignedUserID,
//     moduleDir: moduleDir
//   }
  var bodyFormData = new FormData()
  bodyFormData.append('entryPoint', entryPoint)
  bodyFormData.append('first_name', inquiry.firstName)
  bodyFormData.append('last_name', inquiry.lastName)
  bodyFormData.append('phone_mobile', inquiry.phone)
  bodyFormData.append('email1', inquiry.email)
  bodyFormData.append('description', inquiry.message)
  bodyFormData.append('campaign_id', campaignID)
  bodyFormData.append('assigned_user_id', assignedUserID)
  bodyFormData.append('moduleDir', moduleDir)
  return new Promise((resolve, reject) => {
    axios({
      url: baseUrl,
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: bodyFormData
    }).then((resp) => {
      // console.log(resp)
      resolve(resp)
    }).catch(err => {
      console.error(err)
      reject(err)
    })
  })
}
