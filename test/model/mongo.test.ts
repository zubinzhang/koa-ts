import { expect } from 'chai';
import { mongoModel } from '../../src/model';

describe('mongo测试：', () => {
  it('findOne:', async () => {
    const data = await mongoModel.logger.findOne();
    expect(data).to.a('object');
  });
});
