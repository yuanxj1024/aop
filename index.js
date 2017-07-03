/**
 * aop简单实现
 *
 * anchor: YuanXuJia
 */

class AOP {
  before(target, methodName, aspect) {
    const origin = target[methodName];
    target[methodName] = () => {
      (aspect)();
      origin.call(target, arguments);
    };
    return target;
  }
  after(target, methodName, aspect) {
    const origin = target[methodName];
    target[methodName] = () => {
      origin.call(target, arguments);
      (aspect)();
    };
    return target;
  }
  around(target, methodName, aspect) {
    const origin = target[methodName];
    target[methodName] = () => {
      (aspect)('before');
      origin.call(target, arguments);
      (aspect)('after');
    };
    return target;
  }
}

// export default new AOP();
window.aop = new AOP();
