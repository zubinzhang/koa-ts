import { expect } from 'chai';
import { testMQ } from '../../src/common/mq';

describe('mysql测试：', () => {
  it('publish:', async () => {
    const result = await testMQ.publishMsg('msg test', {
      headers: {
        key: 1,
      },
    });

    expect(result).to.be.eq(true);
  });

  it('subscribe:', done => {
    testMQ.subscribe({ ack: true }, (message, headers, _deliverInfo, ack) => {

      expect(message.data.toString()).to.be.eq('msg test');
      expect(headers.key).to.be.eq(1);
      ack.acknowledge(false);
      done();
    });
  });
});
