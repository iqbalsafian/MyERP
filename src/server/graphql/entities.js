const Entities =  `
  scalar Date

  type Entities {
    id: Int!
    parent_id: Int
    email: String
    fullname: String
    firstname: String
    lastname: String
    designation: String
    department_id: Int
    address1: String
    address2: String
    postcode: String
    city: String
    state: String
    country: String
    isstaff: Boolean
    isdepartment: Boolean
    iscustomer: Boolean
    issupllier: Boolean
    isfixedasset: Boolean
    isonline: Boolean
    isallowedtologin: Boolean
    createdAt: Date
    updatedAt: Date
  }
`
export default Entities;
