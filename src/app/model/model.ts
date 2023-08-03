export interface User {
  status_set: any
  blogStackRoleDetails: any
  email_id: string
  last_name: string
  first_name: string
  gender: string
  phone_number: string
  password: string
  status: string
  date_of_birth: string
  address: string
  profile_photo: string
}

export interface Payload {
  password: any
  user_id: string
  email_id: string
  last_name: string
  first_name: string
  gender: string
  phone_number: string
  blogStackRoleDetails: any
  status: string
  date_of_birth: string
  address: string
  middle_name?: string
}

export interface UserRole {
  role_name: string
}

export interface Root {
  user_id: string
  email_id: string
  last_name: string
  middle_name: string
  first_name: string
  address: string
  gender: string
  profile_photo: string
  date_of_birth: string
  status_set: string
}
export enum Gender {
  MALE = 'Male',
  FEMALE = 'Female',
  OTHER = 'Other'
}
export interface Category{
  bscmStatus : string,
  category : string,
  bscmCategoryId : string
}

export interface Subcategory{
  
}


export interface Question {
  content: string
  title: string
  status: string
  question_id: string
  user_id: string
  code_snippet: string
  tag_id: string
  category_id: string
  sub_category_id: string
  answers: Answer[]
  added_on: string
}



export interface Answer {
  answer: string
  status: string
  answer_id: string
  comments: any[]
  added_on: string
}

export interface PostQuestionBean{
  content: string
  title: string
  status: string
  question_id: string
  user_id: string
  code_snippet: string
  tag_id: string
  category_id: string
  sub_category_id: string
}

export interface questionAnswerByCAtegory{
  category: string
}
