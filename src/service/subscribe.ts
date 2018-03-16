/*
 * Created by Zubin on 2017-11-22 18:42:34
 */

// mq 消费

import { submitMQ } from '../common/mq';

submitMQ.subscribe({ ack: true }, async (message, headers, deliveryInfo, ack) => {
  console.log(message.data.toString(), headers, deliveryInfo);
  ack.acknowledge(true);

});
