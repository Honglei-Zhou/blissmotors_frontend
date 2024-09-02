export default class Job {
  constructor ({id, title, experiences, skills, resposibilities, requirements, contact, expirationTime}) {
    this.id = id
    this.title = title
    this.experiences = experiences
    this.skills = skills
    this.resposibilities = resposibilities
    this.requirements = requirements
    this.contact = contact
    this.expirationTime = expirationTime
  }
      }

export function createJob (jobData) {
  return new Job({
    id: jobData.id,
    title: jobData.title,
    experiences: jobData.experiences,
    skills: jobData.skills,
    resposibilities: jobData.resposibilities,
    requirements: jobData.requirements,
    contact: jobData.contact,
    expirationTime: jobData.expirationTime
  })
}

