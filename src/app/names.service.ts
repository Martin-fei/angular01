import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NamesService {
  // 把需要共享的的数据放在此处即可
  names = ['亮亮', '然然', '东东', '华哥', '小新', '小月', '恺恺'];

  constructor() {}
}
