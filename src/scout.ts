
import hivemind from 'hivemind';

export default class ScoutProcess{

  run():number|undefined{
    if (!Memory.hivemind.someValue) {
      Memory.hivemind.someValue =7;
    }
    return hivemind.getSomeValue();
  }

}
