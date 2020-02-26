/**
 * Interface for a user.
 * 
 * Lot Schema from the LiveLotAPI.
 * https://github.com/maddiearogers/LiveLotAppAPI/blob/master/api/models/userModel.js
 * 
 * DTO is an abbreviation for Data Transfer Object
 */
interface IUserDTO {
  username: string,
  password: string,
  fullName?: string,
  email: string,
  phoneNumber?: string,
  createdDate?: string
}

export { IUserDTO }
