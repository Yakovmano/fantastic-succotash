
export class CategoryNotFoundError extends Error {
    constructor(id: number) {
      super(`Category with id ${id} not found`)
    }
  }
  

export class InvalidCategoryId extends Error {
    constructor(id: any) {
        super(`Category id ${id} is not a valid id, must be a number`)
    }
}