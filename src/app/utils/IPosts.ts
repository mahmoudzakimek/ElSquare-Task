export interface IUser {
  category:string
  description:string
  id:number
  image:string
  price:number
  rating:IRate
  title: string

}
export interface IRate {
  rate: number,
  count: number
}