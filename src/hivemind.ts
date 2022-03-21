

class Hivemind{

  constructor() {
    if (!Memory.hivemind) {
    Memory.hivemind = {    };
  }
  }

  getSomeValue():number|undefined{
    return Memory.hivemind.someValue;
  }

}

const hivemind = new Hivemind();

export default hivemind;
