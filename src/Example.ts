export enum ExampleStatus { 
  Active = "active", 
  Finished = "finished"
}

export class Example {
  constructor(
    public id: string, 
    public title: string, 
    public status: ExampleStatus,
  ) {}
}