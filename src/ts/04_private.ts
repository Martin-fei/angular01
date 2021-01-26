// public：公开的    默认的，类外，子类  类内
// protected：保护的   对外保护   子类，类内
// private:私有的     对子类保护   类内
class RanGe {
  public name = '李然';
  private money = '然哥私房钱';
  protected wife = '然然媳妇';
}
// 再RanGe类的外部范围，书写代码访问RanGe的属性
let ran_ge = new RanGe();
ran_ge.name;
// ran_ge.money;//类外读取保护属性/私有属性；不允许的

// 继承：
class Son extends RanGe {
  show() {
    this.name;
    this.wife;
    // this.money;//私有属性；子类无法访问
  }
}
