export default class Applicant {
  constructor ({title, firstName, lastName, email, phone, workingTime, resume, whyBM, skillsExperience}) {
    this.title = title
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.phone = phone
    this.workingTime = workingTime
    this.resume = resume
    this.whyBM = whyBM
    this.skillsExperience = skillsExperience
  }
        }

export function createApplicant (applicantData) {
  return new Applicant({
    title: applicantData.title,
    name: applicantData.name,
    email: applicantData.email,
    phone: applicantData.phone,
    workingTime: applicantData.workingTime,
    resume: applicantData.resume,
    whyBM: applicantData.whyBM,
    skillsExperience: applicantData.skillsExperience
  })
}

