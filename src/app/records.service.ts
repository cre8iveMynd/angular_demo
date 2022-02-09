import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  info1: string[] = ["Adam Taylor","E234","at@abc.net"]
  info2: string[] = ["Shawn Michael","E235","qw@lkj.net"]
  info3: string[] = ["Mark Waugh","E236","kj@ert.net"]

  getInfo1() :string[]{
    return this.info1
  }
  getInfo2() :string[]{
    return this.info2
  }
  getInfo3() :string[]{
    return this.info3
  }
  constructor() { }
}
