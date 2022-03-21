import {mockGlobal} from "screeps-jest";
import ScoutProcess from "./scout";
import hivemind from "./hivemind";

describe('scout test', () => {

  it('scout run test', () => {
    mockGlobal<Game>('Game', {
      creeps: {},
      cpu:{getUsed: () => 1},
      rooms: {},
      time: 1
    }, true);
    mockGlobal<Memory>('Memory', { strategy: {}, hivemind:{}}, true);
    mockGlobal<typeof hivemind>('hivemind', {
      getSomeValue(){
        return 5;
      }, hivemind:{someValue:7}
}, true);
    const scout = new ScoutProcess();
    expect(scout.run()).toEqual(5);
  });
});
