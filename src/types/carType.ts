export default interface CarType {
  id: string
  plate: string
  manufacture: string
  model: string
  image: string
  rentPerDay: number
  capacity: number
  description: string
  availableAt: Date
  transmission: string
  available: boolean
  type: string
  year: number
  options: string[]
  specs: string[]
  createdBy: string
  updatedBy: string
  deletedBy: string
  createdAt: Date
  updatedAt: Date
}
